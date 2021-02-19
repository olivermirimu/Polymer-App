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

class MyView3 extends LitElement {
  constructor() {
    super();
    this.list = [];
    this.dictionary = {
      34: "thirty-four",
      90: "ninety",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    };
  }
  static get styles() {
    return css`
      .circle {
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 50%;
        line-height: 20px;
      }
      .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin: 1rem;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
      }
      .incomplete-icon {
        margin-top: 1.1px;
      }
      .header {
        font-size: 20px;
        color: #6a6a6a;
        padding-bottom: 1rem;
        font-weight: 700;
      }
    `;
  }
  static get properties() {
    return {
      list: { type: Array },
      dictionary: { type: Object },
    };
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.fetchTODO();
    this.sortDictionary();
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="container-fluid">
        <h1 class="header">TODO List</h1>
        ${this.list.map(
          (task) => html` <div
            class="box is-flex is-justify-content-flex-start"
          >
            ${task.completed
              ? html`
                  <span class="icon has-text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                    >
                      <g transform="translate(0 -1028.4)">
                        <path
                          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                          transform="translate(0 1029.4)"
                          fill="#27ae60"
                        />
                        <path
                          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                          transform="translate(0 1028.4)"
                          fill="#2ecc71"
                        />
                        <path
                          d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
                          fill="#27ae60"
                        />
                        <path
                          d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
                          fill="#ecf0f1"
                        />
                      </g>
                    </svg>
                  </span>
                `
              : html`<span class="circle">
                  <svg class="incomplete-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    width: 22px;
                    height: 22px;
                    stroke="#6a6a6a"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle></svg
                ></span>`}
            <p class="ml-2 mt-0">${task.title}</p>
          </div>`
        )}
      </div>
      <div class="container-fluid">
        <h1 class="header">Sorted list</h1>
        <div class="box">${this.dictionary}</div>
      </div>
    `;
  }
  async fetchTODO() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const _list = await response.json();
      this.list = _list;
      console.log(_list);
    } catch (error) {
      console.log(error);
    }
  }
  sortDictionary() {
    this.dictionary = JSON.stringify(
      Object.keys(this.dictionary)
        .sort()
        .reduce((obj, key) => {
          obj[key] = this.dictionary[key];
          return obj;
        }, {})
    );
  }
}

window.customElements.define("my-view3", MyView3);
