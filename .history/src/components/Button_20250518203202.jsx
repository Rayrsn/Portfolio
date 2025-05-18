import React from 'react'

const Button = () => {
  return (
    <a className='cta-wrapper'>
        <div className='cta-group group'>
            <div className='bg-circle' />
            <p className='text'> See my Work</p>
        </div>
        <div className='arrow-warpper'>
            <img src="/image/arrow-down" alt="arrow-down" />
        </div>
    </a>
  )
}

export default Button