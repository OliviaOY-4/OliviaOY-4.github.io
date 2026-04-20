import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Olivia Ouyang — Software & ML Engineer',
  description:
    'CS student passionate about building thoughtful software and practical ML systems. Looking for SDE and ML roles.',
  keywords: ['software engineer', 'machine learning', 'CS student', 'portfolio'],
  openGraph: {
    title: 'Olivia Ouyang — Software & ML Engineer',
    description: 'CS student passionate about building thoughtful software and practical ML systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
