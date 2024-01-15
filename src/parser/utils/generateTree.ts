import { Step, TreeNode } from "../../types";
import { getStepById } from "./getStepById";
import { getTreeDepth } from "./getTreeDepth";
import { isRawIngredient } from "./isRawIngredient";
import { isStepLink } from "./isStepLink";

export const generateTree = (finalStep: Step, steps: Step[]): TreeNode => {
  const { id, verb, ingredients } = finalStep;
  const rawIngredients = ingredients.filter(isRawIngredient);
  const stepLinks = ingredients.filter(isStepLink);
  const tree = [
    ...stepLinks.map((step) => {
      const linkId = parseInt(step.replace("#", ""));
      const link = getStepById(linkId, steps);
      return generateTree(link, steps);
    }),
  ];
  const node = {
    id,
    verb,
    ingredients: rawIngredients,
    tree,
  };
  const depth = getTreeDepth(node);

  return {
    ...node,
    depth,
  };
};
