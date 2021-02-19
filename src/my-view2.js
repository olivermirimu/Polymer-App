/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from "lit-element";
import "./shared-styles.js";

class MyView2 extends LitElement {
  static get styles() {
    return css`
      .animate {
        width: 100px;
        height: 100px;
        position: relative;
        animation-name: cartoon;
        animation-iteration-count: infinite;
        animation-duration: 15s;
      }

      .tri-intersect {
        width: 100%;
        height: 200px;
      }

      .tri-intersect polygon {
        fill: white;
        stroke: white;
        stroke-width: 1;
      }
      .tri-intersect > polygon {
        fill: #0d884c;
      }
      @keyframes cartoon {
        0% {
          left: 0px;
          top: 200px;
        }
        10% {
          left: 50px;
          top: 50px;
        }
        20% {
          left: 100px;
          top: 200px;
        }
        35% {
          left: 150px;
          top: 82px;
        }
        50% {
          left: 200px;
          top: 200px;
        }
        70% {
          left: 250px;
          top: 65px;
        }
        85% {
          left: 300px;
          top: 200px;
        }
        100% {
          left: 350px;
          top: 55px;
        }
      }
    `;
  }

  render() {
    return html`
      <svg
        class="animate"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100px"
        height="100px"
        viewBox="0 0 308.947 308.947"
        style="enable-background:new 0 0 308.947 308.947;"
        xml:space="preserve"
        class="animate"
      >
        <path
          d="M248.865,155.976c-1.19-3.648-4.138-6.441-7.855-7.423c-3.702-0.986-7.658-0.01-10.496,2.576l-26.921,24.586
            c-4.458-20.842-12.531-41.987-19.821-58.495c19.034-5.146,47.038-16.632,55.308-40.653c11.318-32.863,10.288-44.094,9.973-46.018
            L198.523,0l-5.54,7.933l41.477,28.995c-0.601,5.308-2.61,16.05-9.104,34.917c-6.462,18.765-31.633,27.931-47.768,31.962
            c-2.051-4.238-3.868-7.847-5.344-10.68c6.473-9.872,7.171-23.85,0.626-36.182c-9.113-17.181-28.713-24.63-43.799-16.64
            c-15.082,7.995-19.926,28.399-10.817,45.581c7.397,13.96,21.73,21.494,34.932,19.545c1.066,2.1,2.195,4.383,3.368,6.807
            l-40.102,14.597l-50.898-15.498l-19.19-40.526l-8.849,3.904l23.814,50.505l53.208,16.202c0.691,0.207,1.406,0.313,2.112,0.313
            c0.836,0,1.681-0.147,2.486-0.44l43.514-15.837c12.981,29.505,26.875,70.282,20.039,93.351
            c-12.51,42.213-29.898,80.359-30.074,80.743l20.521,9.397c0.74-1.61,18.222-39.934,31.197-83.729
            c1.994-6.722,2.775-14.178,2.662-22.06l25.803-23.555l17.165,52.874l21.469-6.965L248.865,155.976z"
        />
      </svg>
      <svg
        class="tri-intersect"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="0, 0, 50, 30, 65, 27, 82, 55, 85, 55, 100, 65, 125, 55, 150, 70, 160, 70, 175, 90, 200, 100, 0, 100"
        ></polygon>
      </svg>
    `;
  }
}

window.customElements.define("my-element", MyView2);
