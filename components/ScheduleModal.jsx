"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { PROPERTIES_DATA } from "../data/mockData";

export default function ScheduleModal({ isOpen, onClose, preselectedProperty }) {
  const [propertyTitle, setPropertyTitle] = useState(
    preselectedProperty ? preselectedProperty.title : PROPERTIES_DATA[0].title
  );
  const [tourType, setTourType] = useState("in-person");
  const [date, setDate] = useState("2026-11-12");
  const [timeSlot, setTimeSlot] = useState("afternoon");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0B0F17] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#121826] border-b border-white/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-white font-medium">
                Private Showing & Advisory Booking
              </h3>
              <p className="text-xs text-slate-400">
                Confidential appointments conducted under strict NDA upon request
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

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-white">
                Private Consultation Confirmed
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-amber-300 font-semibold">{name || "Client"}</span>. A Senior Managing Partner from Sterling Key Properties has received your appointment request for <span className="text-white font-medium">{propertyTitle}</span> and will contact you directly via encrypted channel.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Target Property */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                  Property or Advisory Consultation Focus
                </label>
                <select
                  value={propertyTitle}
                  onChange={(e) => setPropertyTitle(e.target.value)}
                  className="w-full bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer [&>option]:bg-[#0B0F17]"
                >
                  {PROPERTIES_DATA.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.priceFormatted})
                    </option>
                  ))}
                  <option value="Institutional Asset Management Evaluation">
                    ★ Institutional Property Management Audit (Multi-Family / Estates)
                  </option>
                  <option value="Off-Market Private Pocket Listing Representation">
                    ★ Private Seller Representation & Off-Market Valuation
                  </option>
                </select>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                  Experience Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "in-person", label: "In-Person Private Showing" },
                    { id: "virtual", label: "Virtual 4K Video Tour" },
                    { id: "advisory", label: "Private Wealth Advisory" }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setTourType(type.id)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-semibold uppercase tracking-wider transition-all ${
                        tourType === type.id
                          ? "bg-amber-500/20 border-amber-400 text-amber-300"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Requested Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer [&>option]:bg-[#0B0F17]"
                  >
                    <option value="morning">Morning (10:00 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="twilight">Twilight Showcase (5:00 PM – 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr / Ms..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@familyoffice.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Direct Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2831"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#121826] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Bank-Grade Encryption & Sovereign Privacy
                </span>
                <span>Immediate Calendar Synchronization</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all"
              >
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
