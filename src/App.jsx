import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App

