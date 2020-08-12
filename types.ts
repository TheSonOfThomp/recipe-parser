export type Step = {
  id: number;
  verb: string;
  ingredients: string[];
}

export type TreeNode = {
  id: number;
  verb: string;
  ingredients: string[];
  tree: TreeNode[];
}

export type Recipe = {
  title: string,
  original: string,
  steps: Array<Step>,
  tree: TreeNode,
  depth: number,
  ingredientsList: Array<string>,
}