# React.js + TypeScript Boiler plate
# Useful to quick-start applications that involve authentication and dashboard. Just edit basic styling and add extra components/views
# To test you have to run the local server with yarn serve and login with 
    username: reactboilerplate@gmail.com
    password: boilerplate

This project based on real world practice and ready to use. Have a fun!

## Features
- Redux with TypeScript setup with login example
- Thunk middleware + combine Reducers
- Login server.js file included to initiate the login server
    username:  reactboilerplate@gmail.com
    password: boilerplate
- Response wrapper and SideMenu for mobile
- Common Layout components (Authentication Pages, SideMenu, Header, Settings)
- Create React App + TypeScript
- Developed to work with localhost server just to test Redux+login

## Project structure
- [`src`](#src)
  - [`actions`](#assets)
  - [`api`](#api)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`config`](#config)
  - [`container`](#container)
  - [`reducers`](#reducers)
  - [`services`](#services)
  - [`store`](#store)
  - [`views`](#views)
  - [`app.tsx`](#apptsx)
  - [`index.tsx`](#indextsx)

### `src`
Source =)

### `actions`
Actions Types for interacting with the store
- `Types` Where I exported all the various dispatch actions that would be required throughout the application
- `Auth` Initiation of the various actions as regards Authentication. Just Login and Logout setup

### `api`
- This is where I did my axios configuration. Setup headers, and baseUrl

### `assets`
Images/Scss.

### `components`
Shared components folder.
- `Loader` It represents loading(spinloader animation) Most significant while waiting for API data.
- `Header` - header file
- `SideMenu` - side menu for the application. For navigation to various tabs
- ...

### `config`
BaseUrl for the api header

### `container`
House of the main page. The is the parent of the SideMenu, Header, and other pages. 
You have to be logged In to have access to this page.

### `reducers`
Reducers

### `services`
Data access layer/API calls.
- ES6 API calls classes.
- `auth.service` - Auth methods and API calls.

### `store`
App store. Persisited store, with thunk middleware.

### `views`
Various Pages in the application
- auth
   - `Login` Login to the platform
   - `Register` Register on the platform
   - `ForgotPassword` To reset password
- settings
   - `Edit Profile` Edit your personal profile
   - `Register` Register page
   - `ForgotPassword` ForgotPassword page
- `dashboard` Home page of the application

### `app.tsx`
Root app initialization file. Houses login, register, forgot password, and container

### `index.tsx`
Home where store is called. Houses app.tsx

## Build Setup
``` bash
# clone repo
git clone https://github.com/iamayoakinti/react.js-boiler-plate.git

# install dependencies
npm install

# serve with hot reload at localhost:3000
yarn start

# start local server to enable you login
yarn serve

# build for production with minification
yarn build
```

# Amazing repos where I found some great approaches:
- https://github.com/typescript-cheatsheets/react.git
- https://github.com/zmts/beauty-vuejs-boilerplate.git

# Amazing links that helped me understand React+TypeScript setup
- https://www.youtube.com/watch?v=I9jfsIRnySs
- https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
- https://levelup.gitconnected.com/persisting-your-react-application-state-with-redux-and-typescript-51e4e66c4e53

__!!! Project still in progress !!!__

_2021 ..._
