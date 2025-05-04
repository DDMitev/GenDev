'use client';

import Link from 'next/link';
import Container from '../../layout/Container';

export default function FeaturedProjectSection() {
  return (
    <section className="relative py-24">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-fuchsia-200 sm:text-4xl">
            Featured Project
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100/80">
            Take a look at one of my recent projects showcasing my skills and approach
          </p>
        </div>

        <div className="relative z-10 overflow-hidden rounded-2xl bg-indigo-900/20 backdrop-blur-sm shadow-xl ring-1 ring-indigo-800/30 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/5 hover:ring-fuchsia-500/20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-0">
            <div className="relative h-60 overflow-hidden bg-gradient-to-br from-fuchsia-600 to-violet-600 sm:h-80 lg:h-full">
              {/* Project image placeholder with gradient animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-mono text-white/80 text-sm">BuildHolding Project</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 h-full w-full opacity-20">
                <div className="absolute top-[20%] left-[10%] h-20 w-20 rounded-full border border-white/20"></div>
                <div className="absolute top-[50%] left-[30%] h-32 w-32 rounded-full border border-white/30"></div>
                <div className="absolute top-[70%] left-[20%] h-16 w-16 rounded-full border border-white/20"></div>
                <div className="absolute right-[20%] bottom-[10%] h-24 w-24 rounded-full border border-white/20"></div>
              </div>
            </div>

            <div className="px-6 py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-2xl">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-fuchsia-200">
                    BuildHolding - Modern Construction Website
                  </h3>
                  <p className="mt-6 text-lg text-indigo-100/80">
                    A comprehensive website redesign for a construction company, featuring modern UI, responsive design, and interactive elements to showcase the company's projects and services.
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-medium text-fuchsia-200">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-medium text-fuchsia-200">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-200">
                      Tailwind CSS
                    </span>
                    <span className="inline-flex items-center rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-200">
                      Responsive Design
                    </span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    href="/portfolio/buildholding"
                    className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-fuchsia-500/20 hover:translate-y-[-2px] focus:outline-none"
                  >
                    View Case Study
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
