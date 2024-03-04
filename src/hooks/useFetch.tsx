import { useBetterSnackbar } from "@/hooks/useBetterSnackbar";
import { useLoadingCallback } from "@/hooks/useLoadingCallback";
import { FetchJsonOptions, fetchJSON } from "js-common/client";
import { createContext, useContext, useMemo } from "react";

interface FetchParams {
  url: string;
  data?: { [key: string]: any };
  options?: { [key: string]: any };
  auth?: boolean;
  validate?: () => Promise<boolean>;
  ok?: (data: any) => void;
  error?: (error: Error) => void;
}

interface FetcherContextProps {
  fetchAuth?: (
    url: string,
    data?: object,
    options?: FetchJsonOptions,
  ) => Promise<any>;
}

const FetcherContext = createContext<FetcherContextProps>({
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
 * @returns A hook containing: fetch function, loading state, and Error.
 *
 * @throws TypeError If the parameter types are bad.
 * @throws UnauthorizedError If the response status is 401.
 * @throws AccessDeniedError If the response status is 403.
 * @throws TooManyRequestsError If the response status is 429.
 * @throws Error If the response status is not 200-299.
 * @throws Error If the response is not JSON.
 *
 * @example
 * const [fetchData, loading, error] = useFetch(() => ({ url: `/api/session/login`, data: { email, password } }), [email, password]);
 * -> fetchData: Function, loading: boolean, error: Error
 */
export function useFetch(
  paramsCallback: () => FetchParams,
  watchList: any[],
): [() => Promise<void>, boolean, Error | undefined] {
  const { fetchAuth } = useContext(FetcherContext);

  const { errorSnack } = useBetterSnackbar();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params: FetchParams = useMemo(() => paramsCallback(), watchList);

  const [fetchCallback, loading, error] = useLoadingCallback(
    async () => {
      if (params.validate && !(await params.validate())) {
        // Validation check failed
        return;
      }

      try {
        const auth = params.auth ?? true;
        const f = auth ? fetchAuth : fetchJSON;

        if (!f) {
          throw new Error("No fetchAuth function provided.");
        }

        const data = await f(params.url, params.data, params.options);
        if (params.ok) {
          await params.ok(data);
        }
        return data;
      } catch (err) {
        if (params.error) {
          await params.error(err);
        } else {
          errorSnack(err);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errorSnack, ...watchList],
  );

  return [fetchCallback, loading, error];
}

export function FetchProvider({
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
    <FetcherContext.Provider value={{ fetchAuth }}>
      {children}
    </FetcherContext.Provider>
  );
}
