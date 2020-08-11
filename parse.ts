import * as fs from 'fs'
import { kebabCase } from 'lodash';
import { parseRecipeMarkdown } from './recipe-parser'

fs.readFile(`./${process.argv[2]}`, (err, data) => {
  const recipeJSON = parseRecipeMarkdown(data.toString())
  fs.writeFileSync(`./recipes/${kebabCase(recipeJSON.title)}.json`, JSON.stringify(recipeJSON, null, 2))
})