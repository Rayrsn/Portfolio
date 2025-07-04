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
            {testimonials.map((testimonial)=>(
            <GlowCard card={testimonial} >
                <div className='flex items-center gap-5'>
                    <img src={testimonial.imgPath} alt={testimonial.name} />
                </div>
                {/* CONETENT OF NAME AND MENTION FOR USERS */}
                <div>
                    <p className='font-bold'>{testimonial.name}</p>
                    <p className='text-white-50'> {testimonial.mentions} </p>
                </div>
            </GlowCard>
            ))}
        </div>
    </section>
  )
}

export default Testimonials