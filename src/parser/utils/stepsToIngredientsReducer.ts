import { Step } from "../../types";

export const stepsToIngredientsReducer = (prev: Array<string>, step: Step) => {
  step.ingredients
    .filter((ing) => !ing.includes("#"))
    .forEach((ing) => prev.push(ing));
  return prev;
};
