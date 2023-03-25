import { Component, For } from "solid-js";
import Recipe from "./blocks/recipe/recipe";
import { Recipe as RecipeModel } from "../../model/recipe.model";

import style from "./list.module.scss";

type Props = {
  recipes: RecipeModel[];
};

const List: Component<Props> = ({ recipes }) => {
  return (
    <div class={style.list}>
      <For each={recipes}>{(recipe) => <Recipe recipe={recipe} />}</For>
    </div>
  );
};

export default List;
