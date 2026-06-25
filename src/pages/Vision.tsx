/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Layers, Workflow, Rocket, Shield } from 'lucide-react';
import { Page } from '../types';

interface VisionProps {
  setCurrentPage: (page: Page) => void;
}

export default function Vision({ setCurrentPage }: VisionProps) {
  const handleWorkWithUs = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="vision-page-container" className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">OUR VISION</p>
          <h1 id="vision-headline" className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-6">
            This is just the beginning.
          </h1>
          <div className="max-w-2xl mx-auto">
            <p id="vision-body" className="text-lg text-neutral-400 font-normal leading-relaxed mb-6">
              Today Bluecorp builds intelligent systems for businesses that want to move faster. We are building toward something larger — the AI infrastructure layer that powers the next generation of African startups and enterprises.
            </p>
            <p className="text-sm text-neutral-500 font-normal leading-relaxed">
              The brands and companies that define this continent's next decade will need intelligence built into their foundations. That is what Bluecorp is here to provide.
            </p>
          </div>
        </div>

        {/* Roadmap Visualizer */}
        <div className="relative border border-neutral-800 bg-[#121212] p-8 md:p-12 rounded-2xl shadow-2xl mb-16">
          <h2 className="text-xs font-bold text-neutral-400 mb-10 text-center uppercase tracking-widest font-mono">
            Strategic Roadmap
          </h2>
          
          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            
            {/* Roadmap Line Connector (Desktop only) */}
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-neutral-800 z-0" />

            {/* Stage 1 */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-[#1E6BFF]/40 text-[#1E6BFF] flex items-center justify-center mb-4 shadow-sm font-mono text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-2">Agency</h3>
              <span className="px-3 py-1 rounded-full bg-[#1E6BFF] text-white text-[9px] font-bold tracking-widest uppercase mb-4 font-mono">
                Now
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                Deploying tailor-made, high-precision automation engines and cognitive layers for active organizations.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-500 flex items-center justify-center mb-4 shadow-sm font-mono text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-2">Products</h3>
              <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[9px] font-bold tracking-widest uppercase mb-4 font-mono">
                Next
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                Incubating standalone digital helpers like Kudi to resolve specific small business friction at massive scale.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-500 flex items-center justify-center mb-4 shadow-sm font-mono text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-2">Infrastructure</h3>
              <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-[9px] font-bold tracking-widest uppercase mb-4 font-mono">
                Future
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                Constructing the fundamental AI hosting, intelligence routing, and ledger tools that power African business.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase mb-4">
            ALIGN WITH OUR MISSION
          </p>
          <button
            id="vision-work-with-us-btn"
            onClick={handleWorkWithUs}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer group shadow-2xl"
          >
            Work With Us
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-white group-hover:text-black" />
          </button>
        </div>

      </div>
    </div>
  );
}
