import type { Metadata } from 'next';
import ContactPage from '@/components/pages/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | GenDev - Web Design & Development',
  description: 'Get in touch with GenDev for your web design, development, and technical optimization needs. We\'re here to help transform your digital presence.',
  keywords: 'contact GenDev, web design agency Sofia, web development consultation, technical optimization services, custom email templates',
  openGraph: {
    title: 'Contact GenDev | Web Design & Development Agency',
    description: 'Ready to discuss your project? Contact our team of web design and development experts based in Sofia, Bulgaria.',
    url: 'https://gendev.dev/contact',
    siteName: 'GenDev',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact GenDev',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactPage />;
}
