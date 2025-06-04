import React, { useState,useEffect } from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
    const [scrolled, setScrolled] =useState(false);
    
    useEffect()
  return (
    <header className='navbar'>
        <div className='inner'>
            <a className='logo' href="#hero"> 
                Mohammadreza | MZ     
            </a>

            <nav className='desktop'>
                <ul>
                {navLinks.map(({link, name})=>(
                    <li key={name} className='group'>
                        <a href={link}>
                            <span>{name}</span>
                            <span className='underline'/>
                        </a>
                    </li>
                ))}
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