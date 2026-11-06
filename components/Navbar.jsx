"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { 
  Building2, 
  Key, 
  Heart, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Calculator,
  Compass,
  Sparkles
} from "lucide-react";

export default function Navbar({ 
  onOpenPortal, 
  onOpenSchedule, 
  savedCount = 0,
  onOpenSaved
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Luxury Ticker Bar */}
      <div className="bg-[#070A0F] border-b border-amber-500/15 py-1.5 px-4 text-xs text-slate-300 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" /> Private Market
            </span>
            <p className="truncate text-slate-400 text-[11px] sm:text-xs">
              Exclusive: The Bel-Air Promontory Estate · $38,500,000 | Managing $4.8B+ in Institutional Assets
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Greystar Certified Asset Systems
            </span>
            <span className="text-slate-600">|</span>
            <a href="tel:+18005557837" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-amber-400" /> Global Concierge: +1 (800) 555-7837
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090D15]/90 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-white/10 py-3"
            : "bg-[#0B0F17]/70 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("featured-listings")}
              className="text-sm font-medium tracking-wider text-slate-200 hover:text-amber-300 transition-colors uppercase py-1"
            >
              Exclusive Buy
            </button>
            <button
              onClick={() => scrollToSection("featured-listings")}
              className="text-sm font-medium tracking-wider text-slate-200 hover:text-amber-300 transition-colors uppercase py-1"
            >
              Luxury Rent
            </button>
            <button
              onClick={() => scrollToSection("property-management")}
              className="text-sm font-medium tracking-wider text-amber-400 hover:text-amber-300 transition-colors uppercase py-1 flex items-center gap-1.5 group"
            >
              <Key className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              Property Management
            </button>
            <button
              onClick={() => scrollToSection("neighborhoods")}
              className="text-sm font-medium tracking-wider text-slate-200 hover:text-amber-300 transition-colors uppercase py-1"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-sm font-medium tracking-wider text-slate-200 hover:text-amber-300 transition-colors uppercase py-1 flex items-center gap-1"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-400" />
              Financials
            </button>
            <button
              onClick={() => scrollToSection("advisory")}
              className="text-sm font-medium tracking-wider text-slate-200 hover:text-amber-300 transition-colors uppercase py-1"
            >
              Advisory
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Saved Properties Pill */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-lg border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 hover:bg-white/5 transition-all"
              title="Saved Properties"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? "text-rose-500 fill-rose-500" : ""}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Resident & Owner Portal Button */}
            <button
              onClick={onOpenPortal}
              className="px-3.5 py-2 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Key className="w-3.5 h-3.5" />
              Resident & Owner Portal
            </button>

            {/* Schedule Consultation CTA */}
            <button
              onClick={onOpenSchedule}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              Private Advisory
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] z-30 bg-[#0B0F17]/98 backdrop-blur-2xl border-b border-amber-500/20 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4 text-center">
            <button
              onClick={() => scrollToSection("featured-listings")}
              className="text-base font-medium uppercase tracking-wider text-slate-200 py-2 border-b border-white/5"
            >
              Exclusive Buy & Rent
            </button>
            <button
              onClick={() => scrollToSection("property-management")}
              className="text-base font-medium uppercase tracking-wider text-amber-400 py-2 border-b border-white/5 flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" /> Property Management
            </button>
            <button
              onClick={() => scrollToSection("neighborhoods")}
              className="text-base font-medium uppercase tracking-wider text-slate-200 py-2 border-b border-white/5"
            >
              Global Destinations
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-base font-medium uppercase tracking-wider text-slate-200 py-2 border-b border-white/5"
            >
              Mortgage & ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection("advisory")}
              className="text-base font-medium uppercase tracking-wider text-slate-200 py-2 border-b border-white/5"
            >
              Private Advisory Network
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-3 rounded-lg border border-amber-500/50 bg-amber-500/15 text-amber-300 font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" /> Resident & Owner Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold uppercase tracking-wider text-sm"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
