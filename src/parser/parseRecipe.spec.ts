import exp from "constants";
import { parseRecipe } from "./parseRecipe";

describe("parseRecipe", () => {
  test("", () => {
    const recipe = `
Kraft Dinner
  [1] Boil: 6 cups water
  [2] Cook for 6 minutes: #1, macaroni
  [3] Drain: #2
  [4] Stir: #3, 1/4 cup butter, 1/4 cup milk, powdered cheese
  `;
    const parsed = parseRecipe(recipe);

    expect(parsed.title).toBe("Kraft Dinner");
    expect(parsed.original).toBe(recipe);
    expect(parsed.steps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          verb: "Boil",
        }),
        expect.objectContaining({
          id: 2,
          verb: "Cook for 6 minutes",
        }),
        expect.objectContaining({
          id: 3,
          verb: "Drain",
        }),
        expect.objectContaining({
          id: 4,
          verb: "Stir",
        }),
      ])
    );

    expect(parsed.ingredientsList).toEqual(
      expect.arrayContaining([
        "6 cups water",
        "macaroni",
        "1/4 cup butter",
        "1/4 cup milk",
        "powdered cheese",
      ])
    );
  });
});
