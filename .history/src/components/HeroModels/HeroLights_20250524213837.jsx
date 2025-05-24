const HeroLights = () => {
  return (
    <>
    <spotLight 
    position={[2,5,6]}
    angle={0.15}
    intensity={100}
    penumbra={0.2}
    color="white"
    />

<spotLight 
    position={[4,5,4]}
    angle={0.15}
    intensity={100}
    penumbra={0.2}
    color="white"
    />
    </>
  )
}

export default HeroLights