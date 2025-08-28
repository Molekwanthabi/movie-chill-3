import React from 'react';

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-300"
      onClick={() => onSelect(movie)}
    >
      <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="text-lg font-semibold">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
