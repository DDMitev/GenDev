'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
  featured?: boolean;
  isExample?: boolean;
};

export default function PortfolioPage() {
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
      featured: true
    },
    {
      id: 'data-integration',
      title: 'Data Integration Platform',
      description: 'Example of a custom ETL pipeline solution that connects multiple business systems for automated data flow and reporting.',
      imageUrl: '/projects/data-integration.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Data Transformation'],
      challenge: 'Many businesses struggle with siloed data across multiple systems (inventory, sales, finance), leading to manual data entry, inconsistencies, and delayed reporting.',
      solution: 'We can develop custom data pipelines that extract information from various sources, transform it into standardized formats, and load it into target systems or reports. This eliminates manual work and provides real-time business intelligence.',
      isExample: true
    },
    {
      id: 'inventory-automation',
      title: 'Inventory Management System',
      description: 'Example of a web-based inventory tracking application with automated notifications and reporting capabilities.',
      imageUrl: '/projects/inventory.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
      challenge: 'Businesses with physical inventory often struggle with tracking stock levels, fulfillment status, and maintaining efficient supply chain operations.',
      solution: 'We can build custom inventory management systems that provide real-time visibility, automate reordering processes, and generate insightful reports. These applications can be tailored to specific business workflows and integrated with existing systems.',
      isExample: true
    },
    {
      id: 'api-integration',
      title: 'Payment Gateway Integration',
      description: 'Example of seamless third-party API integration connecting e-commerce platforms with payment processors.',
      imageUrl: '/projects/analytics.jpg',
      technologies: ['Node.js', 'Express', 'REST APIs', 'Payment Gateways', 'Authentication'],
      challenge: 'Connecting e-commerce platforms with payment providers often requires complex API integration, security measures, and reliable error handling.',
      solution: 'We can develop secure, robust integrations between your business systems and third-party services like payment gateways, shipping providers, or marketing platforms. Our solutions include proper authentication, error handling, and monitoring.',
      isExample: true
    },
    {
      id: 'technical-audit',
      title: 'Technical Auditing & Optimization',
      description: 'Example of our technical consulting services to evaluate existing systems and recommend improvements.',
      imageUrl: '/projects/crm.jpg',
      technologies: ['Performance Analysis', 'Security Assessment', 'Code Review', 'Architecture Planning'],
      challenge: 'Many businesses operate with legacy systems or applications that have performance issues, security vulnerabilities, or aren\'t scalable to meet growing demands.',
      solution: 'Our technical auditing service can evaluate your existing systems, identify bottlenecks and vulnerabilities, and provide a detailed roadmap for improvements. We can then implement these optimizations or guide your team through the process.',
      isExample: true
    },
    {
      id: 'future-portfolio',
      title: 'Future Digital Products',
      description: 'Our upcoming development roadmap includes specialized website templates, reusable code libraries, and digital products.',
      imageUrl: '/projects/future.jpg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      challenge: 'We\'re looking to expand our offerings beyond custom development services to include ready-to-use digital products.',
      solution: 'Future plans include: industry-specific website templates, UI component libraries, and starter kits for common business applications.',
      isExample: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);
  const exampleProjects = projects.filter(project => project.isExample);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">Our Portfolio</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            Explore our work and see how we've helped businesses improve their digital presence and operational efficiency. We take pride in delivering solutions that combine technical excellence with business value.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Project */}
      {featuredProjects.length > 0 && (
        <section className="mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="mb-6 text-xl md:text-2xl font-bold text-white">Featured Project</h2>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-lg bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30"
              >
                <div className="grid grid-cols-1 gap-6 p-5 md:p-6 lg:grid-cols-2 lg:p-8">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg sm:h-72 md:h-80 lg:h-96">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2 md:gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                        
                        {project.client && (
                          <span className="rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400">
                            {project.client}
                          </span>
                        )}
                        
                        {project.year && (
                          <span className="rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <p className="mb-5 md:mb-6 text-gray-300">{project.description}</p>

                      {project.challenge && (
                        <div className="mb-4">
                          <h4 className="mb-1 font-semibold text-white">The Challenge:</h4>
                          <p className="text-sm text-gray-300">{project.challenge}</p>
                        </div>
                      )}

                      {project.solution && (
                        <div className="mb-5 md:mb-6">
                          <h4 className="mb-1 font-semibold text-white">Our Solution:</h4>
                          <p className="text-sm text-gray-300">{project.solution}</p>
                        </div>
                      )}

                      <div className="mb-5 md:mb-6">
                        <h4 className="mb-2 font-semibold text-white">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-cyber-yellow-500/10 px-2.5 py-1 text-xs font-medium text-cyber-yellow-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {project.liveSiteUrl && (
                      <Link
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-md bg-cyber-yellow-500 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-cyber-yellow-400 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyber-yellow-500/20"
                      >
                        View Live Site
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </section>
      )}

      {/* Example Solutions Section */}
      {exampleProjects.length > 0 && (
        <section className="mb-16 md:mb-20">
          <ScrollReveal>
            <div className="mb-6 md:mb-8">
              <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-white">Solution Capabilities</h2>
              <p className="text-gray-300">
                These examples showcase the types of solutions we can develop based on our technical expertise. Each represents a common business need we're equipped to address with custom development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exampleProjects.map((project) => (
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
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="mb-4 text-sm text-gray-300">{project.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-cyber-yellow-500/10 px-2 py-1 text-xs font-medium text-cyber-yellow-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-md bg-cyber-yellow-500/10 px-2 py-1 text-xs font-medium text-cyber-yellow-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <button 
                      className="group flex items-center gap-1 text-sm font-medium text-cyber-yellow-500 transition-all duration-300 hover:text-cyber-yellow-400"
                      onClick={() => window.location.href = `#${project.id}`}
                    >
                      View details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Future Portfolio Section */}
      <section className="mb-12">
        <ScrollReveal>
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-midnight-800 to-black p-5 md:p-6 backdrop-blur-sm ring-1 ring-midnight-600">
            <div className="mb-5 md:mb-6">
              <h2 className="mb-2 text-xl md:text-2xl font-bold text-white">Looking to Start a Project?</h2>
              <p className="text-gray-300">
                We're always excited to take on new challenges and help businesses leverage technology to grow. If you have a project in mind, we'd love to discuss how we can help.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-cyber-yellow-500 px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-cyber-yellow-400 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyber-yellow-500/20"
            >
              Let's Discuss Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
