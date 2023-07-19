import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import React from "react";

// smoke test see if it renders
test("see if it renders", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
});
test("see if it renders", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
