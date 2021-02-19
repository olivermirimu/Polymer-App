# Polymer App

This is a small polymer app built using the polymer 3.0 starter kit. It is part of the interview process for intertel.

The App has three interfaces and navigation allowing for transition from one to the other:

- View One is a basic form that allows user to enter: `name`, `email` and `telephone`. on submit the an alert box is triggered desplayng the above details, details are also printed to the console.

- View Two is a css animation of a cartoon jumping along a hilly terrain.

- View Three fetches a todo list of five from provided endpoint, `"https://jsonplaceholder.typicode.com/todos?_limit=5"` and displays them while highlighting those completed and those not. It also displays an object `Dictionary`, which is initially provided as unsorted as sorted in regard to keys.

### Setup

##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli@next

##### Setup project on local device

    git clone
    cd my-app

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    npm start
