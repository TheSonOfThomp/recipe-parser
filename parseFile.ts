import * as fs from 'fs'
import { kebabCase } from 'lodash';
import { parseRecipe } from './parser'

fs.readFile(`./${process.argv[2]}`, (err, data) => {
  const recipeJSON = parseRecipe(data.toString())
  fs.writeFileSync(`./recipes/${kebabCase(recipeJSON.title)}.json`, JSON.stringify(recipeJSON, null, 2))
})