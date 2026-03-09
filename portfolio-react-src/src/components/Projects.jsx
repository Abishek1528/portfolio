import '../styles/Projects.css'
const projects = [
  {
    id: '01',
    name: 'HeartConnect',
    subtitle: 'Secure Anonymous Social Platform',
    desc: 'An anonymous social platform designed for children to safely express emotions and communicate. Built with end-to-end security, JWT authentication, and real-time communication using Socket.io. The platform prioritizes child safety while enabling meaningful emotional connections.',
    impact: '💫 Bridges emotional communication between parents and children through a secure, anonymous interface — improving family wellbeing digitally.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Netlify'],
    icon: '💝',
    accentColor: 'rgba(0, 212, 255, 0.4)',
    github: 'https://github.com/Abishek1528',
    demo: 'https://heartconnectt.netlify.app/',
    featured: true,
    image: '/project1.png', 
  },
  {
    id: '02',
    name: 'HouseZone',
    subtitle: 'Unified Rental Discovery Platform',
    desc: 'A centralized rental platform that aggregates properties, vehicles, and machinery in one place. Features real-time availability updates via Socket.io, powerful search and filtering, and a cross-platform mobile app built with React Native.',
    impact: '🏠 Centralizes fragmented rental markets into a single, discoverable platform — saving time and reducing friction for renters.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'Render'],
    icon: '🏡',
    accentColor: 'rgba(0, 255, 136, 0.4)',
    github: 'https://github.com/Abishek1528',
    demo: null,
    featured: false,
    image: '/project2.png',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-label">// what I've built</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {!project.featured ? (
                <>
                  <div className="project-visual">
                    {project.image ? (
                      <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <>
                        <div className="project-visual-grid" />
                        <div className="project-number">{project.id}</div>
                        <div
                          className="project-visual-accent"
                          style={{ background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` }}
                        />
                        <div className="project-visual-icon">{project.icon}</div>
                      </>
                    )}
                  </div>
                  <ProjectContent project={project} />
                </>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {project.image ? (
                    <div className="project-visual">
                      <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div className="project-visual">
                      <div className="project-visual-grid" />
                      <div className="project-number">{project.id}</div>
                      <div
                        className="project-visual-accent"
                        style={{ background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` }}
                      />
                      <div className="project-visual-icon">{project.icon}</div>
                    </div>
                  )}
                  <ProjectContent project={project} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectContent({ project }) {
  return (
    <div className="project-content">
      {project.featured && (
        <div className="project-featured-label">Featured Project</div>
      )}
      <h3 className="project-title">{project.name}</h3>
      <div className="project-subtitle">{project.subtitle}</div>
      <p className="project-desc">{project.desc}</p>

      <div className="project-impact">
        <span className="project-impact-icon">→</span>
        {project.impact}
      </div>

      <div className="project-tech-stack">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>⌥</span> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link primary-link"
          >
            <span>↗</span> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
