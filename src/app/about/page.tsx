import type { Metadata } from 'next';
import AboutPage from '@/components/pages/about/AboutPage';

export const metadata: Metadata = {
  title: 'About Me | Deyan - Web Development & Data Solutions',
  description: 'Learn more about my professional background, skills and experience in web development and data analysis.',
};

export default function About() {
  return <AboutPage />;
}
