import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://surreyflyscreens.co.uk'),
  title: {
    default: 'Surrey Fly Screens | Custom Fly Screen Installation Surrey & Surrey Hills',
    template: '%s | Surrey Fly Screens',
  },
  description:
    'Expert fly screen installation across Surrey. Custom window screens, door fly screens, and bi-fold door solutions. Free quotes. Trusted local specialists.',
  keywords: [
    'fly screens Surrey',
    'fly screen installation',
    'window fly screens',
    'door fly screens',
    'bi-fold door screens',
    'insect screens Surrey',
    'Surrey fly screen company',
    'retractable fly screens',
  ],
  authors: [{ name: 'Surrey Fly Screens' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://surreyflyscreens.co.uk',
    siteName: 'Surrey Fly Screens',
    title: 'Surrey Fly Screens | Expert Installation Across Surrey',
    description:
      'Custom fly screen installation for windows, doors, and bi-fold openings. Free quotes. Local Surrey specialists.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Surrey Fly Screens — Premium Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surrey Fly Screens | Expert Installation',
    description: 'Custom fly screens for your home. Free quotes across Surrey.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1C4A35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
