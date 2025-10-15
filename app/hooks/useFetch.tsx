import { FetchJsonOptions, fetchJSON } from "js-common/client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { RequestCoalescer } from "~/hooks/RequestCoalescer";
import { useBetterSnackbar } from "~/hooks/useBetterSnackbar";

export interface UseFetchParams {
  url: string;
  data?: { [key: string]: any };
  options?: { [key: string]: any };
  auth?: boolean;
  validate?: () => Promise<boolean>;
  ok?: (data: any) => void;
  error?: (error: Error) => void;
  mode?: "first" | "first-strict" | "last" | "batch";
  combine?: (items: any[]) => any;
}

export type UseFetchReturn = [
  () => Promise<void>, // fetchCallback
  boolean, // loading
  Error | undefined, // error
  () => void, // cancel
];

export interface UseFetcherContextProps {
  fetchAuth?: (
    url: string,
    data?: object,
    options?: FetchJsonOptions,
  ) => Promise<any>;
}

const UseFetcherContext = createContext<UseFetcherContextProps>({
  fetchAuth: void 0,
});

/**
 * A custom React hook that uses `fetchAuth` / `fetchJSON` to make API calls and wraps around `useLoadingCallback`.
 *
 * @param paramsCallback - A callback function that returns an object containing the URL, data, and options for the fetch call.
 * @param watchList - Watch list like with regular useCallback.
 *
 * @prop fetchAuth? - This must be passed in the <FetchProvider value={{ fetchAuth }} />.
 *
 * @returns A hook containing: fetch function, loading state, Error, and cancel function.
 *
 * @throws TypeError If the parameter types are bad.
 * @throws UnauthorizedError If the response status is 401.
 * @throws AccessDeniedError If the response status is 403.
 * @throws TooManyRequestsError If the response status is 429.
 * @throws Error If the response status is not 200-299.
 * @throws Error If the response is not JSON.
 *
 * @example
 * const [fetchData, loading, error, cancel] = useFetch(() => ({ url: `/api/session/login`, data: { email, password } }), [email, password]);
 * -> fetchData: Function, loading: boolean, error: Error, cancel: Function
 */
export function useFetch(
  paramsCallback: () => UseFetchParams,
  watchList: any[],
): UseFetchReturn {
  const { fetchAuth } = useContext(UseFetcherContext);
  const { errorSnack } = useBetterSnackbar();

  const paramsRef = useRef<UseFetchParams>(paramsCallback());
  // Update ref on every render to capture latest params
  paramsRef.current = paramsCallback();

  const abortControllerRef = useRef<AbortController | null>(null);
  const coalescerRef = useRef<RequestCoalescer<UseFetchParams> | null>(null);

  // Create coalescer only once
  useEffect(() => {
    if (!coalescerRef.current) {
      const mode = paramsRef.current.mode || "last";

      if (mode === "batch" && !paramsRef.current.combine) {
        throw new Error("combine function required when mode is 'batch'");
      }

      // Capture values at creation time
      const capturedFetchAuth = fetchAuth;
      const capturedErrorSnack = errorSnack;
      const capturedCombine = paramsRef.current.combine;

      coalescerRef.current = new RequestCoalescer({
        mode,
        combine: capturedCombine,
        effect: async (items: UseFetchParams[]) => {
          console.log(
            `🚀 [useFetch] Processing ${items.length} item(s) for: ${items[0]?.url}`,
            {
              mode,
              itemsCount: items.length,
              urls: items.map((item) => item.url),
            },
          );

          setLoading(true);
          setError(undefined);

          try {
            // For batch mode, we expect a single combined item
            // For other modes, we process the items according to the mode
            const itemToProcess = items[0]; // Get the first item to process

            if (itemToProcess.validate && !(await itemToProcess.validate())) {
              console.log(
                `⚠️ [useFetch] Validation failed for: ${itemToProcess.url}`,
              );
              // Validation check failed
              return;
            }

            // Create abort promise for tracking cancellation
            let abortResolve: (() => void) | null = null;
            const abortPromise = new Promise<void>((resolve) => {
              abortResolve = resolve;
            });

            // Store abort promise in coalescer state
            if (coalescerRef.current) {
              (coalescerRef.current as any).state.abortPromise = abortPromise;
            }

            // Cancel any existing request
            if (abortControllerRef.current) {
              console.log(
                `🛑 [useFetch] Aborting previous request for: ${itemToProcess.url}`,
              );
              abortControllerRef.current.abort();
              // Wait a tick for abort to propagate
              await new Promise((resolve) => setTimeout(resolve, 0));
            }

            // Create new AbortController for this request
            abortControllerRef.current = new AbortController();
            console.log(
              `📡 [useFetch] Starting request for: ${itemToProcess.url}`,
            );

            try {
              const auth = itemToProcess.auth ?? true;
              const f = auth ? capturedFetchAuth : fetchJSON;

              if (!f) {
                throw new Error("No fetchAuth function provided.");
              }

              // Merge options with AbortSignal
              const options = {
                ...itemToProcess.options,
                signal: abortControllerRef.current.signal,
              };

              const data = await f(
                itemToProcess.url,
                itemToProcess.data,
                options,
              );
              console.log(
                `✅ [useFetch] Request completed successfully for: ${itemToProcess.url}`,
              );
              if (itemToProcess.ok) {
                await itemToProcess.ok(data);
              }
              return data;
            } catch (err) {
              // Don't handle AbortError as a regular error
              if (err instanceof Error && err.name === "AbortError") {
                console.log(
                  `🛑 [useFetch] Request aborted for: ${itemToProcess.url}`,
                );
                return;
              }

              console.log(
                `❌ [useFetch] Request failed for: ${itemToProcess.url}`,
                err,
              );
              if (itemToProcess.error) {
                await itemToProcess.error(err);
              } else {
                capturedErrorSnack(err);
              }

              // Re-throw error so it can be handled by the coalescer
              throw err;
            } finally {
              abortControllerRef.current = null;
              if (abortResolve) abortResolve();
            }
          } catch (err) {
            if (err instanceof Error && err.name !== "AbortError") {
              console.log(
                `💥 [useFetch] Effect error for: ${items[0]?.url}`,
                err,
              );
              setError(err instanceof Error ? err : new Error(String(err)));
            }
            throw err;
          } finally {
            console.log(`🏁 [useFetch] Effect completed for: ${items[0]?.url}`);
            setLoading(false);
          }
        },
      });
    }

    // Only dispose on component unmount
    return () => {
      if (coalescerRef.current) {
        coalescerRef.current.dispose();
        coalescerRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cancel = () => {
    console.log(`🚫 [useFetch] Manual cancel requested`);
    if (abortControllerRef.current) {
      console.log(`🛑 [useFetch] Aborting current request via cancel()`);
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (coalescerRef.current) {
      console.log(`🗑️ [useFetch] Canceling coalescer queue`);
      coalescerRef.current.cancel();
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchCallback = useCallback(async () => {
    if (!coalescerRef.current) {
      throw new Error("RequestCoalescer not initialized");
    }

    const currentParams = paramsRef.current;
    console.log(`🔍 [useFetch] Received request for: ${currentParams.url}`, {
      mode: currentParams.mode || "last",
      hasData: !!currentParams.data,
      hasAuth: currentParams.auth ?? true,
    });

    try {
      await coalescerRef.current.add(currentParams);
    } catch (err) {
      console.log(
        `❌ [useFetch] Request failed for: ${currentParams.url}`,
        err,
      );

      // Handle first-strict mode errors
      setError(err instanceof Error ? err : new Error(String(err)));
      if (currentParams.error) {
        await currentParams.error(err);
      } else {
        errorSnack(err);
      }
    }
  }, [errorSnack]);

  return [fetchCallback, loading, error, cancel];
}

export function UseFetchProvider({
  children,
  fetchAuth,
}: {
  children: React.ReactNode;
  fetchAuth?: (
    url: string,
    data?: object,
    options?: FetchJsonOptions,
  ) => Promise<any>;
}) {
  return (
    <UseFetcherContext.Provider value={{ fetchAuth }}>
      {children}
    </UseFetcherContext.Provider>
  );
}
