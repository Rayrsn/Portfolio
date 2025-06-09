import { Environment, Float, useGLTF } from '@react-three/drei'
import React from 'react'

const TechIcon = ({model}) => {

    const secne = useGLTF(model.modelPath);
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset='city' />


        <Float>
            <group>
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
