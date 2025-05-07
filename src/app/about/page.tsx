import type { Metadata } from 'next';
import AboutPage from '@/components/pages/about/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | GenDev - Web Design & Development',
  description: 'Learn about GenDev, our team of experts, our values, and our approach to delivering exceptional web design and development services.',
  keywords: 'web design agency, Sofia Bulgaria, web development team, GenDev, web design experts, technical audit specialists',
  openGraph: {
    title: 'About GenDev | Web Design & Development Agency in Sofia',
    description: 'Meet the team behind GenDev - a partnership of experienced web design professionals based in Sofia, Bulgaria, serving clients worldwide.',
    url: 'https://gendev.dev/about',
    siteName: 'GenDev',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'The GenDev Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function About() {
  return <AboutPage />;
}
