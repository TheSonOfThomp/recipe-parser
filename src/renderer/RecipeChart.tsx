import React from 'react';
import { Recipe } from "../types"
import { parseRecipe } from '../parser';
import { RecipeNode } from './RecipeNode';
import { recipeStyles }  from './styles';

type RecipeComponentProps = {
  string?: string,
  children?: React.ReactChild,
  json?: Recipe,
}

export const RecipeChart = ({string, json, children}:RecipeComponentProps ) => {
  const [recipe, setRecipe] = React.useState<Recipe>()

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
        <React.Fragment>
          <div className="recipe"
            style={{
              ...recipeStyles,
              'gridAutoColumns': `${recipe.depth}fr 1fr`
            }}
          >
            <RecipeNode
              id={recipe.tree.id}
              verb={recipe.tree.verb}
              ingredients={recipe.tree.ingredients}
              tree={recipe.tree.tree}
              depth={recipe.depth}
            />
          </div>
        </React.Fragment>
      )
      }
    </React.Fragment>
  )
}