import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSecion from "./sections/ShowcaseSecion"

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSecion />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App