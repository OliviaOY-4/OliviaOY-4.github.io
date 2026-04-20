import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFAF6',
        'cream-card': '#FFF8F2',
        terracotta: '#D4846A',
        'terracotta-light': '#E8A08A',
        'terracotta-dark': '#B8694F',
        sage: '#7B9E87',
        'sage-light': '#9AB8A5',
        'sage-dark': '#5C8068',
        'warm-black': '#2D2926',
        'warm-gray': '#7A6F6A',
        'warm-gray-light': '#B8ADA8',
        'warm-border': '#EDE7DF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(45, 41, 38, 0.06), 0 1px 2px rgba(45, 41, 38, 0.04)',
        'warm': '0 4px 12px rgba(45, 41, 38, 0.08), 0 2px 6px rgba(45, 41, 38, 0.04)',
        'warm-md': '0 8px 24px rgba(45, 41, 38, 0.10), 0 4px 10px rgba(45, 41, 38, 0.05)',
        'warm-lg': '0 16px 40px rgba(45, 41, 38, 0.12), 0 6px 16px rgba(45, 41, 38, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
