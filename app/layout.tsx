import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://valentine-day-wish.netlify.app'),
  title: "Happy Valentine's Day 💕",
  description: "A special Valentine's Day wish for my beautiful partner",
  keywords: ['valentine', 'valentines day', 'love', 'romantic', 'wish', 'greeting'],
  authors: [{ name: 'Lahiru' }],
  creator: 'Lahiru',
  openGraph: {
    title: "Happy Valentine's Day 💕",
    description: "A special Valentine's Day wish for my beautiful partner",
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: "Valentine's Day Wish",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Happy Valentine's Day 💕",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Happy Valentine's Day 💕",
    description: "A special Valentine's Day wish for my beautiful partner",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ef4444',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
