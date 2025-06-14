import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'

const Contact = () => {
  const formRef=useRef(null);
  const [loading, setloading]=useState(false);
  const [form, setform]=useState({
    name: '',
    email: '',
    message: ''
  });

  const handelChange=(e)=>{
    const {name, value}=e.target;
    setform({...form,[name]: value})};

    const handelSubmit= (e)=>{

    };



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
                  
                  <form form={formRef} onSubmit={handelSubmit} className='w-full flex flex-col gap-7'>
                
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
              {/* 3D MODELS COMPEUTER */}
              <div className='xl:col-span-7 min-h-96' >
                <div className='bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden'>
                  {/* 3d model */}
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact