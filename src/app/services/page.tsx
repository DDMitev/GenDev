import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/services/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Deyan - Web Development & Data Solutions',
  description: 'Professional services including web development, data analysis, and technical consulting for businesses and organizations.',
};

export default function Services() {
  return <ServicesPage />;
}
