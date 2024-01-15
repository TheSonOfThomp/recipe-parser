import { render } from "@testing-library/react";
import { RecipeComponent } from "./Recipe";
import React from "react";

const kdRecipe = `
Kraft Dinner
  [1] Boil: 6 cups water
  [2] Cook for 6 minutes: #1, macaroni
  [3] Drain: #2
  [4] Stir: #3, 1/4 cup butter, 1/4 cup milk, powdered cheese
`;

describe("RecipeComponent", () => {
  test("renders nothing when no children are passed", () => {
    render(<RecipeComponent></RecipeComponent>);
  });
  test("renders a recipe chart & list", () => {
    const result = render(<RecipeComponent>{kdRecipe}</RecipeComponent>);
    const wrapper = result.queryByTestId("recipe-wrapper");
    const chart = result.queryByTestId("recipe-chart");
    const list = result.queryByTestId("recipe-list");

    expect(wrapper).not.toBeUndefined();
    expect(chart).not.toBeUndefined();
    expect(list).not.toBeUndefined();
  });
});
