import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-left">
            <Link to="/" className='navbar-brand'>Career Hub</Link>
        </div>
        <div className="navbar-right">
            <Link to = "/jobs" className='navbar-link'> Find Jobs </Link>
            <Link to = "/aboutus" className='navbar-link'> About us </Link>
            <Link to = "/login" className='navbar-link'> Login </Link>
            <Link to = "/signup" className='navbar-link'> Signup </Link>
        </div>
    </nav>
  )
}

export default Navbar
