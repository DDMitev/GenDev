'use client';

import Link from 'next/link';
import Container from '../../layout/Container';

export default function CTASection() {
  return (
    <section className="relative py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full border-2 border-white"></div>
        <div className="absolute right-1/3 bottom-1/4 h-64 w-64 rounded-full border border-white"></div>
        <div className="absolute right-1/4 top-1/2 h-32 w-32 rounded-full border border-white"></div>
      </div>
      
      <Container>
        <div className="relative z-10 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to bring your ideas to life?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-indigo-100">
            Let's collaborate to create something amazing. Get in touch to discuss your project.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-indigo-900 px-8 py-3 text-base font-medium text-fuchsia-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-indigo-800 hover:translate-y-[-2px] focus:outline-none border border-indigo-700"
          >
            Start a Conversation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 h-5 w-5"
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
