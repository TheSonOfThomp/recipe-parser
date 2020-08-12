type Step = {
  id: number;
  verb: string;
  ingredients: string[];
}

type TreeNode = {
  id: number;
  verb: string;
  ingredients: string[];
  tree: TreeNode[];
}

type Recipe = {
  title: string
  steps: Array<Step>,
  tree: TreeNode,
  depth: number,
  ingredientsList: Array<string>,
}

export const parseRecipe = (recipe: string):Recipe => {
  const STEP_DELINEATOR = /\[[0-9]+\]/g
  const VERB_DELINEATOR = /:\ /g
  const INGREDIENT_DELINEATOR = /\n|,/g
  const isRawIngredient = (ing:string) => !ing.includes('#')
  const isStepLink = (ing:string) => ing.includes('#')
  const getStepById = (id: number, steps: Step[]): Step => steps[id - 1]
  
  const [title, ...stepsArr] = recipe.split(STEP_DELINEATOR)
  
  const steps:Array<Step> = stepsArr.map((step, i) => {
    const [verb, ingredientsString] = step.split(VERB_DELINEATOR)
    const ingredients = ingredientsString
      .split(INGREDIENT_DELINEATOR)
      .map(ing => ing.trim())
      .filter(ing => ing.length > 0)
    return {
      id: i + 1,
      verb: verb.trim(),
      ingredients
    }
  })
  
  const ingredients = steps.reduce((prev: Array<string>, step) => {
    step.ingredients
      .filter(ing => !ing.includes('#'))
      .forEach(ing => prev.push(ing))
    return prev
  }, [])
  
  const lastStep = steps[steps.length-1]
    
  const generateTree = ({id, verb, ingredients}:Step):any => {
    const rawIngredients = ingredients.filter(isRawIngredient)
    const stepLinks = ingredients.filter(isStepLink)
  
    return {
      id,
      verb,
      ingredients: rawIngredients,
      tree: [
        ...stepLinks.map(step => {
          const linkId = parseInt(step.replace('#', ''))
          const link = getStepById(linkId, steps)
          return generateTree(link)
        })
      ]
    }
  }
  
  const getTreeDepth = (tree: TreeNode, depth = 0):number => {
    if (tree.tree) {
      return Math.max(
        depth,
        ...tree.tree.map(node => getTreeDepth(node, depth + 1))
      )
    } else return depth
  }
  
  const tree = generateTree(lastStep)
  const depth = getTreeDepth(tree)
  
  return {
    title: title.trim(),
    steps,
    tree,
    depth,
    ingredientsList: ingredients
  }
}
