import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Get your access key from https://web3forms.com
  // Add it to your .env file as VITE_WEB3FORMS_ACCESS_KEY
  // const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: "8324385b-eb77-4406-a541-e54f15323f7f",
          subject: `FROM THE WEBSITE ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'shubhsoni.s17@gmail.com',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        setError(result.message || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="contact-items">
              <a href="mailto:shubhsoni.s17@gmail.com" className="contact-item">
                <FaEnvelope />
                <span>shubhsoni.s17@gmail.com</span>
              </a>
              <a href="tel:+918000322290" className="contact-item">
                <FaPhone />
                <span>(+91) 8000322290</span>
              </a>
              <a href="https://linkedin.com/in/shubh-soni-931291205" target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://instagram.com/s_shubh.ny/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-btn" disabled={loading || submitted}>
              {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

