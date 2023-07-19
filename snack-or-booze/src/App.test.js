import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { MemoryRouter } from "react-router-dom";

// smoke test see if it renders
test("see if it renders", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
test("see if it renders", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
