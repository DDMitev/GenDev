'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import GenDevLogo from '@/components/ui/GenDevLogo';

// Navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-black/90 to-midnight-700/70 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <GenDevLogo className="h-full py-1" />
            <span className="ml-2 text-xl font-semibold text-white sr-only">GenDev</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white transition-all duration-300 hover:text-cyber-yellow-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyber-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden transition-colors text-white hover:text-cyber-yellow-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="bg-gradient-to-b from-midnight-800 to-midnight-900 px-2 pt-2 pb-3">
            <Container>
              <div className="space-y-1 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-white hover:bg-midnight-700 hover:text-cyber-yellow-500 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 border-t border-midnight-600 pt-4 pb-3">
                <div className="flex items-center px-3">
                  <button className="flex-shrink-0 rounded-md bg-cyber-yellow-500 px-3 py-2 text-black font-medium shadow-sm hover:bg-cyber-yellow-400 focus:outline-none">
                    Get Started
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
