import { batch, Component, createResource, createSignal, For } from 'solid-js';
import Layout from './shared/layout/Layout';
import PocketBase from 'pocketbase';
import { createStore, produce } from 'solid-js/store';
import List from './pages/list';

const pb = new PocketBase('http://127.0.0.1:8090');
// const userData = pb.collection('users').authWithPassword('root@root.com', 'rootrootroot');

export const [state, setState] = createStore({
  recepies: [] as any[],
});

export const [recepies] = createResource(() => pb.collection('recipe').getList(0, 10))

setState(
  produce((state) => state.recepies = recepies() as any)
);

const App: Component = () => {



  // const [recepies] = createSignal(() => pb.collection('recipe').getFullList());

  return (
    <Layout>
      <List recepies={state.recepies} />
    </Layout>
  );
};

export default App;
