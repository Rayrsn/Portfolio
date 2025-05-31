import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      // FROM
      {
        y:50,
        opacity0
      },
      // TO
    {
      y:0, 
      stagger: 0.2,
      duration: 1,
      ease:'power2.inOut'
    }
  )
  })
  return (
     <section id="hero " className='relative overflow-hidden'>
      {/* BACKGROUND IMAGE FOR RIGHT SIDE OF HERO  */}
        <div className='absolute top-0 left-0 z-10'>
            <img src="/image/bgbg.png" alt="back ground img" />
        </div>
        
        <div className='hero-layout '>
            {/*LEFT: HERO CONTENT*/}

            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
              {/* H1 HERO SECTION    */}

        <div className='flex flex-col gap-7'>
          <div className='hero-text'>
            <h1>Shapping

              {/* MAKE THE ICON AND TEXT FOR DESIGN & CONCEPT & DESIGN & CODE   */}

              <span className='slide'>
                <span className='wrapper'>
                  {words.map((word)=>
                  <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                    <img src={word.imgPath} 
                    alt= {word.text}
                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                    <span> {word.text} </span>
                  </span> )}
                </span>
              </span>

              </h1>
            <h1>Into Real Projects</h1>
            <h1>That Deliver Results</h1>
          </div>
          <p className='text-white-50 md:text-xl relative z-10'> 
            Hi , I'm Mohammadreza Zariffard, a developer based in Fagamusta with a passion for code.  
            </p>
            <Button 
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See my Work"
            />
        </div>

            </header>

            {/*RIGHT : 3D MODEL */ } 
            <figure>
              <div className='hero-3d-layout'>
                <HeroExperience />
              </div>
            </figure>
        </div>
     </section>
  )
}

export default Hero