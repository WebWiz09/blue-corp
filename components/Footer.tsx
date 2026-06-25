/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const links: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Contact', value: 'contact' },
    { label: 'Vision', value: 'vision' },
    { label: 'Kudi', value: 'kudi' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column Left: Brand & Tagline */}
          <div className="md:col-span-5">
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer select-none font-extrabold text-xl md:text-2xl tracking-tighter mb-3 inline-block font-display uppercase"
              id="footer-logo"
            >
              <span className="text-[#1E6BFF]">Blue</span>
              <span className="text-white">corp</span>
            </div>
            <p className="text-xs text-[#1E6BFF] font-mono tracking-[0.2em] uppercase mb-4">
              Intelligence in Motion
            </p>
            <p className="text-sm text-neutral-400 font-normal max-w-sm leading-relaxed">
              We design and construct smart operational layers that automate manual gaps and accelerate African enterprises.
            </p>
          </div>

          {/* Column Center: Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">NAVIGATION</h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.value}>
                  <button
                    id={`footer-link-${link.value}`}
                    onClick={() => handleNavClick(link.value)}
                    className="text-sm text-neutral-400 hover:text-[#1E6BFF] transition-colors cursor-pointer uppercase tracking-wider text-xs font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column Right: Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">CONNECT</h4>
            <div className="flex gap-4">
              {/* Linked in to CEO profile */}
              <a
                href="https://www.linkedin.com/in/henry-nnamene-1285582a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-110 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-110 transition-all cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#1E6BFF] hover:border-[#1E6BFF] hover:scale-110 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[10px] text-neutral-500 mt-4 leading-relaxed font-mono">
              Inquiries: hello@bluecorp.tech
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p id="footer-credit">
            Made with love by <a href="https://www.linkedin.com/in/henry-nnamene-1285582a2/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E6BFF] underline font-bold">Henry</a>.
          </p>
          <p>© Bluecorp 2026. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
