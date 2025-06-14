import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center selection-padding'>
        {/* TITLE HEADER*/}
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="What People Say About Me"
            sub="💬 Client Feedback Highlights"
            />
        </div>

    </section>
  )
}

export default Testimonials