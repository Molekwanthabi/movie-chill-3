import { useEffect, useState } from 'react'

const KEY = 'movie_favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggle(item) {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.imdbID === item.imdbID)
      if (exists) return prev.filter((f) => f.imdbID !== item.imdbID)
      return [...prev, item]
    })
  }

  return { favorites, toggle }
}