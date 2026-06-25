/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import MeetKudi from '../components/MeetKudi';
import FounderAvatar from '../components/FounderAvatar';
import ContactForm from '../components/ContactForm';
import { ArrowRight, Linkedin } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const handleReadOurVision = () => {
    setCurrentPage('vision');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container">
      {/* Hero Section */}
      <Hero setCurrentPage={setCurrentPage} />

      {/* What We Do Section (Stacked Cards) */}
      <WhatWeDo setCurrentPage={setCurrentPage} />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Portfolio Section */}
      <Portfolio setCurrentPage={setCurrentPage} />

      {/* Meet Kudi Section */}
      <MeetKudi setCurrentPage={setCurrentPage} />

      {/* About Founder Section (Built by someone who believes Africa deserves better) */}
      <section className="py-24 bg-[#0a0a0a] px-4 md:px-8 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Avatar Column */}
            <div className="md:col-span-5 order-last md:order-first">
              <FounderAvatar />
            </div>

            {/* Copy Column */}
            <div className="md:col-span-7 flex flex-col items-start">
              <p className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">ABOUT THE FOUNDER</p>
              <h2 id="founder-headline" className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter leading-[0.95] uppercase mb-6">
                Built by someone who believes Africa deserves better.
              </h2>
              <p id="founder-body" className="text-base text-neutral-400 font-normal leading-relaxed mb-6">
                Henry started Bluecorp because he believes African businesses deserve world-class intelligence, built by people who understand their struggles. When he's not writing code or talking to clients, he's advocating for open-source AI infrastructure.
              </p>
              
              {/* LinkedIn Button & Vision CTA side by side */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  id="founder-linkedin-link"
                  href="https://www.linkedin.com/in/henry-nnamene-1285582a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-white hover:text-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-[#1E6BFF]" />
                  Connect on LinkedIn
                </a>
                
                <button
                  id="founder-vision-btn"
                  onClick={handleReadOurVision}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer group"
                >
                  Read Our Vision
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-white group-hover:text-black" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
