import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Pagination from "./components/Pagination.jsx";
import { searchMovies, getMovieById } from "./services/omdb.js";
import SortFilterBar from "./components/SoftFilterBar.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import logo from "./logo/logo.png";

const POSTER_FALLBACK = "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"

export default function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)
  const [sortBy, setSortBy] = useState('relevance') // relevance | year_asc | year_desc | title_asc | title_desc
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const [yearFilter, setYearFilter] = useState('')
  const [isDark, setIsDark] = useLocalStorage('prefers-dark', false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDark])

  async function handleSearch(q, p = 1) {
    if (!q?.trim()) {
      setError('')
      setResults([])
      setTotalResults(0)
      setPage(1)
      return
    }
    setLoading(true)
    setError('')
    try {
      const { Search = [], totalResults = 0 } = await searchMovies(q, p)
      setResults(Search)
      setTotalResults(Number(totalResults) || 0)
      setPage(p)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
      setResults([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }

  const filteredSorted = useMemo(() => {
    let arr = [...results]
    if (yearFilter) {
      arr = arr.filter(m => m.Year?.includes(yearFilter))
    }
    switch (sortBy) {
      case 'year_asc':
        arr.sort((a,b) => (a.Year||'').localeCompare(b.Year||''))
        break
      case 'year_desc':
        arr.sort((a,b) => (b.Year||'').localeCompare(a.Year||''))
        break
      case 'title_asc':
        arr.sort((a,b) => (a.Title||'').localeCompare(b.Title||''))
        break
      case 'title_desc':
        arr.sort((a,b) => (b.Title||'').localeCompare(a.Title||''))
        break
      default:
        // relevance -> leave as-is
        break
    }
    return arr
  }, [results, sortBy, yearFilter])

  function toggleFavorite(movie) {
    if (!movie?.imdbID) return
    setFavorites(prev => {
      const exists = prev.some(m => m.imdbID === movie.imdbID)
      if (exists) return prev.filter(m => m.imdbID !== movie.imdbID)
      return [{ Title: movie.Title, Year: movie.Year, Poster: movie.Poster, imdbID: movie.imdbID }, ...prev].slice(0, 100)
    })
  }

  function isFavorite(imdbID) {
    return favorites.some(m => m.imdbID === imdbID)
  }

  async function openDetails(imdbID) {
    setLoading(true)
    setError('')
    try {
      const detail = await getMovieById(imdbID)
      setSelected(detail)
    } catch (err) {
      setError(err.message || 'Failed to load details.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-400">
      <header className="sticky top-0 z-10 backdrop-blur bg-slate-600/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3"><img className="h-full max-w-11"src={logo} alt=""/>
          <h1 className="text-xl sm:text-2xl font-semibold text-white">Movie Chill</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(d => !d)}
              className="px-3 py-1.5 rounded-md text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
              title="Toggle light/dark"
            >
              {isDark ? '🌙 Dark' : '☀️ Light'}
            </button>
            <a
              href="https://www.omdbapi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm"
            >
              OMDb API
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSubmit={() => handleSearch(query, 1)}
          loading={loading}
        />

        <SortFilterBar
          sortBy={sortBy}
          onSortBy={setSortBy}
          yearFilter={yearFilter}
          onYearFilter={setYearFilter}
        />

        {error && (
          <div className="p-3 rounded-md bg-red-50 text-red-800 border border-red-200">
            {error}
          </div>
        )}

        {/* Favorites */}
        {favorites.length > 0 && (
          <section aria-label="Favorites" className="space-y-2">
            <h2 className="text-lg font-semibold">⭐ Favorites</h2>
            <div className="flex gap-3 overflow-x-auto py-2">
              {favorites.map(m => (
                <button key={m.imdbID} onClick={() => openDetails(m.imdbID)} className="flex-shrink-0 w-28 focus:outline-none">
                  <img
                    className="w-28 h-40 object-cover rounded shadow-soft border border-gray-200 dark:border-gray-800"
                    src={m.Poster && m.Poster !== 'N/A' ? m.Poster : POSTER_FALLBACK}
                    alt={m.Title}
                    loading="lazy"
                  />
                  <div className="mt-1 text-xs line-clamp-2">{m.Title}</div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Results grid */}
        <section aria-live="polite" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Results</h2>
            {totalResults > 0 && (
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {totalResults.toLocaleString()} found
              </div>
            )}
          </div>

          {loading && <div className="text-sm">Loading…</div>}

          {!loading && filteredSorted.length === 0 && query && !error && (
            <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm">
              No results for “{query}”. Try another title or check spelling.
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSorted.map(movie => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onClick={() => openDetails(movie.imdbID)}
                onToggleFavorite={() => toggleFavorite(movie)}
                isFavorite={isFavorite(movie.imdbID)}
              />
            ))}
          </div>

          {totalResults > 10 && (
            <Pagination
              page={page}
              total={totalResults}
              pageSize={10}
              onPageChange={(p) => handleSearch(query, p)}
            />
          )}
        </section>
      </main>

      {/* Details modal */}
      {selected && (
        <MovieDetails
          movie={selected}
          onClose={() => setSelected(null)}
          onToggleFavorite={() => toggleFavorite(selected)}
          isFavorite={isFavorite(selected.imdbID)}
        />
      )}

      <footer className="py-10 text-center text-xs text-white">
        Movie Chill © 2025.
      </footer>
    </div>
  )
}
