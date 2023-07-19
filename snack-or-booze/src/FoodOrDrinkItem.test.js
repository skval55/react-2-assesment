import FoodOrDrinkItem from "./FoodOrDrinkItem";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const drinks = [
  {
    id: "martini",
    name: "Martini",
    description: "An ice-cold, refreshing classic.",
    recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
    serve: "Serve very cold, straight up.",
  },
  {
    id: "negroni",
    name: "Negroni",
    description: "A nice drink for a late night conversation.",
    recipe: "Mix equal parts of gin, Campari, and sweet vermouth.",
    serve: "Serve cold, either on the rocks or straight up.",
  },
  {
    id: "gin-and-tonic",
    name: "Gin and Tonic",
    description: "Like regular tonic, but with gin.",
    recipe: "Mix 2 parts gin & 1 part tonic water.",
    serve: "Serve in a tall glass over ice, garnished with a lime wedge.",
  },
  {
    id: "diet-coke",
    name: "Diet Coke",
    description: "Crisp!",
    recipe: "Open can.",
    serve: "Immediately.",
  },
];

test("see if it renders with valid drink", () => {
  render(
    <MemoryRouter initialEntries={["/negroni"]}>
      <FoodOrDrinkItem items={drinks} cantFind="/snacks" />
    </MemoryRouter>
  );
});
test("see if it renders with invalid drink", () => {
  render(
    <MemoryRouter initialEntries={["/notadrink"]}>
      <FoodOrDrinkItem items={drinks} cantFind="/snacks" />
    </MemoryRouter>
  );
});
test("see if it renders", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/negroni"]}>
      <FoodOrDrinkItem items={drinks} cantFind="/snacks" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
