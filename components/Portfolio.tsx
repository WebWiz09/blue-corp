/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import { Page } from '../types';

interface PortfolioProps {
  setCurrentPage: (page: Page) => void;
}

export default function Portfolio({ setCurrentPage }: PortfolioProps) {
  const handleProjectClick = (projectId: string) => {
    if (projectId === 'kudi') {
      setCurrentPage('kudi');
    } else {
      setCurrentPage('portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p id="portfolio-eyebrow" className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">CASE STUDIES</p>
          <h2 id="portfolio-headline" className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
            Built. Deployed. Delivered.
          </h2>
        </div>

        {/* Project centered list */}
        <div className="max-w-2xl mx-auto">
          {PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-neutral-950/40 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow behind card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1E6BFF]/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full border border-[#1E6BFF]/30 bg-[#1E6BFF]/10 text-[#1E6BFF] text-[10px] font-bold tracking-wider uppercase font-mono">
                      {project.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#1E6BFF] opacity-70 animate-pulse" />
                  </div>

                  <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#1E6BFF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 mt-6 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-neutral-500">
                    CASE STUDY 01
                  </span>
                  <button
                    onClick={() => handleProjectClick(project.id)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer uppercase tracking-wider text-xs font-bold"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
