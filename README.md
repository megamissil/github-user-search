

## Instructions

A simple front end web app that takes a Github user's username (provided by the user of the application, ex. `megamissil`). 

[Github's api](https://developer.github.com/v3/) is used to show the users profile data and a list of the provided user's repositories (public repos).

## The app displays the following Github user data:
  - Avatar
  - Name
  - Location
  - Bio
  - Public repos

Linter: eslintrc. Using Atom, run `apm install linter-eslint` and the editor will show linter errors and warnings.

Styles located in the `app.scss` file (this gets compiled to the `www/css/app.css` file).

Javascript located at `www/app/app.js`. All files under app are compiled into all.js.

## Running The Project

Install [Node.js](https://nodejs.org/en/). Also, install [Bower](https://bower.io/) by running `npm install -g bower`.

<!-- Install Ionic (just using that to serve the app into the browser):

```bash
$ npm install -g ionic
``` -->

To serve the app in the browser:

```bash
$ npm install
$ npm start
```