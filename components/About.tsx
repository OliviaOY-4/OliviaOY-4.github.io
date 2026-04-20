import type { ReactNode } from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-cream">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-[-6rem] h-72 w-72 rounded-full bg-terracotta/12 blur-3xl" />
        <div className="absolute top-24 right-[-4rem] h-64 w-64 rounded-full bg-sage/16 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/3 h-56 w-56 rounded-full bg-warm-border/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(212,132,106,0.16) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionLabel>About me</SectionLabel>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/60 bg-cream/80 px-6 py-8 shadow-warm-md backdrop-blur-sm md:px-10 md:py-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-terracotta/70 via-sage/70 to-terracotta/70" />
          <div className="absolute right-6 top-6 hidden h-20 w-20 rounded-full border border-terracotta/20 md:block" />
          <div className="absolute bottom-6 left-6 hidden h-16 w-16 rounded-full border border-sage/25 md:block" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-terracotta/20 to-sage/20 translate-x-3 translate-y-3" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-warm-md border-2 border-warm-border">
                  <Image
                    src="/images/userimage.jpeg"
                    alt="Olivia Ouyang"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-black mb-5 leading-tight">
                I build the kind of software people actually want to use.
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  I&apos;m Olivia, a Waterloo Computer Science student who enjoys working
                  where machine learning, backend systems, and product thinking meet.
                </p>
                <p>
                  I&apos;ve built recommendation models at Shopify, developer tools at Amazon,
                  and large-scale systems across automotive and enterprise software. I like
                  solving hard technical problems, then shaping them into products that feel
                  clear, fast, and dependable.
                </p>
                <p>
                  I&apos;m currently looking for{' '}
                  <strong className="text-warm-black font-semibold">
                    full-time SDE and ML engineering roles
                  </strong>{' '}
                  where I can learn quickly, raise the bar, and ship work that matters.
                </p>
              </div>

              {/* Fun facts */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { emoji: '🎓', label: 'CS @ University of Waterloo' },
                  { emoji: '🛠️', label: 'Backend + ML systems' },
                  { emoji: '📍', label: 'Toronto / Waterloo' },
                  { emoji: '✉️', label: 'Open to remote / US / Canada' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl bg-cream-card/90 border border-warm-border px-4 py-3 text-sm text-warm-gray shadow-warm-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream border border-warm-border shrink-0">
                      {item.emoji}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-0.5 rounded-full bg-terracotta" />
      <span className="font-display font-semibold text-sm uppercase tracking-widest text-terracotta">
        {children}
      </span>
    </div>
  )
}

export { SectionLabel }
