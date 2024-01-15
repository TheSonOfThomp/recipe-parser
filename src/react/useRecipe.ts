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
      const string = getNodeTextContent(children);
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

/**
 * Returns the text string of a React node
 */
export default function getNodeTextContent(node?: React.ReactNode): string {
  if (isText(node)) {
    return node.toString().trim();
  }

  if (Array.isArray(node)) {
    return node.map(getNodeTextContent).join(" ").trim();
  }

  if (hasChildren(node)) {
    return getNodeTextContent(node.props.children);
  }

  return "";
}

function hasChildren(item?: any): item is React.ReactElement {
  return item && typeof item === "object" && item.props;
}

function isText(item?: any): item is React.ReactText {
  return typeof item === "string" || typeof item === "number";
}
