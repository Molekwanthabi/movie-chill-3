
import React, { useMemo } from 'react'

function youtubeEmbedFromTitle(title) {
  const q = encodeURIComponent(`${title} trailer`)
  // YouTube search-based embed playlist
  return `https://www.youtube.com/embed?listType=search&list=${q}`
}

export default function MovieDetails({ movie, onClose, onToggleFavorite, isFavorite }) {
  const {
    Title, Year, Poster, Genre, Plot, Actors, Director, Writer, Ratings, Runtime, Rated, imdbRating
  } = movie

  const ratingsText = useMemo(() => {
    if (!Ratings || !Array.isArray(Ratings)) return 'N/A'
    return Ratings.map(r => `${r.Source}: ${r.Value}`).join(' • ')
  }, [Ratings])

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true"></div>
      <article className="relative max-w-4xl w-[95%] md:w-[80%] bg-slate-400 dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft border border-gray-200 dark:border-gray-800">
        <header className="flex items-start gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
          <img
            src={Poster && Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x445?text=No+Poster'}
            alt={Title}
            className="w-28 h-40 object-cover rounded bg-slate-300"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{Title} <span className="text-gray-500">({Year})</span></h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{Genre} • {Runtime} • Rated {Rated} • IMDb {imdbRating}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={onClose} className="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-700">Close</button>
              <button onClick={onToggleFavorite} className="px-3 py-1.5 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">
                {isFavorite ? '★ Remove Favorite' : '☆ Add Favorite'}
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <section>
            <h3 className="font-semibold">Plot</h3>
            <p className="text-sm mt-1 leading-6 text-white">{Plot}</p>
            <div className="mt-3 text-sm">
              <div><span className="font-medium">Actors:</span> {Actors}</div>
              {Director && <div><span className="font-medium">Director:</span> {Director}</div>}
              {Writer && <div><span className="font-medium">Writer:</span> {Writer}</div>}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Ratings:</span> {ratingsText}
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Trailer</h3>
            <div className="aspect-video w-full rounded overflow-hidden border border-gray-200 dark:border-gray-800">
              <iframe
                title={`${Title} trailer`}
                className="w-full h-full"
                src={youtubeEmbedFromTitle(Title)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
