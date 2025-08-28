import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Movie Database!</h1>
      <p>Explore a vast collection of movies and discover your favorites.</p>

      {/* Example: Button to navigate to a "Movies" page */}
      <Link to="/movies">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          View Movies
        </button>
      </Link>
    </div>
  );
};

export default Home;