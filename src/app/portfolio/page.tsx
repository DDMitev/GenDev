import type { Metadata } from 'next';
import PortfolioPage from '@/components/pages/portfolio/PortfolioPage';

export const metadata: Metadata = {
  title: 'Portfolio | Deyan - Web Development & Data Solutions',
  description: 'Explore my portfolio of web development and data analysis projects, showcasing my skills and expertise.',
};

export default function Portfolio() {
  return <PortfolioPage />;
}
