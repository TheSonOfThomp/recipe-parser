import { useEffect, useMemo, useState } from "react";
import { parseRecipe } from "../parser";
import { RecipeComponentProps, Recipe, isRecipe } from "../types";

export const useRecipe = ({
  string,
  json,
  children,
  recipe,
}: RecipeComponentProps): Recipe => {
  const recipeObject = useMemo(() => {
    if (recipe && isRecipe(recipe)) {
      return recipe;
    } else if (json) {
      return json;
    } else if (children) {
      const string = children as string;
      return parseRecipe(string);
    } else if (string) {
      return parseRecipe(string);
    } else {
      console.log(
        `Recipe not found Received ${{
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
