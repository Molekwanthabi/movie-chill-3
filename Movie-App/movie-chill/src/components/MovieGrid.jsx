import React from 'react'
import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ movies = [] }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.omdbID} movie={movie} />
      ))}
    </div>
  )
}