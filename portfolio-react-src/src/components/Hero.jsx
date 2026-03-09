import { useEffect, useRef, useState } from 'react'
import '../styles/Hero.css'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

const tags = [
  { label: 'React.js', color: '#61DAFB' },
  { label: 'Node.js', color: '#68D391' },
  { label: 'Socket.io', color: '#00D4FF' },
  { label: 'MongoDB', color: '#4DB33D' },
  { label: 'JWT Auth', color: '#FF6B35' },
  { label: 'REST APIs', color: '#A78BFA' },
  { label: 'Docker', color: '#2496ED' },
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const roles = ['Full-Stack Developer', 'Real-Time Systems', 'API Architect', 'Open Source Dev']
  const roleRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    const tick = () => {
      const current = roles[roleRef.current]
      if (!deletingRef.current) {
        if (charRef.current <= current.length) {
          setTyped(current.slice(0, charRef.current))
          charRef.current++
        } else {
          deletingRef.current = true
          setTimeout(tick, 1800)
          return
        }
      } else {
        if (charRef.current >= 0) {
          setTyped(current.slice(0, charRef.current))
          charRef.current--
        } else {
          deletingRef.current = false
          roleRef.current = (roleRef.current + 1) % roles.length
        }
      }
      setTimeout(tick, deletingRef.current ? 50 : 100)
    }
    const t = setTimeout(tick, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="home">
      <ParticleCanvas />
      <div className="grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Portfolio 2024 — 2028</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-main glitch">Abishek</span>
          <span className="hero-name-accent">R V</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-text">
            {typed}<span style={{ color: 'var(--accent-cyan)', animation: 'blink 1s step-end infinite', display: 'inline-block' }}>|</span>
          </span>
        </div>

        <p className="hero-tagline">
          Building <strong>secure</strong>, <strong>scalable</strong>, and <strong>real-time</strong> digital solutions.
          Passionate about crafting performant web applications with modern technologies
          that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
            <span>⚡ View Projects</span>
          </a>
          <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
            <span>✉ Contact Me</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">5+</span>
            <span className="hero-stat-label">Projects Building</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-label">Technologies</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">2024</span>
            <span className="hero-stat-label">Kalvium Cohort</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">∞</span>
            <span className="hero-stat-label">Curiosity</span>
          </div>
        </div>
      </div>

      <div className="hero-floating-tags">
        {tags.map(tag => (
          <div key={tag.label} className="hero-tag">
            <span className="tag-dot" style={{ background: tag.color }} />
            {tag.label}
          </div>
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
