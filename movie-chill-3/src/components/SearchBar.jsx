import React from 'react'

export default function SearchBar({ query, onQueryChange, onSubmit, loading }) {
  function handleKey(e) {
    if (e.key === 'Enter') onSubmit()
  }
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        value={query}
        onChange={e => onQueryChange(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Search movies (e.g., Inception)"
        className="flex-1 h-11 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Search movies"
      />
      <button
        onClick={onSubmit}
        disabled={loading}
        className="h-11 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
      >
        {loading ? 'Searching…' : 'Search'}
      </button>
    </div>
  )
}
