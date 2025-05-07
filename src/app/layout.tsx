import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gendev.dev'),
  title: {
    template: '%s | GenDev',
    default: 'GenDev - Web Design, Development & Technical Optimization',
  },
  description: 'Professional web design, development, and technical optimization services for businesses looking to enhance their digital presence',
  keywords: 'web design, web development, email templates, technical audit, optimization, Bulgaria, Sofia',
  authors: [{ name: 'GenDev Team' }],
  creator: 'GenDev',
  publisher: 'GenDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gendev.dev/',
    siteName: 'GenDev',
    title: 'GenDev - Web Design, Development & Technical Optimization',
    description: 'Professional web design, development, and technical optimization services for businesses',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GenDev - Web Design & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenDev - Web Design, Development & Technical Optimization',
    description: 'Professional web design, development, and technical optimization services',
    images: ['/twitter-image.jpg'],
    creator: '@gendev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
