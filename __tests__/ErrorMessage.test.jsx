import { render } from "@testing-library/react";
import React from "react";
import { ErrorMessage } from "~/components";

describe("Test", () => {
  it("renders without crashing", () => {
    render(<ErrorMessage error={new Error("Test error")} />);

    // Check that the error message is in the document
    expect(document.body).toHaveTextContent("Test error");
  });
});
