import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <p>No movie selected.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-md mb-4"/>
      <p className="text-gray-700 mb-2">{movie.Plot}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Ratings:</strong></p>
      <ul>
        {movie.Ratings && movie.Ratings.map((rating, index) => (
          <li key={index}><strong>{rating.Source}:</strong> {rating.Value}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;