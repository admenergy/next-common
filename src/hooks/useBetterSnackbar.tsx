import { ErrorMessage } from "@/components";
import { useSnackbar } from "notistack";
import { useCallback } from "react";

export function useBetterSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const successSnack = useCallback(
    (message) => {
      enqueueSnackbar(message, {
        variant: "success",
      });
    },
    [enqueueSnackbar],
  );

  const errorSnack = useCallback(
    (message, error) => {
      if (message instanceof Error) {
        error = message;
        message = error.message;
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
