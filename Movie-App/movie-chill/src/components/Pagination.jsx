export default function Pagination({ page, totalResults, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(Number(totalResults || 0) / 10))
  const canPrev = page > 1
  const canNext = page < totalPages

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => canPrev && onPageChange(page - 1)}
        disabled={!canPrev}
        className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-40"
      >Prev</button>
      <span className="text-sm opacity-80">Page {page} of {totalPages}</span>
      <button
        onClick={() => canNext && onPageChange(page + 1)}
        disabled={!canNext}
        className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-40"
      >Next</button>
    </div>
  )
}