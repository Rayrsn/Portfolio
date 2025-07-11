import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle' />
            <p className='text'> {text} </p>
        </div>
        <div className='arrow-wrapper'>
            <img src="/image/arrow-down.svg" alt="arrow-down" />
        </div>
    </a>
  )
}

export default Button