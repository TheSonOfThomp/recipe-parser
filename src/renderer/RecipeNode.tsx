import React from 'react';
import { TreeNode } from "../types"
import {
  subStepStyles,
  verbStyles,
  ingredientStyles,
} from './styles';

type RecipeNodeProps = {
  id: number,
  verb: string,
  ingredients: Array<string>,
  tree: Array<TreeNode>,
  depth: number
}


export const RecipeNode = ({ id, verb, ingredients, tree, depth }: RecipeNodeProps) => {
  const stepLabel = `${verb} ${ingredients.join(', ')}`

  return (
    <>
      {
        tree && tree.map(node =>
          <div
            className="sub-steps"
            style={{
              ...subStepStyles,
              'gridAutoColumns': `${depth}fr 1fr`
            }}
          >
            <RecipeNode
              key={node.id}
              id={node.id}
              verb={node.verb}
              ingredients={node.ingredients}
              tree={node.tree}
              depth={depth - 1}
            />
          </div>
        )
      }
      <span
        id={`step-${id}`}
        className="verb"
        style={verbStyles}
      >{verb}</span>
      {
        ingredients && ingredients.map(ing => (
          <span style={ingredientStyles} className="ingredient" key={ing}>{ing}</span>
        ))
      }
    </>
  )
}