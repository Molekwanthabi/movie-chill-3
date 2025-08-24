import { useFavorites } from '../hooks/useFavorites.js'

export default function FavoriteButton({ omdbID, title, year }) {
  const { favorites, toggle } = useFavorites()
  const isFav = favorites.some((f) => f.omdbID === omdbID)

  return (
    <button
      onClick={() => toggle({ omdbID, title, year })}
      aria-pressed={isFav}
      className={`text-xs px-2 py-1 rounded-lg border ${isFav ? 'bg-yellow-300/30 border-yellow-400' : 'border-gray-300 dark:border-gray-700'}`}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >{isFav ? '★' : '☆'}</button>
  )
}