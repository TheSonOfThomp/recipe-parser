import React from "react";
import { RecipeChart } from "./RecipeChart";
import { RecipeList } from "./RecipeList";
import { RecipeComponentProps } from "../types";
import { useRecipe } from "./useRecipe";

export const RecipeComponent = (props: RecipeComponentProps) => {
  const recipe = useRecipe(props);

  return (
    <>
      {recipe && (
        <div className="recipe-wrapper" data-testid="recipe-wrapper">
          <h1>{recipe.title}</h1>
          <RecipeChart json={recipe}></RecipeChart>
          <RecipeList json={recipe}></RecipeList>
        </div>
      )}
    </>
  );
};
