import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants/index.js'
import { div } from 'three/tsl'
import TechIcon from '../components/models/techLogo/TechIcon.jsx'

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
                    <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        {/* ANIMATE THE BACKGRAOUND OF CARD BOX OF 3D MODEL */}
                        <div className='tech-card-animated-bg' />
                        {/* CONTENT OF 3D MODEL BOX */}
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <TechIcon model={icon} /> 
                            </div>
                            {/* TEXT OF THE 3D BOX  */}
                            <div className='padding-x w-full'>
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default TechStack