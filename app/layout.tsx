import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Forget Nukeri - Software Developer & IT Support Specialist | Portfolio',
  description: 'Portfolio of Forget Nukeri - Information Technology Graduate specializing in full-stack development and IT support. Expertise in React, Next.js, Python, Java, C++, system administration, and technical troubleshooting. Available for software engineering and IT support opportunities.',
  keywords: ['Software Developer', 'IT Support Specialist', 'Full-Stack Developer', 'React', 'Next.js', 'Python', 'Java', 'C++', 'IT Technician', 'System Administrator', 'Technical Support', 'Portfolio', 'North-West University', 'Forget Nukeri'],
  authors: [{ name: 'Forget Nukeri' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Forget Nukeri - Software Developer & IT Support Specialist',
    description: 'IT Graduate with expertise in full-stack development, IT support, and technical problem-solving. 150+ students mentored. Available for hire.',
    type: 'website',
    locale: 'en_ZA',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
