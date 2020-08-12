import { Step, TreeNode, Recipe} from './types'

export const parseRecipe = (original: string):Recipe => {
  const STEP_DELINEATOR = /\[[0-9]+\]/g
  const VERB_DELINEATOR = /:\ /g
  const INGREDIENT_DELINEATOR = /\n|,/g
  const isRawIngredient = (ing:string) => !ing.includes('#')
  const isStepLink = (ing:string) => ing.includes('#')
  const getStepById = (id: number, steps: Step[]): Step => steps[id - 1]
  const stringToStep = (step:string, i:number):Step => {
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
  }
  const stepsToIngredientsReducer = (prev: Array<string>, step:Step) => {
    step.ingredients
      .filter(ing => !ing.includes('#'))
      .forEach(ing => prev.push(ing))
    return prev
  }

  const generateTree = ({id, verb, ingredients}:Step):TreeNode => {
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

  const [title, ...stepsArr] = original.split(STEP_DELINEATOR)
  const steps: Array<Step> = stepsArr.map(stringToStep)
  const ingredientsList = steps.reduce(stepsToIngredientsReducer, [])
  const lastStep = steps[steps.length - 1]
  const tree = generateTree(lastStep)
  const depth = getTreeDepth(tree)
  
  return {
    title: title.trim(),
    original,
    steps,
    ingredientsList,
    tree,
    depth,
  }
}
