import { Component, JSX } from "solid-js";
import styles from "../layout/layout.module.scss";

type Props = {
  children?: JSX.Element
  header?: JSX.Element | string
};

const Layout: Component<Props> = ({ header, children }) => {
  return (
    <div class={styles.layout}>
      <div class={styles.content}>
        <header>
          {header ?? <h1>Recepies</h1>}
        </header>
        <main>
          {children}
        </main>
        <footer>
          <nav>
            <ul>
              <li>
                list
              </li>
              <li>
                new
              </li>
              <li>
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