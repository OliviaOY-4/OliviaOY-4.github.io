const highlightChips = ['Recommendation systems', 'Developer tools', 'Backend infra']

const snapshotCards = [
  {
    eyebrow: 'Most at home in',
    title: 'ML x backend x product',
    body: 'I like turning technical depth into experiences that feel clear, fast, and reliable.',
  },
  {
    eyebrow: 'What I bring',
    title: 'Builder energy with systems thinking',
    body: 'From experiments to infrastructure, I care about shipping work that survives real usage.',
  },
]

export default function Hero() {
  return (
    <section className="section-shell hero-gradient min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb absolute left-[6%] top-24 h-44 w-44 rounded-full bg-terracotta/15 blur-3xl" />
        <div className="ambient-orb absolute right-[8%] top-36 h-52 w-52 rounded-full bg-sage/16 blur-3xl" />
        <div className="ambient-note absolute left-[52%] top-24 hidden rounded-2xl border border-white/60 bg-white/55 px-4 py-3 text-xs font-medium text-warm-gray shadow-warm sm:block">
          Built across Shopify, Amazon, GM, Dayforce, and OpenText
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/10 px-3.5 py-1.5 text-sm font-medium text-terracotta">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
              Open to SDE & MLE roles
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.22em] text-warm-gray-light">
              Olivia Ouyang
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] text-warm-black md:text-7xl">
              Engineer first.
              <br />
              <span className="text-terracotta">Human-centered.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-gray md:text-xl">
              UWaterloo CS new grad building recommendation models, developer tools,
              and backend systems with the same goal: make complex things feel
              intuitive, useful, and worth trusting.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-warm-border bg-white/70 px-4 py-2 text-sm font-medium text-warm-gray shadow-warm-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white shadow-warm transition-all duration-200 hover:bg-terracotta-dark hover:shadow-warm-md"
              >
                Explore projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-white/70 px-6 py-3 text-sm font-medium text-warm-black transition-all duration-200 hover:border-terracotta/40 hover:shadow-warm"
              >
                Let&apos;s connect
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-warm-gray-light">
                Find me on
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/OliviaOY-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="card-lift rounded-2xl border border-warm-border bg-white/75 p-3 text-warm-gray shadow-warm-sm transition-all duration-200 hover:text-warm-black"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/oliviayixinoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="card-lift rounded-2xl border border-warm-border bg-white/75 p-3 text-warm-gray shadow-warm-sm transition-all duration-200 hover:text-warm-black"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="section-card rounded-[2rem] p-5 md:p-6">
              <div className="rounded-[1.7rem] border border-white/70 bg-white/55 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
                    Quick snapshot
                  </p>
                  <span className="rounded-full bg-sage/15 px-3 py-1 text-xs font-medium text-sage-dark">
                    Summer 2026 start
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {snapshotCards.map((card) => (
                    <div
                      key={card.title}
                      className="card-lift rounded-3xl border border-warm-border bg-cream-card/90 p-5"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-warm-gray-light">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-warm-black">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-warm-border bg-white/70 p-4 text-center">
                    <p className="font-display text-2xl font-bold text-warm-black">5</p>
                    <p className="mt-1 max-w-[7rem] text-center text-xs uppercase leading-tight tracking-[0.18em] text-warm-gray-light">
                      Co-op terms
                    </p>
                  </div>
                  <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-warm-border bg-white/70 p-4 text-center">
                    <p className="font-display text-2xl font-bold text-warm-black">3</p>
                    <p className="mt-1 max-w-[7rem] text-center text-xs uppercase leading-tight tracking-[0.18em] text-warm-gray-light">
                      Focus areas
                    </p>
                  </div>
                  <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-warm-border bg-white/70 p-4 text-center">
                    <p className="font-display text-2xl font-bold text-warm-black">1</p>
                    <p className="mt-1 max-w-[7rem] text-center text-xs uppercase leading-tight tracking-[0.18em] text-warm-gray-light">
                      Builder mindset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
