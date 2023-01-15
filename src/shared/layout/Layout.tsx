import { Component, createSignal, JSX } from "solid-js";
import styles from "../layout/layout.module.scss";

type Routes = "list" | "favourites" | "add";
export const [route, setRoute] = createSignal<Routes>("list")

type Props = {
  children?: JSX.Element
  header?: JSX.Element | string
};

const Layout: Component<Props> = ({ header, children }) => {
  return (
    <div class={styles.layout}>
      <div class={styles.content}>
        <header>
          {header ?? <h1>Recipes</h1>}
        </header>
        <main>
          {children}
        </main>
        <footer>
          <nav>
            <ul>
              <li onclick={() => setRoute("list")}>
                list
              </li>
              <li onclick={() => setRoute("add")}>
                add
              </li>
              <li onclick={() => setRoute("favourites")}>
                favourites
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Layout;