import React from 'react';
import { TreeNode } from "../types"
import jss from "jss";
import preset from 'jss-preset-default'
import {styles} from './styles';

type RecipeNodeProps = {
  id: number,
  verb: string,
  ingredients: Array<string>,
  tree: Array<TreeNode>,
  depth: number,
  className?: string
}

jss.setup(preset())

export const RecipeNode = ({ className, id, verb, ingredients, tree, depth }: RecipeNodeProps) => {
  const { classes } = jss.createStyleSheet(styles(depth + 1)).attach();
  return (
    <div
      className={`${className || 'sub-steps'} ${classes.subStep}`}
      id={`step-${id}`}
    >
      {
        tree && tree.map(node =>
          <RecipeNode
            key={node.id}
            id={node.id}
            verb={node.verb}
            ingredients={node.ingredients}
            tree={node.tree}
            depth={depth - 1}
          />
        )
      }
      <span className={`verb ${classes.verb}`} id={`action-${id}`}>{verb}</span>
      {
        ingredients && ingredients.map(ing => (
          <span className={`ingredient ${classes.ingredient}`} key={ing}>{ing}</span>
        ))
      }
    </div>
  )
}