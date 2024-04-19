import React from "react";
interface ErrorMessageProps {
    friendly: string;
    error?: Error | {
        message: string;
    };
}
/**
 * A user-friendly error message.
 *
 * @example
 * <ErrorMessage friendly="Oops! Something went wrong." error={new Error("Detailed error message")} />
 */
export declare function ErrorMessage({ friendly, error }: ErrorMessageProps): React.JSX.Element;
export {};
