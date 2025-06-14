import React from 'react'

const NavBar = () => {
  return (
    <header className='navbar'>
        <div className='inner'>
            <a className='logo' href="#hero"> 
                Mohammadreza | MZ     
            </a>

            <nav className='desktop'>


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