import { RecipeComponent, RecipeChart, RecipeList } from '@thesonofthomp/recipe-parser/dist/react'
import './App.css';

const kdRecipe = `Kraft Dinner
  [1] Boil: 6 cups water
  [2] Cook for 6 minutes: #1, Macaroni
  [3] Drain: #2
  [4] Stir: #3, 1/4 cup butter, 1/4 cup milk, Powdered cheese
`

function App() {
  return (
    <div className="App">
      <RecipeComponent>{kdRecipe}</RecipeComponent>
      <h2>Source:</h2>
      <pre style={{backgroundColor: "#ddd", padding: "1em 4ch"}}>
        {kdRecipe.split('\n').map(line =>(<><br/><code>{line}</code></>))}
      </pre>
    </div>
  );
}

export default App;
