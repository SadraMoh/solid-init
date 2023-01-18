import { Component, createResource, createSignal, For, Match, Show, Switch } from 'solid-js';
import Layout, { route } from './shared/layout/Layout';
import PocketBase, { ListResult } from 'pocketbase';
import List from './pages/list/list';
import Add from './pages/add/add';
import { Recipe } from './model/recipe.model';
import { createStore, produce } from 'solid-js/store';


const pb = new PocketBase('http://127.0.0.1:8090');
// const userData = pb.collection('users').authWithPassword('root@root.com', 'rootrootroot');

export const [recipes, { mutate: mutateRecipes }] =
  createResource(() => pb.collection('recipe').getList(0, 10) as Promise<ListResult<Recipe>>)


const App: Component = () => {

  const all = () => recipes()?.items ?? [];
  const favourites = () => all().filter(i => i);

  const [numbers, setNumbers] = createStore([1, 2, 3, 4, 5]);

  const a = () => setNumbers(produce(i => {
    i[2] = 85
  }));

  return (
    <Layout header={
      <Show when={['list', 'favourites'].includes(route())} fallback={<h1>New Recipe</h1>}>
        <form>
          <input type='text' placeholder='search...' tabIndex='1' />
          <button class='primary' tabIndex='2'></button>
        </form>
      </Show>
    }>
      <span>{recipes()?.totalItems}</span>
      <Show when={!recipes.loading} fallback={<>loading...</>}>
        <Switch>
          <Match when={route() === 'list'}><List recipes={all()} /></Match>
          <Match when={route() === 'favourites'}><List recipes={favourites()} /></Match>
          <Match when={route() === 'add'}><Add /></Match>
        </Switch>
      </Show>
      <For each={numbers}>{(i) => <span>{i}</span>}</For>
      <button onclick={a}>wwwwwwww</button>
    </Layout>
  );
};

export default App;
