import React from 'react'
import Navigationbar from './components/Navbar/Navigationbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
  <div>
    <Navigationbar></Navigationbar>
    <Hero></Hero>
    <About></About>
    <Education />
    <Certifications />
    <Experience />
    <Skills />
    <Projects />

  </div>
  )
}
export default App
