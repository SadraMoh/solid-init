import { Component, For } from "solid-js"
import Recipe from "./blocks/recipe/recipe"

type Props = {
  recipes: any[]
}

const List: Component<Props> = ({ recipes }) => {

  return (
    <>
      <For each={recipes}>
        {recipe => <Recipe recipe={recipe} />}
      </For>
    </>
  )
}

export default List;