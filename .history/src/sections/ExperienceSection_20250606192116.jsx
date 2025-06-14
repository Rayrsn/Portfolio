import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(()=>{
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, 
        {
        xPercent:-100 ,
        opacity:0,
        transformOrigin:'left left',
        duration: 1 ,
        ease: 'power2.inOut',
        scrollTrigger:{
          trigger: card, 
          start: 'top 80%',
        }
      });
    });

  }, []);
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader title="Professional Work Experience " sub="🗃️My Career Overview" />

            {/* EXPERIENCE CARDS */}
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                  {expCards.map((card , index )=>(
                    <div key={card.title} className='exp-card-wrapper'>
                      <div className='xl:w-2/6'>
                      {/* GLOW FOR BORDER BOXES */}
                      <GlowCard card={card} index={index}>
                        {/* CHILDIRENT THAT ARE PASSED  */}
                        <div>
                          <img src={card.imgPath}  alt={card.title} />
                        </div>
                      </GlowCard>
                      </div>
                      <div className="xl:w-4/6">
                      {/* TIMELINE */}
                      <div className="flex items-start">
                        <div className="timeline-wrapper">
                          <div className="timeline-item" />
                          <div className='gradient-line w-1 h-full'/>
                        </div>

                        {/* FOR EXPERIENCE CARDS */}
                        <div className="expext flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div className='timeline-logo '>
                            <img src={card.logoPath} alt="logo" />
                            <div>
                              <h1 className="font-semibold text-3xl"> {card.title} </h1>
                              <p className="my-5 text-white-50"> 🗓️&nbsp;{card.date} </p>
                              <p className="text-[#830cb5] italic">
                                Responsibilities
                              </p>
                              <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50 '>
                                {card.responsibilities.map((responsibility)=> (
                                  <li key={responsibility} className='text-lg '>
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
        </section>
  )
}

export default ExperienceSection