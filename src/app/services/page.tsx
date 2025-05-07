import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/services/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | GenDev - Web Design & Development',
  description: 'Professional services including web design & development, custom email templates, technical consultation, and technical audit & optimization for businesses.',
  keywords: 'web design services, web development, custom email templates, technical audit, optimization, technical consultation, Sofia',
  openGraph: {
    title: 'Services | GenDev - Web Design & Development',
    description: 'Explore our professional web design, email template development, and technical optimization services designed to elevate your digital presence.',
    url: 'https://gendev.dev/services',
    siteName: 'GenDev',
    images: [
      {
        url: '/og-services.jpg', 
        width: 1200,
        height: 630,
        alt: 'GenDev Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Services() {
  return <ServicesPage />;
}
