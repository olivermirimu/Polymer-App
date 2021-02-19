/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css, unsafeCSS } from "lit-element";
import "./shared-styles.js";

class MyView1 extends LitElement {
  constructor() {
    super();
    this.user = {
      name: "",
      email: "",
      telephone: "",
    };
  }
  static get styles() {
    return css`
      .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin: 1rem;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
      }
    `;
  }
  static get properties() {
    return {
      user: {
        name: { type: String },
        email: { type: String },
        telephone: { type: String },
      },
    };
  }

  render() {
    return html` <style include="shared-styles"></style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <div class="container-fluid">
        <form class="box" @submit="${this.displayUser}">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                value=${this.user.name}
                @change="${this.handleInputChange}"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                @change="${this.handleInputChange}"
                id="email"
                value=${this.user.email}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone Number</label>
            <div class="control">
              <input
                class="input"
                type="tel"
                value=${this.user.telephone}
                name="telephone"
                @change="${this.handleInputChange}"
                id="telephone"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div class="control">
            <button
              type="submit"
              class="button is-link"
              @click="${this.displayUser}"
            >
              Submit
            </button>
          </div>
        </form>
      </div>`;
  }
  displayUser(event) {
    event.preventDefault();
    window.alert(
      `User Details: \n Name: ${this.user.name} \n Email: ${this.user.email} \n Telephone: ${this.user.telephone} \n`
    );
    console.log(this.user);
  }

  handleInputChange(event) {
    this.user[`${event.target.name}`] = event.target.value;
  }
}

customElements.define("my-view1", MyView1);
