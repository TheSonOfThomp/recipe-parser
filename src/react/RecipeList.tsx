import React, { useEffect, useState } from "react";
import jss from "jss";
import preset from "jss-preset-default";
import { usePrevious } from "./usePrevious";
import { Recipe, RecipeComponentProps, Step } from "../types";
import { useRecipe } from "./useRecipe";
import { styles } from "./styles";

jss.setup(preset());

function classnames(...classes: string[]) {
  return classes.join(" ");
}

export const RecipeList = (props: RecipeComponentProps) => {
  const recipe = useRecipe(props);
  const { classes } = jss.createStyleSheet(styles(0)).attach();
  const [highlightedStep, setHighlightedStep] = useState<number>();

  const handleStepMouseOver = (stepRef: number) => {
    setHighlightedStep(stepRef);
  };
  const handleStepMouseOut = () => {
    setHighlightedStep(-1);
  };

  return (
    <ol className={classes.recipe_steps_list} data-testid="recipe-list">
      {recipe &&
        recipe.steps.map((step: Step, i: number) => {
          return (
            <li
              className={classnames(
                classes.recipe_steps_list_step,
                highlightedStep === i + 1 ? classes.recipe_step_highlight : ""
              )}
              id={`steps-list-${i}`}
              key={`step-${i}`}
            >
              <b className={classes.recipe_steps_list_verb}>{step.verb} </b>
              {step.ingredients.map((ing) => {
                const stepRef =
                  ing.search("#") === 0 ? parseInt(ing.slice(1)) : null;
                if (stepRef) {
                  ing = ing.replace("#", "Step ");
                  return (
                    <span
                      onMouseOver={() => {
                        handleStepMouseOver(stepRef);
                      }}
                      onMouseOut={handleStepMouseOut}
                      className={classnames(
                        classes.recipe_steps_list_ingredient,
                        classes.recipe_steps_list_ingredient_ref
                      )}
                      key={ing}
                    >
                      {ing}
                    </span>
                  );
                } else {
                  return (
                    <span
                      className={classes.recipe_steps_list_ingredient}
                      key={ing}
                    >
                      {ing}
                    </span>
                  );
                }
              })}
            </li>
          );
        })}
    </ol>
  );
};
