import { ErrorMessage } from "~/components/ErrorMessage";
import { PageLoadingIndicator } from "~/components/PageLoadingIndicator";

export default function PageIndex() {
  return (
    <>
      <div>
        <h2>Error Message Test:</h2>
        <ErrorMessage
          friendly="Something went wrong while testing"
          error={new Error("Test error message")}
        />
      </div>
      <div>
        <h2>Loading Indicator Test:</h2>
        <PageLoadingIndicator />
      </div>
    </>
  );
}
