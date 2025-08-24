import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from '../Api/omdbID'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [params, setParams] = useSearchParams()
  const initialQuery = params.get('q') || ''
  const initialPage = Number(params.get('page') || 1)

  const [query, setQuery] = useState(initialQuery)
  const [page, setPage] = useState(initialPage)
  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleSearch(q) {
    setQuery(q)
    setPage(1) // reset to first page when searching new query
  }

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  useEffect(() => {
    if (!query) {
      setMovies([])
      setTotal(0)
      return
    }

    setLoading(true)
    setError('')

    // update URL parameters
    setParams({ q: query, page })

    searchMovies(query, page)
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search)
          setTotal(Number(data.totalResults))
        } else {
          setMovies([])
          setTotal(0)
          setError(data.Error || 'No movies found')
        }
      })
      .catch(() => {
        setError('Something went wrong. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query, page, setParams])

  return (
    <div className="container mx-auto px-4 py-6">
      <SearchBar onSearch={handleSearch} initialValue={query} />

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && movies.length > 0 && (
        <>
          <MovieGrid movies={movies} />
          <Pagination
            currentPage={page}
            totalItems={total}
            itemsPerPage={10}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}
