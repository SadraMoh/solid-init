import { produce } from "solid-js/store";
import { Component, createSignal, Setter, Show } from "solid-js";
import { mutateRecipes } from "../../../../App";
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
          <span><box-icon name="time" />{recipe.minutes}<small>min</small></span>
          <span><box-icon name="baguette" />{recipe.ingredients.length}</span>
        </div>
      </div>
      <div class={styles.like} classList={{ [styles.liked]: recipe.isLiked }}>
        <button onclick={() => mutateRecipes(produce(i => {
          i?.items[i.items.indexOf(recipe)].isLiked !== true
        }))}>
          <Show when={recipe.isLiked} fallback={<box-icon name="heart" size="md" type="regular"></box-icon>}>
            <box-icon name="heart" size="md" type="solid"></box-icon>
          </Show>
        </button>
      </div>
    </div>
  )
}

export default Recipe;