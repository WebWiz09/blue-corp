/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
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
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <nav
        id="main-navigation"
        className="mx-auto max-w-4xl bg-neutral-950/65 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-white/20"
      >
        {/* Logo - Wordmark only, no icon or symbol. Blue in #1E6BFF, corp in #ffffff */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer select-none font-extrabold text-xl md:text-2xl tracking-tighter uppercase font-display"
          id="navbar-logo"
        >
          <span className="text-[#1E6BFF]">Blue</span>
          <span className="text-white">corp</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => {
            const isActive = currentPage === link.value;
            return (
              <li key={link.value}>
                <button
                  id={`nav-link-${link.value}`}
                  onClick={() => handleNavClick(link.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E6BFF] text-white shadow-[0_2px_10px_rgba(30,107,255,0.4)]'
                      : 'text-neutral-400 hover:text-[#1E6BFF] hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div>
          <button
            id="nav-get-started-btn"
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border border-[#1E6BFF] text-[#1E6BFF] hover:bg-[#1E6BFF] hover:text-white transition-all duration-200 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
