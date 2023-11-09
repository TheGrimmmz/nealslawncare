import React from 'react'
import image from '../../images/FullLogo_Transparent.png'
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <div className='navbar-container'>
        <nav className='navbar'>
          <img src={image} alt="logo"/>
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/about">Policy</NavLink>
          <NavLink to='/services'>Services</NavLink>
        </nav>
        <Outlet/>
      </div>
    )
}

export default Navbar
