/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Workflow, Bot, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { Page } from '../types';
import { motion } from 'motion/react';

interface WhatWeDoProps {
  setCurrentPage: (page: Page) => void;
}

export default function WhatWeDo({ setCurrentPage }: WhatWeDoProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'systems':
        return <Cpu className="w-8 h-8 text-[#1E6BFF]" />;
      case 'workflows':
        return <Workflow className="w-8 h-8 text-[#1E6BFF]" />;
      case 'agents':
        return <Bot className="w-8 h-8 text-[#1E6BFF]" />;
      default:
        return <Cpu className="w-8 h-8 text-[#1E6BFF]" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#0a0a0a] px-4 md:px-8 overflow-hidden">
      {/* Immersive background lights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#1E6BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p id="whatwedo-eyebrow" className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">WHAT WE DO</p>
          <h2 id="whatwedo-headline" className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
            Less friction.<br />More output.
          </h2>
        </motion.div>

        {/* Stacked cards container using CSS position sticky */}
        <div className="space-y-12">
          {SERVICES.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                className="sticky bg-neutral-950/40 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl hover:border-white/20 transition-all duration-300 group"
                style={{
                  top: `calc(7rem + ${idx * 1.5}rem)`,
                  zIndex: 10 + idx,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E6BFF] rounded-t-2xl opacity-80" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neutral-900/60 border border-white/5 rounded-xl group-hover:border-[#1E6BFF]/30 transition-colors">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight group-hover:text-[#1E6BFF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#1E6BFF] font-mono mt-0.5 tracking-wider uppercase">
                        Service {idx + 1}
                      </p>
                    </div>
                  </div>
                  <span className="text-4xl font-extrabold text-neutral-800 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-base md:text-lg text-neutral-400 font-normal mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-neutral-500 max-w-md">
                    {service.detailedDescription}
                  </p>
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1E6BFF] hover:text-white transition-colors duration-200 group cursor-pointer uppercase tracking-wider"
                  >
                    Explore details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
