import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'

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
            {testimonials.map((testimonials)=>(
            testimonials.review
            ))}
        </div>
    </section>
  )
}

export default Testimonials