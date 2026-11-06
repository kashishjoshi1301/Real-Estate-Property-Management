"use client";

import React, { useState } from "react";
import { Search, MapPin, Home, DollarSign, Bed, SlidersHorizontal, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection({ onSearchSubmit, onSelectTab }) {
  const [activeTab, setActiveTab] = useState("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("any");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({
        tab: activeTab,
        location,
        propertyType,
        priceRange,
        bedrooms
      });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (onSelectTab) {
      onSelectTab(tab);
    }
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-12 pb-20">
      {/* Cinematic Full-Bleed Background with Dark Luxury Gradient Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85')`
        }}
      >
        {/* Multilayered cinematic overlays: Top, bottom, and radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B11]/90 via-[#0B0F17]/70 to-[#080B11]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0F17]/50 to-[#080B11]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-6">
        {/* High-End Sub-Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-300">
            The Pinnacle of Real Estate & Asset Care
          </span>
        </div>

        {/* Main Editorial Headline (The Agency + Douglas Elliman inspired) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
          Where Architectural Mastery <br />
          <span className="italic font-light text-amber-200">Meets Unrivaled Living.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans font-light leading-relaxed mb-10 text-balance">
          Representing landmark private estates, visionary global penthouses, and institutional-grade property management designed to protect and compound generational wealth.
        </p>

        {/* Interactive Search Engine Card (Compass + Redfin inspired) */}
        <div className="w-full max-w-4xl mx-auto bg-[#0E1422]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/80">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 border-b border-white/10 pb-4 mb-5 overflow-x-auto">
            {[
              { id: "buy", label: "Buy Collection" },
              { id: "rent", label: "Luxury Rentals" },
              { id: "developments", label: "New Developments" },
              { id: "management", label: "Asset Management" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Inputs Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {/* Location Input */}
            <div className="relative">
              <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                Destination / Market
              </label>
              <div className="flex items-center bg-[#070A0F]/80 border border-white/10 rounded-xl px-3 py-2.5 focus-within:border-amber-400 transition-colors">
                <MapPin className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="e.g. Bel-Air, Tribeca, Star Island..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Property Type Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                Architectural Style
              </label>
              <div className="flex items-center bg-[#070A0F]/80 border border-white/10 rounded-xl px-3 py-2.5 focus-within:border-amber-400 transition-colors">
                <Home className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent text-sm text-white focus:outline-none w-full cursor-pointer [&>option]:bg-[#0B0F17] [&>option]:text-white"
                >
                  <option value="all">All Styles</option>
                  <option value="Penthouses">Penthouses</option>
                  <option value="Waterfront">Waterfront & Coastal</option>
                  <option value="Architectural">Modern Architectural</option>
                  <option value="Historic">Historic & Grade Listed</option>
                  <option value="New Developments">New Developments</option>
                </select>
              </div>
            </div>

            {/* Price Range Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                Acquisition Bracket
              </label>
              <div className="flex items-center bg-[#070A0F]/80 border border-white/10 rounded-xl px-3 py-2.5 focus-within:border-amber-400 transition-colors">
                <DollarSign className="w-4 h-4 text-amber-400 mr-1.5 shrink-0" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-transparent text-sm text-white focus:outline-none w-full cursor-pointer [&>option]:bg-[#0B0F17] [&>option]:text-white"
                >
                  <option value="all">Any Valuation</option>
                  <option value="under10">Under $10,000,000</option>
                  <option value="10to30">$10,000,000 – $30,000,000</option>
                  <option value="30to60">$30,000,000 – $60,000,000</option>
                  <option value="ultra60">$60,000,000+ Sovereign Tier</option>
                </select>
              </div>
            </div>

            {/* Search Action Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all transform active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search Portfolio</span>
              </button>
            </div>
          </form>

          {/* Quick Highlight Tags */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Off-Market Pocket Listings
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Greystar-Grade Property Management
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Verified Escrow & Global Conveyance
            </span>
          </div>
        </div>

        {/* Global Key Metrics Ribbon */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-8">
          <div>
            <div className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              $5.2B<span className="text-amber-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
              Volume Sold & Managed
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              99.4<span className="text-amber-400">%</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
              Historical Portfolio Occupancy
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              14
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
              Global Flagship Offices
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              18 <span className="text-amber-400">Days</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
              Average Qualified Placement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
