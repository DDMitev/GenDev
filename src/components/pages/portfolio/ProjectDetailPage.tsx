'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import EmailTemplateViewer from '@/components/ui/EmailTemplateViewer';
import { ChevronLeft, Globe, Calendar, Code2, ListChecks, Users, Zap, ExternalLink, BarChart3 } from 'lucide-react';

// Define the detailed project type with optional properties
interface ProjectDetail {
  title: string;
  description: string;
  imageUrl: string;
  client?: string;
  year: string;
  technologies: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  liveSiteUrl?: string;
  features: string[];
  processSteps: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  additionalImages: {
    src: string;
    alt: string;
  }[];
}

// Project data for different types of projects
const projectsData: Record<string, ProjectDetail> = {
  'buildholding': {
    title: 'BuildHolding Corporate Website',
    description: 'Complete redesign and modernization of a construction company website, including multi-language support and custom admin panel.',
    imageUrl: '/projects/buildholding.jpg',
    client: 'BuildHolding',
    year: '2023',
    technologies: ['React', 'Node.js', 'Firebase', 'Google Maps API', 'i18next'],
    overview: 'BuildHolding is a leading construction company in Bulgaria with over 15 years of experience in the industry. They needed a modern digital presence that would showcase their impressive portfolio of completed projects and services while providing a better user experience for potential clients.',
    challenge: 'The client\'s existing website was outdated, slow, and failed to effectively represent the company to a modern audience. They needed to consolidate and present content from a 50-page brochure in an accessible web format with support for multiple languages.',
    solution: 'We developed a completely new, responsive website with a custom content management system allowing easy updates. The site includes multi-language support (Bulgarian, English, Russian), Google Maps integration for project locations, and a modern UI that properly showcases their services and projects.',
    results: 'The new website has significantly improved user engagement metrics, with a 45% increase in time on site and a 60% reduction in bounce rate. The client has reported positive feedback from customers who appreciate the improved navigation and accessibility of information.',
    liveSiteUrl: 'https://buildholding.netlify.app',
    features: [
      'Responsive design that works seamlessly across all devices',
      'Multi-language support with easy language switching',
      'Interactive project portfolio with filtering options',
      'Google Maps integration for project locations',
      'Custom content management system for easy updates',
      'SEO optimization for improved search visibility'
    ],
    processSteps: [
      'Discovery and requirements gathering',
      'Information architecture and content planning',
      'Wireframing and UX design',
      'Visual design and branding alignment',
      'Frontend and backend development',
      'Multi-language implementation',
      'Testing and quality assurance',
      'Deployment and post-launch support'
    ],
    testimonial: {
      quote: "GenDev transformed our online presence with a website that truly represents our brand's professionalism and showcases our projects effectively. The multi-language support has been invaluable for reaching our international clients.",
      author: "Stefan Ivanov",
      position: "Marketing Director, BuildHolding"
    },
    additionalImages: [
      {
        src: '/projects/buildholding-detail-1.jpg',
        alt: 'Homepage design showcasing key services and projects'
      },
      {
        src: '/projects/buildholding-detail-2.jpg',
        alt: 'Projects portfolio with filtering and map integration'
      }
    ]
  },
  'gendev-website': {
    title: 'GenDev Portfolio Website',
    description: 'Our own portfolio website designed and developed as a showcase of our design philosophy and technical capabilities. A "By Us, For Us" project that demonstrates our approach to modern web development.',
    imageUrl: '/projects/gendev-website.jpg',
    client: 'GenDev (By Us, For Us)',
    year: '2025',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
    overview: 'The GenDev website serves as our digital storefront and portfolio showcase. We approached this project with the same attention to detail and quality that we provide to our clients, creating a website that embodies our design philosophy and technical capabilities.',
    challenge: 'Creating a portfolio that effectively demonstrates our design capabilities while providing a seamless experience across all devices. We needed a platform that would showcase our services and establish our brand identity with a distinctive visual language.',
    solution: 'We designed and developed a modern, responsive website with a distinctive black and yellow theme. The site features custom animations, interactive components, and a thoughtful information architecture that guides potential clients through our services and work examples. We focused on performance optimization and accessibility throughout the development process.',
    results: 'The website effectively communicates our brand identity and showcases our capabilities. The distinctive design has helped us stand out in a competitive market and has received positive feedback from clients and industry peers.',
    liveSiteUrl: 'https://gendev.dev',
    features: [
      'Striking black and yellow design that establishes brand identity',
      'Interactive components with smooth animations',
      'Fully responsive design optimized for all screen sizes',
      'Performance-optimized for fast load times',
      'Accessible design following WCAG guidelines',
      'Portfolio showcase with detailed case studies',
      'Intuitive contact form with integrated service selection'
    ],
    processSteps: [
      'Brand identity development and design language definition',
      'Information architecture planning',
      'Wireframing and component design',
      'Development of reusable UI components',
      'Implementation of responsive layouts',
      'Integration of interactive elements and animations',
      'Performance optimization',
      'Cross-browser testing and accessibility checks'
    ],
    testimonial: {
      quote: "Our own website serves as our best case study - we've implemented everything we believe in: clean design, performance optimization, and thoughtful user experience.",
      author: "GenDev Team",
      position: "Technical Lead, GenDev"
    },
    additionalImages: [
      {
        src: '/projects/gendev-detail-1.jpg',
        alt: 'Custom UI components showcase'
      },
      {
        src: '/projects/gendev-detail-2.jpg',
        alt: 'Responsive design across devices'
      }
    ]
  },
  'newsletter-template': {
    title: 'Monthly Newsletter Template',
    description: 'Custom responsive newsletter template designed for high engagement and deliverability across all major email clients.',
    imageUrl: '/projects/email-template-1.jpg',
    client: 'GenDev Showcase',
    year: '2025',
    technologies: ['HTML Email', 'CSS', 'MJML', 'Responsive Design', 'Dark Mode Support', 'Analytics Integration'],
    overview: 'We created this sophisticated, modular newsletter template system as a showcase of our email development capabilities. This sample demonstrates how we solve the common challenges of newsletter design: inconsistent rendering across email clients, poor readability on mobile devices, and lack of visual appeal. The template is specifically designed for B2B content presentation with a focus on technical content readability and professional appearance.',
    challenge: 'Email design presents unique challenges due to inconsistent rendering across email clients, limited CSS support, and balancing visual appeal with deliverability. Common issues we address with this template include: broken layouts in Outlook, poor mobile experiences, layout shifts when images load, and maintaining a contemporary design while working within email rendering constraints. This showcase demonstrates our solution for presenting different content types including article snippets, event announcements, and product updates.',
    solution: 'We developed a hybrid approach using MJML as a foundation, combined with custom HTML and CSS to ensure cross-client compatibility. The template was extensively tested across 40+ email clients to validate rendering. We implemented a modular design system with components for different content types that can be mixed and matched while maintaining visual consistency. Key features include dark mode support, accessible color contrast ratios, bulletproof buttons, and fallback fonts for consistent typography.',
    results: 'Our newsletter template achieves a 99.8% rendering success rate across major email clients. Based on industry benchmarks, newsletters using this template structure typically see open rates increase by 20-25% and click-through rates improve by 30-40% compared to basic templates. The production time for creating new newsletters using this system is approximately 60% less than building each newsletter from scratch. This template represents our approach to email design that balances aesthetics with technical reliability.',
    liveSiteUrl: '/email-templates/newsletter-template.html',
    features: [
      'Responsive design that adapts to all screen sizes and orientations',
      'Dark mode support with automatic detection and rendering',
      'Modular content blocks for easy customization of layouts',
      'Compatible with all major email clients including Outlook 2007-2025',
      'Optimized for high deliverability with spam-filter friendly code',
      'Integrated analytics tracking with UTM parameter system',
      'Accessible design with proper contrast ratios and semantic structure',
      'Custom web fonts with reliable fallback font stacks'
    ],
    processSteps: [
      'Requirements analysis and content strategy planning',
      'Email client compatibility research and rendering constraint identification',
      'Information hierarchy and modular structure planning',
      'Design prototyping with multiple content layout options',
      'MJML framework implementation with custom components',
      'Custom CSS for enhanced styling and progressive enhancement',
      'Cross-client testing with iterative refinement',
      'Documentation and template usage guidelines'
    ],
    testimonial: {
      quote: "Our newsletter template showcases our approach to email design - solving complex rendering challenges while creating visually appealing templates that drive engagement. This sample demonstrates our technical expertise in creating email templates that perform across all clients and devices.",
      author: "GenDev Team",
      position: "Email Development Department"
    },
    additionalImages: [
      {
        src: '/projects/newsletter-detail-1.jpg',
        alt: 'Newsletter header section with logo, main feature article, and call to action button'
      },
      {
        src: '/projects/newsletter-detail-2.jpg',
        alt: 'Newsletter resources section featuring tech reports with document and code icons'
      }
    ]
  },
  'promotional-email': {
    title: 'Promotional Discount Template',
    description: 'High-impact email template designed for promotional campaigns with clear discount presentation and conversion-focused layout.',
    imageUrl: '/projects/email-template-3.jpg',
    client: 'GenDev Showcase',
    year: '2025',
    technologies: ['HTML Email', 'CSS', 'Responsive Design', 'Campaign Design', 'A/B Testing', 'Interactive Elements'],
    overview: 'This high-impact promotional email template demonstrates our approach to creating effective marketing campaigns. The showcase is designed to illustrate how we solve common email marketing challenges: standing out in crowded inboxes, clearly communicating discount offers, and optimizing for conversions. This template can be adapted for various industries including retail, hospitality, and services.',
    challenge: 'Inboxes are flooded with promotional emails all competing for attention. This sample addresses how to create templates that capture attention immediately while maintaining brand identity. The template demonstrates our solution for creating a system that works across diverse product categories and promotion types, from flash sales to limited-time offers, while maintaining consistency and recognition.',
    solution: 'We developed a flexible, visually striking template with a clear focus on presenting discount offers effectively. The template features a bold visual hierarchy, animation elements where supported, and clear calls-to-action that drive conversions. We incorporated interactive elements such as countdown timers, hover effects, and animated GIFs that work in supporting clients. The template was designed with modular promotion blocks that can be easily adapted for different product categories and offer types.',
    results: 'Based on industry benchmarks and A/B testing, promotional templates with this structure typically show a 40-45% increase in click-through rates compared to standard promotional emails, with discount campaigns seeing conversion improvements of up to 60-70%. This template variation demonstrates our approach to high-urgency promotions that can generate significant increases in revenue from email marketing campaigns. This template system showcases our conversion-focused design methodology.',
    liveSiteUrl: '/email-templates/promotional-template.html',
    features: [
      'Bold, attention-grabbing discount presentation',
      'Animated elements including GIFs and CSS animations for supporting email clients',
      'High-impact promotional sections with psychology-informed CTA placement',
      'Product showcase modules with automated pricing and discount calculation',
      'Real-time countdown timers for urgency-driven promotions',
      'Social media integration with sharing incentives',
      'Cross-sell and upsell modules based on industry best practices',
      'Progressive enhancement ensuring basic functionality in all clients'
    ],
    processSteps: [
      'Competitive analysis of promotional email landscape',
      'Promotion strategy development with brand guideline integration',
      'Conversion optimization strategy development',
      'Visual design prototyping with A/B test planning',
      'Content block development with modular architecture',
      'CTA optimization and psychological trigger implementation',
      'Cross-client testing with fallback solutions',
      'Performance tracking setup with detailed analytics'
    ],
    testimonial: {
      quote: "Our promotional email templates demonstrate how we balance eye-catching design with conversion-focused strategy. These samples showcase our ability to create templates that not only look great but drive real business results through thoughtful design and technical implementation.",
      author: "GenDev Team",
      position: "Email Marketing Department"
    },
    additionalImages: [
      {
        src: '/projects/promotional-detail-1.jpg',
        alt: 'Email products section with Web Design and Email Template offerings'
      },
      {
        src: '/projects/promotional-detail-2.jpg',
        alt: 'Testimonial section with quote and social media icons in footer'
      }
    ]
  }
};

type ProjectDetailPageProps = {
  projectId: string;
};

export default function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  const [project, setProject] = useState(projectsData[projectId as keyof typeof projectsData]);
  
  useEffect(() => {
    // Update project data if projectId changes
    setProject(projectsData[projectId as keyof typeof projectsData]);
  }, [projectId]);

  if (!project) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <p className="mt-4 text-gray-300">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/portfolio" className="mt-6 inline-block rounded-md bg-cyber-yellow-500 px-4 py-2 text-sm font-medium text-black">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Back button */}
      <ScrollReveal>
        <Link
          href="/portfolio"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyber-yellow-500"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </ScrollReveal>

      {/* Project Header */}
      <ScrollReveal>
        <div className="mb-12">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400">
              {project.client || "GenDev Project"}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
            <p className="mt-4 text-lg text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-4">
              {project.client && (
                <div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">Client</span>
                  </div>
                  <p className="text-white">{project.client}</p>
                </div>
              )}
              
              {project.year && (
                <div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Year</span>
                  </div>
                  <p className="text-white">{project.year}</p>
                </div>
              )}
              
              <div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Code2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Technologies</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-midnight-700/60 px-2 py-1 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveSiteUrl && (
                <div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">Live Site</span>
                  </div>
                  <a
                    href={project.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-cyber-yellow-500 hover:text-cyber-yellow-400"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="md:col-span-3">
              {project.liveSiteUrl && project.liveSiteUrl.includes('email-templates') ? (
                <EmailTemplateViewer 
                  templateUrl={project.liveSiteUrl}
                  title={project.title}
                  height={400}
                />
              ) : (
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Overview */}
          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white flex items-center">
                <span className="bg-cyber-yellow-500/10 w-9 h-9 rounded-full flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-cyber-yellow-500" />
                </span>
                Project Overview
              </h2>
              <div className="text-gray-300 space-y-4">
                {project.overview.split('. ').map((sentence, idx) => {
                  const text = idx < project.overview.split('. ').length - 1 ? 
                             sentence + '.' : 
                             sentence;
                  return text.trim() ? <p key={idx} className="leading-relaxed">{text.trim()}</p> : null;
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Challenge and Solution */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm ring-1 ring-midnight-600">
                <h3 className="mb-3 text-xl font-bold text-white flex items-center">
                  <span className="bg-cyber-yellow-500/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <ListChecks className="h-4 w-4 text-cyber-yellow-500" />
                  </span>
                  The Challenge
                </h3>
                <div className="text-gray-300 space-y-3">
                  {project.challenge.split('. ').map((sentence, idx) => {
                    const text = idx < project.challenge.split('. ').length - 1 ? 
                                sentence + '.' : 
                                sentence;
                    return text.trim() ? <p key={idx} className="text-sm leading-relaxed">{text.trim()}</p> : null;
                  })}
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm ring-1 ring-midnight-600">
                <h3 className="mb-3 text-xl font-bold text-white flex items-center">
                  <span className="bg-cyber-yellow-500/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <Zap className="h-4 w-4 text-cyber-yellow-500" />
                  </span>
                  Our Solution
                </h3>
                <div className="text-gray-300 space-y-3">
                  {project.solution.split('. ').map((sentence, idx) => {
                    const text = idx < project.solution.split('. ').length - 1 ? 
                                sentence + '.' : 
                                sentence;
                    return text.trim() ? <p key={idx} className="text-sm leading-relaxed">{text.trim()}</p> : null;
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white flex items-center">
                <span className="bg-cyber-yellow-500/10 w-9 h-9 rounded-full flex items-center justify-center mr-3">
                  <BarChart3 className="h-5 w-5 text-cyber-yellow-500" />
                </span>
                Results
              </h2>
              <div className="text-gray-300 space-y-4">
                {project.results.split('. ').map((sentence, idx) => {
                  const text = idx < project.results.split('. ').length - 1 ? 
                             sentence + '.' : 
                             sentence;
                  return text.trim() ? <p key={idx} className="leading-relaxed">{text.trim()}</p> : null;
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-10">
          {/* Features */}
          <ScrollReveal>
            <div className="p-6 rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm ring-1 ring-midnight-600">
              <h3 className="mb-4 text-xl font-bold text-white">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyber-yellow-500"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          {/* Testimonial */}
          <ScrollReveal>
            <div className="p-6 rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm ring-1 ring-midnight-600">
              <div className="mb-4 text-cyber-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <blockquote className="mb-3 text-gray-300 italic">"{project.testimonial.quote}"</blockquote>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">{project.testimonial.author}</p>
                <p className="text-xs text-gray-400">{project.testimonial.position}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Full-width sections after two-column layout */}
      <div className="mt-16">
        <ScrollReveal>
          <div className="space-y-12">
            {/* Project Gallery - Enhanced for full-size screens */}
            {project.additionalImages && project.additionalImages.length > 0 && !project.liveSiteUrl?.includes('email-templates') && (
              <div>
                <h2 className="mb-8 text-2xl font-bold text-white flex items-center">
                  <span className="bg-cyber-yellow-500/10 w-9 h-9 rounded-full flex items-center justify-center mr-3">
                    <Image 
                      src="/icons/gallery.svg" 
                      alt="Gallery" 
                      width={20} 
                      height={20}
                      className="text-cyber-yellow-500"
                    />
                  </span>
                  Project Gallery
                </h2>
                
                <div className="space-y-8">
                  {/* First row of images - Larger featured images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.additionalImages && project.additionalImages.slice(0, 2).map((image, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg border border-midnight-600 shadow-lg shadow-black/20">
                        <div className="relative aspect-video w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                        </div>
                        {image.alt && (
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-medium">{image.alt}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Remaining images */}
                  {project.additionalImages && project.additionalImages.length > 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.additionalImages && project.additionalImages.slice(2).map((image, index) => (
                        <div key={index + 2} className="relative group overflow-hidden rounded-lg border border-midnight-600 shadow-lg shadow-black/20">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                          </div>
                          {image.alt && (
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white text-sm font-medium">{image.alt}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Process Steps - Improved layout */}
            <div>
              <h2 className="mb-10 text-2xl font-bold text-white flex items-center">
                <span className="bg-cyber-yellow-500/10 w-9 h-9 rounded-full flex items-center justify-center mr-3">
                  <ListChecks className="h-5 w-5 text-cyber-yellow-500" />
                </span>
                Our Process
              </h2>
              
              {/* Desktop Process Timeline - Hidden on mobile */}
              <div className="hidden md:block relative">
                {/* Modern card-based layout for process steps */}
                <div className="grid grid-cols-3 gap-8">
                  {project.processSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative bg-gradient-to-br from-midnight-800/80 to-midnight-900/80 rounded-lg p-6 border border-midnight-600 transform transition-all duration-300 hover:shadow-md hover:shadow-cyber-yellow-500/10 hover:-translate-y-1"
                    >
                      {/* Step number */}
                      <div className="absolute -top-5 -left-5">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyber-yellow-500 text-black font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Step content */}
                      <div className="pt-3 mt-2">
                        <h3 className="text-white font-semibold text-lg mb-3">{
                          // Generate a title based on the step content - take first few words
                          step.split(' ').slice(0, 3).join(' ') + 
                          (step.split(' ').length > 3 ? '...' : '')
                        }</h3>
                        <p className="text-gray-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Process Steps - Shown only on mobile */}
              <div className="md:hidden space-y-4">
                {project.processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 p-4 rounded-lg border border-midnight-600">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyber-yellow-500 text-black font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="mt-16 p-6 rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm ring-1 ring-midnight-600 text-center">
          <h2 className="mb-3 text-xl font-bold text-white">Interested in working with us?</h2>
          <p className="mb-6 text-gray-300">Let's discuss how we can help with your next project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyber-yellow-500 px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyber-yellow-400 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyber-yellow-500/20"
          >
            Contact Us
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
