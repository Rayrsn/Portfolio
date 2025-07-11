import React from 'react'

const GlowCard = ({card , childrent}) => {
  return (
    <div className='card card-border timeline-card rounded-xl p-10'>
        <div className='glow'/>
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({length:5 }, (_,index)=>(
                <img src="/image/star.png" alt="star"  className='size-5'/>
            ))}
        </div>

        <div className='mb-5'>
            <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
            {childrent}
    </div>
  )
}

export default GlowCard