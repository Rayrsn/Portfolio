import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'

const TechIcon = ({model}) => {

    const secne = useGLTF(model.modelPath);
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1}/>
        <Environment preset='city' />
        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={secne.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon


// - Loads a `.glb` Model (GLTF format)
// - Add basic lighting
// - Applies environment reflection for realism 
// - Wraps the model in floating animation 
// - Optionally tweaks the matreial (Like setting a white color on a specific mesh)
// - Disables zoom using OrbitControls
