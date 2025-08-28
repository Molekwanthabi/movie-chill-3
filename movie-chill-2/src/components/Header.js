import React from 'react'
import logo from '../logo/logo.png';

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-600 text-white flex items-center justify-center"><img className="h-full w-[5%]"src={logo} alt=""/>
      <h1 className="font-bold">Movie Chill 2</h1>
    </div>
  )
}

export default Header
