import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './pages/SearchBar'
import MovieDetails from './pages/MovieDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <MovieDetails/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
