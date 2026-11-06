"use client";

import React from "react";

export default function Logo({ size = "md", showText = true, className = "" }) {
  const emblemSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20"
  };

  const titleSizes = {
    sm: "text-sm",
    md: "text-base tracking-[0.25em]",
    lg: "text-xl tracking-[0.3em]",
    xl: "text-2xl tracking-[0.35em]"
  };

  const subtitleSizes = {
    sm: "text-[9px] tracking-[0.18em]",
    md: "text-[10px] tracking-[0.25em]",
    lg: "text-xs tracking-[0.3em]",
    xl: "text-xs tracking-[0.35em]"
  };

  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Architectural Geometric Crest with Key Emblem */}
      <div className={`relative ${emblemSizes[size]} flex items-center justify-center shrink-0`}>
        {/* Subtle glowing backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-amber-200/10 to-transparent rounded-lg blur-[6px] group-hover:blur-[8px] transition-all duration-300" />
        
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
        >
          {/* Outer Geometric Frame: Octagonal Diamond Border */}
          <polygon
            points="50,4 92,25 92,75 50,96 8,75 8,25"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-amber-300"
          />

          {/* Inner Accent Inset Border */}
          <polygon
            points="50,12 84,29 84,71 50,88 16,71 16,29"
            stroke="url(#goldGradientSubtle)"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* The Master Key Emblem Intertwined with Modern S & K Silhouette */}
          {/* Key Bow: Quad-Arch Luxury Finial */}
          <circle
            cx="50"
            cy="33"
            r="13"
            stroke="url(#goldGradient)"
            strokeWidth="2.8"
            fill="#0B0F17"
          />
          <circle
            cx="50"
            cy="33"
            r="6"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
          />
          {/* Center Star Diamond */}
          <path
            d="M50 29 L51.5 32.5 L55 33 L51.5 33.5 L50 37 L48.5 33.5 L45 33 L48.5 32.5 Z"
            fill="url(#goldGradient)"
          />

          {/* Key Stem with Architectural Grooves */}
          <line
            x1="50"
            y1="46"
            x2="50"
            y2="83"
            stroke="url(#goldGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Key Bits / Teeth: Architectural Step Cuts */}
          <path
            d="M50 63 H63 V68 H50 M50 73 H60 V78 H50"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Subtle Stylized "S" & "K" Monogram Accents on Bow Flanks */}
          <path
            d="M34 52 C38 48, 44 48, 46 54 C48 60, 40 64, 46 70"
            stroke="url(#goldGradientSubtle)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2CC" />
              <stop offset="45%" stopColor="#E5C378" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997A15" />
            </linearGradient>
            <linearGradient id="goldGradientSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C378" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8C6E15" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif uppercase font-semibold text-white tracking-[0.22em] ${titleSizes[size]} transition-colors group-hover:text-amber-200`}
            >
              Sterling Key
            </span>
          </div>
          <span
            className={`font-sans uppercase text-amber-400/90 font-medium ${subtitleSizes[size]} tracking-[0.28em]`}
          >
            Properties & Asset Management
          </span>
        </div>
      )}
    </div>
  );
}
