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
type ClientSegment = 'enterprise' | 'individual';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceCategory>('web');
  const [clientSegment, setClientSegment] = useState<ClientSegment>('individual');

  // Detailed services - with segment-specific information
  const services = [
    {
      id: 'web',
      title: 'Web Design & Development',
      icon: <Code2 className="h-6 w-6 text-cyber-yellow-500" />,
      // Enterprise segment content
      enterprise: {
        description: 'We build robust web solutions using Next.js and Firebase that scale with your business. Whether you need a responsive site or a complex web app, we\'ve got you covered.',
        details: [
          'Custom frontend development with Next.js & React',
          'Firebase backend implementation for scalable apps',
          'Enterprise system integrations (CRM, ERP, etc.)',
          'UI/UX design with conversion-focused approach',
          'Full-stack integration with serverless architecture',
          'Performance optimization and accessibility compliance'
        ],
        pricing: 'Professional (€10,000-20,000), Enterprise (€25,000+), and Custom Solutions based on your specific requirements',
        tiers: [
          {
            name: 'Professional',
            price: '€10,000-20,000',
            description: 'For growing organizations that need a custom website or application with robust features',
            features: [
              'Up to 10 pages/screens',
              'Semi-custom design',
              'Firebase backend with standard features',
              '2-3 revision rounds',
              '60 days of support'
            ]
          },
          {
            name: 'Enterprise',
            price: '€25,000+',
            description: 'For organizations with complex requirements needing a scalable, fully customized solution',
            features: [
              'Custom scope',
              'Fully bespoke design',
              'Advanced Firebase implementation',
              'Multiple revision cycles',
              'Extended support options'
            ]
          },
          {
            name: 'Custom Solution',
            price: 'Contact Us',
            description: 'For businesses with unique requirements needing a tailored approach',
            features: [
              'Customized to your exact needs',
              'Integration with enterprise systems',
              'Advanced security implementation',
              'Comprehensive support package',
              'Ongoing partnership'
            ]
          }
        ]
      },
      // Individual segment content
      individual: {
        description: 'Get a professionally built website using the same tech we use for our bigger clients, just packaged in a way that makes sense for solopreneurs and small teams.',
        details: [
          'Modern responsive websites built with Next.js & React',
          'Simple Firebase integration for forms and basic features',
          'Professional design customized to your brand',
          'Mobile-friendly layouts for all devices',
          'Fast launch timeframes (2-3 weeks)',
          'Training on basic content updates'
        ],
        pricing: 'LaunchPad (€2,000-5,000), Professional (€6,000-15,000), or modular add-ons to fit your needs',
        tiers: [
          {
            name: 'LaunchPad',
            price: '€2,000-5,000',
            description: 'Get online quickly with a professional website that looks great and functions perfectly',
            features: [
              'Up to 5 pages',
              'Template-based design with your branding',
              'Contact form with Firebase integration',
              '1-2 revision rounds',
              '30 days of support'
            ]
          },
          {
            name: 'Professional',
            price: '€6,000-15,000',
            description: 'A more customized solution with advanced features for growing businesses',
            features: [
              'Up to 10 pages',
              'Semi-custom design',
              'Standard Firebase features',
              '2-3 revision rounds',
              '60 days of support'
            ]
          },
          {
            name: 'Add-Ons',
            price: 'From €200',
            description: 'Enhance your website with additional features as needed',
            features: [
              'Additional pages',
              'Custom interactive components',
              'Blog implementation',
              'Extended support packages',
              'Content creation assistance'
            ]
          }
        ]
      },
      technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Serverless Functions', 'Cloud Database'],
      cta: 'Discuss Your Web Project'
    },
    {
      id: 'email',
      title: 'Custom Email Templates',
      icon: <Mail className="h-6 w-6 text-cyber-yellow-500" />,
      enterprise: {
        description: 'Email templates that boost your marketing campaigns and look great on every device. We design with your brand strategy in mind, ensuring consistent messaging across all touchpoints.',
        details: [
          'Coordinated email campaign design',
          'Brand-consistent template systems',
          'Advanced personalization capabilities',
          'Interactive elements where supported',
          'Comprehensive testing across all email clients',
          'Integration with marketing platforms (Mailchimp, HubSpot, etc.)'
        ],
        pricing: 'Business email packages starting at €1,200 for sets of 3-5 coordinated templates',
        tiers: [
          {
            name: 'Business Package',
            price: '€1,200-2,500',
            description: 'A complete set of coordinated templates for your marketing campaigns',
            features: [
              'Set of 3-5 coordinated templates',
              'Custom design elements',
              'Comprehensive testing',
              'Platform integration',
              '2-3 revision rounds'
            ]
          },
          {
            name: 'Advanced Template',
            price: '€600-1,000',
            description: 'A single complex template with advanced features and thorough testing',
            features: [
              'Interactive elements where supported',
              'Advanced personalization',
              'Dynamic content areas',
              'Cross-client testing',
              'Platform implementation support'
            ]
          }
        ]
      },
      individual: {
        description: 'Stand out in crowded inboxes with emails that look sharp on any device. Our templates help you look professional without the enterprise price tag.',
        details: [
          'Newsletter template design',
          'Promotional email templates',
          'Announcement templates',
          'Welcome email designs',
          'Responsive testing on major clients',
          'Simple customization options'
        ],
        pricing: 'Single templates from €400, small business packages starting at €800',
        tiers: [
          {
            name: 'Basic Template',
            price: '€400-800',
            description: 'A single responsive email template customized with your branding',
            features: [
              'Responsive design',
              'Testing on major email clients',
              'Your branding applied',
              '1-2 revision rounds',
              'Implementation instructions'
            ]
          },
          {
            name: 'Starter Pack',
            price: '€800-1,200',
            description: 'A small set of templates for different purposes',
            features: [
              '2-3 coordinated templates',
              'Basic customization options',
              'Responsive testing',
              'Simple implementation guidance',
              'Basic documentation'
            ]
          }
        ]
      },
      technologies: ['HTML Email', 'Responsive Design', 'MJML', 'Email Testing', 'Campaign Design', 'A/B Testing'],
      cta: 'Create Email Templates'
    },
    {
      id: 'consulting',
      title: 'Technical Consultation',
      icon: <Search className="h-6 w-6 text-cyber-yellow-500" />,
      enterprise: {
        description: 'Not sure which tech to invest in? We\'ll help you cut through the jargon and make smart decisions about your digital strategy, saving you from costly mistakes and wasted resources.',
        details: [
          'Digital transformation strategy',
          'Technology stack evaluation and selection',
          'Architecture planning and roadmapping',
          'Legacy system modernization guidance',
          'Technical team augmentation and mentoring',
          'Enterprise integration planning'
        ],
        pricing: 'Enterprise consulting retainers from €2,000-4,000/month with 20+ hours of expert consultation',
        tiers: [
          {
            name: 'Enterprise Retainer',
            price: '€2,000-4,000/month',
            description: 'Ongoing technical guidance and support for your organization',
            features: [
              '20 hours monthly consultation time',
              '3-month minimum commitment',
              'Priority response times',
              'Regular progress reports',
              'Multiple communication channels'
            ]
          },
          {
            name: 'Project Consultation',
            price: '€3,000-10,000',
            description: 'Expert guidance for specific projects or technical challenges',
            features: [
              'Project-specific consulting',
              'Technical specifications',
              'Architecture documentation',
              'Technology recommendations',
              'Implementation guidance'
            ]
          }
        ]
      },
      individual: {
        description: 'Stuck on a technical problem? Need help choosing the right tools? We offer straightforward advice without the buzzwords, helping you make confident tech decisions for your projects.',
        details: [
          'Website improvement recommendations',
          'Technology stack guidance for small projects',
          'Performance troubleshooting',
          'Technical SEO advice',
          'Step-by-step implementation guidance',
          'Tool and platform recommendations'
        ],
        pricing: 'Basic consultation packages from €400-800 for 5 hours of expert guidance',
        tiers: [
          {
            name: 'Basic Tech Consultation',
            price: '€400-800',
            description: '5 hours of consulting time to address your specific technical questions',
            features: [
              '5 hours of consulting time',
              'Valid for 1 month',
              'Email Q&A follow-up',
              'Summary of recommendations',
              'Basic implementation guidance'
            ]
          },
          {
            name: 'Tech Review',
            price: '€600-1,200',
            description: 'Comprehensive review of your existing project with specific recommendations',
            features: [
              'Technical assessment',
              'Written recommendations',
              'Prioritized improvement roadmap',
              '90-minute follow-up call',
              'Limited implementation support'
            ]
          }
        ]
      },
      technologies: ['Design Systems', 'Accessibility Standards', 'Performance Optimization', 'Technical SEO', 'Development Best Practices'],
      cta: 'Book a Consultation'
    },
    {
      id: 'tao',
      title: 'Technical Audit & Optimization',
      icon: <Gauge className="h-6 w-6 text-cyber-yellow-500" />,
      enterprise: {
        description: 'We\'ll analyze your site from top to bottom, fixing speed issues, patching security holes, ensuring accessibility, and boosting your SEO. The result? Better user experience and more conversions.',
        details: [
          'Enterprise-grade performance optimization',
          'Comprehensive security vulnerability assessment',
          'Full WCAG 2.1/2.2 accessibility compliance audit',
          'Advanced technical SEO analysis and implementation',
          'Architecture review and scaling recommendations',
          'Detailed technical debt reduction roadmap'
        ],
        pricing: 'Enterprise packages: Standard (€4,000-7,000), Premium (€8,000-15,000) based on application complexity',
        tiers: [
          {
            name: 'Standard Audit',
            price: '€4,000-7,000',
            description: 'Comprehensive technical analysis for business websites and applications',
            features: [
              'Full site/application audit',
              'Performance profiling',
              'Security assessment',
              'Accessibility evaluation',
              'Technical SEO analysis',
              'Detailed remediation roadmap'
            ]
          },
          {
            name: 'Premium Audit',
            price: '€8,000-15,000',
            description: 'In-depth technical analysis with implementation support for complex applications',
            features: [
              'Advanced performance profiling',
              'Comprehensive security audit',
              'Code quality assessment',
              'Architecture optimization',
              'Team presentation',
              'Implementation guidance'
            ]
          }
        ]
      },
      individual: {
        description: 'Not sure why your site feels slow or isn\'t ranking well? We\'ll diagnose the technical issues holding you back and give you a clear roadmap to fix them, without the enterprise-level price.',
        details: [
          'Website performance assessment and optimization',
          'Basic security review',
          'Mobile responsiveness testing',
          'Core Web Vitals improvement',
          'Technical SEO enhancements',
          'Actionable recommendations you can implement'
        ],
        pricing: 'Startup audit packages: Basic (€800-1,500) for small websites and applications',
        tiers: [
          {
            name: 'Startup Audit',
            price: '€800-1,500',
            description: 'Technical assessment focused on the most critical aspects of your website',
            features: [
              'Performance optimization',
              'Basic security scan',
              'Mobile responsiveness check',
              'Critical SEO factors review',
              'Prioritized recommendations',
              'Follow-up consultation'
            ]
          },
          {
            name: 'Focus Audit',
            price: '€500-1,000',
            description: 'Specialized audit focusing on a single aspect of your website',
            features: [
              'Choose one focus area:',
              '- Performance optimization',
              '- Security assessment',
              '- Technical SEO',
              '- Accessibility review',
              'Detailed recommendations'
            ]
          }
        ]
      },
      technologies: ['Core Web Vitals', 'Google Lighthouse', 'OWASP Security Standards', 'WCAG 2.1/2.2', 'Schema Markup', 'Technical SEO', 'SonarQube'],
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
  // Get the segment-specific content
  const segmentContent = activeServiceData[clientSegment];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">Our Services</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            We offer comprehensive web design, development, and optimization services to help {clientSegment === 'enterprise' ? 'businesses create impactful digital experiences that drive results' : 'individuals and small teams establish a professional online presence'}.
          </p>
        </div>
      </ScrollReveal>

      {/* Client Segment Selector */}
      <ScrollReveal>
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-midnight-600 p-1 bg-midnight-800/50">
            <button
              onClick={() => setClientSegment('individual')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${clientSegment === 'individual' ? 'bg-cyber-yellow-500 text-black' : 'bg-transparent text-gray-300 hover:text-cyber-yellow-400'}`}
            >
              Individuals & Small Teams
            </button>
            <button
              onClick={() => setClientSegment('enterprise')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${clientSegment === 'enterprise' ? 'bg-cyber-yellow-500 text-black' : 'bg-transparent text-gray-300 hover:text-cyber-yellow-400'}`}
            >
              Business & Enterprise
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Services Tabs Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black backdrop-blur-sm shadow-lg shadow-black/20">
          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center border-b border-midnight-600">
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
                <p className="mt-2 text-gray-300">{segmentContent.description}</p>
                <div className="mt-6 rounded-lg bg-midnight-700/60 p-4">
                  <h3 className="mb-2 font-medium text-white">Pricing:</h3>
                  <p className="text-gray-300">{segmentContent.pricing}</p>
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
                    {segmentContent.details.map((detail: string, i: number) => (
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

            {/* Service Tiers */}
            <div className="mt-10">
              <h3 className="mb-6 text-center text-xl font-bold text-white">Service Tiers</h3>
              <div className={`grid gap-6 ${segmentContent.tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
                {/* Sort tiers by price (lower to higher) when exactly 2 tiers are present */}
                {(segmentContent.tiers.length === 2 ? 
                  [...segmentContent.tiers].sort((a, b) => {
                    // Extract numeric portion from price strings for comparison
                    const getNumericPrice = (price: string) => {
                      if (price.includes('From')) return 0; // 'From X' is considered the lowest
                      const matches = price.match(/\d+/g);
                      return matches ? parseInt(matches[0], 10) : 0;
                    };
                    return getNumericPrice(a.price) - getNumericPrice(b.price);
                  }) : 
                  segmentContent.tiers
                ).map((tier: any, i: number) => (
                  <div 
                    key={i} 
                    className={`flex flex-col rounded-lg border ${segmentContent.tiers.length === 3 && i === 1 ? 'border-cyber-yellow-500 bg-gradient-to-b from-midnight-700/90 to-midnight-900/90' : (segmentContent.tiers.length === 2 && i === 1 ? 'border-cyber-yellow-500 bg-gradient-to-b from-midnight-700/90 to-midnight-900/90' : 'border-midnight-600 bg-gradient-to-b from-midnight-800/60 to-black/60')} p-6 transition-transform hover:transform hover:scale-[1.02]`}
                  >
                    <div className="mb-4">
                      <h4 className={`text-lg font-bold ${(segmentContent.tiers.length === 3 && i === 1) || (segmentContent.tiers.length === 2 && i === 1) ? 'text-cyber-yellow-500' : 'text-white'}`}>{tier.name}</h4>
                      <div className="mt-2 flex items-baseline text-white">
                        <span className="text-2xl font-extrabold">{tier.price}</span>
                      </div>
                    </div>
                    <p className="mb-6 text-sm text-gray-300">{tier.description}</p>
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-3">
                        {tier.features.map((feature: string, j: number) => (
                          <li key={j} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckCircle2 className={`h-5 w-5 ${(segmentContent.tiers.length === 3 && i === 1) || (segmentContent.tiers.length === 2 && i === 1) ? 'text-cyber-yellow-500' : 'text-cyber-yellow-500/70'}`} />
                            </div>
                            <span className="ml-2 text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href={{
                        pathname: '/contact',
                        query: { service: activeService, tier: tier.name, segment: clientSegment }
                      }}
                      className={`inline-flex items-center justify-center rounded-md ${(segmentContent.tiers.length === 3 && i === 1) || (segmentContent.tiers.length === 2 && i === 1) ? 'bg-cyber-yellow-500 text-black hover:bg-cyber-yellow-400' : 'bg-midnight-700 text-white hover:bg-midnight-600'} px-5 py-2.5 text-sm font-medium transition-all duration-300`}
                    >
                      {tier.price === 'Contact Us' ? 'Request Quote' : 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black backdrop-blur-sm shadow-lg p-6 md:p-8">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">
            {clientSegment === 'enterprise' ? 'Our Process' : 'How We Work With You'}
          </h2>
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
          <h2 className="mb-4 text-2xl font-bold text-white">
            {clientSegment === 'enterprise' 
              ? 'Ready to Transform Your Digital Presence?' 
              : 'Ready to Get Started?'}
          </h2>
          <p className="mb-6 mx-auto max-w-2xl text-base md:text-lg text-gray-300">
            {clientSegment === 'enterprise'
              ? 'Let\'s chat about your project over a free consultation call. No commitments, just honest conversation about how we can help.'
              : 'Jump on a quick call with us to discuss your project. We\'ll help you figure out exactly what you need without any tech overwhelm.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-cyber-yellow-500 px-6 py-3 text-base font-medium text-black shadow-xl transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/20"
            >
              {clientSegment === 'enterprise' ? 'Request Consultation' : 'Get a Quote'}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            {clientSegment === 'individual' && (
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-md bg-midnight-700 px-6 py-3 text-base font-medium text-white shadow-xl transition-all duration-300 hover:bg-midnight-600 hover:shadow-black/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-midnight-600/20"
              >
                View Our Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
