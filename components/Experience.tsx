import { SectionLabel } from './About'

type ExperienceItem = {
  title: string
  org: string
  period: string
  type: 'work' | 'research' | 'education'
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Machine Learning Engineer Intern',
    org: 'Shopify — Toronto, Canada',
    period: 'Sep 2025 – Dec 2025',
    type: 'work',
    bullets: [
      'Enhanced product recommendation system by redesigning item representation using UPI-based aggregation, unifying duplicate products across merchants and reducing effective item vocabulary by 24%.',
      'Implemented UPI-based aggregation in the HSTU training pipeline by updating product mappings and dataset logic, enabling many-to-one product-to-embedding mappings and improving sample efficiency by 18%.',
      'Implemented shared-embedding regularization across UPI-linked products, enforcing shared representations for equivalent items via the training objective to improve generalization for sparse and long-tail products.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Amazon — Vancouver, Canada',
    period: 'Jun 2025 – Aug 2025',
    type: 'work',
    bullets: [
      'Developed a root-cause analysis platform linking failing regression tests to code changes, integrating Model Context Protocol (MCP) to reduce LLM token usage while maintaining 80% recall across 100+ failure categories.',
      'Designed and implemented a multi-stage workflow integrating TF-IDF historical retrieval with LLM reasoning to surface regression patterns and rank probable root causes, enhancing signal-to-noise ratio and diagnosis precision.',
      'Built TypeScript tooling with MCP to extract, normalize, and cache real-time regression diffs and commit metadata, processing 5K+ diff records and 50+ code reviews to support large-scale VFI investigations.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'General Motors — Markham, Canada',
    period: 'Jan 2024 – Aug 2024',
    type: 'work',
    bullets: [
      'Developed an automotive distributed RDS system using Spring Boot, Spring Cloud, MongoDB, and React, providing vehicle diagnostics and data collection, including ECU management and core data acquisition modules.',
      'Implemented Kafka error retries and idempotency with unique identifiers to ensure reliable transmission of vehicle diagnostic data during system failures or network interruptions, increasing processed diagnostic tasks to 5k/second.',
      'Built an Elasticsearch-based log analysis module handling over a million microservice and vehicle diagnostic logs daily; optimized index templates, hot/cold data tiers, and shard strategies to reduce response times.',
    ],
  },
  {
    title: 'Automation Engineer Intern',
    org: 'Dayforce (Ceridian) — Toronto, Canada',
    period: 'May 2023 – Aug 2023',
    type: 'work',
    bullets: [
      'Developed an enterprise HCM system using Spring Cloud microservices for payroll management; implemented backend with JPA and PostgreSQL and frontend with React and D3.js to ensure high scalability.',
      'Containerized microservices with Docker and deployed production environment on AWS EC2 via Kubernetes, and integrated Jenkins for automated CI/CD, achieving rapid delivery and high system availability.',
      'Refactored test infrastructure using object-oriented design principles, introducing modular and reusable components that reduced code duplication by 10% and improved maintainability and scalability.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'OpenText — Waterloo, Canada',
    period: 'Apr 2022 – Aug 2022',
    type: 'work',
    bullets: [
      'Developed RESTful APIs using Java Spring Boot to streamline the import/export of documents and data across OpenText\'s enterprise systems and increase system performance.',
      'Designed reusable UI components with Next.js to optimize user interface performance, improving user experience and increasing adoption of core features by millions of users across enterprise-grade applications.',
      'Implemented end-to-end testing using JUnit, achieving 85% code coverage and reducing defect rates by 10%.',
    ],
  },
]

const typeConfig = {
  work: { label: 'Internship', color: 'bg-terracotta/10 text-terracotta border-terracotta/20' },
  research: { label: 'Research', color: 'bg-sage/10 text-sage-dark border-sage/20' },
  education: { label: 'Teaching', color: 'bg-warm-border text-warm-gray border-warm-border' },
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 bg-cream">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb absolute left-[-4rem] top-20 h-52 w-52 rounded-full bg-sage/12 blur-3xl" />
        <div className="ambient-orb absolute right-[-5rem] bottom-12 h-56 w-56 rounded-full bg-terracotta/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-warm-black">
              Places where I learned to build at scale
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              My experience spans ML, backend platforms, developer tooling, and
              distributed systems, but the thread is consistent: make hard problems
              more understandable and more useful.
            </p>
          </div>

          <div className="section-card rounded-3xl px-5 py-4 text-sm text-warm-gray">
            <span className="font-display text-lg font-semibold text-warm-black">5 internships</span>
            <p className="mt-1">Across consumer, cloud, enterprise, and automotive software.</p>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-terracotta/40 via-warm-border to-transparent md:block" />

          <div className="space-y-7">
            {experiences.map((exp, i) => {
              const cfg = typeConfig[exp.type]
              return (
                <div key={i} className="relative md:pl-16">
                  <div className="absolute left-0 top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-cream bg-terracotta shadow-warm-sm md:block" />

                  <div className="section-card card-lift rounded-[2rem] p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-2xl">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-warm-gray-light">
                          {exp.period}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-warm-black md:text-2xl">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm text-warm-gray">{exp.org}</p>
                      </div>

                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${cfg.color}`}>
                        {cfg.label}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {exp.bullets.map((bullet, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-warm-border/70 bg-white/65 px-4 py-3 text-sm leading-relaxed text-warm-gray"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
