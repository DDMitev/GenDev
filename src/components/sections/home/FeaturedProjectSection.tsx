'use client';

import Link from 'next/link';
import Container from '../../layout/Container';

export default function FeaturedProjectSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-midnight-900/90 to-black">
      <Container>
        <div className="text-center mb-10 md:mb-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Featured Project
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-gray-300">
            A recent project showcasing our expertise
          </p>
        </div>

        <div className="relative z-10 overflow-hidden rounded-lg bg-midnight-800/60 shadow-xl ring-1 ring-midnight-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-yellow-500/10 hover:ring-cyber-yellow-500/30">
          <div className="lg:grid lg:grid-cols-2 lg:gap-0">
            <div className="relative h-60 overflow-hidden bg-gradient-to-br from-black to-midnight-700 sm:h-72 lg:h-full">
              {/* Project image placeholder with gradient animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-md bg-cyber-yellow-500 text-black text-2xl font-bold mb-3">
                    B
                  </div>
                  <div className="font-mono text-cyber-yellow-500 text-base md:text-lg">BuildHolding</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 h-full w-full opacity-20">
                <div className="absolute top-[20%] left-[10%] h-20 w-20 rounded-full border border-cyber-yellow-500/40"></div>
                <div className="absolute top-[50%] left-[30%] h-32 w-32 rounded-full border border-cyber-yellow-500/50"></div>
                <div className="absolute top-[70%] left-[20%] h-16 w-16 rounded-full border border-cyber-yellow-500/40"></div>
                <div className="absolute right-[20%] bottom-[10%] h-24 w-24 rounded-full border border-cyber-yellow-500/40"></div>
              </div>
            </div>

            <div className="px-5 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
              <div className="mx-auto">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    BuildHolding - Construction Website
                  </h3>
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300">
                    A modern website redesign featuring responsive design and multilingual support to showcase the company's projects and services.
                  </p>
                </div>
                
                <div className="mt-5 md:mt-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/10 px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-medium text-cyber-yellow-400">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/10 px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-medium text-cyber-yellow-400">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/10 px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-medium text-cyber-yellow-400">
                      Tailwind CSS
                    </span>
                    <span className="inline-flex items-center rounded-full bg-cyber-yellow-500/10 px-2.5 py-0.5 md:px-3 md:py-1 text-xs font-medium text-cyber-yellow-400">
                      i18n
                    </span>
                  </div>
                </div>
                
                <div className="mt-5 md:mt-6">
                  <Link
                    href="/portfolio/buildholding"
                    className="inline-flex items-center rounded-md bg-cyber-yellow-500 px-4 py-2 md:px-5 md:py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px] focus:outline-none"
                  >
                    View Case Study
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
