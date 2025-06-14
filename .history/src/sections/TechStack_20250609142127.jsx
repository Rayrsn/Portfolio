import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants/index.js'
import { div } from 'three/tsl'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding '>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader
            title="My Prefferred Tech Stack"
            sub="🤝 The Skills I Bring to the table"
            />
            {/* 3D-MODEL */}
            
            <div className='tech-grid'>
                {techStackIcons.map((icon)=>(
                    <div key={icon.name}>
                        {icon.name}
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default TechStack