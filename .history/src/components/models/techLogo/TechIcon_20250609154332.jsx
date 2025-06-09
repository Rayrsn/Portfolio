import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { color } from 'three/tsl';

const TechIcon = ({model}) => {

    const secne = useGLTF(model.modelPath);

    useEffect(()=> {
      if(model.name==='Interactive Developer'){
        secne.scene.traverse((child)=>{
          if(child.isMesh && child.name=== 'Object_5'){
            child.material= new THREE.MeshStandardMaterial({color: 'white'}
        })
      }
    },[])
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
