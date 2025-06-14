import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants/index.js'
import { div } from 'three/tsl'
import TechIcon from '../components/models/techLogo/TechIcon.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'

const TechStack = () => {
    useGSAP(()=> {
        gsap.fromTo('.tech-card',{y:50, opacity:0 },
            {
                y:0 , 
                opacity:1, 
                duration:1 , 
                ease: 'power2.inOut',
                stagger: 0.2 ,
                scrollTrigger:{
                    trigger: '#skills',
                    start: 'top center',
                    end: 'top center'
                }
            }

        )
    })
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