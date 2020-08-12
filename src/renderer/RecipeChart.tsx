import React from 'react';
import { Recipe } from "../types"
import { parseRecipe } from '../parser';
import { RecipeNode } from './RecipeNode';
import { recipeStyles }  from './styles';

type RecipeComponentProps = {
  string?: string,
  json?: Recipe
}

export const RecipeChart = ({string, json}:RecipeComponentProps ) => {
  const [recipe, setRecipe] = React.useState<Recipe>()

  React.useEffect(() => {
    if (json) {
      setRecipe(json)
    } else if (string) {
      setRecipe(parseRecipe(string))
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