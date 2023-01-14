import { Component, For } from "solid-js"

type Props = {
  recepies: any[]
}

const List: Component<Props> = ({ recepies }) => {



  return (
    <For each={recepies()?.items ?? []}>
      {(recipe) => (
        <dl>
          <dt>title</dt>
          <dd>{recipe.title}</dd>
        </dl>
      )}
    </For>
  )

}

export default List;