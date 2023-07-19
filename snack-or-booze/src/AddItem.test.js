import { render, screen } from "@testing-library/react";
import AddItem from "./AddItem";
import React from "react";

// smoke test see if it renders
test("see if it renders", () => {
  render(
    <AddItem
      addSnack={() => console.log("test")}
      addDrink={() => console.log("test")}
    />
  );
});
test("see if it renders", () => {
  const { asFragment } = render(
    <AddItem
      addSnack={() => console.log("test")}
      addDrink={() => console.log("test")}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
