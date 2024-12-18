import './App.css'
import AboutUs from './components/about-section/aboutus'
import Contact from './components/contact-section/contact'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import HeroSection from './components/hero-section/hero-section'
import Hiring from './components/hiring-section/hiring'
import Services from './components/services/services'
import Partner from './components/social-media-section/partner'
import SocialMedia from './components/social-media-section/social-media'

function App() {

  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutUs />
      <Services />
      <Hiring />
      <Partner />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
