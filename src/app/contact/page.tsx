import type { Metadata } from 'next';
import ContactPage from '@/components/pages/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Deyan - Web Development & Data Solutions',
  description: 'Get in touch to discuss your project needs, ask questions, or schedule a consultation.',
};

export default function Contact() {
  return <ContactPage />;
}
