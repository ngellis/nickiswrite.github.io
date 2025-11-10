import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nicholas Ellis | Screenwriter',
  description: 'Screenwriter portfolio showcasing creative storytelling and screenwriting services.',
  keywords: ['screenwriter', 'screenplay', 'film', 'television', 'writer', 'storytelling'],
  authors: [{ name: 'Nicholas Ellis' }],
  openGraph: {
    title: 'Nicholas Ellis | Screenwriter',
    description: 'Screenwriter portfolio showcasing creative storytelling and screenwriting services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
