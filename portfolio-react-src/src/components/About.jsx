import { useEffect, useRef } from 'react'
import '../styles/About.css'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.querySelectorAll('[style*="opacity: 0"], .section-label, .section-title, .about-desc, .about-highlights, .about-edu').forEach(el => {
            el.style.animationPlayState = 'running'
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    'Authentication & JWT Security',
    'Real-Time Socket.io Apps',
    'REST API Design & Integration',
    'Full-Stack React + Node.js',
    'Database Design (SQL & NoSQL)',
    'Mobile-First Responsive UI',
    'Docker Containerization',
    'Version Control with Git',
  ]

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-line-deco" />
            <div className="about-avatar-wrap">
              <div className="about-avatar-bg" />
              <div className="about-avatar-inner">
                <img src="/abishek.png" alt="Abishek" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="about-avatar-corner tl" />
              <div className="about-avatar-corner tr" />
              <div className="about-avatar-corner bl" />
              <div className="about-avatar-corner br" />
            </div>
            <div className="about-floating-badge">
              <div className="about-badge-dot" />
              <div className="about-badge-text">
                <strong>Open to Internships</strong>
                Available for 2026
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">// who I am</div>
            <h2 className="section-title">
              About <span>Me</span>
            </h2>

            <p className="about-desc">
              I'm a <strong>full-stack developer</strong> with strong computer science fundamentals,
              currently pursuing my UG CS degree at <strong>Kalvium</strong> (2024–2028).
              I specialize in building anonymous social platforms, rental applications, and real-time
              web systems that are both secure and scalable.
            </p>

            <p className="about-desc">
              My expertise spans <strong>authentication systems</strong>, real-time communication
              with Socket.io, and RESTful API design. I enjoy diving deep into backend architecture
              while maintaining clean, responsive frontends.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h} className="about-highlight">{h}</div>
              ))}
            </div>

            <div className="about-edu">
              <div className="about-edu-label">Current Education</div>
              <div className="about-edu-title">Kalvium UG Computer Science Program</div>
              <div className="about-edu-meta">2024 – 2028 &nbsp;·&nbsp; Actively seeking internship opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
