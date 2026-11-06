"use client";

import React, { useState } from "react";
import { 
  X, 
  Key, 
  ShieldCheck, 
  CreditCard, 
  Wrench, 
  QrCode, 
  Download, 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Building,
  Bell,
  ArrowRight,
  LogOut,
  Calendar
} from "lucide-react";

export default function PortalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("owner"); // "resident" or "owner"
  const [isLoggedIn, setIsLoggedIn] = useState(true); // default demo logged in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [maintenanceSuccess, setMaintenanceSuccess] = useState(false);
  const [rentPaid, setRentPaid] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0B0F17] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#121826] border-b border-white/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif text-white font-medium">
                  Sterling Key Gateway
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Greystar Architecture v4.2
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Institutional Resident & Sovereign Owner Portal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#090D14] px-6 pt-4 border-b border-white/5 flex gap-4">
          <button
            onClick={() => setActiveTab("owner")}
            className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "owner"
                ? "border-amber-400 text-amber-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Property Owner Portal
          </button>
          <button
            onClick={() => setActiveTab("resident")}
            className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "resident"
                ? "border-amber-400 text-amber-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Building className="w-4 h-4" />
            Resident Portal
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="max-w-md mx-auto py-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-serif text-white">
                  Sign in to {activeTab === "owner" ? "Owner Asset Suite" : "Resident Services"}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Access your encrypted ledger, biometric key passes, and concierge records.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLoggedIn(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Registered Email / Sovereign ID
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="investor@sterlingkey.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Encrypted Key Code / Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20"
                >
                  Enter Portal
                </button>
              </form>
            </div>
          ) : activeTab === "owner" ? (
            /* OWNER DASHBOARD VIEW (Greystar Asset Management) */
            <div className="space-y-6">
              {/* Owner Top Greeting */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121826] border border-white/10 rounded-2xl p-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    Client Portfolio: Cavendish Trust Holdings
                  </div>
                  <div className="text-lg font-serif text-white font-medium">
                    Managing 3 Prime Luxury Assets (Star Island · Brickell Tower · Bel-Air)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> 100% Occupancy
                  </span>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Financial Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Next ACH Distribution
                  </span>
                  <div className="text-2xl font-serif text-emerald-400 font-bold mt-1">
                    $68,450.00
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Disbursing Nov 15 via Wire
                  </div>
                </div>

                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    2026 YTD Net Operating Income
                  </span>
                  <div className="text-2xl font-serif text-white font-bold mt-1">
                    $624,800.00
                  </div>
                  <div className="text-[11px] text-amber-400 mt-1">
                    +14.2% vs previous asset management
                  </div>
                </div>

                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Maintenance Reserve Balance
                  </span>
                  <div className="text-2xl font-serif text-white font-bold mt-1">
                    $45,000.00
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Zero open emergency tickets
                  </div>
                </div>
              </div>

              {/* Active Leases Ledger */}
              <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-serif text-white uppercase tracking-wider">
                    Current Tenant Roster & Lease Expirations
                  </h4>
                  <button 
                    onClick={() => alert("Downloading GAAP Monthly Cash Flow Statement & Tax Ledgers.")}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" /> Export GAAP Ledger
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-black/30 text-slate-400 uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3">Asset Unit</th>
                        <th className="py-2.5 px-3">Monthly Rent</th>
                        <th className="py-2.5 px-3">Tenant Vetting</th>
                        <th className="py-2.5 px-3">Lease Expiry</th>
                        <th className="py-2.5 px-3">Payment Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-3 font-medium text-white">44 Star Island Villa</td>
                        <td className="py-3 px-3 font-mono text-emerald-400">$180,000 / mo</td>
                        <td className="py-3 px-3 text-slate-300">Biometric & Escrow Clear</td>
                        <td className="py-3 px-3">Oct 2027 (Multi-Year)</td>
                        <td className="py-3 px-3 text-emerald-400 font-semibold">Paid in Advance</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium text-white">Brickell Tower Suite 4201</td>
                        <td className="py-3 px-3 font-mono text-emerald-400">$12,500 / mo</td>
                        <td className="py-3 px-3 text-slate-300">Institutional Credit 820+</td>
                        <td className="py-3 px-3">Aug 2027</td>
                        <td className="py-3 px-3 text-emerald-400 font-semibold">Autopay Settled</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* RESIDENT DASHBOARD VIEW (Greystar Living) */
            <div className="space-y-6">
              {/* Resident Greeting */}
              <div className="bg-[#121826] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    Welcome Home, Resident
                  </div>
                  <div className="text-lg font-serif text-white font-medium">
                    Suite 4201 · The Sterling Collection at Brickell
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Concierge On Duty: Marcus Aurelius · Front Desk Ext: 104
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRentPaid(true)}
                    disabled={rentPaid}
                    className={`py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                      rentPaid
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    {rentPaid ? "Rent Paid ($12,500)" : "Pay Rent ($12,500)"}
                  </button>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Resident Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 24/7 Concierge Maintenance */}
                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-serif text-white font-semibold mb-1">
                    White-Glove Dispatch
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Submit urgent electrical, HVAC, or plumbing requests to on-site engineers.
                  </p>
                  <button
                    onClick={() => {
                      setMaintenanceSuccess(true);
                      setTimeout(() => setMaintenanceSuccess(false), 4000);
                    }}
                    className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider transition-all"
                  >
                    {maintenanceSuccess ? "Dispatch En Route!" : "Request Maintenance"}
                  </button>
                </div>

                {/* Digital Key & Guest Pass */}
                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-serif text-white font-semibold mb-1">
                    Biometric Key & Visitor Pass
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Generate temporary QR guest credentials for private elevator & gate access.
                  </p>
                  <button
                    onClick={() => alert("Digital QR Pass Generated: Valid for 24 hours.")}
                    className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider transition-all"
                  >
                    Generate Pass
                  </button>
                </div>

                {/* Amenities Reservation */}
                <div className="bg-[#121826] border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-serif text-white font-semibold mb-1">
                    Private Amenities
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Book the rooftop observatory lounge, private cinema, or yacht slip.
                  </p>
                  <button
                    onClick={() => alert("Amenity Booking opened. Reservation confirmed for Private Yacht Charter.")}
                    className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider transition-all"
                  >
                    Book Amenity
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
