import React from 'react'

const words=[
  {text: 'Ideas', imgPath: '/image/ideas.svg'},
  {text: 'Concepts', imgPath: '/image/concepts.svg'},

]

const Hero = () => {
  return (
     <section id="hero " className='relative overflow-hidden'>
      {/* BACKGROUND IMAGE FOR RIGHT SIDE OF HERO  */}
        <div className='absolute top-0 left-0 z-10'>
            <img src="/image/bgbg.png" alt="back ground img" />
        </div>
        
        {/* H1 HERO SECTION    */}
        <div className='flex flex-col gap-7'>
          <div className='hero-text'>
            <h1>Shapping Desings </h1>
            <h1>Into Real Projects</h1>
            <h1>That Deliver Results</h1>
          </div>
        </div>

        <div className='hero-layout '>
            {/*LEFT: HERO CONTENT*/}

            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'> 
                
            </header>

            {/*RIGHT : 3D MODEL */} 

            

        </div>
     </section>
  )
}

export default Hero