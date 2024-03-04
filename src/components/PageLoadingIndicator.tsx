import { Box, CircularProgress } from "@mui/material";
import React from "react";

const styles = {
  centerAlignOuter: {
    display: `flex`,
    width: `100%`,
    alignItems: `center`,
    flexFlow: `column`,
  },
  centerAlignInner: {
    display: `flex`,
    height: `100vh`,
    alignItems: `center`,
    textAlign: `center`,
  },
  centerAlignContent: {
    "& > *": {
      textAlign: `initial`,
    },
  },
  panelRoot: {
    maxWidth: `600px`,
  },
};

/**
 * Represents a component that displays a loading indicator.
 * This component is designed to be centered on the page and shows a circular progress indicator.
 *
 * @returns A React element that renders a loading indicator.
 * @example
 * ```tsx
 * <PageLoadingIndicator />
 * ```
 */
export function PageLoadingIndicator() {
  return (
    <Box sx={styles.centerAlignOuter}>
      <Box sx={styles.centerAlignInner}>
        <Box sx={styles.centerAlignContent}>
          <CircularProgress size={128} />
        </Box>
      </Box>
    </Box>
  );
};
