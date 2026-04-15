import { type FetchJsonOptions } from "js-common/client";
import type React from "react";
export interface UseFetchParams {
    url: string;
    data?: {
        [key: string]: unknown;
    };
    options?: {
        [key: string]: unknown;
    };
    auth?: boolean;
    validate?: () => Promise<boolean>;
    ok?: (data: unknown) => void;
    error?: (error: Error) => void;
    mode?: "first" | "first-strict" | "last" | "batch";
    combine?: (items: UseFetchParams[]) => UseFetchParams;
}
export type UseFetchReturn = [
    () => Promise<void>,
    boolean,
    // loading
    Error | undefined,
    () => void
];
export interface UseFetcherContextProps {
    fetchAuth?: (url: string, data?: object, options?: FetchJsonOptions) => Promise<unknown>;
}
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
export declare function useFetch(paramsCallback: () => UseFetchParams, watchList: unknown[]): UseFetchReturn;
export declare function UseFetchProvider({ children, fetchAuth, }: {
    children: React.ReactNode;
    fetchAuth?: (url: string, data?: object, options?: FetchJsonOptions) => Promise<unknown>;
}): import("react/jsx-runtime").JSX.Element;
