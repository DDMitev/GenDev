'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { 
  Gauge, 
  ShieldCheck, 
  Accessibility, 
  LineChart, 
  Code2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Zap
} from 'lucide-react';

export default function TaoServicePage() {
  // Service benefits
  const benefits = [
    {
      title: 'Improved Conversion Rates',
      description: 'Websites loading in 1 second can have conversion rates 2.5–3× higher than those loading in 5 seconds.',
      icon: <BarChart3 className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      title: 'Reduced Bounce Rates',
      description: '53% of mobile visitors leave if pages take more than 3 seconds to load, making performance optimization critical.',
      icon: <Zap className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      title: 'Protected Business Assets',
      description: '41% of small businesses were victims of a cyberattack in 2023, with a median cost of approximately €8,300 per incident.',
      icon: <ShieldCheck className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      title: 'Expanded Audience',
      description: 'Approximately 15% of the world\'s population has a disability, yet about 95% of homepages have WCAG failures.',
      icon: <Accessibility className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      title: 'Enhanced SEO Performance',
      description: 'Sites on Google\'s first page load in ~1.65s on average, showing the connection between performance and rankings.',
      icon: <LineChart className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      title: 'Lower Maintenance Costs',
      description: '86% of companies report being impacted by technical debt, and 91% of CTOs say it\'s a top challenge in 2024.',
      icon: <Code2 className="h-6 w-6 text-cyber-yellow-500" />
    }
  ];

  // Audit components
  const auditComponents = [
    {
      title: 'Performance Analysis',
      description: 'We analyze Core Web Vitals (LCP, CLS, INP), server response time, and overall loading speed to identify and fix bottlenecks that slow down your site.',
      icon: <Gauge className="h-12 w-12 text-cyber-yellow-500" />,
      keyPoints: [
        'Core Web Vitals assessment',
        'Server response optimization',
        'Resource loading strategies',
        'Performance budgeting',
        'Mobile and desktop optimization'
      ]
    },
    {
      title: 'Security Assessment',
      description: 'We scan for vulnerabilities, review authentication systems, and check compliance with security best practices to protect your site and user data.',
      icon: <ShieldCheck className="h-12 w-12 text-cyber-yellow-500" />,
      keyPoints: [
        'Vulnerability scanning',
        'SSL/TLS configuration review',
        'Authentication system assessment',
        'OWASP Top 10 compliance check',
        'Data protection evaluation'
      ]
    },
    {
      title: 'Accessibility Audit',
      description: 'We evaluate WCAG 2.1/2.2 compliance to ensure your site is usable by people with disabilities, expanding your audience and reducing legal risk.',
      icon: <Accessibility className="h-12 w-12 text-cyber-yellow-500" />,
      keyPoints: [
        'WCAG 2.1/2.2 compliance check',
        'Keyboard navigation testing',
        'Screen reader compatibility',
        'Color contrast analysis',
        'Form accessibility evaluation'
      ]
    },
    {
      title: 'Technical SEO',
      description: 'We examine crawlability, indexation, structured data, and other technical factors affecting your search visibility and rankings.',
      icon: <LineChart className="h-12 w-12 text-cyber-yellow-500" />,
      keyPoints: [
        'Crawlability assessment',
        'Indexation analysis',
        'Structured data implementation',
        'Site architecture review',
        'Mobile-friendliness testing'
      ]
    },
    {
      title: 'Code Quality',
      description: 'We analyze your codebase for maintainability, technical debt, and adherence to best practices to reduce future development costs.',
      icon: <Code2 className="h-12 w-12 text-cyber-yellow-500" />,
      keyPoints: [
        'Technical debt assessment',
        'Code structure analysis',
        'Dependency review',
        'Architecture evaluation',
        'Maintainability scoring'
      ]
    }
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Basic',
      price: '€2,000-3,500',
      description: 'Essential technical audit for small websites with straightforward needs',
      features: [
        'Core performance assessment',
        'Basic security scanning',
        'High-level accessibility review',
        'Technical SEO evaluation',
        'Code quality overview',
        'Prioritized recommendations report'
      ],
      cta: 'Request Basic Audit'
    },
    {
      name: 'Standard',
      price: '€4,000-7,000',
      description: 'Comprehensive audit for growing websites with moderate complexity',
      features: [
        'Comprehensive performance optimization plan',
        'Detailed security vulnerability assessment',
        'WCAG 2.1 AA compliance audit',
        'In-depth technical SEO analysis',
        'Code architecture evaluation',
        'Implementation roadmap with ROI estimates'
      ],
      cta: 'Request Standard Audit'
    },
    {
      name: 'Premium',
      price: '€8,000-15,000',
      description: 'Enterprise-grade audit for complex websites with advanced requirements',
      features: [
        'Enterprise-level performance strategy',
        'Advanced security penetration testing',
        'Full WCAG 2.1/2.2 compliance testing',
        'Complete technical SEO strategy',
        'Comprehensive code quality review',
        'Executive summary and implementation support'
      ],
      cta: 'Request Premium Audit'
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyber-yellow-500/10">
              <Gauge className="h-10 w-10 text-cyber-yellow-500" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">Technical Audit & Optimization</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            Comprehensive analysis and optimization of your website's performance, security, accessibility, 
            SEO, and code quality to deliver the best possible user experience and business outcomes.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Section */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">Why Technical Optimization Matters</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-yellow-500/10">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Audit Components Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black p-6 md:p-8">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">What We Audit</h2>
          
          <div className="space-y-12">
            {auditComponents.map((component, i) => (
              <div key={i} className="grid gap-6 md:grid-cols-[1fr_2fr]">
                <div className="flex flex-col items-start">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyber-yellow-500/10">
                    {component.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{component.title}</h3>
                </div>
                
                <div>
                  <p className="mb-4 text-gray-300">{component.description}</p>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {component.keyPoints.map((point, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyber-yellow-500" />
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {i < auditComponents.length - 1 && (
                  <div className="col-span-full my-6 border-b border-midnight-600"></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">Pricing Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-bold text-white">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyber-yellow-500">{tier.price}</span>
                  </div>
                  <p className="mb-6 text-gray-300">{tier.description}</p>
                  
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyber-yellow-500" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/contact?service=tao&tier=${tier.name.toLowerCase()}`}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyber-yellow-500 px-5 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px]"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            *Pricing varies based on website complexity, number of pages, technology stack, and specific requirements.
          </p>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="mb-16 overflow-hidden rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black p-6 md:p-8">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">How long does a technical audit take?</h3>
              <p className="text-gray-300">
                Depending on the complexity of your website and the audit package selected, a comprehensive 
                technical audit typically takes 2-4 weeks to complete. This includes the initial assessment, 
                detailed analysis, and preparation of the final report with recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Do you implement the recommended changes?</h3>
              <p className="text-gray-300">
                Our audit service includes detailed recommendations and an implementation roadmap. While 
                implementation is not included in the standard audit packages, we offer implementation 
                services as an add-on or can guide your development team through the process. Premium 
                packages include some implementation support.
              </p>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Will this audit improve my search rankings?</h3>
              <p className="text-gray-300">
                Technical optimization addresses many factors that search engines consider when ranking 
                websites, including performance, mobile-friendliness, and security. While we can\'t guarantee 
                specific ranking improvements (as content and backlinks also play major roles), our clients 
                typically see improved search visibility after implementing our recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">What makes your TAO service different from others?</h3>
              <p className="text-gray-300">
                Our Technical Audit & Optimization service is distinguished by its comprehensive approach 
                that examines five critical areas: performance, security, accessibility, technical SEO, 
                and code quality. We provide actionable, prioritized recommendations with clear ROI 
                potential rather than overwhelming you with technical issues. Our reports are designed 
                to be understood by both technical and non-technical stakeholders.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="rounded-lg border border-midnight-600 bg-gradient-to-br from-midnight-800 to-black p-6 md:p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to Optimize Your Website?</h2>
          <p className="mb-6 mx-auto max-w-2xl text-base md:text-lg text-gray-300">
            Contact us today for a free consultation about your technical audit needs. 
            Let's make your website faster, more secure, and more effective.
          </p>
          <Link
            href="/contact?service=tao"
            className="inline-flex items-center rounded-md bg-cyber-yellow-500 px-6 py-3 text-base font-medium text-black shadow-xl transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/20"
          >
            Request Your Technical Audit
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
