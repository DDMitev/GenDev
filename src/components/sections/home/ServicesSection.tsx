'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '../../layout/Container';
import ScrollReveal from '../../ui/ScrollReveal';

const services = [
  {
    title: 'Web Design & Development',
    description:
      'Full-stack web solutions with modern Next.js frontend and Firebase backend. From responsive websites to scalable web applications built for performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    href: '/services#web'
  },
  {
    title: 'Custom Email Templates',
    description:
      'Eye-catching, responsive email templates that work flawlessly across all devices and email clients, designed to boost engagement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    href: '/services#email'
  },
  {
    title: 'Technical Consultation',
    description:
      'Expert guidance for design implementation, technology selection, and optimization to ensure your digital projects succeed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services#consulting'
  },
  {
    title: 'Technical Audit & Optimization',
    description:
      'Comprehensive analysis and optimization of website performance, security, accessibility, and technical SEO to deliver the best user experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: '/services/tao'
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  // This ensures that animations only trigger after hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-midnight-900/90">
      <Container>
        {mounted ? (
          <>
            <ScrollReveal>
              <div className="relative z-10 mx-auto max-w-2xl text-center mb-12 md:mb-16">
                <h2 className="mb-3 text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Expert Services
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Specialized solutions to help your business grow
                </p>
              </div>
            </ScrollReveal>

            <div className="relative z-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ScrollReveal 
                  direction="up" 
                  delay={150 + index * 150}
                  threshold={0.1}
                  distance={20}
                >
                  <Link href={service.href} key={service.title}>
                    <div
                      className="group relative rounded-lg border border-midnight-600 bg-midnight-800/60 p-5 md:p-6 shadow-xl transition-all duration-300 hover:shadow-cyber-yellow-500/10 hover:translate-y-[-3px] hover:border-cyber-yellow-500/30"
                    >
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyber-yellow-600 group-hover:to-cyber-yellow-500 group-hover:text-black">
                        {service.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyber-yellow-500 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                      <div 
                        className="mt-4 inline-flex items-center text-cyber-yellow-500 hover:text-cyber-yellow-400"
                      >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="relative z-10 mx-auto max-w-2xl text-center mb-12 md:mb-16">
              <h2 className="mb-3 text-2xl md:text-3xl font-bold tracking-tight text-white">
                Expert Services
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Specialized solutions to help your business grow
              </p>
            </div>

            <div className="relative z-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link href={service.href} key={service.title}>
                  <div
                    className="group relative rounded-lg border border-midnight-600 bg-midnight-800/60 p-5 md:p-6 shadow-xl transition-all duration-300 hover:shadow-cyber-yellow-500/10 hover:translate-y-[-3px] hover:border-cyber-yellow-500/30"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyber-yellow-600 group-hover:to-cyber-yellow-500 group-hover:text-black">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyber-yellow-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                    <div 
                      className="mt-4 inline-flex items-center text-cyber-yellow-500 hover:text-cyber-yellow-400"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
