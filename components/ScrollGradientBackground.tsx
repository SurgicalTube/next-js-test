'use client';

import React, { useLayoutEffect, useRef } from 'react';

const ScrollGradientBackground: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  const getWavePosition = (base: number, amplitude: number, frequency: number) => {
    return (y: number) => base + amplitude * Math.sin(frequency * y);
  };

  useLayoutEffect(() => {
    const updateGradient = () => {
      if (!gradientRef.current) return;

      const scrollY = window.scrollY;
      const colors = [
        `hsl(230, 70%, ${getWavePosition(15, 5, 0.001)(scrollY)}%)`,
        `hsl(240, 70%, ${getWavePosition(20, 5, 0.0012)(scrollY)}%)`,
        `hsl(260, 70%, ${getWavePosition(25, 5, 0.0014)(scrollY)}%)`,
        `hsl(270, 70%, ${getWavePosition(10, 5, 0.0016)(scrollY)}%)`,
        `hsl(280, 70%, ${getWavePosition(15, 5, 0.0018)(scrollY)}%)`
      ];

      const scrollGradient = colors.map((color, index) => `${color} ${index * 25}%`).join(', ');
      gradientRef.current.style.backgroundImage = `linear-gradient(135deg, ${scrollGradient})`;
    };

    window.addEventListener('scroll', updateGradient, { passive: true });
    updateGradient(); // Initial call to set the gradient

    return () => window.removeEventListener('scroll', updateGradient);
  }, []);

  return (
    <div 
      ref={gradientRef}
      className="fixed inset-0 transition-colors duration-300 ease-in-out"
      style={{
        zIndex: -1,
      }}
    />
  );
};

export default ScrollGradientBackground;
