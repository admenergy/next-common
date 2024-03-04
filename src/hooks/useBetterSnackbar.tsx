import { ErrorMessage } from "@/components";
import { useSnackbar } from "notistack";
import { useCallback } from "react";

export function useBetterSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const successSnack = useCallback(
    (message: string) => {
      enqueueSnackbar(message, {
        variant: "success",
      });
    },
    [enqueueSnackbar],
  );

  const errorSnack = useCallback(
    (messageOrError: string | Error) => {
      let message: string;
      let error: Error;

      if (messageOrError instanceof Error) {
        error = messageOrError;
        message = messageOrError.message;
      } else {
        message = messageOrError;
        error = new Error(message);
      }

      enqueueSnackbar(
        <ErrorMessage friendly={message} error={error}></ErrorMessage>,
        {
          variant: "error",
        },
      );
    },
    [enqueueSnackbar],
  );

  return {
    successSnack,
    errorSnack,
  };
}
