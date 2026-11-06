"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  TrendingUp, 
  Key, 
  Wrench, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  Building, 
  Sliders
} from "lucide-react";
import { MANAGEMENT_TIERS } from "../data/mockData";

export default function PropertyManagementSection({ onOpenPortal, onOpenSchedule }) {
  // Interactive Owner ROI Estimator state
  const [propertyValue, setPropertyValue] = useState(8500000);
  const [monthlyRent, setMonthlyRent] = useState(38000);
  const [selectedTier, setSelectedTier] = useState("tier-signature");

  // Calculations
  const grossAnnual = monthlyRent * 12;
  const managementFeePercent = selectedTier === "tier-advisory" ? 0.083 : selectedTier === "tier-signature" ? 0.065 : 0.05;
  const annualManagementFee = grossAnnual * managementFeePercent;
  const estimatedExpenses = grossAnnual * 0.18; // maintenance, insurance, tax reserve
  const estimatedNOI = grossAnnual - annualManagementFee - estimatedExpenses;
  const capRate = ((estimatedNOI / propertyValue) * 100).toFixed(2);
  const dynamicOptimizationGain = Math.round(grossAnnual * 0.14); // Average 14% uplift from Sterling Key pricing engine

  return (
    <section id="property-management" className="py-24 bg-[#0A0E18] text-white relative border-b border-white/5">
      {/* Background Decorative Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-4">
            <Key className="w-3.5 h-3.5 text-amber-400" /> Greystar-Caliber Asset Care
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-4">
            Institutional Property Management
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Bridging institutional enterprise systems with Mayfair private hospitality. We manage single trophy estates and entire multi-family luxury portfolios with zero operational friction.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-white font-medium mb-2">
              Algorithmic Yield Optimization
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proprietary dynamic pricing algorithms calibrate rental rates to micro-market demand surges, delivering an average 14% higher Net Operating Income.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-white font-medium mb-2">
              Bespoke Tenant Curation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stringent biometric, institutional credit, and sovereign reference vetting. 0.2% historical default rate across our global portfolio.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-white font-medium mb-2">
              24/7 White-Glove Dispatch
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No retail markups on repairs. We leverage enterprise contractor master agreements and conduct regular drone and thermal envelope diagnostics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-white font-medium mb-2">
              Automated Owner Distributions
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guaranteed direct ACH deposits disbursed by the 5th of each month. Live cloud access to GAAP-audited cash flow statements and tax packs.
            </p>
          </div>
        </div>

        {/* Interactive Owner ROI & Yield Calculator (Greystar + Redfin style) */}
        <div className="bg-[#0E1524] border border-amber-500/20 rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5" /> Owner Cash Flow Simulator
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                Calculate Your Portfolio’s True Yield
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6">
                Enter your property details below to discover how Sterling Key eliminates vacancies, lowers operating friction, and optimizes Net Operating Income (NOI).
              </p>

              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-300 font-medium">Estimated Property Valuation</span>
                    <span className="text-amber-300 font-mono font-bold text-base">
                      ${propertyValue.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1500000"
                    max="50000000"
                    step="250000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>$1.5M</span>
                    <span>$25M</span>
                    <span>$50M+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-300 font-medium">Expected Monthly Rental Revenue</span>
                    <span className="text-amber-300 font-mono font-bold text-base">
                      ${monthlyRent.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="1000"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>$5,000 / mo</span>
                    <span>$75,000 / mo</span>
                    <span>$150,000+ / mo</span>
                  </div>
                </div>

                {/* Management Tier Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                    Management Service Scope
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {MANAGEMENT_TIERS.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          selectedTier === tier.id
                            ? "bg-amber-500/20 border-amber-400 text-amber-300 font-semibold"
                            : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        <div className="text-[11px] uppercase tracking-wider truncate">{tier.name.split(" ")[1]}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{tier.fee}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Display Box */}
            <div className="lg:col-span-5 bg-[#080B12] border border-white/10 rounded-2xl p-6 shadow-inner flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center justify-between">
                  <span>Projected Returns</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Live Estimate
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Gross Annual Revenue</span>
                    <span className="font-mono text-white font-semibold text-sm">
                      ${grossAnnual.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Projected Net Operating Income (NOI)</span>
                    <span className="font-mono text-emerald-400 font-bold text-base">
                      ${Math.round(estimatedNOI).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400">Estimated Net Cap Rate</span>
                    <span className="font-mono text-amber-300 font-bold text-lg">
                      {capRate}%
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Sterling Optimization Uplift
                    </div>
                    <div className="text-xs text-slate-300">
                      Our dynamic pricing & bulk maintenance rate is projected to save or generate an extra{" "}
                      <span className="text-white font-bold font-mono">+${dynamicOptimizationGain.toLocaleString()}/yr</span>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={onOpenSchedule}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  Request Asset Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenPortal}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
                >
                  Existing Owner Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Plans Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MANAGEMENT_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.badge === "Most Popular"
                  ? "bg-[#0E1628] border-2 border-amber-500/60 shadow-xl shadow-amber-500/10 scale-[1.02]"
                  : "bg-[#0B101C] border border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {tier.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {tier.badge}
                  </span>
                </div>

                <div className="text-3xl font-serif text-white font-bold mb-2">
                  {tier.fee}
                </div>
                <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                  {tier.tagline}
                </p>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] text-slate-400 italic mb-4">
                  Ideal for: {tier.idealFor}
                </div>
                <button
                  onClick={onOpenSchedule}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    tier.badge === "Most Popular"
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Select Plan & Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
