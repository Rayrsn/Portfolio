import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a className={`${className ?? ''} cta-wapper`} >
        <div className='cta-button group'>
            <div className='bg-circle' />
            <p className='text'> {text} </p>
        </div>
        <div className='arrow-warpper'>
            <img src="/image/arrow.svg" alt="arrow-down" />
        </div>
    </a>
  )
}

export default Button