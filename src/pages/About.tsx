/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FounderAvatar from '../components/FounderAvatar';
import { Linkedin, Compass, Eye, Heart, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const handleReadOurVision = () => {
    setCurrentPage('vision');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about-page-container" className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">OUR STORY</p>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-6">
            Africa deserves world-class intelligence.
          </h1>
          <p className="text-lg text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Bluecorp was founded to build deep, custom AI solutions for African startups, real estate agencies, and small-to-medium enterprises that require precision execution.
          </p>
        </div>

        {/* Founder Spot Section */}
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left avatar */}
            <div className="md:col-span-5">
              <FounderAvatar />
            </div>

            {/* Right details */}
            <div className="md:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold text-[#1E6BFF] tracking-widest font-mono uppercase mb-1">FOUNDER & CEO</span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4">Henry Nnamene</h2>
              
              <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-6">
                Most AI companies build general tools for Western markets. Henry founded Bluecorp to focus specifically on the localized bottlenecks holding back African companies. From FinTech to real estate, we solve African infrastructure challenges with modular artificial intelligence.
              </p>

              <p className="text-xs md:text-sm text-neutral-500 italic leading-relaxed mb-8">
                "Our goal is not just automating jobs, but unlocking high-impact output for businesses that can define this continent's next decade."
              </p>

              <a
                id="about-founder-linkedin"
                href="https://www.linkedin.com/in/henry-nnamene-1285582a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-white hover:text-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#1E6BFF]" />
                Connect with Henry on LinkedIn
              </a>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-black text-center text-white uppercase tracking-tight mb-12">The Principles We Code By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl text-center hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 text-[#1E6BFF] flex items-center justify-center mx-auto mb-6 rounded-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-3">Absolute Customization</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
                No cookie-cutter templates. We write bespoke systems designed to perfectly fit your unique business workflows.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl text-center hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 text-[#1E6BFF] flex items-center justify-center mx-auto mb-6 rounded-xl">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-3">Quiet Confidence</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
                We believe in pristine engineering, not visual clutter. Our solutions speak through reliable metrics and output.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl text-center hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 text-[#1E6BFF] flex items-center justify-center mx-auto mb-6 rounded-xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-3">African Grounding</h3>
              <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">
                We design with deep empathy for localized constraints like network variations, cash-flow rhythms, and mobile-first users.
              </p>
            </div>

          </div>
        </div>

        {/* Read Our Vision CTA Bottom */}
        <div className="text-center">
          <button
            id="about-read-vision-cta"
            onClick={handleReadOurVision}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer group"
          >
            Read Our Vision
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-white group-hover:text-black" />
          </button>
        </div>

      </div>
    </div>
  );
}
