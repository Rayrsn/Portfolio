import React, { useRef } from 'react'

const GlowCard = ({card , children , index}) => {
    // MAKE THE GLOW FOR WHEN MOUSE IS MOVING 
    const cardRefs= useRef([]);
    const handleMouseMove=(index)=>(e)=>{
        const card= cardRefs.current[index];
        if(!card) return; 

        // GET THE MOUSE POSITION RELATIVE TO CARD
        const rect= card.getBoundingClientReact();
        const mouseX = e.clientX - rect.left - rect.width /2; 
        const mouseY = e.clientY- rect.top - rect.height /2;
        
        // CALCULATE THE ANGLE FROM THE CENTER OF THE CARD
        let andgle = Math.atan2(mouseY , mouseX)* (180/ Math.PI);

        andgle=(andgle+360)%360; // CONVERT TO 0-360 RANGE

        card.style.setProperty('--start',andgle+60 )

    }

  return (
    <div ref={(el)=>(cardRefs.current[index]=el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
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