import { useEffect, useState } from "react";
import { parseRecipe } from "../parser";
import { RecipeComponentProps, Recipe, isRecipe } from "../types";

export const useRecipe = ({
  string,
  json,
  children,
  recipe,
}: RecipeComponentProps): Recipe => {
  const [recipeObject, setRecipe] = useState<Recipe>();

  useEffect(() => {
    if (recipe && isRecipe(recipe)) {
      setRecipe(recipe);
    } else if (json) {
      setRecipe(json);
    } else if (children) {
      const string = children as string;
      setRecipe(parseRecipe(string));
    } else if (string) {
      setRecipe(parseRecipe(string));
    } else {
      throw new Error(
        `Please provide a recipe for RecipeChart. Received ${{
          string,
          json,
          children,
          recipe,
        }}`
      );
    }
  }, []);

  return recipeObject as Recipe;
};
