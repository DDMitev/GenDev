import type { Metadata } from 'next';
import HeroSection from '../components/sections/home/HeroSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import FeaturedProjectSection from '../components/sections/home/FeaturedProjectSection';
import CTASection from '../components/sections/home/CTASection';

export const metadata: Metadata = {
  title: 'GenDev - Professional Web Design & Development Agency',
  description: 'GenDev creates stunning websites, custom email templates, and provides technical audit & optimization services for businesses in Sofia and worldwide.',
  keywords: 'web design, web development, email templates, technical audit, optimization, Sofia, Bulgaria',
  openGraph: {
    title: 'GenDev - Professional Web Design & Development Agency',
    description: 'We create stunning websites, custom email templates, and technical optimization solutions that drive results.',
    url: 'https://gendev.dev',
    siteName: 'GenDev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GenDev - Web Design & Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <CTASection />
    </>
  );
}
