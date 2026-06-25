/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function FounderAvatar() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950/40 border border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-md group">
      {/* Dynamic backdrop glows inside the avatar frame */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6BFF]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#1E6BFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Light shimmer swipe on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
      
      {/* Stylized Modern Portrait of Henry Nnamene */}
      <svg
        id="founder-portrait-svg"
        viewBox="0 0 300 400"
        className="relative z-10 w-full h-full max-w-[280px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic Skin Gradient (Warm Golden-Brown African Skin Tones) */}
          <linearGradient id="skinBase" x1="150" y1="100" x2="150" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9C623C" />
            <stop offset="60%" stopColor="#804D2C" />
            <stop offset="100%" stopColor="#663A1E" />
          </linearGradient>
          
          <linearGradient id="skinShadow" x1="150" y1="180" x2="150" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6D3F22" />
            <stop offset="100%" stopColor="#4A250F" />
          </linearGradient>

          <linearGradient id="neckGradient" x1="150" y1="230" x2="150" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#61371B" />
            <stop offset="100%" stopColor="#44220C" />
          </linearGradient>

          {/* Premium Metallic Silver Bridge Gradient for Glasses */}
          <linearGradient id="silverMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A6A6A6" />
            <stop offset="100%" stopColor="#E6E6E6" />
          </linearGradient>

          {/* Realistic Translucent Glass Reflection */}
          <linearGradient id="glassReflection" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1E6BFF" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Soft Hair Gradient */}
          <linearGradient id="hairGradient" x1="150" y1="80" x2="150" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1C1C1C" />
            <stop offset="100%" stopColor="#0B0B0B" />
          </linearGradient>

          {/* Shadow filters for depth */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Soft Ambient Aura Behind Head */}
        <circle cx="150" cy="200" r="110" fill="#1E6BFF" fillOpacity="0.08" filter="blur(25px)" />

        {/* Torso & Shoulders - Professional Minimalist Jet-Black T-shirt */}
        <path
          d="M50 380 C50 315 85 285 150 285 C215 285 250 315 250 380"
          fill="#0A0A0A"
          stroke="#1F1F1F"
          strokeWidth="1.5"
        />
        
        {/* Sleek crewneck collar outline with subtle blue rim highlight */}
        <path
          d="M110 285 C110 298 130 308 150 308 C170 308 190 298 190 285"
          fill="none"
          stroke="#1E6BFF"
          strokeOpacity="0.4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M112 285 C112 296 130 305 150 305 C170 305 188 296 188 285"
          fill="none"
          stroke="#1F1F1F"
          strokeWidth="2"
        />

        {/* Neck with realistic depth and shadow from jaw */}
        <path
          d="M125 235 L125 292 C125 292 140 302 150 302 C160 302 175 292 175 292 L175 235 Z"
          fill="url(#neckGradient)"
        />
        {/* Under-chin shadow line */}
        <path
          d="M125 240 C140 256 160 256 175 240"
          fill="none"
          stroke="#381D09"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Head Base / Face Shape */}
        <path
          d="M100 150 C100 95 200 95 200 150 C200 215 185 250 150 250 C115 250 100 215 100 150 Z"
          fill="url(#skinBase)"
          filter="url(#softShadow)"
        />

        {/* Jaw shading for 3D realism */}
        <path
          d="M101 170 C101 215 118 248 150 248 C182 248 199 215 199 170 C199 215 185 242 150 242 C115 242 101 215 101 170 Z"
          fill="url(#skinShadow)"
          opacity="0.85"
        />

        {/* Hair - Sharp Fade and Clean Trim */}
        <path
          d="M97 145 C95 130 102 106 115 95 C128 85 155 83 172 87 C190 91 202 106 204 122 C206 135 201 148 201 148 C201 148 206 128 200 118 C194 106 182 94 165 92 C145 90 125 92 112 104 C101 114 98 132 97 145 Z"
          fill="url(#hairGradient)"
        />
        <path
          d="M100 138 C98 122 106 102 122 93 C138 84 162 84 178 93 C194 102 202 122 200 138 C198 118 188 104 172 98 C156 92 138 92 124 98 C110 104 102 118 100 138 Z"
          fill="#0A0A0A"
        />

        {/* Ears with clean anatomy details */}
        {/* Left Ear */}
        <path
          d="M96 158 C91 158 91 176 97 182 Z"
          fill="#804D2C"
          stroke="#5F331A"
          strokeWidth="1.5"
        />
        {/* Right Ear */}
        <path
          d="M204 158 C209 158 209 176 203 182 Z"
          fill="#804D2C"
          stroke="#5F331A"
          strokeWidth="1.5"
        />

        {/* Eyebrows - Sharp, modern, and stylized */}
        <path
          d="M114 146 C121 141 131 141 138 145"
          stroke="#0F0F0F"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M162 145 C169 141 179 141 186 146"
          stroke="#0F0F0F"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Dynamic Professional Beard and Mustache Details (to match real facial hair) */}
        {/* Mustache */}
        <path
          d="M133 194 C142 196 158 196 167 194"
          stroke="#0F0F0F"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Sleek Line Beard along jawline */}
        <path
          d="M102 175 C104 220 120 249 150 249 C180 249 196 220 198 175 C197 222 181 245 150 245 C119 245 103 222 102 175 Z"
          fill="#0F0F0F"
          opacity="0.85"
        />
        {/* Soul patch */}
        <path
          d="M145 210 C145 220 155 220 155 210"
          stroke="#0F0F0F"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Eyes (Realistic and detailed) */}
        {/* Left Pupil/Iris */}
        <circle cx="128" cy="158" r="5" fill="#1C1C1C" />
        <circle cx="129.5" cy="156.5" r="1.5" fill="#FFFFFF" /> {/* catch light */}
        
        {/* Right Pupil/Iris */}
        <circle cx="172" cy="158" r="5" fill="#1C1C1C" />
        <circle cx="173.5" cy="156.5" r="1.5" fill="#FFFFFF" /> {/* catch light */}

        {/* Elegant Glasses - Ultra high-fidelity silver/metal-framed aviators */}
        {/* Left Lens Glass Shimmer Backing */}
        <rect x="110" y="146" width="36" height="26" rx="9" fill="url(#glassReflection)" />
        {/* Right Lens Glass Shimmer Backing */}
        <rect x="154" y="146" width="36" height="26" rx="9" fill="url(#glassReflection)" />

        {/* Left Metal Frame */}
        <rect
          x="110"
          y="146"
          width="36"
          height="26"
          rx="9"
          fill="none"
          stroke="url(#silverMetal)"
          strokeWidth="2.5"
        />
        {/* Right Metal Frame */}
        <rect
          x="154"
          y="146"
          width="36"
          height="26"
          rx="9"
          fill="none"
          stroke="url(#silverMetal)"
          strokeWidth="2.5"
        />

        {/* Double Bridge (High-end designer detail) */}
        <path
          d="M146 150 L154 150"
          stroke="url(#silverMetal)"
          strokeWidth="1.5"
        />
        <path
          d="M146 155 L154 155"
          stroke="url(#silverMetal)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Glasses side temples */}
        <path d="M110 152 L98 150" stroke="#CCCCCC" strokeWidth="2" />
        <path d="M190 152 L202 150" stroke="#CCCCCC" strokeWidth="2" />

        {/* Glass diagonal lens shine reflex arcs */}
        <path d="M115 150 Q122 148 130 154" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M159 150 Q166 148 174 154" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Nose with fine contours */}
        <path
          d="M144 168 C144 180 156 180 156 168"
          fill="none"
          stroke="#5F331A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Warm, confident, pleasant smile */}
        <path
          d="M131 204 C139 214 161 214 169 204"
          fill="none"
          stroke="#381D09"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Thoughtful resting chin-on-hand pose */}
        {/* Shadow cast under resting hand */}
        <path
          d="M116 380 C116 332 140 285 152 248"
          fill="none"
          stroke="#44220C"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Arm rising from bottom */}
        <path
          d="M116 380 C116 332 140 282 152 245"
          fill="none"
          stroke="url(#skinBase)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        
        {/* Dynamic shadow highlighting on the wrist/arm boundary */}
        <path
          d="M110 350 C118 320 134 285 142 258"
          fill="none"
          stroke="url(#skinShadow)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Fingers under and supporting the chin */}
        <path
          d="M136 244 C143 239 149 231 149 224"
          fill="none"
          stroke="url(#skinBase)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        {/* Finger overlaps */}
        <path
          d="M121 257 C129 253 136 247 141 239"
          fill="none"
          stroke="url(#skinShadow)"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M113 271 C121 267 129 259 133 249"
          fill="none"
          stroke="url(#skinShadow)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Sleek bottom card overlay label with Glassmorphism */}
      <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/75 backdrop-blur-md px-4 py-3.5 rounded-xl border border-white/10 text-center z-20 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
        <p id="founder-avatar-name" className="text-sm font-display font-black text-white uppercase tracking-tight">Henry Nnamene</p>
        <p id="founder-avatar-title" className="text-[9px] text-[#1E6BFF] font-black tracking-widest font-mono uppercase mt-1">Founder & CEO</p>
      </div>
    </div>
  );
}
