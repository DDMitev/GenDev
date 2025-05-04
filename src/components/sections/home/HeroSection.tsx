'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-midnight-800 to-black py-12 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 animate-pulse-slow">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-cyber-yellow-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/4 rounded-full bg-cyber-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Transform Your Digital Presence with</span>
            <span className="mt-1 block bg-gradient-to-r from-cyber-yellow-400 to-cyber-yellow-600 bg-clip-text text-transparent">
              GenDev
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
            We're a specialized partnership delivering modern web development and data management 
            solutions to help businesses improve their digital presence and operational efficiency.
          </p>
          
          <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-cyber-yellow-500 px-6 py-3 text-base font-medium text-black shadow-lg hover:bg-cyber-yellow-400 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md border border-cyber-yellow-500/30 bg-midnight-700/50 px-6 py-3 text-base font-medium text-cyber-yellow-500 hover:bg-midnight-700 hover:text-cyber-yellow-400 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured image */}
          <div className="mt-12 w-full rounded-lg border border-midnight-700 bg-midnight-800/50 p-3 shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden rounded bg-midnight-700">
              <div className="grid h-full place-items-center bg-gradient-to-br from-black to-midnight-700">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyber-yellow-500 text-black text-2xl font-bold">
                    G
                  </div>
                  <span className="bg-gradient-to-r from-cyber-yellow-400 to-cyber-yellow-600 bg-clip-text text-transparent">
                    GenDev Project Display
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
