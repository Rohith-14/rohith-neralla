import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohith Neralla | Software Engineer',
  description: 'Full-stack Software Engineer specializing in React, Next.js, and React Native. Building modern, scalable web applications.',
  keywords: ['Software Engineer', 'React Developer', 'Full Stack Developer', 'Next.js', 'React Native'],
  authors: [{ name: 'Rohith Neralla' }],
  openGraph: {
    title: 'Rohith Neralla | Software Engineer',
    description: 'Full-stack Software Engineer specializing in React, Next.js, and React Native.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
