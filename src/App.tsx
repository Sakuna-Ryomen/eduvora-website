import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Releases from './components/Releases'
import UserRoles from './components/UserRoles'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-white to-light/20 relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <UserRoles />
      <Releases />
      <TechStack />
      <Footer />
    </div>
  )
}

export default App
