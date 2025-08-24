import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button onClick={() => setDark((d) => !d)} className="text-sm rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700">
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}

export function isDarkMode() {
  return document.documentElement.classList.contains('dark')
}