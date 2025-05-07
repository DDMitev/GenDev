import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/pages/portfolio/ProjectDetailPage';

type ProjectDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  // In a real implementation, this would fetch from a database
  // For this demo, we're hardcoding the project details
  if (params.id === 'buildholding') {
    return {
      title: 'BuildHolding Corporate Website | GenDev Portfolio',
      description: 'Case study of the BuildHolding corporate website redesign, including multi-language support and custom admin panel.',
    };
  } else if (params.id === 'gendev-website') {
    return {
      title: 'GenDev Portfolio Website | GenDev Portfolio',
      description: 'Case study of our own portfolio website designed and developed as a showcase of our design philosophy and technical capabilities.',
    };
  } else if (params.id === 'newsletter-template') {
    return {
      title: 'Monthly Newsletter Template | GenDev Portfolio',
      description: 'Case study of our custom responsive newsletter template designed for high engagement and deliverability across all major email clients.',
    };
  } else if (params.id === 'promotional-email') {
    return {
      title: 'Promotional Discount Template | GenDev Portfolio',
      description:
        'High-impact promotional email template with discount presentation and conversion-focused design.',
    };
  }

  return {
    title: 'Project Not Found | GenDev Portfolio',
    description: 'The requested project could not be found.',
  };
}

export default function ProjectDetail({ params }: ProjectDetailPageProps) {
  const { id } = params;
  
  // Validate the project ID
  const validProjectIds = ['buildholding', 'gendev-website', 'newsletter-template', 'promotional-email'];
  
  if (!validProjectIds.includes(id)) {
    notFound();
  }
  
  return <ProjectDetailPage projectId={id} />;
}
