import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const HeroExperience = () => {

  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({query: '(max-width: 768px)'}); 


  return (
    <Canvas camera={{position:[0,0,15] , fov: 45}}>
      <ambientLight intensity={0.2} color="#1a1a40"/>
      <directionalLight position={[5,5,5]} intensity={5}/>

      {/* SETUP THE 3D MODEL */}
      <OrbitControls>
        enablePan={false} 
        enableZoom={!isTablet}
        maxDstance={20}
        minDstance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      </OrbitControls>


      <Room />
    </Canvas>
  )
}

export default HeroExperience