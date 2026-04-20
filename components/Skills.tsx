import { SectionLabel } from './About'

type SkillGroup = {
  category: string
  icon: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Kotlin'],
  },
  {
    category: 'Frameworks',
    icon: '⬡',
    skills: ['React', 'Node', 'Spring Boot', 'Django', 'D3.js', 'PyTorch', 'Airflow'],
  },
  {
    category: 'Database & Cloud',
    icon: '◈',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Heroku', 'SkyPilot'],
  },
  {
    category: 'Tools & OS',
    icon: '⬟',
    skills: ['Linux', 'Kafka', 'Jenkins', 'Docker', 'Kubernetes', 'Git', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 bg-cream-card">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb absolute right-[10%] top-20 h-44 w-44 rounded-full bg-sage/12 blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(212,132,106,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,106,0.08) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionLabel>Tech stack</SectionLabel>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-black">
              The toolbox behind the work
            </h2>
            <p className="mt-3 text-warm-gray leading-relaxed">
              I like being versatile without being random. Most of my work sits around
              production software, data-heavy systems, and the tooling that supports them.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className={`section-card card-lift rounded-[2rem] p-5 md:p-6 ${index % 2 === 1 ? 'sm:translate-y-6' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-terracotta/20 bg-terracotta/10 font-mono text-sm font-bold text-terracotta">
                  {group.icon}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-warm-gray-light">
                    Category
                  </p>
                  <h3 className="font-display text-lg font-semibold text-warm-black">
                    {group.category}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge inline-flex items-center rounded-full border border-warm-border bg-white/70 px-3 py-1.5 text-sm font-medium text-warm-gray shadow-warm-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-card mt-12 rounded-[2rem] p-5 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage-dark">
                Currently exploring
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-warm-black">
                Systems that make AI more practical
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['LLM fine-tuning', 'AI agents', 'RAG systems'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sage/20 bg-sage/12 px-3 py-1.5 text-sm font-medium text-sage-dark"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
