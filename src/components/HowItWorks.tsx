/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] px-4 md:px-8 border-t border-b border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p id="howitworks-eyebrow" className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">PROCESS</p>
          <h2 id="howitworks-headline" className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">
            How we work with you
          </h2>
        </div>

        {/* Steps container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle line connecting the steps */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-neutral-800 z-0" />

          {STEPS.map((step, idx) => {
            return (
              <motion.div
                key={step.number}
                id={`howitworks-step-${step.number}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 bg-[#121212] border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 bg-[#1E6BFF] text-white font-black flex items-center justify-center text-lg mb-6 font-mono rounded-full shadow-[0_4px_12px_rgba(30,107,255,0.3)]">
                  {step.number}
                </div>

                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
