'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { 
  Code2, 
  Database, 
  Share2, 
  Search, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  Mail,
  Gauge,
  ShieldCheck,
  Accessibility,
  LineChart
} from 'lucide-react';

type ServiceCategory = 'web' | 'email' | 'consulting' | 'tao';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceCategory>('web');

  // Detailed services
  const services = [
    {
      id: 'web',
      title: 'Web Design & Development',
      icon: <Code2 className="h-6 w-6 text-cyber-yellow-500" />,
      description: 'Full-stack web solutions with modern frontend and Firebase backend. From simple websites to complex web applications built with performance and scalability in mind.',
      details: [
        'Custom frontend development with Next.js & React',
        'Firebase backend implementation for scalable apps',
        'Responsive design optimized for all devices',
        'UI/UX design with conversion-focused approach',
        'Full-stack integration with serverless architecture',
        'Performance optimization and accessibility compliance'
      ],
      technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Serverless Functions', 'Cloud Database'],
      pricing: 'Tiered packages: Basic (€5,000-8,000), Standard (€10,000-20,000), and Premium (€25,000+) based on complexity and feature requirements',
      cta: 'Discuss Your Web Project'
    },
    {
      id: 'email',
      title: 'Custom Email Templates',
      icon: <Mail className="h-6 w-6 text-cyber-yellow-500" />,
      description: 'Eye-catching, responsive email templates that work flawlessly across all devices and email clients.',
      details: [
        'Newsletter template design',
        'Promotional email campaigns',
        'Transactional email templates',
        'Welcome sequence designs',
        'Responsive testing across all major email clients',
        'HTML/CSS email coding with compatibility focus'
      ],
      technologies: ['HTML Email', 'Responsive Design', 'MJML', 'Email Testing', 'Campaign Design', 'A/B Testing'],
      pricing: 'Individual templates from €150, packages starting at €500 for sets of 3-5 templates',
      cta: 'Create Email Templates'
    },
    {
      id: 'consulting',
      title: 'Technical Consultation',
      icon: <Search className="h-6 w-6 text-cyber-yellow-500" />,
      description: 'Expert guidance for design implementation, technology selection, and optimization for your digital projects.',
      details: [
        'Design implementation strategy',
        'Technology stack recommendations',
        'Performance optimization for existing sites',
        'Accessibility compliance consulting',
        'Technical SEO and site structure guidance',
        'Design system development and documentation'
      ],
      technologies: ['Design Systems', 'Accessibility Standards', 'Performance Optimization', 'Technical SEO', 'Development Best Practices'],
      pricing: '€50-80/hr for consulting services, packages available',
      cta: 'Book a Consultation'
    },
    {
      id: 'tao',
      title: 'Technical Audit & Optimization',
      icon: <Gauge className="h-6 w-6 text-cyber-yellow-500" />,
      description: 'Comprehensive technical analysis and optimization of your website to improve performance, security, accessibility, and search engine visibility – ensuring your site delivers the best possible user experience and business outcomes.',
      details: [
        'Performance optimization (Core Web Vitals, load time)',
        'Security assessment and vulnerability remediation',
        'Accessibility compliance with WCAG 2.1/2.2 standards',
        'Technical SEO audit and implementation roadmap',
        'Code quality analysis and technical debt reduction',
        'Detailed reports with prioritized recommendations'
      ],
      technologies: ['Core Web Vitals', 'Google Lighthouse', 'OWASP Security Standards', 'WCAG 2.1/2.2', 'Schema Markup', 'Technical SEO', 'SonarQube'],
      pricing: 'Tiered packages: Basic (€2,000-3,500), Standard (€4,000-7,000), and Premium (€8,000-15,000) based on site complexity and needs',
      cta: 'Request an Audit'
    }
  ];

  // Service process/workflow
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Requirements',
      description: 'We begin with a thorough discussion of your business goals, challenges, and requirements. This foundation ensures our solution addresses your specific needs and delivers real value.'
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Based on your requirements, we create a detailed plan outlining the technical approach, architecture, timeline, and deliverables for your project. This includes technology choices and implementation strategy.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'The core phase where your solution comes to life. We use an iterative approach with regular check-ins to ensure we\'re on the right track and to incorporate feedback throughout the process.'
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Rigorous testing ensures everything works flawlessly. We refine based on feedback to ensure the final product meets all requirements and quality standards before delivery.'
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'Once approved, your solution is deployed to production. We provide documentation, knowledge transfer, and ongoing support options to ensure long-term success of your investment.'
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService)!;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">Our Services</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            We offer comprehensive web design, development, and optimization services to help businesses create impactful digital experiences that drive results.
          </p>
        </div>
      </ScrollReveal>

      {/* Services Tabs Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black backdrop-blur-sm shadow-lg shadow-black/20">
          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap border-b border-midnight-600">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id as ServiceCategory)}
                className={`flex items-center gap-2 px-4 py-3 md:px-5 md:py-4 text-sm font-medium transition-colors ${
                  activeService === service.id
                    ? 'bg-midnight-700 text-cyber-yellow-500'
                    : 'bg-transparent text-gray-300 hover:bg-midnight-700/70 hover:text-cyber-yellow-400'
                }`}
              >
                <span className="hidden sm:inline-flex text-cyber-yellow-500">{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          
          {/* Active Service Content */}
          <div className="p-4 md:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
              {/* Service Overview */}
              <div>
                <div className="hidden md:flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-lg bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500">
                  {activeServiceData.icon}
                </div>
                <h2 className="mt-4 text-xl md:text-2xl font-bold text-white">{activeServiceData.title}</h2>
                <p className="mt-2 text-gray-300">{activeServiceData.description}</p>
                <div className="mt-6 rounded-lg bg-midnight-700/60 p-4">
                  <h3 className="mb-2 font-medium text-white">Pricing:</h3>
                  <p className="text-gray-300">{activeServiceData.pricing}</p>
                </div>
                <Link 
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyber-yellow-500 px-5 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px]"
                >
                  {activeServiceData.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Service Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 text-cyber-yellow-500" />
                    What We Offer
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {activeServiceData.details.map((detail, i) => (
                      <div key={i} className="flex items-start rounded-md bg-midnight-700/40 p-3">
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                    <Code2 className="h-5 w-5 text-cyber-yellow-500" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeServiceData.technologies.map((tech, i) => (
                      <span key={i} className="inline-flex items-center rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black backdrop-blur-sm shadow-lg p-6 md:p-8">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Number */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-yellow-500/10 text-xl font-bold text-cyber-yellow-500">
                  {step.number}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
                
                {/* Connector Line - Hide on mobile and last item */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-16 h-0.5 w-full bg-gradient-to-r from-cyber-yellow-500/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black p-6 md:p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mb-6 mx-auto max-w-2xl text-base md:text-lg text-gray-300">
            Contact us today for a free consultation about your project needs. Let's create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-cyber-yellow-500 px-6 py-3 text-base font-medium text-black shadow-xl transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/20"
          >
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
