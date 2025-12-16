import { useEffect, useRef, useState } from 'react'
import { FaCode, FaBrain, FaServer } from 'react-icons/fa'

const About = () => {
  const [counters, setCounters] = useState({ years: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const increment = 1 / steps

    let progress = 0
    const timer = setInterval(() => {
      progress += increment
      if (progress >= 1) {
        setCounters({ years: 1.5 })
        clearInterval(timer)
      } else {
        setCounters({
          years: 1.5 * progress,
        })
      }
    }, duration / steps)
  }

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{counters.years.toFixed(1)}</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        <div className="about-content">
          <p className="about-text">
            I'm Shubh Soni, a Software Engineer and GenAI Lead at Chat360 in Pune, with 1.5+ years of professional experience. I graduated from IIT Jodhpur in May 2024 and have since been focused on building scalable backend systems and leading the deployment of production-grade GenAI infrastructure. My expertise spans server management, AI product deployment, and creating robust solutions that drive real impact in the field of generative AI and backend development.
          </p>
          <div className="highlights-grid">
            <div className="highlight-card">
              <FaCode className="highlight-icon" />
              <h3>Software Development</h3>
              <p>Building scalable and robust backend systems</p>
            </div>
            <div className="highlight-card">
              <FaBrain className="highlight-icon" />
              <h3>GenAI Infrastructure</h3>
              <p>Experience in building and deploying production-grade AI solutions</p>
            </div>
            <div className="highlight-card">
              <FaServer className="highlight-icon" />
              <h3>Server Management</h3>
              <p>Infrastructure and deployment expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

