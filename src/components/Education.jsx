const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}images/B20BB039.jpeg`} alt="Graduation" className="education-image" />
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="IIT Jodhpur" className="education-logo" />
            </div>
            <div className="education-content">
              <h3 className="degree">B.Tech in Bioengineering</h3>
              <p className="institution">Indian Institute of Technology Jodhpur</p>
              <p className="details">CGPA: 7.69/10</p>
              <p className="period">2020 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

