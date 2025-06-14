import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'





const ContactExperience = () => {
  return (
    <Canvas camera={{position:[0,3,7], fov:45}} shadows>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5,5,5]} intensity={1}/>
        <spotLight
        position={[-5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        />

        <group scale={0.01} position={[0 , -1.5, -2]}>

        </group>
    </Canvas>
    )
}

export default ContactExperience