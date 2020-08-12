export const styles = (depth:number) => {
  return {
    recipe: {
      display: 'grid',
      gridAutoColumns: `${depth}fr 1fr`
    },
    subStep: {
      display: 'grid',
      gridColumn: 1,
      gridAutoColumns: `${depth}fr 1fr`
    },
    ingredient: {
      gridColumn: 1,
      padding: '0 1ch',
      lineHeight: '1.8em',
      border: '1px black solid',
    },
    verb: {
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
  }
}