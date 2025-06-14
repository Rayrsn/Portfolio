import React from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header className='navbar'>
        <div className='inner'>
            <a className='logo' href="#hero"> 
                Mohammadreza | MZ     
            </a>

            <nav className='desktop'>
                <ul>
                {navLinks}
                </ul>
            </nav>

            <a href="#" className='contact-btn group'>
                <div className='inner'>
                    <span className='font-medium'> Download my CV</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar