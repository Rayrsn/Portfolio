import React from 'react'

const Button = (text, className, id) => {
  return (
    <a className={`${className ?? ''} cta-wapper`} >
        <div className='cta-group group'>
            <div className='bg-circle' />
            <p className='text'> See my Work</p>
        </div>
        <div className='arrow-warpper'>
            <img src="/image/arrow-down.svg" alt="arrow-down" />
        </div>
    </a>
  )
}

export default Button