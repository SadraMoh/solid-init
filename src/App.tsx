import { Component, createResource, Match, Show, Switch } from 'solid-js';
import Layout, { route } from './shared/layout/Layout';
import PocketBase from 'pocketbase';
import List from './pages/list/list';
import Add from './pages/add/add';


const pb = new PocketBase('http://127.0.0.1:8090');
// const userData = pb.collection('users').authWithPassword('root@root.com', 'rootrootroot');

export const [recipes] = createResource(() => pb.collection('recipe').getList(0, 10))

const App: Component = () => {

  const all = () => recipes()?.items ?? [];
  const favourites = () => all().filter(i => i);

  return (
    <Layout header={
      <Show when={['list', 'favourites'].includes(route())} fallback={<h1>New Recipe</h1>}>
        <form>
          <input type='text' placeholder='search...' tabIndex='1'/>
          <button class='primary' tabIndex='2'></button>
        </form>
      </Show>
    }>
      <Show when={!recipes.loading} fallback={<>loading...</>}>
        <Switch>
          <Match when={route() === 'list'}><List recipes={all()} /></Match>
          <Match when={route() === 'favourites'}><List recipes={favourites()} /></Match>
          <Match when={route() === 'add'}><Add /></Match>
        </Switch>
      </Show>
    </Layout>
  );
};

export default App;
