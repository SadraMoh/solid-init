import { Component, createSignal } from "solid-js";
import { Recipe as RecipeModel } from "../../../../model/recipe.model";
import styles from '../recipe/recipe.module.scss';

type Props = {
  recipe: RecipeModel
}

const Recipe: Component<Props> = ({ recipe }) => {

  const [liked, setLiked] = createSignal<boolean>(false);

  return (
    <div class={styles.recipe}>
      <div class={styles.info}>
        <h2>{recipe.title}</h2>
        <div class={styles.stats}>
          <span><box-icon name="time" />{recipe.minutes}<small>min</small></span>
          <span><box-icon name="baguette" />{recipe.ingredients.length}</span>
        </div>
      </div>
      <div class={styles.like}>
        <button onclick={[setLiked, !liked()]}>
          <box-icon name="heart" size="md" type={liked() ? "regular" : "solid"}></box-icon>
        </button>
      </div>
    </div>
  )
}

export default Recipe;