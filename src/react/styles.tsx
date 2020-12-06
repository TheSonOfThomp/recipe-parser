export const styles = (depth:number) => {
  return {
    recipe_chart: {
      display: 'grid',
      gridAutoColumns: `${depth}fr 1fr`,
      color: "var(--recipe-color-primary, black)"
    },
    recipe_chart_subStep: {
      display: 'grid',
      gridColumn: 1,
      gridAutoColumns: `${depth}fr 1fr`
    },
    recipe_chart_ingredient: {
      gridColumn: 1,
      padding: '0 1ch',
      lineHeight: '1.8em',
      border: '1px solid var(--recipe-color-primary, black)',
    },
    recipe_chart_verb: {
      padding: '0 1ch',
      lineHeight: '1.8em',
      border: '1px solid var(--recipe-color-primary, black)',
      display: 'flex',
      gridColumn: 2,
      gridRow: '1 / 100',
      alignItems: 'center',
      textAlign: "center",
      justifyContent: 'center',
    },

    recipe_steps_list: {
      display: "inline-block",
      color: "var(--recipe-color-primary, black)",
      lineHeight: "1.5em"
    },

    recipe_steps_list_step: {
    },
    
    recipe_step_highlight: {
      backgroundColor: "var(--recipe-color-highlight, rgba(0,0,0,0.2))",
    },

    recipe_steps_list_verb: {
    },

    recipe_steps_list_ingredient: {
      "&:not(:last-child)": {
        marginRight: '1ch',
        "&::after": {
          content: ', ',
        }
      }
    },

    recipe_steps_list_ingredient_ref: {
      cursor: "pointer",
      borderBottom: "1px solid var(--recipe-color-primary, black)"
    }
  }
}