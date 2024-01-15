/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ReactNode } from 'react'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const PAGE = {
  title: 'Kismet Casa',
  description: 'Creating Kismet ☀️',
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: 'https://kismetcasa.xyz',
    siteName: PAGE.title,
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
    title: PAGE.title,
    description: PAGE.description,
    creator: '@kismetcasa',
    images: ['https://i.imgur.com/zIqo5LQ.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:video"
          content="https://ipfs.decentralized-content.com/ipfs/bafybeigyvighxwjj5hoyc6iqy7j43pszflkb6d2g2sci5tvsnuyqsnapxe"
        />
        <meta
          property="og:video:secure_url"
          content="https://ipfs.decentralized-content.com/ipfs/bafybeigyvighxwjj5hoyc6iqy7j43pszflkb6d2g2sci5tvsnuyqsnapxe"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
