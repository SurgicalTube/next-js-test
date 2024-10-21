'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollGradientBackground from '../../components/ScrollGradientBackground';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollGradientBackground />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
