import * as fs from 'fs'
import { parseRecipe } from './parser'

const filePath = process.argv[2]
fs.readFile(`./${filePath}`, (err, data) => {
  const recipeJSON = parseRecipe(data.toString())
  const route = filePath.slice(0, filePath.lastIndexOf('/'))
  const filename = recipeJSON.title.replace(/( )/g, '-').toLowerCase()
  fs.writeFileSync(`${route}/${filename}.json`, JSON.stringify(recipeJSON, null, 2))
})