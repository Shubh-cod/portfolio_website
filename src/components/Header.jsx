import { useEffect, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  const [text, setText] = useState('')
  const fullText = 'IIT Jodhpur || Software Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="header-image">
          <img src="/images/proflie_image.jpeg" alt="Shubh Soni" />
          <div className="image-glow"></div>
        </div>
        <div className="header-text">
          <h1>
            <span className="gradient-text">Shubh Soni</span>
          </h1>
          <p className="typing-text">
            {text}
            <span className="cursor">|</span>
          </p>
          <div className="contact-links">
            <a href="mailto:shubhsoni.s17@gmail.com">
              <FaEnvelope /> shubhsoni.s17@gmail.com
            </a>
            <a href="tel:+918000322290">
              <FaPhone /> (+91) 8000322290
            </a>
            <a href="https://linkedin.com/in/shubh-soni-931291205" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

