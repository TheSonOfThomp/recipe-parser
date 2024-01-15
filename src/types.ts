import { has, isNull, isUndefined } from "lodash";

export type Step = {
  id: number;
  verb: string;
  ingredients: string[];
};

export type TreeNode = {
  id: number;
  verb: string;
  ingredients: string[];
  tree: TreeNode[];
  depth?: number;
};

export type Recipe = {
  title: string;
  original: string;
  steps: Array<Step>;
  tree: TreeNode;
  depth: number;
  ingredientsList: Array<string>;
};

export const isRecipe = (maybeRecipe: any) => {
  return (
    !isUndefined(maybeRecipe) &&
    !isNull(maybeRecipe) &&
    typeof maybeRecipe === "object" &&
    has(maybeRecipe, "title") &&
    has(maybeRecipe, "original") &&
    has(maybeRecipe, "steps") &&
    has(maybeRecipe, "tree") &&
    has(maybeRecipe, "depth") &&
    has(maybeRecipe, "ingredientsList")
  );
};

export type RecipeComponentProps = {
  string?: string;
  children?: React.ReactChild;
  json?: Recipe;
  recipe?: Recipe;
};
