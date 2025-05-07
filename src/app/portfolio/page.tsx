import type { Metadata } from 'next';
import PortfolioPage from '@/components/pages/portfolio/PortfolioPage';

export const metadata: Metadata = {
  title: 'Portfolio | GenDev - Web Design & Development',
  description: 'Browse our portfolio of web design, development, and technical optimization projects for businesses across various industries.',
  keywords: 'web design portfolio, web development projects, email templates, client projects, case studies, technical optimization',
  openGraph: {
    title: 'Portfolio | GenDev - Web Design & Development',
    description: 'See how we\'ve helped businesses transform their digital presence with custom web design, email templates and technical optimization.',
    url: 'https://gendev.dev/portfolio',
    siteName: 'GenDev',
    images: [
      {
        url: '/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'GenDev Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Portfolio() {
  return <PortfolioPage />;
}
