"use client";

import React, { useState, useId } from "react";
import { Calculator, DollarSign, Percent, Shield, ArrowRight, Landmark } from "lucide-react";

export default function MortgageCalculator({ onOpenSchedule }) {
  const [homePrice, setHomePrice] = useState(12500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTerm, setLoanTerm] = useState(30); // 15 or 30
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.15); // %
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(24000);
  const [hoaMonthly, setHoaMonthly] = useState(2800);

  // Computed values
  const downPaymentAmount = Math.round(homePrice * (downPaymentPercent / 100));
  const loanAmount = homePrice - downPaymentAmount;

  // Monthly Principal & Interest
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPI =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

  // Monthly Taxes & Insurance
  const monthlyPropertyTax = Math.round((homePrice * (propertyTaxRate / 100)) / 12);
  const monthlyInsurance = Math.round(homeInsuranceAnnual / 12);
  const totalMonthlyPayment = Math.round(monthlyPI + monthlyPropertyTax + monthlyInsurance + hoaMonthly);

  // Donut chart percentages
  const piShare = totalMonthlyPayment > 0 ? (monthlyPI / totalMonthlyPayment) * 100 : 0;
  const taxShare = totalMonthlyPayment > 0 ? (monthlyPropertyTax / totalMonthlyPayment) * 100 : 0;
  const insShare = totalMonthlyPayment > 0 ? (monthlyInsurance / totalMonthlyPayment) * 100 : 0;
  const hoaShare = totalMonthlyPayment > 0 ? (hoaMonthly / totalMonthlyPayment) * 100 : 0;

  return (
    <section id="calculator" className="py-24 bg-[#080B11] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-400" /> Redfin & Compass Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-4">
            Private Wealth Mortgage & Payment Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Model structured jumbo mortgage payments, escrow allocations, and capital outlays with private banking clarity.
          </p>
        </div>

        <div className="bg-[#0E1524] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Home Price */}
              <div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-slate-300 font-medium">Acquisition Target Price</span>
                  <span className="text-white font-mono font-bold text-lg">
                    ${homePrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="60000000"
                  step="250000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$1,000,000</span>
                  <span>$30,000,000</span>
                  <span>$60,000,000+</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-slate-300 font-medium">Down Payment ({downPaymentPercent}%)</span>
                  <span className="text-amber-300 font-mono font-bold text-base">
                    ${downPaymentAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>10% ($1.2M)</span>
                  <span>25% Standard Jumbo</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Term & Interest Rate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                    Financing Term
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setLoanTerm(30)}
                      className={`py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                        loanTerm === 30
                          ? "bg-amber-500/20 border-amber-400 text-amber-300"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      30-Year Fixed
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoanTerm(15)}
                      className={`py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                        loanTerm === 15
                          ? "bg-amber-500/20 border-amber-400 text-amber-300"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      15-Year Fixed
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                    <span>Interest Rate</span>
                    <span className="text-white font-mono font-bold text-sm">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="4.0"
                    max="9.0"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>4.0%</span>
                    <span>6.5% Market Avg</span>
                    <span>9.0%</span>
                  </div>
                </div>
              </div>

              {/* Property Tax & HOA inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Property Tax Rate: {propertyTaxRate}%
                  </label>
                  <input
                    type="range"
                    min="0.6"
                    max="2.5"
                    step="0.05"
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <span className="text-[11px] text-slate-500">
                    Est. ${monthlyPropertyTax.toLocaleString()} / mo
                  </span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Monthly HOA & Concierge Dues
                  </label>
                  <input
                    type="number"
                    value={hoaMonthly}
                    onChange={(e) => setHoaMonthly(Number(e.target.value))}
                    className="w-full bg-[#080B11] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Visual Breakdown & Total Display */}
            <div className="lg:col-span-5 bg-[#080B12] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
                  Estimated Total Outlay
                </span>
                <div className="text-4xl font-serif text-white font-bold tracking-tight mb-6">
                  ${totalMonthlyPayment.toLocaleString()}
                  <span className="text-sm font-sans font-normal text-slate-400 ml-1">/ month</span>
                </div>

                {/* Progress bar visual distribution */}
                <div className="w-full h-3 rounded-full bg-slate-800 flex overflow-hidden mb-6">
                  <div style={{ width: `${piShare}%` }} className="bg-amber-400" title="Principal & Interest" />
                  <div style={{ width: `${taxShare}%` }} className="bg-sky-400" title="Property Tax" />
                  <div style={{ width: `${insShare}%` }} className="bg-emerald-400" title="Insurance" />
                  <div style={{ width: `${hoaShare}%` }} className="bg-purple-400" title="HOA & Concierge" />
                </div>

                {/* Breakdown items */}
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      Principal & Interest ({loanTerm}yr)
                    </span>
                    <span className="font-mono text-white font-semibold">
                      ${Math.round(monthlyPI).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      Property Taxes (Escrow)
                    </span>
                    <span className="font-mono text-white font-semibold">
                      ${monthlyPropertyTax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      Homeowners & Hazard Insurance
                    </span>
                    <span className="font-mono text-white font-semibold">
                      ${monthlyInsurance.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      HOA, Reserve & Maintenance
                    </span>
                    <span className="font-mono text-white font-semibold">
                      ${hoaMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Financed Principal:</span>
                    <span className="font-mono text-slate-200">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Cash to Close (Down):</span>
                    <span className="font-mono text-amber-300 font-semibold">${downPaymentAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenSchedule}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Landmark className="w-4 h-4" />
                  Consult Sterling Private Lending <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
