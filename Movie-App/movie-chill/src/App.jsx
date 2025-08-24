import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.'
import Details from './pages/Details'
import DarkModeToggle from './components/DarkModeToggle'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <header className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <NavLink to="/" className="text-xl font-bold tracking-tight">
            🎬 MovieDB
          </NavLink>
          <nav className="ml-auto flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm ${isActive ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}`
              }
            >
              Home
            </NavLink>
            <DarkModeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<Details />} />
        </Routes>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm opacity-70">
          Built with React + Tailwind • OMDb API
        </div>
      </footer>
    </div>
  )
}
