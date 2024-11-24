# Assignment 1 - ReactJS App

**Name:** Matteo Mary

## Overview
This repository contains a movie fan application built with ReactJS. The app allows users to explore movies, view movie details, manage a list of favorite movies, and interact with additional features like user authentication and dark/light mode themes. It integrates The Movie Database (TMDB) API for dynamic movie data and incorporates third-party authentication using Firebase.

## Features
- **Dark/Light Mode Toggle**: Allows users to switch between dark and light themes.
- **Authentication**: Users can sign up, log in, and log out using Firebase authentication.
- **Actors Page**: Displays a list of actors fetched dynamically from TMDB.
- **Actor Details**: Browse and view information about actors and their movie appearances.
- **Responsive Design**: The app is mobile-friendly and adjusts to different screen sizes.
- **Login/Signup/Logout**: Provides user authentication flows for login, signup, and logout.

## Setup Requirements

1. Install Firebase:
    ```bash
    $ npm install --save firebase
    ```

2. Ensure you have the `.env` file set up to include your Firebase credentials and API keys.

3. Run the app:
    ```bash
    $ npm start
    ```

## API Endpoints

- **Actors**: `/movie/actors` - Displays a list of actors fetched from TMDB.
- **Actor Details**: `/actors/:id` - Get information about a specific actor and their movie appearances.

## Routing

- **/actors**: Displays all actors.
- **/actors/:id**: Displays details about a specific actor.
- **/signup**: User sign-up page for creating an account.
- **/login**: User login page for authenticating an existing account.

### Protected Routes:
- The **/signup** and **/login** routes are only accessible when users are not logged in.

## Independent Learning

- **Firebase Authentication**: I used Firebase to create login and signup functionality for the app. No attempts were made to save user input permanently.
  
- **Dark/Light Mode Toggle**: Implemented the dark/light mode toggle using the React Context API to manage the theme state globally across the app.

---

Feel free to customize the above structure based on your specific requirements or additional features you may have added.
