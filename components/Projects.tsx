import Image from 'next/image'
import { SectionLabel } from './About'

type Project = {
  title: string
  description: string
  impact?: string
  stack: string[]
  image: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'DailyRadar',
    description:
      'Personalized information hub where users define topics and sources, receive AI-generated news briefs, and turn reports into podcast-style audio for on-the-go listening.',
    impact:
      'Built as a desktop app with custom digests, report sharing, PDF export, and Supabase-backed authentication and data flows.',
    stack: ['Kotlin', 'Compose Desktop', 'Supabase', 'Ktor', 'TypeScript'],
    image: '/images/dailyRadar.png',
    github: 'https://github.com/OliviaOY-4',
    demo: 'https://youtu.be/1-pXXaTGvfQ',
  },
  {
    title: 'Aardvark Car',
    description:
      'Arduino-based 4WD robot car that combines ultrasonic obstacle avoidance with Wi-Fi-aware navigation, using a companion board and server heartbeat to react to changing signal conditions.',
    impact:
      'Integrated embedded control, network connectivity, and simple server infrastructure so the car could keep moving, reroute, or stop based on live connection status.',
    stack: ['Arduino', 'C++', 'Python', 'Flask', 'WiFiNINA'],
    image: '/images/aardvark.jpg',
    github: 'https://github.com/OliviaOY-4',
    demo: 'https://youtu.be/Cu2-dqla0Vk',
  },
  {
    title: 'Watopoly',
    description:
      'Waterloo-themed Monopoly-style terminal game built in C++, featuring a custom board system with academic buildings, residences, gyms, and campus event tiles like SLC, Needles Hall, and DC Tims Line.',
    impact:
      'Implemented core gameplay systems including trading, auctions, property improvements, mortgages, bankruptcy handling, save/load, and a full ASCII board display for multiplayer play.',
    stack: ['C++', 'Object-Oriented Design', 'STL', 'Makefile'],
    image: '/images/watopoly.jpg',
    github: 'https://github.com/OliviaOY-4/watopoly',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cream-card">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Featured projects</SectionLabel>
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-black">
            Things I&apos;ve built
          </h2>
          <a
            href="https://github.com/OliviaOY-4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terracotta font-medium hover:underline underline-offset-2 flex items-center gap-1 shrink-0"
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card flex flex-col bg-cream rounded-3xl overflow-hidden shadow-warm border border-warm-border hover:shadow-warm-md group">
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-warm-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-lg text-warm-black mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-warm-gray leading-relaxed flex-1">
          {project.description}
        </p>

        {project.impact && (
          <div className="mt-3 flex items-start gap-2 px-3 py-2.5 rounded-2xl bg-sage/10 border border-sage/20">
            <span className="text-sage mt-0.5 shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-xs text-sage-dark leading-relaxed">{project.impact}</p>
          </div>
        )}

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-warm-border text-warm-gray text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-3 pt-3 border-t border-warm-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-warm-gray font-medium hover:text-warm-black transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
              </svg>
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-terracotta font-medium hover:text-terracotta-dark transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H5M11 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
