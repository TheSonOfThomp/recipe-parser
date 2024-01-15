import { Step } from "../../types";
import { INGREDIENT_DELINEATOR, VERB_DELINEATOR } from "../constants";

export const stringToStep = (step: string, i: number): Step => {
  const [verb, ingredientsString] = step.split(VERB_DELINEATOR);
  const ingredients = ingredientsString
    .split(INGREDIENT_DELINEATOR)
    .map((ing) => ing.trim())
    .filter((ing) => ing.length > 0);
  return {
    id: i + 1,
    verb: verb.trim(),
    ingredients,
  };
};
