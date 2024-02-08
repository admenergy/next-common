import React from "react";

interface ErrorMessageProps {
  friendly: string;
  error?: Error | { message: string };
}

/**
 * A user-friendly error message.
 *
 * @example
 * <ErrorMessage friendly="Oops! Something went wrong." error={new Error("Detailed error message")} />
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  friendly,
  error,
}) => {
  if (error instanceof Error) {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <b>{friendly}</b>
        {error?.message && (
          <div>
            <pre>{error?.message}</pre>
          </div>
        )}
      </div>
    );
  } else if (error?.message) {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <b>{friendly}</b>
        {error?.message && (
          <div>
            <pre>{error?.message}</pre>
          </div>
        )}
      </div>
    );
  } else {
    return <>{friendly}</>;
  }
};
