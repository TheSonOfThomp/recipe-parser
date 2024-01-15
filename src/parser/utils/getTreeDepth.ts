import { TreeNode } from "../../types";

export const getTreeDepth = (tree: TreeNode, depth = 0): number => {
  if (tree.tree) {
    return Math.max(
      depth,
      ...tree.tree.map((node) => getTreeDepth(node, depth + 1))
    );
  } else return depth;
};
