import '../styles/Contact.css'

const links = [
  {
    platform: 'GitHub',
    value: '@Abishek1528',
    icon: '⌥',
    href: 'https://github.com/Abishek1528',
  },
  {
    platform: 'LinkedIn',
    value: 'Abishek Cholan',
    icon: '💼',
    href: 'https://www.linkedin.com/in/abishek-cholan-759bab327/',
  },
  {
    platform: 'LeetCode',
    value: 'O7foQnwuJr',
    icon: '⚡',
    href: 'https://leetcode.com/u/O7foQnwuJr/',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orb" />
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">// let's connect</div>
            <h2 className="section-title">
              Get In <span>Touch</span>
            </h2>

            <p className="contact-subtitle">
              I'm actively looking for internship opportunities where I can apply my skills in 
              full-stack development, real-time systems, and secure API design. Whether you have 
              an opportunity, a question, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              {links.map(link => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-info">
                    <div className="contact-link-platform">{link.platform}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                  <div className="contact-link-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-card">
              <h3 className="contact-card-title">Ready to Collaborate?</h3>
              <p className="contact-card-subtitle">// Available for internship roles</p>

              <div className="contact-card-status">
                <div className="status-dot" />
                <span className="status-text">Open to opportunities — Let's build something great</span>
              </div>

              <div className="contact-card-info">
                <div className="contact-info-row">
                  <span className="contact-info-row-icon">📍</span>
                  <span>India — Remote Ready</span>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-row-icon">🎓</span>
                  <span>Kalvium UG CS, 2024–2028</span>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-row-icon">🔭</span>
                  <span>Full-Stack, Real-Time, Auth Systems</span>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-row-icon">⚡</span>
                  <span>Actively seeking 2026 internships</span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/abishek-cholan-759bab327/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-cta"
              >
                <span>Connect on LinkedIn →</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="footer-copy">
            © 2025 <span>Abishek R V</span>. Built with React.js & CSS.
          </p>
          <p className="footer-love">
            Crafted with <span>♥</span> and lots of coffee
          </p>
        </div>
      </div>
    </section>
  )
}
