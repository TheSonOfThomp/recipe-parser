import React from 'react';
import { Recipe } from "../types"
import jss from "jss";
import preset from 'jss-preset-default'
import { parseRecipe } from '../parser';
import { RecipeNode } from './RecipeNode';
import { styles }  from './styles';

type RecipeComponentProps = {
  string?: string,
  children?: React.ReactChild,
  json?: Recipe,
}

jss.setup(preset())

export const RecipeChart = ({string, json, children}:RecipeComponentProps ) => {
  const [recipe, setRecipe] = React.useState<Recipe>()
  const [classes, setClasses] = React.useState<any>()

  React.useEffect(() => {
    if (json) {
      setRecipe(json)
    } else if (children) {
      const string = children as string
      setRecipe(parseRecipe(string))
    } else if (string) {
      setRecipe(parseRecipe(string))
    } else {
      console.warn('Please provide a recipe for RecipeChart');
    }
  }, [])

  return (
    <React.Fragment>
      {recipe && (
        <RecipeNode
          className='recipe'
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