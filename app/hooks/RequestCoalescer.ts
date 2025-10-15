/**
 * Defines the strategy for handling multiple requests during coalescing
 */
export type CoalesceMode =
  | "first"
  | "first-strict"
  | "last"
  | "abort"
  | "batch";

/**
 * Options for the RequestCoalescer
 */
export interface RequestCoalescerOptions<TItem> {
  /**
   * Strategy for handling multiple requests during coalescing
   */
  mode: CoalesceMode;

  /**
   * The effect to execute on the coalesced items
   */
  effect: (items: TItem[]) => Promise<void>;

  /**
   * Optional function to combine multiple items into a single item
   * Required for 'batch' mode
   */
  combine?: (items: TItem[]) => TItem;

  /**
   * Optional callback to abort the currently executing request
   * Used by 'abort' mode to abort previous requests
   */
  onAbort?: () => void;
}

/**
 * Internal state for the coalescer
 */
interface CoalescerState<TItem> {
  userBuffer: TItem[];
  executionBuffer: TItem[];
  isExecuting: boolean;
  abortPromise: Promise<void> | null;
}

/**
 * RequestCoalescer provides request coalescing mechanisms for batching operations.
 * All items are processed in a single execution lane regardless of their keys.
 *
 * It's particularly useful for handling API requests that arrive in bursts,
 * such as form field updates or search queries.
 */
export class RequestCoalescer<TItem> {
  private state: CoalescerState<TItem>;
  private disposed = false;

  constructor(private options: RequestCoalescerOptions<TItem>) {
    // Initialize state
    this.state = {
      userBuffer: [],
      executionBuffer: [],
      isExecuting: false,
      abortPromise: null,
    };
  }

  /**
   * Add an item to be processed
   * @param item The item to add
   */
  public async add(item: TItem): Promise<void> {
    if (this.disposed) {
      console.warn(
        `⚠️ RequestCoalescer.add() called on disposed instance - ignoring`,
      );
      return;
    }

    // Add item to user buffer
    this.state.userBuffer.push(item);

    // Handle different modes
    switch (this.options.mode) {
      case "first":
        // If already executing, ignore new calls
        if (this.state.isExecuting) {
          return;
        }

        // Execute immediately
        this.executeEffect();
        break;

      case "first-strict":
        // If already executing, throw error
        if (this.state.isExecuting) {
          throw new Error(
            "Request coalescer is already executing. Cannot add new items in 'first-strict' mode.",
          );
        }

        // Execute immediately
        this.executeEffect();
        break;

      case "last":
        // If already executing, wait for it to finish, then execute the last item
        if (this.state.isExecuting) {
          console.log(
            "⏳ RequestCoalescer last-mode: waiting for ongoing request to finish",
          );
          return;
        }

        // Clear user buffer except for the last item
        if (this.state.userBuffer.length > 1) {
          this.state.userBuffer = [
            this.state.userBuffer[this.state.userBuffer.length - 1],
          ];
        }

        console.log("⏳ RequestCoalescer last-mode: executing last item");
        this.executeEffect();
        break;

      case "abort":
        // Ensure the execution lane is clear before starting the last item.
        // Abort any in-flight execution and wait for its cleanup to complete.
        while (this.state.isExecuting) {
          if (this.options.onAbort) {
            console.log(
              "🛑 RequestCoalescer abort-mode: aborting in-flight request and awaiting completion",
            );
            this.options.onAbort();
          }
          if (this.state.abortPromise) {
            await this.state.abortPromise;
          } else {
            // No abort promise to await
            break;
          }
        }

        // Clear user buffer except for the last item
        if (this.state.userBuffer.length > 1) {
          this.state.userBuffer = [
            this.state.userBuffer[this.state.userBuffer.length - 1],
          ];
        }

        console.log(
          "🛑 RequestCoalescer abort-mode: lane clear, starting last item",
        );
        this.executeEffect();
        break;

      case "batch":
        // If already executing, accumulate items
        if (this.state.isExecuting) {
          return;
        }

        // Execute immediately
        this.executeEffect();
        break;
    }
  }

  /**
   * Cancel any pending operations
   */
  public cancel(): void {
    // Clear user buffer
    this.state.userBuffer = [];
  }

  /**
   * Clean up all resources used by the coalescer
   */
  public dispose(): void {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    this.cancel();
  }

  /**
   * Execute the effect with the current buffer
   */
  private async executeEffect(): Promise<void> {
    if (this.state.userBuffer.length === 0) {
      return;
    }

    this.state.isExecuting = true;

    // Move items from user buffer to execution buffer
    this.state.executionBuffer = [...this.state.userBuffer];
    this.state.userBuffer = [];

    // Determine which items to process based on mode
    let itemsToProcess: TItem[];
    switch (this.options.mode) {
      case "first":
      case "first-strict":
        itemsToProcess = [this.state.executionBuffer[0]];
        break;
      case "last":
      case "abort":
        itemsToProcess = [
          this.state.executionBuffer[this.state.executionBuffer.length - 1],
        ];
        break;
      case "batch":
      default:
        itemsToProcess = [...this.state.executionBuffer];
        break;
    }

    try {
      // If combine function is provided and we have multiple items, use it
      if (this.options.combine && itemsToProcess.length > 1) {
        const combined = this.options.combine(itemsToProcess);
        await this.options.effect([combined]);
      } else {
        await this.options.effect(itemsToProcess);
      }
    } catch (error) {
      console.error("Error executing effect:", error);
    } finally {
      // Clear execution buffer after processing
      this.state.executionBuffer = [];

      // For batch mode, if new items arrived during execution, process them
      if (this.options.mode === "last" && this.state.userBuffer.length > 0) {
        // For last mode, if new items arrived during execution, process the last one
        console.log(
          "⏳ RequestCoalescer last-mode: ongoing request finished, processing last item",
        );
        // Clear user buffer except for the last item
        if (this.state.userBuffer.length > 1) {
          this.state.userBuffer = [
            this.state.userBuffer[this.state.userBuffer.length - 1],
          ];
        }

        queueMicrotask(() => this.executeEffect());
      } else if (
        this.options.mode === "batch" &&
        this.state.userBuffer.length > 0
      ) {
        queueMicrotask(() => this.executeEffect());
      } else {
        this.state.isExecuting = false;
      }
    }
  }
}
