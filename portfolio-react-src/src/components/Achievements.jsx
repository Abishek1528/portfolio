import '../styles/Achievements.css'

const achievements = [
  {
    icon: '🏆',
    title: 'Kalvium Winter Hackathon Finalist',
    desc: 'Shortlisted among 70+ competing teams in Kalvium\'s rigorous Winter Hackathon. Demonstrated strong problem-solving, rapid prototyping, and technical execution under pressure.',
    meta: 'Hackathon — 2024',
    rank: '01',
  },
  {
    icon: '🐛',
    title: 'Debugging Competition Participant',
    desc: 'Participated in the Coding Club debugging competition at VISTAS, showcasing systematic debugging skills and deep understanding of code logic and error tracing.',
    meta: 'Coding Club — VISTAS',
    rank: '02',
  },
]

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements-header">
          <div className="section-label">// recognition & growth</div>
          <h2 className="section-title">
            <span>Achievements</span> & Milestones
          </h2>
        </div>

        <div className="achievements-grid">
          {achievements.map(a => (
            <div key={a.title} className="achievement-card">
              <div className="achievement-rank">{a.rank}</div>
              <span className="achievement-icon">{a.icon}</span>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
              <span className="achievement-meta">{a.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
