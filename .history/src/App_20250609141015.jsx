import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSecion from "./sections/ShowcaseSecion"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSecion />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection /> 
    <TechStack />
    </>
  )
}

export default App