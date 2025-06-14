import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSecion from "./sections/ShowcaseSecion"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
    <Hero />
    <NavBar />
    <ShowcaseSecion />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection /> 
    <TechStack />
    <Testimonials />
    <Contact />
    </>
  )
}

export default App