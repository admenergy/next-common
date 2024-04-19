import { ErrorMessage } from "@/components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("Test", () => {
  it("renders without crashing", () => {
    render(<ErrorMessage error={new Error("Test error")} />);

    // Check that the error message is in the document
    expect(document.body).toHaveTextContent("Test error");
  });
});
