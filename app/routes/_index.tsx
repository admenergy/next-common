import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ErrorMessage } from "~/components/ErrorMessage";
import { PageLoadingIndicator } from "~/components/PageLoadingIndicator";

export default function PageIndex() {
  return (
    <Box m={2}>
      <Card>
        <CardHeader title="Error Message Test:" />
        <CardContent>
          <ErrorMessage
            friendly="Something went wrong while testing"
            error={new Error("Test error message")}
          />
        </CardContent>
        <CardHeader title="Loading Indicator Test:" />
        <CardContent>
          <PageLoadingIndicator />
        </CardContent>
      </Card>
    </Box>
  );
}
