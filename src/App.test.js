import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe(" App renders with no errors", () => {
  it("the rendering of App", () => {
    render(<App />);
  });
});
