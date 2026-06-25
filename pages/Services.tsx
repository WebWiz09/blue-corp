/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES } from '../data';
import { Cpu, Workflow, Bot, CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'systems':
        return <Cpu className="w-12 h-12 text-[#1E6BFF]" />;
      case 'workflows':
        return <Workflow className="w-12 h-12 text-[#1E6BFF]" />;
      case 'agents':
        return <Bot className="w-12 h-12 text-[#1E6BFF]" />;
      default:
        return <Cpu className="w-12 h-12 text-[#1E6BFF]" />;
    }
  };

  const handleBookClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-page-container" className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">OUR SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-6">
            Bespoke engineering for high-output enterprises
          </h1>
          <p className="text-lg text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            We don't copy-paste templates. We examine your operations, identify manual bottlenecks, and program targeted digital layers that execute perfectly.
          </p>
        </div>

        {/* Deep Dive of services */}
        <div className="space-y-16">
          {SERVICES.map((service, idx) => {
            return (
              <div
                key={service.id}
                id={`services-detail-${service.id}`}
                className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden hover:border-neutral-700 transition-all duration-300"
              >
                <div className="absolute top-4 left-0 w-1.5 h-[calc(100%-32px)] bg-[#1E6BFF] rounded-r-full" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1E6BFF] tracking-widest uppercase font-mono">
                        CATEGORY 0{idx + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#1E6BFF] bg-[#1E6BFF]/5 border border-[#1E6BFF]/30 px-4 py-1.5 rounded-full font-mono uppercase self-start md:self-auto">
                    {service.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">THE MISSION</h3>
                    <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">KEY INCLUSIONS</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-neutral-400 font-normal">
                          <CheckCircle2 className="w-5 h-5 text-[#1E6BFF] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-20 bg-[#121212] border border-neutral-800 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E6BFF] opacity-5 blur-3xl rounded-full" />
          <h2 className="text-2xl md:text-3xl font-display font-black mb-4 tracking-tighter uppercase">Let's audit your business gaps together.</h2>
          <p className="text-sm md:text-base text-neutral-400 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            We offer a brief initial consultation session where we evaluate your active tools, teams, and data flow to lay out automation opportunities.
          </p>
          <button
            onClick={handleBookClick}
            className="px-8 py-4 rounded-full bg-[#1E6BFF] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg"
          >
            Schedule Free Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
