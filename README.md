# Welcome to  Would You Rather!

React & Redux Project — Udacity React Developer Nanodegree

This is the second project of the React Developer Nanodegree


# Project Review:

'Would You Rather' is a quiz based game which allows user to login, post questions and also vote on questions posted by other users. The project emphasizes using React & Redux to build the application. Redux store is used to persist information as we interact with the application.

## How to Load the App

You can use  `npm`  or  `yarn`  package manager to install dependencies.

### [](https://github.com/planetpratik/Would-You-Rather/blob/b552ce456d81402512f14c06d889667a576a88e4/README.md#npm-install-or-yarn-install)`npm install`  or  `yarn install`

Once all of the dependencies have been installed you can launch the development server with

`npm start`  or  `yarn start`

A new browser window should automatically open displaying the app. 

### How to Use the App
### Login & Logout

Login page is the entry page for the app. User will be redirected to home path only after successful authentication. If user manually input the desired path, he/she will be asked to authenticate before redirecting it to desired path. If user is logged in, Logout button is displayed at the top-right corner which provides user ability to log out from the app and gets redirected to login screen.
### Navigation Bar

As the app is designed to run on mobile devices as well as desktop browsers, the horizontal menu items will be shrinked into Dropdown menu while using app on mobile browsers. When the user is logged in, avatar as well as welcome message is shown on the right side of the navigation bar.

### Home Screen

Home screen is available at  `/`  path. It displays feed of answered and unanswered questions. They are categorised in "Answered" and "Unanswered" tabs. They are arranged in decreasing order of their timestamp.
### Poll View

Poll Screen is available at  `/questions/:question_id`  path. It provides user ability to vote on poll ( only if Unanswered by user ) otherwise it shows the poll details page with vote percentage for each option.
### New Question

This form provides user ability to create new poll. It is available at  `/add`  path.
### Leaderboard

Leaderboard screen is available at  `/leaderboard`  path. It shows informational cards of all users arranged in the descending order of their score. The individual score is calculated as sum of total questions answered and total questions asked by user.

