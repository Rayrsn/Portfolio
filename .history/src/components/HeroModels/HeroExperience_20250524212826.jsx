import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'

const HeroExperience = () => {

  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({query: '(max-width: 768px)'}); 

  return (
    <Canvas camera={{position:[0,0,15] , fov: 45}}>
  
      {/* SETUP THE 3D MODEL */}
      <OrbitControls>
        enablePan={false} 
        enableZoom={!isTablet}
        maxDstance={20}
        minDstance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      </OrbitControls>

      {/* SET UP 3D MODEL FOR DIFFERENT DEVICES */}
      <group
      scale={isMobile? 0.7 : 1}
      position={[0 , -3.5 , 0]}
      rotation={[0, Math.PI/4 , 0]}>
        <Room/>
        2
      </group>
        </Canvas>
  )
}

export default HeroExperience