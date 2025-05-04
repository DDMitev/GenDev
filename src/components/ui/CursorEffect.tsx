'use client';

import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct positioning (no lerp/elastic effect)
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Add event listeners to the document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // If not visible, return null
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* Primary cursor glow */}
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          height: '120px',
          width: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.15) 0%, rgba(112, 26, 117, 0.05) 70%, rgba(139, 92, 246, 0) 100%)',
          opacity: 0.6,
          filter: 'blur(10px)',
          mixBlendMode: 'lighten' as any,
        }}
      />
      
      {/* Secondary, smaller cursor glow */}
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          height: '80px',
          width: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, rgba(139, 92, 246, 0.05) 70%, rgba(139, 92, 246, 0) 100%)',
          opacity: 0.5,
          filter: 'blur(8px)',
          mixBlendMode: 'lighten' as any,
        }}
      />
    </div>
  );
}
