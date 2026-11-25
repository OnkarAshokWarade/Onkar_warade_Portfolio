import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ApproachSection from './sections/ApproachSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ToolkitSection from './sections/ToolkitSection'
import './styles/site.css'
import './styles/interactive-sections.css'
import './styles/responsive-polish.css'
import './styles/redesign.css'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ApproachSection />
        <ToolkitSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
  }

export default App
