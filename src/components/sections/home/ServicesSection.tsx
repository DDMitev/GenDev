'use client';

import { useEffect, useState } from 'react';
import Container from '../../layout/Container';
import ScrollReveal from '../../ui/ScrollReveal';

const services = [
  {
    title: 'Web Design & Development',
    description:
      'Professional, responsive websites designed with modern aesthetics and optimized for user experience and conversion.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
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
                  key={service.title} 
                  direction="up" 
                  delay={150 + index * 150}
                  threshold={0.1}
                  distance={20}
                >
                  <div
                    className="group relative rounded-lg border border-midnight-600 bg-midnight-800/60 p-5 md:p-6 shadow-xl transition-all duration-300 hover:shadow-cyber-yellow-500/10 hover:translate-y-[-3px] hover:border-cyber-yellow-500/30"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyber-yellow-600 group-hover:to-cyber-yellow-500 group-hover:text-black">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyber-yellow-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                  </div>
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
                <div
                  key={service.title}
                  className="group relative rounded-lg border border-midnight-600 bg-midnight-800/60 p-5 md:p-6 shadow-xl transition-all duration-300 hover:shadow-cyber-yellow-500/10 hover:translate-y-[-3px] hover:border-cyber-yellow-500/30"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyber-yellow-600 group-hover:to-cyber-yellow-500 group-hover:text-black">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyber-yellow-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
