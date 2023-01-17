import { Component } from "solid-js";
import { Recipe as RecipeModel } from "../../../../model/recipe.model";
import styles from '../recipe/recipe.module.scss';

type Props = {
  recipe: RecipeModel
}

const Recipe: Component<Props> = ({ recipe }) => {

  return (
    <div class={styles.recipe}>
      <div class={styles.info}>
        <h2>{recipe.title}</h2>
        <div class={styles.stats}>
          <span><i></i>{recipe.minutes}<small>min</small></span>
          <span><i></i>{recipe.ingredients.length}</span>
        </div>
      </div>
      <div class={styles.like}>
        <button></button>
      </div>
    </div>
  )
}

export default Recipe;