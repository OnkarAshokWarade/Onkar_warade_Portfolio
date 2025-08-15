import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/Header.jsx'
import Home from './assets/Home.jsx'
import About from './assets/About.jsx'
import Skills from './assets/Skills.jsx'
import Project from './assets/Project.jsx'
import Contact  from './assets/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <About />
    <Skills/>
    <Project/>
    <Contact/>
  </StrictMode>
)
