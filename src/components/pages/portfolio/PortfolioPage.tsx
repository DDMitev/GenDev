'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Filter, Code2, Mail, Search, ArrowRight } from 'lucide-react';

type ProjectCategory = 'All' | 'Web Design' | 'Email Templates' | 'Technical Consultation';
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  client?: string;
  year?: string;
  technologies: string[];
  challenge?: string;
  solution?: string;
  liveSiteUrl?: string;
  category: ProjectCategory | ProjectCategory[];
  featured?: boolean;
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      id: 'buildholding',
      title: 'BuildHolding Corporate Website',
      description: 'Complete redesign and modernization of a construction company website, including multi-language support and custom admin panel.',
      imageUrl: '/projects/buildholding.jpg',
      client: 'BuildHolding',
      year: '2023',
      technologies: ['React', 'Node.js', 'Firebase', 'Google Maps API', 'i18next'],
      challenge: 'The client\'s existing website was outdated, slow, and failed to effectively represent the company to a modern audience. They needed to consolidate and present content from a 50-page brochure in an accessible web format with support for multiple languages.',
      solution: 'We developed a completely new, responsive website with a custom content management system allowing easy updates. The site includes multi-language support (Bulgarian, English, Russian), Google Maps integration for project locations, and a modern UI that properly showcases their services and projects.',
      liveSiteUrl: 'https://buildholding.netlify.app',
      category: 'Web Design',
      featured: true
    },
    {
      id: 'newsletter-template',
      title: 'Monthly Newsletter Template',
      description: 'Custom responsive newsletter template designed for high engagement and deliverability across all major email clients.',
      imageUrl: '/projects/email-template-1.jpg',
      client: 'GenDev Showcase',
      year: '2025',
      technologies: ['HTML Email', 'CSS', 'MJML', 'Responsive Design'],
      challenge: 'Create a visually appealing newsletter template that renders correctly across all major email clients while maintaining brand consistency.',
      solution: 'Designed a modern, modular email template with sections that can be easily customized. Used MJML to ensure compatibility and tested across 40+ email clients to guarantee consistent display.',
      category: 'Email Templates',
      featured: true
    },
    {
      id: 'welcome-series',
      title: 'E-commerce Welcome Series',
      description: 'Series of five email templates designed to onboard new customers to an e-commerce platform with increasing conversion rates.',
      imageUrl: '/projects/email-template-2.jpg',
      technologies: ['HTML Email', 'CSS', 'Responsive Design', 'Email Automation'],
      challenge: 'Design a welcome series that engages new subscribers and converts them into first-time customers.',
      solution: 'Created a cohesive series of five emails with progressive messaging that guides subscribers toward their first purchase with increasing incentives.',
      category: 'Email Templates'
    },
    {
      id: 'consulting-project',
      title: 'E-commerce Performance Optimization',
      description: 'Technical consulting project focusing on improving site speed, UX, and conversion rates for an online store.',
      imageUrl: '/projects/consulting.jpg',
      client: 'Online Retailer',
      year: '2024',
      technologies: ['Performance Analysis', 'UX Audit', 'Accessibility', 'Technical SEO'],
      challenge: 'The client\'s e-commerce site was experiencing slow load times and high bounce rates, especially on mobile devices.',
      solution: 'Conducted a thorough technical audit identifying performance bottlenecks and UX issues. Provided a detailed implementation plan that resulted in 40% faster page loads and 15% higher conversion rates.',
      category: 'Technical Consultation'
    },
    {
      id: 'promotional-email',
      title: 'Seasonal Campaign Templates',
      description: 'Set of holiday-themed email templates designed for promotional campaigns with high visual impact.',
      imageUrl: '/projects/email-template-3.jpg',
      technologies: ['HTML Email', 'CSS', 'Responsive Design', 'Campaign Design'],
      challenge: 'Create eye-catching seasonal promotional emails that stand out in crowded inboxes while maintaining brand consistency.',
      solution: 'Designed a collection of templates with strong visual hierarchy, animation elements, and clear calls-to-action that can be repurposed for different seasonal campaigns.',
      category: 'Email Templates'
    },
    {
      id: 'design-system',
      title: 'Corporate Design System',
      description: 'Development of a comprehensive design system for consistent branding across web and email assets.',
      imageUrl: '/projects/design-system.jpg',
      client: 'Financial Services Firm',
      year: '2024',
      technologies: ['Design Systems', 'Component Library', 'Documentation', 'Figma'],
      challenge: 'The client needed a unified design language across their digital presence while allowing for flexible implementation.',
      solution: 'Created a comprehensive design system including typography, color palettes, component libraries, and implementation guidelines for both web and email applications.',
      category: ['Web Design', 'Technical Consultation']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeFilter)
          : project.category === activeFilter
      );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">Our Portfolio</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            Explore our design work and projects that showcase our approach to creating beautiful, functional digital experiences 
            for web and email.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Navigation */}
      <ScrollReveal>
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === 'All'
                  ? 'bg-cyber-yellow-500 text-black'
                  : 'bg-midnight-800 text-white hover:bg-midnight-700'
              }`}
            >
              <Filter className="h-4 w-4" />
              All Projects
            </button>
            
            <button
              onClick={() => setActiveFilter('Web Design')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === 'Web Design'
                  ? 'bg-cyber-yellow-500 text-black'
                  : 'bg-midnight-800 text-white hover:bg-midnight-700'
              }`}
            >
              <Code2 className="h-4 w-4" />
              Web Design
            </button>
            
            <button
              onClick={() => setActiveFilter('Email Templates')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === 'Email Templates'
                  ? 'bg-cyber-yellow-500 text-black'
                  : 'bg-midnight-800 text-white hover:bg-midnight-700'
              }`}
            >
              <Mail className="h-4 w-4" />
              Email Templates
            </button>
            
            <button
              onClick={() => setActiveFilter('Technical Consultation')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === 'Technical Consultation'
                  ? 'bg-cyber-yellow-500 text-black'
                  : 'bg-midnight-800 text-white hover:bg-midnight-700'
              }`}
            >
              <Search className="h-4 w-4" />
              Technical Consultation
            </button>
          </div>
          <p className="text-center text-sm text-gray-400">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in {activeFilter} category
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="mb-6 text-xl md:text-2xl font-bold text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30"
                >
                  <div className="relative">
                    <div className="relative h-60 w-full overflow-hidden sm:h-64">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/80 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
                        {Array.isArray(project.category) ? project.category[0] : project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      
                      {project.client && (
                        <span className="rounded-full bg-cyber-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-cyber-yellow-400">
                          {project.client}
                        </span>
                      )}
                    </div>

                    <p className="mb-4 text-gray-300">{project.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-midnight-700/60 px-2 py-1 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-md bg-midnight-700/60 px-2 py-1 text-xs font-medium text-gray-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-cyber-yellow-500 transition-all duration-300 hover:text-cyber-yellow-400"
                    >
                      View project details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* All Projects Grid */}
      {regularProjects.length > 0 && (
        <section className="mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="mb-6 text-xl md:text-2xl font-bold text-white">{activeFilter === 'All' ? 'All Projects' : activeFilter}</h2>
            <div className="grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-lg bg-midnight-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
                    
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/80 px-2.5 py-1 text-xs font-medium text-black backdrop-blur-sm">
                        {Array.isArray(project.category) ? project.category[0] : project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="mb-4 text-sm text-gray-300">{project.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-midnight-700/60 px-2 py-1 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-md bg-midnight-700/60 px-2 py-1 text-xs font-medium text-gray-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="group flex items-center gap-1 text-sm font-medium text-cyber-yellow-500 transition-all duration-300 hover:text-cyber-yellow-400"
                    >
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* CTA Section */}
      <section className="mb-12">
        <ScrollReveal>
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-midnight-800 to-black p-5 md:p-6 backdrop-blur-sm ring-1 ring-midnight-600">
            <div className="mb-5 md:mb-6">
              <h2 className="mb-2 text-xl md:text-2xl font-bold text-white">Ready to Elevate Your Brand?</h2>
              <p className="text-gray-300">
                Let's collaborate on your next web design or email template project. Our team is ready to help you create stunning, functional designs that convert.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-cyber-yellow-500 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-cyber-yellow-400 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyber-yellow-500/20"
            >
              Schedule a Design Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
