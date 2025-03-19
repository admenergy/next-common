/**
 * A wrapper for `useCallback` that provides a loading state and error Snackbars.
 *
 * @param callback - The callback function.
 * @param watchList - Watch list like with regular useCallback.
 *
 * @returns A hook containing: wrapped callback, loading state, and Error.
 */
export declare function useLoadingCallback<T extends any[], R>(callback: (...args: T) => Promise<R>, watchList: any[]): [(...args: T) => Promise<R | undefined>, boolean, Error | null];
