import { Component } from "solid-js";
import styles from '../recipe/recipe.module.scss';

const Recipe: Component<Record<string, string>> = ({ recipe }) => {



  return (
    <div class={styles.recipe}>
      <div class={styles.info}>
        <h2>Recipe Name</h2>
        <div class={styles.stats}>
          <span><i></i>13<small>min</small></span>
          <span><i></i>5</span>
        </div>
      </div>
      <div class={styles.like}>
        <button></button>
      </div>
    </div>
  )
}

export default Recipe;