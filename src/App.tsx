import { batch, Component, createResource, createSignal, For } from 'solid-js';
import Layout from './shared/layout/Layout';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
// const userData = pb.collection('users').authWithPassword('root@root.com', 'rootrootroot');

const App: Component = () => {

  const [recepies, { refetch }] = createResource(() => pb.collection('recipe').getList(0, 10))

  // const [recepies] = createSignal(() => pb.collection('recipe').getFullList());

  return (
    <Layout>
      <h2>Hello World!</h2>

      {/* <pre>{JSON.stringify(recepies(), null, 2)}</pre> */}

      {/* <button onclick={refetch}>refetch</button> */}

      <For each={recepies()?.items ?? []}>
        {(recipe) => (
          <dl>
            <dt>title</dt>
            <dd>{recipe.title}</dd>
          </dl>
        )}
      </For>


    </Layout>
  );
};

export default App;
