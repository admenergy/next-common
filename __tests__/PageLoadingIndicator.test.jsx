import { render } from "@testing-library/react";
import React from "react";
import { PageLoadingIndicator } from "~/components";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  CircularProgress: jest.fn(() => <div>CircularProgress</div>),
}));

describe("PageLoadingIndicator", () => {
  it("renders the loading indicator correctly", () => {
    render(<PageLoadingIndicator />);

    expect(document.body).toHaveTextContent("CircularProgress");
  });
});
