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
                  
                  <form onSubmit={handelChange} className='w-full flex flex-col gap-7'>
                
                {/* NAME */}
                <div className='mb-6'>
                  <label htmlFor="name"> Name </label>
                  <input 
                  type="text"
                  id='name'
                  name='name'
                  value={form.name}
                  onChange={handelChange}
                  placeholder='What is Your Name?'
                  required 
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input 
                  type="text" 
                  name="email" 
                  id="email"
                  value={form.email}
                  onChange={handelChange}
                  placeholder='What is Your Email?'
                  required 
                  />  
                </div>
                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      name="message" 
                      id="message"
                      value={form.message}
                      onChange={handelChange}
                      placeholder='How can I help you?'
                      rows="5"
                      required
                      />
                  </div>

                      {/* SUBMIT */}
                      <button type='submit'>
                        <div className='cta-button group'>
                          <div className='bg-cirlce'/>
                          <p className='text'>
                            {loading ? 'Sending...': 'Send Message'}
                          </p>
                          <div className='arrow-wrapper'>
                            <img src="/image/arrow-down.svg" alt="arrow" />
                          </div>
                        </div>
                      </button>
              </form>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact