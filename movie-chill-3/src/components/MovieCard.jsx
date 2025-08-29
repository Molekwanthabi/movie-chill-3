import React from 'react'

const POSTER_FALLBACK = "tps://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"

export default function MovieCard({ movie, onClick, onToggleFavorite, isFavorite }) {
  const { Title, Year, Poster } = movie
  return (
    <article className="group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-slate-700 dark:bg-gray-800 shadow-soft text-white">
      <button onClick={onClick} className="w-full text-left">
        <img
          src={Poster && Poster !== 'N/A' ? Poster : POSTER_FALLBACK}
          alt={Title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:underline">
            {Title}
          </h3>
          <p className="text-xs text-white">{Year}</p>
        </div>
      </button>
      <div className="px-3 pb-3">
        <button
          onClick={onToggleFavorite}
          className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-purple-600 dark:hover:bg-gray-700"
          aria-pressed={isFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '★ Remove Favorite' : '☆ Add Favorite'}
        </button>
      </div>
    </article>
  )
}
