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
    console.log(
      `📥 [RequestCoalescer] Added item to buffer (mode: ${this.options.mode}, buffer size: ${this.state.userBuffer.length})`,
    );

    // Handle different modes
    switch (this.options.mode) {
      case "first":
        // If already executing, ignore new calls
        if (this.state.isExecuting) {
          console.log(
            `🚫 [RequestCoalescer] Dropping request in 'first' mode (already executing)`,
          );
          return;
        }
        // Execute immediately
        console.log(
          `▶️ [RequestCoalescer] Executing immediately in 'first' mode`,
        );
        this.executeEffect();
        break;

      case "first-strict":
        // If already executing, throw error
        if (this.state.isExecuting) {
          console.log(
            `💥 [RequestCoalescer] Throwing error in 'first-strict' mode (already executing)`,
          );
          throw new Error(
            "Request coalescer is already executing. Cannot add new items in 'first-strict' mode.",
          );
        }
        // Execute immediately
        console.log(
          `▶️ [RequestCoalescer] Executing immediately in 'first-strict' mode`,
        );
        this.executeEffect();
        break;

      case "last":
        // Wait for previous request to abort before starting new one
        if (this.state.isExecuting && this.state.abortPromise) {
          console.log(
            `⏳ [RequestCoalescer] Waiting for previous request to abort in 'last' mode`,
          );
          await this.state.abortPromise;
        }
        // Clear user buffer except for the last item
        if (this.state.userBuffer.length > 1) {
          console.log(
            `🗑️ [RequestCoalescer] Dropping ${
              this.state.userBuffer.length - 1
            } items in 'last' mode, keeping only the latest`,
          );
          this.state.userBuffer = [
            this.state.userBuffer[this.state.userBuffer.length - 1],
          ];
        }
        console.log(`▶️ [RequestCoalescer] Executing in 'last' mode`);
        this.executeEffect();
        break;

      case "batch":
        // If already executing, accumulate items
        if (this.state.isExecuting) {
          console.log(
            `📦 [RequestCoalescer] Queuing item for batch processing (already executing)`,
          );
          return;
        }
        // Execute immediately
        console.log(
          `▶️ [RequestCoalescer] Executing immediately in 'batch' mode`,
        );
        this.executeEffect();
        break;
    }
  }

  /**
   * Cancel any pending operations
   */
  public cancel(): void {
    console.log(
      `🚫 [RequestCoalescer] Canceling ${this.state.userBuffer.length} pending items`,
    );
    // Clear user buffer
    this.state.userBuffer = [];
    // Note: Actual request cancellation is handled by abort controller
    // in the calling code
  }

  /**
   * Clean up all resources used by the coalescer
   */
  public dispose(): void {
    if (this.disposed) {
      return;
    }

    console.log(
      `💀 [RequestCoalescer] Disposing coalescer (mode: ${this.options.mode})`,
    );
    this.disposed = true;
    this.cancel();
  }

  /**
   * Execute the effect with the current buffer
   */
  private async executeEffect(): Promise<void> {
    if (this.state.userBuffer.length === 0) {
      console.log(
        `⚠️ [RequestCoalescer] executeEffect called with empty buffer`,
      );
      return;
    }

    console.log(
      `🎬 [RequestCoalescer] Starting effect execution with ${this.state.userBuffer.length} items`,
    );
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
        console.log(
          `🎯 [RequestCoalescer] Processing first item only (${itemsToProcess.length}/${this.state.executionBuffer.length} items)`,
        );
        break;
      case "last":
        itemsToProcess = [
          this.state.executionBuffer[this.state.executionBuffer.length - 1],
        ];
        console.log(
          `🎯 [RequestCoalescer] Processing last item only (${itemsToProcess.length}/${this.state.executionBuffer.length} items)`,
        );
        break;
      case "batch":
      default:
        itemsToProcess = [...this.state.executionBuffer];
        console.log(
          `🎯 [RequestCoalescer] Processing all items in batch (${itemsToProcess.length} items)`,
        );
        break;
    }

    try {
      // If combine function is provided and we have multiple items, use it
      if (this.options.combine && itemsToProcess.length > 1) {
        console.log(
          `🔗 [RequestCoalescer] Combining ${itemsToProcess.length} items before processing`,
        );
        const combined = this.options.combine(itemsToProcess);
        await this.options.effect([combined]);
      } else {
        await this.options.effect(itemsToProcess);
      }
    } catch (error) {
      console.error("❌ [RequestCoalescer] Error executing effect:", error);
    } finally {
      // Clear execution buffer after processing
      this.state.executionBuffer = [];

      // For batch mode, if new items arrived during execution, process them
      if (this.options.mode === "batch" && this.state.userBuffer.length > 0) {
        console.log(
          `📦 [RequestCoalescer] Scheduling next batch (${this.state.userBuffer.length} new items)`,
        );
        // Schedule next batch on next tick
        queueMicrotask(() => this.executeEffect());
      } else {
        console.log(`🏁 [RequestCoalescer] Effect execution completed`);
        this.state.isExecuting = false;
      }
    }
  }
}
