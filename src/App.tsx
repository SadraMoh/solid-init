import {
  Component,
  createEffect,
  createSignal,
  Match,
  Show,
  Switch,
} from "solid-js";
import Layout, { route } from "./shared/layout/Layout";
import Add from "./pages/add/add";
import { Recipe } from "./model/recipe.model";
import { createStore } from "solid-js/store";
import List from "./pages/list/list";

export const [recipes, setRecipes] = createStore<Recipe[]>([
  {
    title: "Kissel",
    description: "Very delicious",
    ingredients: [],
    isLiked: true,
    minutes: 10,
  },
]);

const [query, setQuery] = createSignal("");

const App: Component = () => {
  const all = () => recipes ?? [];

  const searched = () =>
    all().filter((i) => {
      const sanitized = () => query().trim();
      if (i.title.includes(sanitized())) return true;
      if (i.description.includes(sanitized())) return true;
      return false;
    });

  const favourites = () => searched().filter((i) => i.isLiked);

  createEffect(() => {
    console.log("[all]", all());
  });

  return (
    <Layout
      header={
        <Show
          when={["list", "favourites"].includes(route())}
          fallback={<h1>New Recipe</h1>}
        >
          <form>
            <input
              value={query()}
              onInput={(e) => setQuery(e.currentTarget.value)}
              type="text"
              placeholder="search..."
              tabIndex="1"
            />
            <button type="button" class="primary" tabIndex="2">
              <box-icon name="search"></box-icon>
            </button>
          </form>
        </Show>
      }
    >
      <Show when={recipes} fallback={<>loading...</>}>
        <Switch>
          <Match when={route() === "list"}>
            <List recipes={searched()} />
          </Match>
          <Match when={route() === "favourites"}>
            <List recipes={favourites()} />
          </Match>
          <Match when={route() === "add"}>
            <Add />
          </Match>
        </Switch>
      </Show>
    </Layout>
  );
};

export default App;
