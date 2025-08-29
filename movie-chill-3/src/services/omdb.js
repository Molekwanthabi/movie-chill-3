
const API_BASE = 'https://www.omdbapi.com/'

function getKey() {
  const key = import.meta.env.VITE_OMDB_API_KEY
  if (!key) {
    throw new Error('Missing OMDb API key. Set VITE_OMDB_API_KEY in your .env file.')
  }
  return key
}

export async function searchMovies(query, page = 1) {
  const url = `${API_BASE}?apikey=${getKey()}&type=movie&s=${encodeURIComponent(query)}&page=${page}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Network error: ${res.status}`)
  const data = await res.json()
  if (data.Response === 'False') {
    if (data.Error === 'Movie not found!') return { Search: [], totalResults: 0 }
    throw new Error(data.Error || 'Unknown OMDb error.')
  }
  return data
}

export async function getMovieById(imdbID) {
  const url = `${API_BASE}?apikey=${getKey()}&i=${encodeURIComponent(imdbID)}&plot=full`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Network error: ${res.status}`)
  const data = await res.json()
  if (data.Response === 'False') throw new Error(data.Error || 'Unknown OMDb error.')
  return data
}
