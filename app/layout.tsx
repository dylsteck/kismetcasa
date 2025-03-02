import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BASE_URL, frame, OG_BANNER_URL } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    url: BASE_URL,
    siteName: PAGE.title,
    images: [
      {
        url: OG_BANNER_URL,
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
    images: [OG_BANNER_URL],
  },
  other: {
    'fc:frame': JSON.stringify(frame),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
