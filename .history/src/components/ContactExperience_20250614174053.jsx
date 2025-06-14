import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './models/Computer'


const ContactExperience = () => {
  return (
    <Canvas camera={{position:[0,3,7], fov:45}} shadows>
        <ambientLight intensity={0.5} color="#fff436"/>

        <directionalLight position={[5,5,3]} intensity={2.5} color="#ffd9b3" />
        
        <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
        />

        <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI/5}
        maxPolarAngle={Math.PI/2}
        />

        <group scale={0.03} position={[0 , -1.5, -2]} castShadow>
            <Computer />
        </group>
    </Canvas>
    )
}

export default ContactExperience