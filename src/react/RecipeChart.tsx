import React from 'react';
import { Recipe, RecipeComponentProps } from "../types"
import jss from "jss";
import preset from 'jss-preset-default'
import { parseRecipe } from '../parser';
import { RecipeNode } from './RecipeNode';
import { styles }  from './styles';
import { useRecipe } from './useRecipe';

jss.setup(preset())

export const RecipeChart = (props: RecipeComponentProps ) => {

  const { classes } = jss.createStyleSheet(styles(0)).attach();

  console.log(props);
  const recipe = useRecipe(props)
  
  return (
    <React.Fragment>
      {recipe && (
        <RecipeNode
          className={classes.recipe_chart}
          id={recipe.tree.id}
          verb={recipe.tree.verb}
          ingredients={recipe.tree.ingredients}
          tree={recipe.tree.tree}
          depth={recipe.depth}
        />
      )}
    </React.Fragment>
  )
}