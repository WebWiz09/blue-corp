/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'motion/react';

interface MeetKudiProps {
  setCurrentPage: (page: Page) => void;
}

export default function MeetKudi({ setCurrentPage }: MeetKudiProps) {
  const handleNavToKudi = () => {
    setCurrentPage('kudi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-4 md:px-8 overflow-hidden border-t border-b border-neutral-900 relative">
      {/* Dynamic ambient glass backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1E6BFF]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Content Left */}
          <motion.div 
            className="md:col-span-5 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1E6BFF]/15 border border-[#1E6BFF]/30 text-[#1E6BFF] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3" />
                A BLUECORP PRODUCT
              </span>
            </div>

            <h2 id="meet-kudi-headline" className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter leading-[0.95] uppercase mb-6">
              Every business deserves a CFO.
            </h2>

            <p id="meet-kudi-body" className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-8">
              Most business owners are their own accountant, invoice chaser, and financial analyst all at once. Kudi handles it. Send receipts. Request invoices. Get weekly financial summaries. Know exactly where your money stands.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                id="kudi-learn-more-btn"
                onClick={handleNavToKudi}
                className="px-6 py-3 rounded-full bg-[#1E6BFF] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-[#1E6BFF]/20"
              >
                Learn More
              </button>
              <button
                id="kudi-try-btn"
                onClick={handleNavToKudi}
                className="px-6 py-3 rounded-full border border-neutral-700 bg-white/5 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Try Kudi
              </button>
            </div>
          </motion.div>

          {/* Large Glassmorphic Coming Soon Placeholder Right */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-video rounded-2xl bg-neutral-950/40 border border-white/10 overflow-hidden shadow-2xl group flex flex-col items-center justify-center p-8 backdrop-blur-md">
              {/* Glass tech patterns */}
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1E6BFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#1E6BFF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#1E6BFF]/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Dynamic Glass reflection shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
              
              {/* Interactive Holographic Core */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E6BFF]/20 to-[#1E6BFF]/5 border border-[#1E6BFF]/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(30,107,255,0.2)]"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Sparkles className="w-8 h-8 text-[#1E6BFF]" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-widest uppercase mb-1">
                  KUDI
                </h3>
                
                <span className="px-3 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/30 text-[#1E6BFF] text-[9px] font-bold tracking-widest uppercase font-mono mb-4 animate-pulse">
                  COMING SOON
                </span>
                
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider max-w-xs leading-relaxed">
                  Bespoke CFO automation for Africa. Currently in exclusive private preview.
                </p>
              </div>
              
              {/* Sleek aesthetic frame lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/20 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/20 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/20 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/20 rounded-br-sm pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
