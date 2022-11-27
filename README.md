# MERN: Book - Search Engine
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```
This app is a search engine that allows users to find/search and save books that the user would like to read (or purchase or share).

The objective of this project was to convert a RESTful MERN (Mongo, Express, React, Node) API to a GraphQL/Apollo MERN API.

```

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run `npm i` to install dependancies, and (4) "npm run develop" to build the app, deploy the local server and open the app.

## Usage

This app is deployed using Heroku. From a development perspective, this app uses Node.js, Mongo, React and Apollo/GraphQL. See the technology list below for more detail.

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. `Single-page app` built using React.
2. `Component` based approach which breaks down each page and major function. For example, the header, footer and each navigation bar link is a unique component.
3. `Bootstap` is used for the majority of the html and css including the nav bar, cards, and form.
4. `Search Book` and `Saved Book` pages. 
5. `Saved Book` presents cards for each saved book with cover image, title, author, description and link to google books.
6. `Search Book` presnets a `search box` search functionality that accepts user input then uses a `fetch` to search the google book api using the user input.
7. `Login`, `Signup`, and `Logout` functionality using a bootstrap modal, jsonwebtoken for authentication and alert messaging for invalid login.
8. Upon `login` the user then has the ability to save one or more books based on the search results. After saving a book the book is listed on the "see my books" page via a link in the nav bar. On the "saved book" screen a loggedin user has the option to remove (delete) books.
9. `User` login information is used to `save` books to a specific user rather than expose the user information in the URL via parameters (params).
10. `Heroku` deployment.

## Future Enhancements: 
1. Breakdown code into `smaller components` for readability, maintainability and reduce duplication.
2. Enhance to a `PWA` to work both on- and off-line.
3. Enhance search options and google api with more `customized google search results` (newest, max results, author et al).
4. Provide user with more advance `self-select search options` (e.g. search by title, author, newest, number of results).
5. Update `password, username and email verification standards` and functionality.
6. Upgrade `login` and `signup` to include `tooltip & required field` messages.
7. Add `Share` functionality so the user can share a book with others via email and/or text message.
8. Upgrade backend to use `Apollo cache` rather than local storage.

## Technology

1. `React:` JavaScript transcompiler mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript.
2. `Git/Github:` Repo and version management.
3. `Mongo/Mongoose`: Database.
4. `React-Bootstrap`: For most of the CSS styling.
5. `Apollo/GraphQL`: For GraphQL database query.
6. `bcrypt`: To encrypt the user password.
7. `jsonwebtoken/jwt decoe`: For user authentication and token decoding.
8. `Heroku`: Deployment.
---

## App Preview - WalkThrough Video

Video #1: Demonstrates all of the content, functional and technical acceptance criteria.

[Link to WalkThrough Video](https://youtu.be/XXe5NX0E9NM)

![Build & deploy video](./assets/demo-video.gif)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. GitHub Repo #1 - Deployed: [LINK](https://github.com/stevecalla/book-search-engine-v2)
3. GitHub Repo #2 - Original: [LINK](https://github.com/stevecalla/book-search-engine)
    * Note Repo #2 would not deploy to Heroku. After multiple attempts, repo was rebuilt in most recent version of create react as represented by Repo #1 above. Repo #2 includes the vast majority of the development commit information.
4. Deployed Site URL - Heroku: [LINK](https://book-search-engine-calla.herokuapp.com/)
5. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.