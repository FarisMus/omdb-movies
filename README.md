# The Open Movie Database Search

This is project for React App to show the List of Movies fetched from The Open Movie Database API (http://www.omdbapi.com/)

## Downloading The App

You could either clone the project from the Git repository or download the project as plain directory.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Using The App

### Dashboard Page

The dashboard would display a search input component for searching movie by keyword.

![Alt text](readmeAssets/1.%20plain%20dashboard.png "dashboard")

### Searching by Keyword

When you are making input into in search input field, there would be auto suggestion for possible movie options.

![Alt text](readmeAssets/2.%20suggestion.png "autosuggest")

### Displaying Movie List by Search Keyword

If you press enter on the search input field, the search process would begin and the result would be displayed below the search input.

![Alt text](readmeAssets/3.%20movie%20list.png "movielist")

### Zooming on Movie Poster

The movie avatar is clickable and could be zoomed as a modal popup.

![Alt text](readmeAssets/4.%20poster%20modal.png "poster")

### Infinite Scrolling Behaviour

Initial fetch is for 10 items. If the result is longer than 10, scrolling to the bottom would load more result. Every load would add 10 results to the list.

![Alt text](readmeAssets/5.%20infinitescroll.gif "infinitescroll")

### Navigating to Detail Page

You could see more detail about each movie by either clicking on the title in search input auto suggest or by clicking on title in movie list.

![Alt text](readmeAssets/6.%20detail%20page.png "detailpage")

