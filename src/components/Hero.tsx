/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page } from '../types';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const words = ['Systems', 'Workflows', 'Agents', 'Results'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#0a0a0a]">
      {/* Background with slight blue gradient bleeding from top corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1E6BFF]/10 to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1E6BFF]/10 to-transparent opacity-40 blur-3xl pointer-events-none" />
      
      {/* Geometric prism shapes pattern (Using lightweight SVG with #1E6BFF) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 150 L300 200 L200 350 Z" stroke="#1E6BFF" strokeWidth="1" />
          <path d="M1200 120 L1350 250 L1150 300 Z" stroke="#1E6BFF" strokeWidth="1" />
          <path d="M50 600 L180 500 L120 700 Z" stroke="#1E6BFF" strokeWidth="1" />
          <path d="M1300 650 L1400 550 L1250 750 Z" stroke="#1E6BFF" strokeWidth="1" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="#4a4a4a" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="720" y1="0" x2="720" y2="800" stroke="#4a4a4a" strokeWidth="0.5" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtle badge */}
        <div id="hero-badge" className="mb-8 px-4 py-1.5 rounded-full border border-[#1E6BFF] text-[#1E6BFF] text-xs font-bold tracking-[0.2em] uppercase font-mono bg-[#1E6BFF]/5 backdrop-blur-sm">
          INTELLIGENCE IN MOTION
        </div>

        {/* Headline */}
        <h1 id="hero-headline" className="text-5xl sm:text-7xl md:text-[90px] font-display font-black text-white tracking-tighter leading-[0.9] uppercase mb-8">
          We build<br />
          <span className="text-outline">intelligent</span>
          <div className="h-[1.15em] relative flex items-center justify-center overflow-hidden mt-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inline-block text-[#1E6BFF] pb-2 font-display uppercase tracking-tight"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>

        {/* Subheadline */}
        <p id="hero-subheadline" className="text-base md:text-lg text-neutral-400 font-normal max-w-xl mx-auto mb-12 leading-relaxed">
          Your business has gaps. We close them with intelligence that works while you sleep.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button
            id="hero-see-work-btn"
            onClick={() => {
              setCurrentPage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-10 py-4 rounded-full bg-[#1E6BFF] text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(30,107,255,0.3)] cursor-pointer text-xs"
          >
            See Our Work
          </button>
          <button
            id="hero-talk-btn"
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-10 py-4 rounded-full border border-neutral-700 text-white font-bold uppercase tracking-wider hover:bg-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-105 transition-all duration-300 cursor-pointer text-xs"
          >
            Talk to Us
          </button>
        </div>

        {/* Trust Indicators Client Strip */}
        <div id="trust-indicator" className="w-full max-w-3xl border-t border-neutral-800 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 font-mono">
            BUILDING FRONT-LINE PRODUCTS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-black tracking-widest text-white hover:text-[#1E6BFF] transition-colors cursor-default">KUDI AI CFO</span>
            <span className="text-xs font-black tracking-widest text-white hover:text-[#1E6BFF] transition-colors cursor-default">KUDI PAY</span>
            <span className="text-xs font-black tracking-widest text-white hover:text-[#1E6BFF] transition-colors cursor-default">KUDI LEDGER</span>
            <span className="text-xs font-black tracking-widest text-white hover:text-[#1E6BFF] transition-colors cursor-default">KUDI SUITE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
