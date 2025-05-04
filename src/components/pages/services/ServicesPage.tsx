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
  CheckCircle2
} from 'lucide-react';

type ServiceCategory = 'web' | 'data' | 'api' | 'consulting';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceCategory>('web');

  // Detailed services
  const services = [
    {
      id: 'web',
      title: 'Web Application Development',
      icon: <Code2 className="h-6 w-6" />,
      description: 'Custom web solutions built with modern, performant technologies to deliver exceptional digital experiences.',
      details: [
        'New application development from the ground up',
        'Website/application redesign & modernization',
        'E-commerce solutions and content management systems',
        'Responsive web applications with modern features',
        'Frontend development with React, Next.js, and Tailwind CSS',
        'Backend development with Node.js and Express'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
      pricing: '€30-50/hr or fixed project quotes',
      cta: 'Discuss Your Web Project'
    },
    {
      id: 'data',
      title: 'Data Management & Automation',
      icon: <Database className="h-6 w-6" />,
      description: 'Transform raw data into actionable information and streamline operations with automated workflows.',
      details: [
        'ETL pipeline development (Extract, Transform, Load)',
        'Data cleaning & validation services',
        'Database design & optimization (SQL/NoSQL)',
        'Automated reporting solutions',
        'Data migration and transformation',
        'Workflow automation'
      ],
      technologies: ['Python', 'Node.js', 'SQL/NoSQL', 'Firebase', 'Excel/CSV Processing', 'Data Visualization'],
      pricing: 'Project-based pricing, typically €1000+ depending on complexity',
      cta: 'Improve Your Data Systems'
    },
    {
      id: 'api',
      title: 'Custom API & Integration',
      icon: <Share2 className="h-6 w-6" />,
      description: 'Connect disparate systems and automate data flow between applications for seamless operations.',
      details: [
        'API integration & data syncing between platforms',
        'Custom RESTful API development',
        'Third-party API integration (payment gateways, CRMs, etc.)',
        'Webhooks and event-driven architecture',
        'Data synchronization between different platforms',
        'Automated workflows and process optimization'
      ],
      technologies: ['Node.js', 'Express', 'REST APIs', 'Webhooks', 'Authentication', 'JSON/XML'],
      pricing: 'Starting at €500 for basic integrations',
      cta: 'Connect Your Systems'
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: <Search className="h-6 w-6" />,
      description: 'Expert guidance on technology decisions, architecture, and implementation strategies.',
      details: [
        'Technology stack selection and architectural planning',
        'Code reviews and performance optimization',
        'Legacy system modernization strategies',
        'Technical strategy and roadmap development',
        'Security assessments and best practices',
        'Team augmentation for specific project phases'
      ],
      technologies: ['System Architecture', 'Technology Selection', 'Performance Optimization', 'Security Best Practices', 'Development Standards'],
      pricing: '€30-50/hr for consulting services',
      cta: 'Book a Consultation'
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-indigo-100">
            We offer specialized web development and data management services to help businesses improve their digital presence and streamline operations.
          </p>
        </div>
      </ScrollReveal>

      {/* Services Tabs Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-xl border border-indigo-800/30 bg-indigo-900/10 backdrop-blur-sm shadow-lg shadow-indigo-900/10">
          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap border-b border-indigo-800/30">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id as ServiceCategory)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium transition-colors md:px-6 ${
                  activeService === service.id
                    ? 'bg-indigo-900/50 text-fuchsia-200'
                    : 'bg-transparent text-indigo-100/70 hover:bg-indigo-900/30 hover:text-fuchsia-100'
                }`}
              >
                <span className="hidden sm:inline-flex">{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          
          {/* Active Service Content */}
          <div className="p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
              {/* Service Overview */}
              <div>
                <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 text-fuchsia-200">
                  {activeServiceData.icon}
                </div>
                <h2 className="mt-4 text-2xl font-bold text-fuchsia-200">{activeServiceData.title}</h2>
                <p className="mt-2 text-indigo-100/80">{activeServiceData.description}</p>
                <div className="mt-6 rounded-lg bg-indigo-900/30 p-4">
                  <h3 className="mb-2 font-medium text-fuchsia-200">Pricing:</h3>
                  <p className="text-indigo-100/80">{activeServiceData.pricing}</p>
                </div>
                <Link 
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-fuchsia-600/20 hover:translate-y-[-2px]"
                >
                  {activeServiceData.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Service Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-fuchsia-200">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-400" />
                    What We Offer
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {activeServiceData.details.map((detail, i) => (
                      <div key={i} className="flex items-start rounded-md bg-indigo-900/20 p-3">
                        <span className="text-indigo-100/90">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-fuchsia-200">
                    <Code2 className="h-5 w-5 text-fuchsia-400" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeServiceData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-200"
                      >
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

      {/* Process Section - Compact Version */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className="mb-6 text-center text-2xl font-bold text-fuchsia-200">Our Process</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative overflow-hidden rounded-lg border border-indigo-800/30 bg-indigo-900/20 p-5 backdrop-blur-sm transition-all hover:bg-indigo-900/30"
              >
                <div className="mb-3 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-sm font-bold text-white">
                    {step.number}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-fuchsia-200">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-indigo-100/80">{step.description}</p>
                
                {/* Connector arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-indigo-600/60 lg:block">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <section className="overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-900/30 to-violet-900/30 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to start your project?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-indigo-100">
            Let's discuss how our partnership can help your business achieve its goals with tailored technical solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-fuchsia-600/20 hover:translate-y-[-2px] focus:outline-none"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
