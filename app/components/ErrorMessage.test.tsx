import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders without crashing", () => {
    render(
      <ErrorMessage
        friendly="Something went wrong"
        error={new Error("Test error")}
      />,
    );

    // Check that both friendly message and error are in the document
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();
  });
});
