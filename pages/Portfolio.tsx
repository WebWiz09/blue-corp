/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROJECTS } from '../data';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { Page } from '../types';

interface PortfolioProps {
  setCurrentPage: (page: Page) => void;
}

export default function Portfolio({ setCurrentPage }: PortfolioProps) {
  const handleProjectLink = (projectId: string) => {
    if (projectId === 'kudi') {
      setCurrentPage('kudi');
    } else {
      // Keep on portfolio detail view
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-page-container" className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">OUR WORK</p>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-6">
            Built. Deployed. Delivered.
          </h1>
          <p className="text-lg text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Real software running in production. We solve localized company bottlenecks and measure our success strictly in hours saved, leads qualified, and invoices collected.
          </p>
        </div>

        {/* Detailed Projects list */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            return (
              <div
                key={project.id}
                id={`portfolio-item-${project.id}`}
                className="bg-neutral-950/40 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E6BFF]/5 opacity-30 blur-3xl rounded-full" />
                
                {/* Top Row with Tag & Number */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="px-3 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/30 text-[#1E6BFF] text-xs font-bold font-mono tracking-wider uppercase">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">PROJECT 01</span>
                </div>

                {/* Title & Body */}
                <h2 className="text-2xl md:text-3.5xl font-display font-black text-white uppercase tracking-tight mb-4 relative z-10">
                  {project.title}
                </h2>
                <p className="text-base text-neutral-300 font-normal leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-8 relative z-10">
                  {project.detailedDescription}
                </p>

                {/* Highlight Outcomes Grid */}
                <div className="bg-neutral-900/60 border border-white/5 rounded-xl p-6 md:p-8 mb-8 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#1E6BFF]" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">PROJECT OUTCOMES</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {project.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#1E6BFF] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-400 font-semibold">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details/CTA Link */}
                <div className="flex justify-end relative z-10">
                  <button
                    onClick={() => handleProjectLink(project.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer group shadow-lg shadow-[#1E6BFF]/20"
                  >
                    Explore Kudi Landing Page
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
