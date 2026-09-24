import { useState } from 'react'
import { FaTimes, FaTrophy, FaTasks, FaCode } from 'react-icons/fa'

const Experience = () => {
  const [activeModal, setActiveModal] = useState(null)

  const experiences = [
    {
      id: 4,
      title: 'Software Development Engineer 1 (SDE1)',
      company: 'Innovaccer',
      period: 'Jan 2026 - Present',
      image: `${import.meta.env.BASE_URL}images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg`,
      achievements: [
        { text: 'Phoenix Award for outstanding contribution', highlight: 'Phoenix Award' },
        { text: 'Spotlight Award the very next quarter - back-to-back recognition within 9 months', highlight: 'Spotlight Award' },
      ],
      responsibilities: [
        'Led the FHIR data migration for the InJourney platform, restructuring legacy patient and care journey data models to FHIR-compliant schemas.',
        'Built and scaled the fax processing pipeline end-to-end - including duplicate fax handling, presigned document URL support, and fax-based notification delivery - to enable reliable multi-channel patient outreach.',
        'Designed Kafka-based event publishing (migrating from Avro to JSON) and Temporal workflow orchestration to improve reliability of care journey execution across the omnichannel platform.',
        'Integrated GenAI capabilities (OpenAI with MLflow tracing) into the Comet Agent Backend, and added multi-cloud storage support (Azure, GCS, S3) and audit event logging for compliance.',
      ],
      tech: ['Python', 'FastAPI', 'FHIR', 'Kafka', 'Temporal', 'MLflow', 'OpenAI', 'PostgreSQL', 'Docker'],
    },
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Chat360',
      period: 'Aug 2024 - Jan 2026',
      image: `${import.meta.env.BASE_URL}images/exp1.jpg`,
      achievements: [
        { text: '99% reduction in message failures with WeChat retry mechanism', highlight: '99%' },
        { text: '70-80% reduction in live agent inquiries with GenAI chatbot', highlight: '70-80%' },
        { text: '60% faster data processing with optimized RAG pipeline', highlight: '60%' },
        { text: '99% reduction in payment errors with secure payment integration', highlight: '99%' },
      ],
      responsibilities: [
        'Designed and implemented a robust WeChat channel with template-based messaging, message routing, and webhook integrations. Added a retry mechanism to address WeChat API limitations in India, reducing message failures by 99%.',
        'Enhanced Shopify integration by adding multi-channel support alongside WhatsApp. Developed a GenAI-powered web chatbot to provide instant order status and product details from Shopify, boosting customer self-service and reducing live agent inquiries by 70 - 80%.',
        'Build a pipeline to efficiently chunk and store documents for RAG-based chatbots using a vector database. Optimized data processing times by 60% through improved data cleaning and embedding storage functions.',
        'Designed a chatbot-based subscription model to manage cash, futures, and options specific to client. Integrated secure WhatsApp payment processing and payment webhook tracking, reducing payment errors by up to 99%.',
      ],
      tech: ['Python', 'Django', 'GenAI', 'RAG', 'Vector DB', 'WeChat API', 'Shopify', 'WhatsApp', 'Payment Gateway'],
    },
    {
      id: 2,
      title: 'Software Engineer - Intern',
      company: 'Chat360',
      period: 'May 2024 - Aug 2024',
      image: `${import.meta.env.BASE_URL}images/exp2.jpeg`,
      achievements: [
        { text: '90% of chatbots use the intent-entity recognition system', highlight: '90%' },
        { text: 'Seamless Shopify order integration for WhatsApp chatbots', highlight: '' },
      ],
      responsibilities: [
        'Created a chatbot intent-entity recognition system to improve functionality. The solution detects user intent and directs them to relevant chatbot flows while extracting and using key user data. Nearly 90% of chatbots use this solution.',
        'Developed the Shopify order component for WhatsApp, enabling chatbot users to seamlessly place orders and sync order details directly with Shopify.',
      ],
      tech: ['Python', 'Django', 'NLP', 'Intent Recognition', 'Shopify API', 'WhatsApp'],
    },
    {
      id: 3,
      title: 'Business Development - Intern',
      company: 'Skillarena',
      period: 'Jan 2023 - Feb 2023',
      image: `${import.meta.env.BASE_URL}images/exp2.jpg`,
      responsibilities: [
        'Prospected new clients, built relationships, and generated revenue.',
        'Conducted market research and identified potential business opportunities.',
        'Collaborated with the sales team to develop effective strategies.',
      ],
      tech: ['Client Relations', 'Sales', 'Market Research', 'Business Strategy'],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <img src={exp.image} alt={exp.company} />
              <div className="card-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company} | {exp.period}</p>
                <button
                  className="read-more-btn"
                  onClick={() => setActiveModal(exp.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal !== null && (
        <>
          <div className="modal-overlay" onClick={() => setActiveModal(null)} />
          <div className="modal">
            {(() => {
              const exp = experiences.find(e => e.id === activeModal)
              return (
                <>
                  <div className="modal-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <p className="modal-company">{exp.company} | {exp.period}</p>
                    </div>
                    <button className="close-btn" onClick={() => setActiveModal(null)}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="modal-content">
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="modal-section">
                        <h4><FaTrophy /> Key Achievements</h4>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>
                              {achievement.highlight && (
                                <span className="highlight">{achievement.highlight}</span>
                              )} {achievement.text.replace(achievement.highlight, '').trim()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="modal-section">
                      <h4><FaTasks /> Key Responsibilities</h4>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-section">
                      <h4><FaCode /> Technologies Used</h4>
                      <div className="tech-tags">
                        {exp.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </>
      )}

    </section>
  )
}

export default Experience

