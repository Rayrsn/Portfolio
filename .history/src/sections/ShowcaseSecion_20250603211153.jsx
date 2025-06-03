import React, { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

useGSAP(()=> {
    gsap.fromTo(
        sectionRef.current,
        {opacity:0},
    {opacity: 1 , duration:1.5})
},[]);

const ShowcaseSecion = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <div className='first-project-wrapper' ref={project1Ref}>
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
                    <div className='project' ref={project2Ref}>
                        <div className='img-warpper bg-[#ffefdb]'>
                            <img src="image/project2.png" alt="Library Management" />
                        </div>
                        <div>
                            <h2>Library Management Platform</h2>
                        </div>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='img-warpper bg-[#ffe7eb]'>
                            <img src="image/project3.png" alt="YC Directory" />
                        </div>
                        <div>
                            <h2>YC Directory - A Startup Showcase App </h2>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        </section>
  )
}

export default ShowcaseSecion