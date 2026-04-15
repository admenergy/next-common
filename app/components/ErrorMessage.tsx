

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
export function ErrorMessage({ friendly, error }: ErrorMessageProps) {
  if (error?.message) {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <b>{friendly}</b>
        <div>
          <pre>{error.message}</pre>
        </div>
      </div>
    );
  }

  return <>{friendly}</>;
}
