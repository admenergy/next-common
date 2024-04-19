/// <reference types="react" />
import { FetchJsonOptions } from "js-common/client";
interface FetchParams {
    url: string;
    data?: {
        [key: string]: any;
    };
    options?: {
        [key: string]: any;
    };
    auth?: boolean;
    validate?: () => Promise<boolean>;
    ok?: (data: any) => void;
    error?: (error: Error) => void;
}
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
export declare function useFetch(paramsCallback: () => FetchParams, watchList: any[]): [() => Promise<void>, boolean, Error | undefined];
export declare function FetchProvider({ children, fetchAuth, }: {
    children: React.ReactNode;
    fetchAuth?: (url: string, data?: object, options?: FetchJsonOptions) => Promise<any>;
}): import("react/jsx-runtime").JSX.Element;
export {};
