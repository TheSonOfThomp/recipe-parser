const recipeStyles = {
  display: 'grid'
}

const subStepStyles = {
  display: 'grid',
  gridColumn: 1
}

const verbStyles = {
  padding: '0 1ch',
  lineHeight: '1.8em',
  border: '1px black solid',
  display: 'flex',
  gridColumn: 2,
  gridRow: '1 / 100',
  alignItems: 'center',
  textAlign: "center" as "center", // isn't typescript great...
  justifyContent: 'center',
}

const ingredientStyles = {
  gridColumn: 1,
  padding: '0 1ch',
  lineHeight: '1.8em',
  border: '1px black solid',
}

export {
  recipeStyles,
  subStepStyles,
  verbStyles,
  ingredientStyles,
}