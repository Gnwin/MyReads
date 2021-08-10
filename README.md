# MyReads Project

This is a Book shelf project where books can be reorganized into different shelves. I added interactivity to the app by refactoring the static code in this template. This project demonstrates the us e of React,s components, controlled components, Managing state, e.t.c.

The template can be gotten from here: [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## File Content
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Built With

- React
- HTML
- CSS


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- View only on Chrome Browser
- Text editor of your choice.
- npm has to be installed in your system.

### Setup

- `https://github.com/Gnwin/MyReads.git`
- If REACT is not installed on your global machine, follow the steps below;

- If you use homebrew (for mac users),
	- > `run brew install node`
    - > `run brew install yarn`
    - > `run yarn install && yarn --version`
    - > `npm install -g create-react-app`
- If you use windows,
	- > `install node from nodejs.org`
    - > `run npm install --global yarn`
    - > `run yarn --version`
    - > `npm install -g create-react-app`
- If you use linux,
	- > `install node from nodejs.org for linux`
    - > `run sudo apt-get install -y build-essential`
    - > `run npm install --global yarn`
    - > `npm install -g create-react-app`
- get to the cloned project folder, open terminal in the root level and run:
	- > `npm install` to install all dependencies.`
	- > `yarn start` or `npm start`.

### Usage

> Clone the repo.
> Open with an editor of your choice
> Switch to feature branch with `git checkout feature`
> run `yarn start` or `npm start`. to start the server.



## Author

👤 **Godwin Nwachukwu**

- Github: [@Gnwin](https://github.com/Gnwin)
- Linkedin: [@n-gwin](https://www.linkedin.com/in/n-gwin/)
- twitter: [@gmarxr](https://www.twitter.com/gmarxr)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!
- Thanks to Udacity


## Show your support

Give a ⭐️ if you like this project!




