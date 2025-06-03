import React from 'react'
import { div } from 'three/tsl'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-5-cols'>
          {/* FOR TITLE OF WORKING AND EXPERIENCE */}
          {counterItems.map((item)=>(
            <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
              0 {item.suffix}
            </div>
          ))}
        </div>
    </div>
  )
}

export default AnimatedCounter