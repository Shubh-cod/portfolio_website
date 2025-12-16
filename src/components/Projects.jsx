import { useState } from 'react'
import { FaTimes, FaChartLine, FaInfoCircle, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Human Face Emotion Recognition',
      image: '/images/Seven-basic-human-emotions.png',
      results: [
        { text: '25% improvement in classification accuracy', highlight: '25%' },
        { text: 'Multiple architecture implementations (ResNet, MobileNet)', highlight: '' },
      ],
      description: 'Deep learning project achieving 25% improvement in classification accuracy using ResNet, MobileNet, and other architectures. The system can accurately recognize and classify human emotions from facial expressions.',
      tech: ['Python', 'Deep Learning', 'ResNet', 'MobileNet', 'TensorFlow', 'Computer Vision'],
    },
    {
      id: 2,
      title: 'MultiDock: Python Based Approach',
      image: '/images/dock.jpg',
      results: [
        { text: '80% reduction in setup time', highlight: '80%' },
        { text: '5x efficiency boost', highlight: '5x' },
        { text: 'Automated multi-protein and multi-ligand docking', highlight: '' },
      ],
      description: 'Automated multi-protein and multi-ligand docking solution reducing setup time by 80% and achieving 5x efficiency boost. This Python-based tool streamlines the molecular docking process for drug discovery and protein-ligand interaction studies.',
      tech: ['Python', 'Bioinformatics', 'Molecular Docking', 'Automation', 'Data Processing'],
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <button
                  className="read-more-btn"
                  onClick={() => setActiveModal(project.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <>
          <div className="modal-overlay" onClick={() => setActiveModal(null)} />
          <div className="modal">
            {(() => {
              const project = projects.find(p => p.id === activeModal)
              return (
                <>
                  <div className="modal-header">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="modal-company">Project</p>
                    </div>
                    <button className="close-btn" onClick={() => setActiveModal(null)}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="modal-content">
                    {project.results && project.results.length > 0 && (
                      <div className="modal-section">
                        <h4><FaChartLine /> Results</h4>
                        <ul className="achievements-list">
                          {project.results.map((result, idx) => (
                            <li key={idx}>
                              {result.highlight && (
                                <span className="highlight">{result.highlight}</span>
                              )} {result.text.replace(result.highlight, '').trim()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="modal-section">
                      <h4><FaInfoCircle /> Project Description</h4>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="modal-section">
                      <h4><FaCode /> Technologies Used</h4>
                      <div className="tech-tags">
                        {project.tech.map((tech, idx) => (
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

export default Projects

