import React, { useRef } from 'react'

const GlowCard = ({card , children}) => {
    // MAKE THE GLOW FOR WHEN MOUSE IS MOVING 
    const cardRefs= useRef([]);
    const handleMouseMove=(index)=>(e)=>{
        const card= cardRefs.current[index];
        if(card) return; 
    }

  return (
    <div ref={(el)=>(cardRefs.current[index]=el)} className='card card-border timeline-card rounded-xl p-10'>
        <div className='glow'/>
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({length:5 }, (_,index)=>(
                <img src="/image/star.png" alt="star" key={index}  className='size-5'/>
            ))}
        </div>

        <div className='mb-5'>
            <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
            {children}
    </div>
  )
}

export default GlowCard