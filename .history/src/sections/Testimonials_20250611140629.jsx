import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        {/* TITLE HEADER*/}
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="What People Say About Me"
            sub="💬 Client Feedback Highlights"
            />
        </div>
        {/* TESTIMONIALS COMMENTS */}


        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
            {testimonials.map(({imgPath , name , mentions , review})=>(
            <GlowCard card={{review}} >
                <div className='flex items-center gap-3'>
                    <img src={imgPath} alt={name} />
                </div>
                {/* CONETENT OF NAME AND MENTION FOR USERS */}
                <div>
                    <p className='font-bold'>{name}</p>
                    <p className='text-white-50'> {mentions} </p>
                </div>
            </GlowCard>
            ))}
        </div>
    </section>
  )
}

export default Testimonials