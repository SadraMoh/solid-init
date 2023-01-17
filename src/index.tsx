/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.scss';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": JSX.IntrinsicElements["div"] & {
        type?: "regular" | "solid" | "logo"
        name: string
        color?: string
        size?: "xs" | "sm" | "md" | "lg" | "cssSize"
        rotate?: 90 | 180 | 270
        flip?: "horizontal" | "vertical"
        border?: "square" | "circle"
        animation?: "spin|tada|etc..."
        pull?: "left" | "right"
      };
    }
  }
}