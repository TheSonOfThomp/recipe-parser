import React from 'react';
import PropTypes from 'prop-types'
import { RecipeChart } from './RecipeChart';
import { RecipeList } from './RecipeList';
import { parseRecipe } from '../parser';
import { Recipe, RecipeComponentProps } from '../types';
import { useRecipe } from './useRecipe';

const RecipeComponent = (props: RecipeComponentProps) => {

  const recipe = useRecipe(props)

  return (
    <>
    {
      recipe && (
        <div className="recipe-wrapper">
          <h1>{recipe.title}</h1>
          <RecipeChart json={recipe}></RecipeChart>
          <RecipeList json={recipe}></RecipeList>
        </div>
      )
    }
    </>
  )
}

export default RecipeComponent;
