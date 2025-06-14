import React from 'react'

const ShowcaseSecion = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <div className='first-project-wrapper'>
                    <div className='img-wrapper'>
                        <img src="image/project1.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>On-Demand Rides Made Simple With  a Powerful, User-Friendly App Called Ryde</h2>
                        <p className='text-white md:text-xl'>
                            An app built with React Native, Node.js, and MongoDB that connects riders with drivers for a seamless transportation experience.
                        </p>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='img-warpper bg-[#ffefdb]'>
                            <img src="image/project2.png" alt="Library Management" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
  )
}

export default ShowcaseSecion