
import React from 'react'

export default function SortFilterBar({ sortBy, onSortBy, yearFilter, onYearFilter }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
      <label className="text-sm flex items-center gap-2">
        <span className="whitespace-nowrap">Sort by</span>
        <select
          value={sortBy}
          onChange={e => onSortBy(e.target.value)}
          className="h-10 px-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="relevance">Relevance</option>
          <option value="year_asc">Year ↑</option>
          <option value="year_desc">Year ↓</option>
          <option value="title_asc">Title A→Z</option>
          <option value="title_desc">Title Z→A</option>
        </select>
      </label>
      <label className="text-sm flex items-center gap-2">
        <span>Year</span>
        <input
          value={yearFilter}
          onChange={e => onYearFilter(e.target.value)}
          placeholder="e.g., 1999"
          className="h-10 px-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-36"
        />
      </label>
    </div>
  )
}
