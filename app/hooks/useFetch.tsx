import { FetchJsonOptions, fetchJSON } from "js-common/client";
import React, { createContext, useContext, useMemo, useRef } from "react";
import { useBetterSnackbar } from "~/hooks/useBetterSnackbar";
import { useLoadingCallback } from "~/hooks/useLoadingCallback";

export interface UseFetchParams {
  url: string;
  data?: { [key: string]: any };
  options?: { [key: string]: any };
  auth?: boolean;
  validate?: () => Promise<boolean>;
  ok?: (data: any) => void;
  error?: (error: Error) => void;
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params: UseFetchParams = useMemo(() => paramsCallback(), watchList);

  const abortControllerRef = useRef<AbortController | null>(null);
  const cancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  const [fetchCallback, loading, error] = useLoadingCallback(
    async () => {
      if (params.validate && !(await params.validate())) {
        // Validation check failed
        return;
      }

      // Cancel any existing request
      cancel();

      // Create new AbortController for this request
      abortControllerRef.current = new AbortController();

      try {
        const auth = params.auth ?? true;
        const f = auth ? fetchAuth : fetchJSON;

        if (!f) {
          throw new Error("No fetchAuth function provided.");
        }

        // Merge options with AbortSignal
        const options = {
          ...params.options,
          signal: abortControllerRef.current.signal,
        };

        const data = await f(params.url, params.data, options);
        if (params.ok) {
          await params.ok(data);
        }
        return data;
      } catch (err) {
        // Don't handle AbortError as a regular error
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        if (params.error) {
          await params.error(err);
        } else {
          errorSnack(err);
        }
      } finally {
        abortControllerRef.current = null;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errorSnack, ...watchList],
  );

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
