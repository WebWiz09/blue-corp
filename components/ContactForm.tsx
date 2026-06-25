/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please tell us your name.';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business or project name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please specify what you need help with.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const submission: ContactSubmission = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Save submission in localStorage to demonstrate persistence
      try {
        const existing = localStorage.getItem('bluecorp_leads');
        const leads = existing ? JSON.parse(existing) : [];
        leads.push(submission);
        localStorage.setItem('bluecorp_leads', JSON.stringify(leads));
      } catch (err) {
        console.error('Failed to save lead', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', businessName: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0a0a0a] px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column - Headline and Call Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <p id="contact-eyebrow" className="text-xs font-bold text-[#1E6BFF] uppercase tracking-[0.2em] mb-3 font-mono">GET IN TOUCH</p>
              <h2 id="contact-headline" className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter leading-[0.95] uppercase mb-6">
                Ready to build something that works?
              </h2>
              <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-8">
                Drop us a line using the form, or skip the back-and-forth and book a brief consultation directly on our calendar.
              </p>
            </div>

            {/* Extra CTAs */}
            <div className="space-y-6">
              {/* Calendly button with actual label inside as placeholder */}
              <div>
                <a
                  id="calendly-booking-link"
                  href="https://calendly.com/bluecorp" // Replace with actual Calendly URL placeholder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E6BFF] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg group"
                >
                  <Calendar className="w-4 h-4 text-white group-hover:text-black" />
                  Book a Call
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-black group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[10px] text-neutral-500 font-mono mt-1.5 ml-1">
                  REPLACE WITH ACTUAL CALENDLY URL
                </p>
              </div>

              {/* Email Block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#1E6BFF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase font-mono tracking-wider">DIRECT INQUIRIES</p>
                  <a href="mailto:hello@bluecorp.tech" className="text-sm font-bold text-white hover:text-[#1E6BFF] transition-colors">
                    hello@bluecorp.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Submission Form */}
          <div className="md:col-span-7">
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 shadow-2xl">
              {isSuccess ? (
                <div id="contact-success-state" className="py-12 flex flex-col items-center text-center">
                  <CheckCircle className="w-16 h-16 text-[#1E6BFF] mb-6 animate-bounce" />
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-2">Message Received</h3>
                  <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
                    Thank you. We have logged your details. One of our specialists will review your business gaps and reach out shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold uppercase tracking-wider text-[#1E6BFF] hover:text-white cursor-pointer font-mono"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                      Your Name
                    </label>
                    <input
                      id="form-input-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-white text-sm focus:outline-none focus:border-[#1E6BFF] ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-neutral-800 focus:border-[#1E6BFF]'
                      }`}
                      placeholder="e.g. Henry Nnamene"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Business Name field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                      Business Name
                    </label>
                    <input
                      id="form-input-business"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-white text-sm focus:outline-none focus:border-[#1E6BFF] ${
                        errors.businessName ? 'border-red-400 focus:border-red-400' : 'border-neutral-800 focus:border-[#1E6BFF]'
                      }`}
                      placeholder="e.g. Bluecorp Logistics"
                    />
                    {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                      Email Address
                    </label>
                    <input
                      id="form-input-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-white text-sm focus:outline-none focus:border-[#1E6BFF] ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-neutral-800 focus:border-[#1E6BFF]'
                      }`}
                      placeholder="e.g. henry@bluecorp.tech"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                      What do you need help with?
                    </label>
                    <textarea
                      id="form-input-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-white text-sm focus:outline-none focus:border-[#1E6BFF] resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-neutral-800 focus:border-[#1E6BFF]'
                      }`}
                      placeholder="e.g. We waste hours manualy copying receipts and scheduling client walkthroughs..."
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#1E6BFF] text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:bg-neutral-800 disabled:text-neutral-500"
                  >
                    {isSubmitting ? 'Sending...' : 'Send It'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
