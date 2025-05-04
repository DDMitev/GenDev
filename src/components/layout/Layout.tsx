'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageBackground from '../ui/PageBackground';
import FloatingParticles from '../ui/FloatingParticles';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <PageBackground />
      <FloatingParticles />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
