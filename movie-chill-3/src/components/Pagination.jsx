import React from 'react'

export default function Pagination({ page, total, pageSize = 10, onPageChange }) {
  const totalPages = Math.ceil((total || 0) / pageSize)
  if (totalPages <= 1) return null

  const canPrev = page > 1
  const canNext = page < totalPages

  function go(n) {
    if (n < 1 || n > totalPages) return
    onPageChange(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  
  const pages = []
  const windowSize = 2
  const start = Math.max(1, page - windowSize)
  const end = Math.min(totalPages, page + windowSize)
  if (start > 1) pages.push(1, '…')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < totalPages) pages.push('…', totalPages)

  return (
    <nav className="flex items-center justify-center gap-2 mt-4" aria-label="Pagination">
      <button
        onClick={() => go(page - 1)}
        disabled={!canPrev}
        className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
      >Prev</button>
      {pages.map((p, idx) => p === '…' ? (
        <span key={idx} className="px-2 select-none">…</span>
      ) : (
        <button
          key={p}
          onClick={() => go(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`px-3 py-1.5 rounded border ${p === page ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 dark:border-gray-700'}`}
        >{p}</button>
      ))}
      <button
        onClick={() => go(page + 1)}
        disabled={!canNext}
        className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
      >Next</button>
    </nav>
  )
}
