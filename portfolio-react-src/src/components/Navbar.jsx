import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', num: '01', href: '#about' },
    { label: 'Skills', num: '02', href: '#skills' },
    { label: 'Projects', num: '03', href: '#projects' },
    { label: 'Achievements', num: '04', href: '#achievements' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} data-num={l.num} onClick={e => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={e => handleNavClick(e, '#contact')}>
              Contact Me
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
