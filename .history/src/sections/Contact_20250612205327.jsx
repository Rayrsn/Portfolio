import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Contact = () => {
  return (
    <section className='flext items-center section-padding'>
        {/* TITLE HEADER */}
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title= "Get in Touch - Let's Connect"
            sub="💬 Have questions or ideas? let's talk! "
            />

            <div className='mt-16 grid-12-cols'>
              {/* CONTACT FORM FOR LEFT SIDE */}
              <div className='xl:col-span-5'>
                <div className='flex-center card-border rounded-xl p-10'>
                  
                  <form onSubmit={}>
                <div className='mb-6'>
                  <label htmlFor="name"> Name </label>
                  <input 
                  type="text"
                  id='name'
                  placeholder='Your Name' 
                  />
                </div>
              </form>
                </div>
              </div>
            </div>
        </div>

    </section>
  )
}

export default Contact