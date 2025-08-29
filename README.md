FE Capstone Project: Movie Database
Project Overview:
As a frontend developer, your goal is to design and implement a Movie Database application using HTML, CSS, JavaScript, and React (with optional Tailwind CSS). The application will allow users to search for movies and view detailed information about them, using a public movie API.

This project will help you practice integrating external APIs, handling user input, managing state in a dynamic application, and creating a visually appealing and responsive user interface. The project will simulate a real-world development environment, providing valuable experience in frontend web development and deployment.

Functional Requirements:
Fetch Movie Data:

Use a public movie API like the OMDB API to fetch movie data based on user search queries.
Display a list of movies matching the search criteria, showing key information such as:
Movie Poster: A thumbnail image of the movie poster.
Title: The title of the movie.
Release Date: The year the movie was released.
Movie Details View:

When a user clicks on a movie from the list, display a detailed view with additional information, including:
Plot Summary: A brief description of the movie plot.
Cast: Main actors and their roles.
Ratings: Ratings from different sources (e.g., IMDB, Rotten Tomatoes).
Genre: Categories the movie belongs to (e.g., Action, Drama, Comedy).
Search Functionality:

Implement a search bar that allows users to type in a movie name and retrieve relevant search results.
Handle cases where no movies match the search query by displaying a user-friendly message.
Responsive UI Design:

Use Tailwind CSS to design a responsive layout that adapts to different screen sizes (e.g., desktop, tablet, mobile).
Ensure that the movie list and details view are easy to navigate on all devices.
Error Handling:

Implement error handling for scenarios such as network issues, invalid API responses, or no search results.
Display clear error messages to the user when necessary.
Technical Requirements:
Project Setup:

Set up a React project using tools like vite or configure a custom setup.
Install and configure Tailwind CSS for styling, or use another CSS framework if preferred.
API Integration:

Sign up for an API key on OMDB or another movie service.
Use fetch or axios to request data from the movie API and handle asynchronous data fetching.
Display the fetched movie data in a structured and visually appealing format.
User Interface Components:

Create reusable components for the movie list and movie details, such as SearchBar, MovieCard, and MovieDetails.
Design a cohesive layout using Tailwind CSS, ensuring consistency in colors, typography, and spacing.
State Management:

Use React’s state management hooks (useState and useEffect) to handle data fetching, user input, and UI updates.
Optionally, explore more advanced state management tools like Zustand, Redux or mobx-state-tree if the application grows in complexity.
Deployment:

Deploy the completed application on a free hosting platform like Netlify or Vercel.
Ensure the application is accessible and performs well in the deployed environment.
Share the deployment link as part of your project submission.
Stretch Goals (Optional):
Favorites List:

Implement a feature that allows users to add movies to a personal favorites list, stored in local storage.
Pagination for Search Results:

Implement pagination for search results to handle large datasets efficiently, allowing users to navigate through multiple pages of movies.
Sorting and Filtering:

Add sorting options for search results (e.g., by release date, ratings) and filtering by genre or year.
Movie Trailers:

Include a section in the movie details view to display a trailer from YouTube or another video source.
Theme Customization:

Implement light/dark mode functionality to enhance the user experience based on their preferences.
Internationalization:

Add support for multiple languages, allowing users to view movie information in their preferred language.
