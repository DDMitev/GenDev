'use client';

import React from 'react';

export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950 via-indigo-950 to-violet-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-3xl opacity-40"></div>
      <div className="absolute top-[40%] left-0 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl opacity-30"></div>
      
      {/* CTA area highlight */}
      <div className="absolute bottom-[20%] inset-x-0 h-[600px] bg-gradient-to-r from-violet-800/50 to-fuchsia-700/50 blur-xl"></div>
      
      {/* Footer area darkening */}
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-b from-transparent to-violet-950/80"></div>
    </div>
  );
}
