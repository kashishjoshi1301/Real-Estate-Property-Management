"use client";

import React from "react";
import { AGENTS_DATA, TESTIMONIALS_DATA, PRESS_ACCOLADES } from "../data/mockData";
import { Phone, Mail, Award, Quote, Sparkles, ArrowRight } from "lucide-react";

export default function AdvisorySection({ onOpenSchedule }) {
  return (
    <section id="advisory" className="py-24 bg-[#080B11] text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" /> The Agency Influence
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-4">
            Private Client Advisory
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Representing the world’s most discerning families, institutions, and sovereign wealth entities with absolute confidentiality.
          </p>
        </div>

        {/* Elite Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {AGENTS_DATA.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#0E1524] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-900">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30 inline-block mb-1">
                      {agent.careerSales} Career Volume
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-serif text-white font-medium group-hover:text-amber-300 transition-colors">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mb-1">
                    {agent.role}
                  </div>
                  <div className="text-[11px] text-slate-400 mb-3">
                    Focus: {agent.region}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {agent.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
                  <a
                    href={`tel:${agent.phone}`}
                    className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    Call
                  </a>
                  <button
                    onClick={onOpenSchedule}
                    className="py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Accolades Ribbon */}
        <div className="bg-[#0A0E18] rounded-2xl border border-white/10 p-8 mb-20">
          <div className="text-center text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold mb-8">
            Featured & Recognized By
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-serif text-lg font-bold text-amber-200 mb-2">
                  {item.outlet}
                </div>
                <p className="text-xs text-slate-400 italic">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0E1524] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="font-serif text-sm text-white font-semibold">
                  {t.author}
                </div>
                <div className="text-[11px] text-amber-400 font-medium">
                  {t.title}
                </div>
                <div className="text-[10px] text-slate-500">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
