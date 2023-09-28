import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/hamburgerlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftSide'>
                <img src={logo}/>
        </div>
        <div className='rightSide'>
            <Link to="/" >Home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

        </div>
    </div>
  )
}

export default Navbar