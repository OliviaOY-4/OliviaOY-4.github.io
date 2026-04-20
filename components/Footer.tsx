export default function Footer() {
  return (
    <footer className="py-8 bg-cream border-t border-warm-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-warm-gray-light">
        <span className="font-display font-semibold text-warm-gray">
          Olivia O<span className="text-terracotta">.</span>
        </span>
        <span>Designed & built by Olivia Ouyang · {new Date().getFullYear()}</span>
        <a
          href="https://github.com/OliviaOY-4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-warm-gray transition-colors"
        >
          View source
        </a>
      </div>
    </footer>
  )
}
