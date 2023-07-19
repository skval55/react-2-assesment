import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";

// smoke test see if it renders
test("see if it renders", () => {
  render(<Home snacks={"snacks"} drinks={"drinks"} />);
});
test("see if it renders", () => {
  const { asFragment } = render(<Home snacks={"snacks"} drinks={"drinks"} />);
  expect(asFragment()).toMatchSnapshot();
});
