import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a 
    // make the  linke fore counter 
    onClick={(e)=> {
      e.preventDefault();

      const target=getElementById('counter');

      if(target && id){
        const offset = window.innerHeight * 0.15;

        const top = target.getBoundingClientReact().top + window.scrollY- offset;
      }
    }}
    
      className={`${className ?? ''} cta-wrapper`}>
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