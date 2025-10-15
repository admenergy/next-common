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
 * RequestCoalescer provides request coalescing mechanisms for batching operations.
 * All items are processed in a single execution lane regardless of their keys.
 *
 * It's particularly useful for handling API requests that arrive in bursts,
 * such as form field updates or search queries.
 */
export declare class RequestCoalescer<TItem> {
    private options;
    private state;
    private disposed;
    constructor(options: RequestCoalescerOptions<TItem>);
    /**
     * Add an item to be processed
     * @param item The item to add
     */
    add(item: TItem): Promise<void>;
    /**
     * Cancel any pending operations
     */
    cancel(): void;
    /**
     * Clean up all resources used by the coalescer
     */
    dispose(): void;
    /**
     * Execute the effect with the current buffer
     */
    private executeEffect;
}
