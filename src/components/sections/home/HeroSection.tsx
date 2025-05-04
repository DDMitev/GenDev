'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-midnight-800 to-black py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 animate-pulse-slow">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-cyber-yellow-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/4 rounded-full bg-cyber-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="md:flex md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-white">Modern Web Solutions</span>
                <span className="mt-2 block bg-gradient-to-r from-cyber-yellow-400 to-cyber-yellow-600 bg-clip-text text-transparent">
                  GenDev
                </span>
              </h1>
              
              <p className="mt-5 max-w-md text-lg text-gray-300">
                Custom web development and data solutions to boost your digital presence.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-cyber-yellow-500 px-5 py-3 text-base font-medium text-black shadow-lg hover:bg-cyber-yellow-400 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-600 focus:ring-offset-2 focus:ring-offset-midnight-900"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-md border border-cyber-yellow-500/30 bg-midnight-700/50 px-5 py-3 text-base font-medium text-cyber-yellow-500 hover:bg-midnight-700 hover:text-cyber-yellow-400 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/50 focus:ring-offset-2 focus:ring-offset-midnight-900"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Featured image */}
            <div className="md:w-1/2">
              <div className="rounded-lg border border-midnight-600 bg-midnight-800/50 p-3 shadow-2xl">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-gradient-to-br from-black to-midnight-700">
                  <div className="flex h-full flex-col items-center justify-center p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-cyber-yellow-500 text-black text-2xl font-bold mb-4">
                      G
                    </div>
                    <span className="mt-2 text-xl font-semibold bg-gradient-to-r from-cyber-yellow-400 to-cyber-yellow-600 bg-clip-text text-transparent">
                      Web Development
                    </span>
                    <span className="mt-1 text-sm text-gray-400">
                      Modern Solutions for Modern Businesses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
