import { Step, TreeNode, Recipe } from "../types";
import { STEP_DELINEATOR } from "./constants";
import { generateTree } from "./utils/generateTree";
import { getTreeDepth } from "./utils/getTreeDepth";
import { stepsToIngredientsReducer } from "./utils/stepsToIngredientsReducer";
import { stringToStep } from "./utils/stringToStep";

export const parseRecipe = (original: string): Recipe => {
  const [title, ...stepsArr] = original.split(STEP_DELINEATOR);
  const steps: Array<Step> = stepsArr.map(stringToStep);
  const ingredientsList = steps.reduce(stepsToIngredientsReducer, []);
  const lastStep = steps[steps.length - 1];
  const tree = generateTree(lastStep, steps);
  const depth = getTreeDepth(tree);

  return {
    title: title.trim(),
    original,
    steps,
    ingredientsList,
    tree,
    depth,
  };
};
