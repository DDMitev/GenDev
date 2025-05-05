import React from 'react';

interface GenDevLogoProps {
  className?: string;
}

export default function GenDevLogo({ className = '' }: GenDevLogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">Gen</span>
        <span className="text-cyber-yellow-500">Dev</span>
        <span className="text-cyber-yellow-500 ml-1 font-mono">&lt;/&gt;</span>
      </div>
      <div className="h-1 bg-cyber-yellow-500 w-full mt-1"></div>
    </div>
  );
}
