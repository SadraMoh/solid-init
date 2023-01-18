import { ListResult } from "pocketbase"
import { Component, For, Setter } from "solid-js"
import Recipe from "./blocks/recipe/recipe"
import { Recipe as RecipeModel } from "../../model/recipe.model";

type Props = {
  recipes: RecipeModel[],
}

const List: Component<Props> = ({ recipes }) => {

  return (
    <For each={recipes}>
      {recipe => <Recipe recipe={recipe} />}
    </For>
  )
}

export default List;