import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton.jsx'

export default function MovieCard({ movie }) {
  const { Title, Year, Poster,omdbID, Type } = movie
  const isMissing = !Poster || Poster === 'N/A'

  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/movie/${omdbID}`} className="block">
        <div className="aspect-[2/3] w-full overflow-hidden">
          {isMissing ? (
            <div className="w-full h-full grid place-items-center text-sm opacity-70" data-fallback>
              No Poster
            </div>
          ) : (
            <img src={Poster} alt={`${Title} poster`} className="w-full h-full object-cover" loading="lazy" />
          )}
        </div>
      </Link>
      <div className="p-3 flex items-start gap-3">
        <div className="flex-1">
          <Link to={`/movie/${omdbID}`} className="font-semibold group-hover:underline line-clamp-2">
            {Title}
          </Link>
          <div className="text-xs mt-1 opacity-70">{Year} • {Type}</div>
        </div>
        <FavoriteButton omdbID={omdbID} title={Title} year={Year} />
      </div>
    </div>
  )
}