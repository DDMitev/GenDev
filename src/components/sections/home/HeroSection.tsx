'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-800 to-navy-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block">
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text pb-1 text-transparent">GenDev</span>: Where Web
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text pl-2 pb-1 text-transparent"> & Data </span>
              Connect
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            We build custom web applications and data solutions that help businesses modernize their digital presence and streamline operations.
            <span className="hidden sm:inline"> Our technical & business-focused partnership delivers both exceptional code and measurable results.</span>
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-emerald-600/20 hover:translate-y-[-2px]"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border border-navy-800/50 bg-navy-900/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-navy-900/50"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="absolute left-1/2 top-1/4 -z-10 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-800/40 to-transparent blur-2xl"></div>
      <div className="absolute right-1/4 top-1/2 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-navy-800/30 to-transparent blur-3xl"></div>
    </section>
  );
}
