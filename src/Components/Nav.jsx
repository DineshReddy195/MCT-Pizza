import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <div className='menu'>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/items' className='link'>Pages</NavLink>
        <NavLink to='/menu' className='link'>Menu</NavLink>
        <NavLink to='/events' className='link'>Events</NavLink>
        <NavLink to='/blog' className='link'>Blog</NavLink>
        <NavLink to='/landing-page' className='link'>Landing</NavLink>
        <button id='online'>ORDER ONLINE</button>
      </div>
    </div>
  )
}

export default Nav
