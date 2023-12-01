import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kismet Casa',
  description: 'Creating Kismet ☀️',
  openGraph: {
    title: 'Kismet Casa',
    description: 'Creating Kismet ☀️',
    url: 'https://kismetcasa.vercel.app',
    siteName: 'Kismet Casa',
    images: [
      {
        url: 'https://i.imgur.com/zIqo5LQ.png',
        width: 1200,
        height: 634,
        alt: 'og:image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kismet Casa',
    description: 'Creating Kismet ☀️',
    creator: '@kismetcasa',
    images: ['https://i.imgur.com/zIqo5LQ.png'],
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
