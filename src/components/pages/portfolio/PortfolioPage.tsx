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
      year: '202X',
      technologies: ['React', 'Node.js', 'Firebase', 'Google Maps API', 'i18next'],
      challenge: 'The client\'s existing website was outdated, slow, and failed to effectively represent the company to a modern audience. They needed to consolidate and present content from a 50-page brochure in an accessible web format with support for multiple languages.',
      solution: 'We developed a completely new, responsive website with a custom content management system allowing easy updates. The site includes multi-language support (Bulgarian, English, Russian), Google Maps integration for project locations, and a modern UI that properly showcases their services and projects.',
      liveSiteUrl: 'https://buildholding.netlify.app',
      featured: true
    },
    {
      id: 'data-integration',
      title: 'Data Integration System',
      description: 'Example of a custom ETL pipeline solution that could connect multiple business systems for automated reporting.',
      imageUrl: '/projects/data-integration.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Data Transformation'],
      challenge: 'Many businesses manually transfer data between their CRM, inventory systems, and accounting software, resulting in errors, delays, and inefficient use of staff time.',
      solution: 'We can build custom integration systems that automatically sync data between platforms, standardize information formats, and generate comprehensive reports that would otherwise require hours of manual work.',
      isExample: true
    },
    {
      id: 'inventory-automation',
      title: 'Inventory Management Solutions',
      description: 'Example of an automation system for tracking inventory across multiple locations with updates and alerts.',
      imageUrl: '/projects/inventory.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
      challenge: 'Managing inventory across multiple locations can cause discrepancies and inefficiencies in distribution operations.',
      solution: 'We can create inventory tracking systems with automated alerts for low stock and customizable reports. Such solutions typically improve accuracy and reduce management time significantly.',
      isExample: true
    },
    {
      id: 'analytics-dashboard',
      title: 'Business Analytics Dashboards',
      description: 'Example of interactive data visualization platforms with metrics and customizable reports we can develop.',
      imageUrl: '/projects/analytics.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'SQL', 'Data Visualization'],
      challenge: 'Businesses often struggle to visualize and interpret large amounts of sales and customer data across multiple locations.',
      solution: 'We can develop customizable dashboards that pull data from multiple sources and present it through intuitive visualizations, enabling better decision-making and trend identification.',
      isExample: true
    },
    {
      id: 'custom-crm',
      title: 'Custom CRM Solutions',
      description: 'Example of tailored customer relationship management systems for specialized business workflows.',
      imageUrl: '/projects/crm.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication'],
      challenge: 'Off-the-shelf CRM solutions often don\'t accommodate specialized workflows and client management processes.',
      solution: 'We can design and build custom CRMs tailored to specific needs, integrating with existing systems and automating unique processes.',
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold">Our Portfolio</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-indigo-100">
            Explore our work and see how we've helped businesses improve their digital presence and operational efficiency. We take pride in delivering solutions that combine technical excellence with business value.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Project */}
      {featuredProjects.length > 0 && (
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold text-fuchsia-200">Featured Project</h2>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/10"
              >
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-96">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        
                        {project.client && (
                          <span className="rounded-full bg-indigo-900/50 px-3 py-1 text-xs font-medium text-indigo-200">
                            {project.client}
                          </span>
                        )}
                        
                        {project.year && (
                          <span className="rounded-full bg-fuchsia-900/50 px-3 py-1 text-xs font-medium text-fuchsia-200">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <p className="mb-6 text-indigo-100/90">{project.description}</p>

                      {project.challenge && (
                        <div className="mb-4">
                          <h4 className="mb-1 font-semibold text-fuchsia-200">The Challenge:</h4>
                          <p className="text-sm text-indigo-100/80">{project.challenge}</p>
                        </div>
                      )}

                      {project.solution && (
                        <div className="mb-6">
                          <h4 className="mb-1 font-semibold text-fuchsia-200">Our Solution:</h4>
                          <p className="text-sm text-indigo-100/80">{project.solution}</p>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="mb-2 font-semibold text-fuchsia-200">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-indigo-900/50 px-2 py-1 text-xs font-medium text-indigo-200"
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
                        className="inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-fuchsia-600/20"
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
        <section className="mb-20">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-fuchsia-200">Example Solutions & Capabilities</h2>
              <p className="text-indigo-100/80">
                While these are not actual completed projects, they represent the types of solutions we're capable of building. These examples showcase our technical expertise and the business problems we can help solve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exampleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/10"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/90"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="mb-4 text-sm text-indigo-100/90">{project.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-indigo-900/40 px-2 py-1 text-xs font-medium text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-md bg-indigo-900/40 px-2 py-1 text-xs font-medium text-indigo-200">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <button 
                      className="group flex items-center gap-1 text-sm font-medium text-fuchsia-300 transition-all duration-300 hover:text-fuchsia-200"
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
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-fuchsia-200">Looking to Start a Project?</h2>
              <p className="text-indigo-100/80">
                We're always excited to take on new challenges and help businesses leverage technology to grow. If you have a project in mind, we'd love to discuss how we can help.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-fuchsia-600/20"
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
