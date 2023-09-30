import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='navbar'>
        <a className='nav-item'>Astros</a>
        <div>
            <a className='nav-item'>Players</a>
            <a className='nav-item'>Schedule</a>
            <a className='nav-item'>Standings</a>
            <a className='nav-item'>Contact</a>
        </div>
    </div>
  )
}

export default Header