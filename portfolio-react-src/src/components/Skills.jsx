import '../styles/Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '💻',
    color: 'cyan',
    skills: ['React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design', 'Figma'],
  },
  {
    title: 'Backend',
    icon: '🚀',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Socket.io', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    icon: '💾',
    color: 'orange',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'Mongoose ODM', 'Database Design'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🔧',
    color: 'purple',
    skills: ['Git & GitHub', 'Docker', 'Linux', 'Postman', 'Netlify', 'Render', 'VS Code'],
  },
]

const marqueeItems = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Socket.io',
  'JWT', 'Docker', 'Git', 'Python', 'REST APIs', 'Supabase', 'Linux', 'Figma',
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Socket.io',
  'JWT', 'Docker', 'Git', 'Python', 'REST APIs', 'Supabase', 'Linux', 'Figma',
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">// what I work with</div>
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </div>

        <div className="skills-categories">
          {skillGroups.map(group => (
            <div key={group.title} className="skill-category">
              <div className="skill-category-icon">{group.icon}</div>
              <div className="skill-category-title">{group.title}</div>
              <div className="skill-pills">
                {group.skills.map(skill => (
                  <div key={skill} className={`skill-pill ${group.color}`}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-marquee-wrap">
        <div className="skills-marquee">
          {marqueeItems.map((item, i) => (
            <div key={i} className="skills-marquee-item">{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
