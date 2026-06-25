/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, FileText, CheckCircle2, Receipt, Bell, LineChart, Mail, Clock, TrendingUp, Briefcase, PiggyBank, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Kudi() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Corporate Simulator State
  const [hoursSpent, setHoursSpent] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [monthlyTx, setMonthlyTx] = useState(120);

  // Dynamic Intelligence Calculations
  const annualHoursSaved = Math.round(hoursSpent * 52 * 0.85);
  const annualSavings = Math.round(hoursSpent * 52 * hourlyRate * 0.85);
  const entryTimeSaved = Math.round((monthlyTx * 12 * 8.5) / 60);

  // Dynamic Corporate Tier Descriptor
  const getProductivityTier = () => {
    const totalVal = annualSavings;
    if (totalVal < 5000) return { name: 'Optimized Venture', color: 'text-blue-400', desc: 'Standard business workflow optimization. Kudi handles your daily manual chores to maintain consistent operation.' };
    if (totalVal < 15000) return { name: 'High Velocity Scale', color: 'text-amber-400', desc: 'Significant bandwidth reclamation. You have unlocked critical strategic time that can be channeled directly into raw product expansion.' };
    return { name: 'Autonomous CFO Tier', color: 'text-emerald-400', desc: 'Elite corporate efficiency level. By automating ledgering and invoicing, you establish institutional-grade operational leverage.' };
  };

  const tier = getProductivityTier();

  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-[#1E6BFF]" />,
      title: 'Receipt Logging',
      description: 'Snap a picture of your receipt and send it. Kudi extracts the merchant, amount, category, and tax rate instantly without manual typing.'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#1E6BFF]" />,
      title: 'Invoice Generation',
      description: 'Request a draft invoice using natural words on WhatsApp or web. Kudi populates your template and drafts the email in seconds.'
    },
    {
      icon: <Bell className="w-6 h-6 text-[#1E6BFF]" />,
      title: 'Payment Reminders',
      description: 'Kudi monitors due dates and sends friendly, customized follow-up triggers to outstanding clients automatically.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#1E6BFF]" />,
      title: 'Weekly Cash Flow Summary',
      description: 'Get a clean, easy-to-read financial health brief directly. Know exactly what was spent, earned, and what is left.'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Save subscriber locally
    try {
      const existing = localStorage.getItem('kudi_subscribers');
      const subs = existing ? JSON.parse(existing) : [];
      subs.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('kudi_subscribers', JSON.stringify(subs));
    } catch (err) {
      console.error('Failed to save subscriber', err);
    }

    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="kudi-page-container" className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background radial and linear glows for immersive atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1E6BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#1E6BFF]/3.5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/40 text-[#1E6BFF] text-xs font-bold uppercase tracking-wider font-mono mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Product
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase mb-4">
            Meet Kudi
          </h1>
          <p className="text-base text-[#1E6BFF] font-mono tracking-[0.15em] uppercase font-bold mb-6">
            Every business deserves a CFO.
          </p>
          <p className="text-base text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Most small business owners spend their weekends wrestling with receipts and chasing invoices. Kudi handles your finance tracking through simple conversational triggers, so you get your weekends back.
          </p>
        </motion.div>

        {/* Premium Interactive Coming Soon Glass Visual replacing Video */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative w-full aspect-video rounded-2xl bg-neutral-950/50 border border-white/10 overflow-hidden shadow-2xl group flex flex-col items-center justify-center p-8 backdrop-blur-lg">
            {/* Ambient matrix grid dots */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1E6BFF_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
            
            {/* Visual Glass highlights & glowing orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#1E6BFF]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            
            {/* Diagonal slide shimmer reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
            
            {/* Futuristic Tech HUD / Hologram */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div 
                className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1E6BFF]/25 to-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(30,107,255,0.25)]"
                animate={{ 
                  y: [0, -12, 0],
                  boxShadow: [
                    "0 0 20px rgba(30,107,255,0.2)",
                    "0 0 40px rgba(30,107,255,0.4)",
                    "0 0 20px rgba(30,107,255,0.2)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full border border-dashed border-[#1E6BFF]/40 animate-spin" style={{ animationDuration: '8s' }} />
                  <Sparkles className="w-8 h-8 text-[#1E6BFF] relative z-10" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-widest uppercase mb-2">
                KUDI AI CFO
              </h2>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E6BFF]/15 border border-[#1E6BFF]/35 text-[#1E6BFF] text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1E6BFF] animate-ping" />
                Coming Soon
              </div>
              
              <p className="text-xs md:text-sm text-neutral-400 font-mono uppercase tracking-widest max-w-md leading-relaxed">
                Autonomous ledgering, voice invoice processing, and cash flow intelligence built natively for modern African enterprises.
              </p>
            </div>

            {/* Corner Bracket Borders to represent target scanner */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/10 rounded-tl-sm" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/10 rounded-tr-sm" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/10 rounded-bl-sm" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/10 rounded-br-sm" />
          </div>
        </motion.div>

        {/* Corporate ROI Simulator - Interactive Cool Feature */}
        <motion.div 
          className="mb-20 bg-neutral-950/40 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient visual gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E6BFF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/30 text-[#1E6BFF] text-[10px] font-bold uppercase tracking-wider font-mono mb-2">
                  <Zap className="w-3.5 h-3.5" />
                  Corporate Intelligence
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight">
                  Financial Bandwidth Estimator
                </h3>
              </div>
              <p className="text-xs text-neutral-400 font-mono max-w-xs md:text-right">
                Simulate how much organizational bandwidth and capital Kudi unlocks in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Slider 1: Weekly Hours */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1E6BFF]" />
                      Weekly Admin Hours
                    </span>
                    <span className="text-sm font-mono font-bold text-white bg-neutral-800 px-2.5 py-0.5 rounded-md border border-white/10">
                      {hoursSpent} hrs
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="40" 
                    value={hoursSpent} 
                    onChange={(e) => setHoursSpent(Number(e.target.value))}
                    className="w-full accent-[#1E6BFF] h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <p className="text-[10px] text-neutral-500 mt-2">
                    Time spent snapping receipts, compiling ledgers, chasing invoice payments, and general data entry.
                  </p>
                </div>

                {/* Slider 2: Hourly Rate */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                      <PiggyBank className="w-4 h-4 text-[#1E6BFF]" />
                      Time Value (Hourly)
                    </span>
                    <span className="text-sm font-mono font-bold text-white bg-neutral-800 px-2.5 py-0.5 rounded-md border border-white/10">
                      ${hourlyRate} /hr
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="200" 
                    value={hourlyRate} 
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-[#1E6BFF] h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <p className="text-[10px] text-neutral-500 mt-2">
                    Hourly rate of the founder, senior decision makers, or dedicated finance operations managers.
                  </p>
                </div>

                {/* Slider 3: Monthly Invoices */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#1E6BFF]" />
                      Monthly Documents
                    </span>
                    <span className="text-sm font-mono font-bold text-white bg-neutral-800 px-2.5 py-0.5 rounded-md border border-white/10">
                      {monthlyTx} tx
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    value={monthlyTx} 
                    onChange={(e) => setMonthlyTx(Number(e.target.value))}
                    className="w-full accent-[#1E6BFF] h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <p className="text-[10px] text-neutral-500 mt-2">
                    Average invoices drafted, client payment follow-ups, and raw purchase receipts processed monthly.
                  </p>
                </div>

              </div>

              {/* Right Column: Dashboard Outputs */}
              <div className="lg:col-span-5 bg-[#121212]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group">
                
                {/* Stats row */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] font-mono block mb-1">
                      Capital Unlocked (Annual)
                    </span>
                    <h4 className="text-3xl md:text-4xl font-display font-black text-white leading-none tracking-tight">
                      ${annualSavings.toLocaleString()}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4">
                    <div>
                      <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider font-mono block">
                        Hours Saved
                      </span>
                      <span className="text-base font-mono font-bold text-[#1E6BFF]">
                        {annualHoursSaved} hrs/yr
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider font-mono block">
                        Manual Friction
                      </span>
                      <span className="text-base font-mono font-bold text-white">
                        -{entryTimeSaved} hrs/yr
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Tier Badge */}
                  <div className="bg-[#1E6BFF]/5 border border-[#1E6BFF]/20 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#1E6BFF]" />
                      <span className={`text-[10px] font-bold uppercase tracking-wider font-mono ${tier.color}`}>
                        {tier.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>
                </div>

                <div className="text-[9px] text-neutral-500 font-mono mt-6 border-t border-white/5 pt-3">
                  *Estimates based on 85% process automation rate verified via local operational cohorts.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Four Feature Cards */}
        <div className="mb-20">
          <motion.h2 
            className="text-2xl font-display font-black text-white text-center uppercase tracking-tight mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Capabilities
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#121212]/30 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-md hover:border-neutral-700 hover:-translate-y-1.5 hover:bg-[#121212]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral-900/60 border border-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-[#1E6BFF]/40 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#1E6BFF] transition-colors">{feat.title}</h3>
                <p className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Get Early Access Callbox */}
        <motion.div 
          className="bg-white/[0.01] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#1E6BFF] opacity-[0.03] blur-3xl rounded-full" />
          
          <h2 className="text-2xl md:text-3xl font-display font-black mb-4 tracking-tighter uppercase">Get early access to Kudi</h2>
          <p className="text-sm md:text-base text-neutral-400 font-normal max-w-lg mx-auto mb-8 leading-relaxed">
            We are rolling out Kudi to a limited beta group of African SMEs. Sign up below to reserve your spot in our upcoming cohort.
          </p>

          {isSubmitted ? (
            <div className="py-6 flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 text-[#1E6BFF] mb-4" />
              <p className="text-base font-bold text-white uppercase tracking-tight">You're on the list!</p>
              <p className="text-xs text-neutral-400 mt-1">We will send an invitation email once your spot is open.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                  <input
                    id="kudi-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BFF] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <button
                  id="kudi-early-access-btn"
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#1E6BFF] text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all hover:scale-105 duration-300 cursor-pointer whitespace-nowrap shadow-lg shadow-[#1E6BFF]/20"
                >
                  Get Early Access
                </button>
              </div>
              {error && <p className="text-xs text-red-400 mt-2 text-left ml-4 font-mono">{error}</p>}
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
