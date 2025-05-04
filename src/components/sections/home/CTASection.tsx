'use client';

import Link from 'next/link';
import Container from '../../layout/Container';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-midnight-900/90">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full border-2 border-cyber-yellow-500/40"></div>
        <div className="absolute right-1/3 bottom-1/4 h-48 w-48 md:h-64 md:w-64 rounded-full border border-cyber-yellow-500/40"></div>
        <div className="absolute right-1/4 top-1/2 h-24 w-24 md:h-32 md:w-32 rounded-full border border-cyber-yellow-500/40"></div>
      </div>
      
      <Container>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl font-bold text-white">
            Ready to transform your digital presence?
          </h2>
          <p className="mx-auto mb-6 md:mb-8 max-w-2xl text-base md:text-lg text-gray-300">
            Get in touch to discuss how we can help with your next project.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-cyber-yellow-500 px-5 py-2.5 md:px-6 md:py-3 text-base font-medium text-black shadow-xl transition-all duration-300 hover:shadow-cyber-yellow-500/20 hover:bg-cyber-yellow-400 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-cyber-yellow-600 focus:ring-offset-2 focus:ring-offset-midnight-900"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 h-4 w-4 md:h-5 md:w-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
