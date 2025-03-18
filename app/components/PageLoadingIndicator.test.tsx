import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PageLoadingIndicator } from "./PageLoadingIndicator";

vi.mock("@mui/material", async () => {
  return {
    ...(await vi.importActual("@mui/material")),
    CircularProgress: () => <div>CircularProgress</div>,
  };
});

describe("PageLoadingIndicator", () => {
  it("renders the loading indicator correctly", () => {
    render(<PageLoadingIndicator />);

    expect(screen.getByText("CircularProgress")).toBeInTheDocument();
  });
});
