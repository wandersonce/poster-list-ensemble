# Poster Finder App
### Introduction
Poster Finder is a web application that allows users to search for movie posters using the OMDB API. The app is built using TypeScript and React, and features a clean and user-friendly interface.

### Features
- Real-time search: As you type in the search bar, the app automatically fetches and displays the corresponding movie posters.
- Debounced callback: The app uses a debounced callback function to ensure that the search API is not called too frequently, which helps to improve performance and reduce the number of API requests.
- Loading state: The app displays a loading state while fetching data from the API, providing feedback to the user and improving the overall user experience.

### Usage
To use the app, simply enter the name of the movie you want to find in the search bar. The app will automatically fetch and display the corresponding movie posters as you type. If there are no results for your search, the app will display a message indicating that no posters were found.

Technical Details
The app is built using TypeScript and NextJs, and uses the `useEffect` and `useState` hooks to manage state and side effects. The app also uses the `useDebouncedCallback` hook from the `use-debounce` library to debounce the search input.

The app fetches data from the OMDB API using the `getPosterInfo` function, which is defined in the `lib/omdb` module. The function takes a search query as input and returns a promise that resolves to an array of poster details objects.

The app displays the search results using the PosterCards component, which is defined in the components/PosterCards module. The component takes an array of poster details objects as input and displays them.

## Getting Started with Poster Finder
To get started with Poster Finder, follow these steps:

1. Clone the repository:
First, you'll need to clone the Poster Finder repository to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com//wandersonce/poster-list-ensemble.git
```

2. Install Node.js and npm:
Poster Finder is built using Node.js and npm, so you'll need to have these installed on your machine. You can download Node.js and npm from the official website: https://nodejs.org/en/

3. Install the dependencies:
Once you have Node.js and npm installed, navigate to the Poster Finder directory in your terminal and run the following command to install the dependencies:

```bash
npm install
```
This will install all the required packages, including TypeScript, React, and the `use-debounce` library.

4. Set up the environment variables:
Poster Finder uses the OMDB API to fetch movie poster data, which requires an API key. To use the API, you'll need to obtain an API key by registering on the OMDB website: https://www.omdbapi.com/apikey.aspx

Once you have obtained an API key, create a .env(for this case I have pushed to the project root) file in the root directory of the Poster Finder project and add the following line, replacing your-api-key with your actual API key:

```bash
NEXT_PUBLIC_OMDB_API_KEY=your-api-key
```

5. Start the development server:
To start the development server, run the following command in your terminal:

```bash
npm run dev
```
This will start the development server and open the Poster Finder app in your default web browser.


