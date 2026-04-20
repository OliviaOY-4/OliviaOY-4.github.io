import { SectionLabel } from './About'

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-terracotta/8 via-cream-card to-sage/8 border border-warm-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-warm">
          <div>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-2xl md:text-3xl text-warm-black max-w-sm leading-snug">
              Want the full picture?
            </h2>
            <p className="mt-2 text-warm-gray text-sm md:text-base max-w-sm leading-relaxed">
              Download my resume for a complete view of my education, experience, and projects.
              Always happy to chat if you have questions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/images/Olivia_2026_Resume_2.3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white font-medium text-sm hover:bg-terracotta-dark transition-all duration-200 shadow-warm hover:shadow-warm-md"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2V10M5 7L8 10L11 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 13H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Download PDF
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-warm-border bg-cream text-warm-black font-medium text-sm hover:border-terracotta/40 hover:shadow-warm-sm transition-all duration-200"
            >
              Reach out instead
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
