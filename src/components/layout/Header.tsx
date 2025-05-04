'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';

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
    <header className="sticky top-0 z-50 w-full border-b border-fuchsia-800/30 bg-gradient-to-r from-fuchsia-950/95 via-violet-950/95 to-fuchsia-950/95 backdrop-blur-md backdrop-filter shadow-md transition-all duration-300">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-xl font-bold transition-transform duration-300 group-hover:scale-110">G</span>
            <span className="hidden text-lg font-medium bg-gradient-to-r from-fuchsia-200 to-violet-200 bg-clip-text text-transparent md:inline-block">GenDev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-fuchsia-100 transition-all duration-300 hover:text-fuchsia-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-fuchsia-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden transition-colors text-fuchsia-100 hover:text-fuchsia-200"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden transition-all duration-300 animate-fadeIn bg-gradient-to-b from-fuchsia-950/95 to-violet-950/95 backdrop-blur-md">
          <Container>
            <div className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-fuchsia-100 transition-colors hover:text-fuchsia-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
