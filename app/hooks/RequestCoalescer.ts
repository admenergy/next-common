/**
 * Defines the strategy for handling multiple requests during coalescing
 */
export type CoalesceMode = "first" | "first-strict" | "last" | "batch";

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
   * Used by 'last' mode to abort previous requests
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
        // If currently executing, abort it
        if (this.state.isExecuting) {
          // Trigger abort callback
          if (this.options.onAbort) {
            this.options.onAbort();
          }

          // Wait for abort to complete
          if (this.state.abortPromise) {
            await this.state.abortPromise;

            // After waiting, check if buffer is empty (another waiting request already handled it)
            if (this.state.userBuffer.length === 0) {
              return; // Exit early, another request already processing
            }
          }
        }

        // Clear user buffer except for the last item
        if (this.state.userBuffer.length > 1) {
          this.state.userBuffer = [
            this.state.userBuffer[this.state.userBuffer.length - 1],
          ];
        }

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
      if (this.options.mode === "batch" && this.state.userBuffer.length > 0) {
        // Schedule next batch on next tick
        queueMicrotask(() => this.executeEffect());
      } else {
        this.state.isExecuting = false;
      }
    }
  }
}
