"use client";

import React, { useState } from "react";
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Download, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  FileCheck
} from "lucide-react";

export default function PropertyModal({ property, onClose, onScheduleTour }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-[#0B0F17] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-amber-400 border border-white/20 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel */}
        <div className="relative aspect-[16/9] max-h-[480px] w-full bg-black">
          <img
            src={property.images[activeImgIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-black/40" />

          {/* Nav arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImgIndex(
                    (prev) => (prev - 1 + property.images.length) % property.images.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setActiveImgIndex((prev) => (prev + 1) % property.images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Thumbnails strip */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center gap-2 overflow-x-auto py-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImgIndex === idx
                        ? "border-amber-400 scale-105"
                        : "border-white/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Badges on Gallery */}
          <div className="absolute top-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
              {property.status}
            </span>
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-slate-300 border border-white/20">
              {property.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Title & Price */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center text-xs text-amber-400 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                <span>{property.address}, {property.neighborhood}, {property.city}, {property.state} {property.zip}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">
                {property.title}
              </h2>
              <p className="text-sm text-slate-400 italic mt-1">
                "{property.tagline}"
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                {property.priceFormatted}
              </div>
              {property.rentalPrice && (
                <div className="text-xs text-amber-400 font-sans mt-0.5">
                  Available for lease: {property.rentalPrice}
                </div>
              )}
            </div>
          </div>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Bedrooms</div>
              <div className="text-lg font-bold text-white font-mono mt-1">{property.beds}</div>
            </div>
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Bathrooms</div>
              <div className="text-lg font-bold text-white font-mono mt-1">{property.baths}</div>
            </div>
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Interior</div>
              <div className="text-lg font-bold text-white font-mono mt-1">{property.sqft.toLocaleString()} SF</div>
            </div>
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Lot Size</div>
              <div className="text-lg font-bold text-white font-mono mt-1">{property.lotSize}</div>
            </div>
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Year Built</div>
              <div className="text-lg font-bold text-white font-mono mt-1">{property.yearBuilt}</div>
            </div>
            <div className="bg-[#121826] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Proj. Yield</div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-1">{property.capRate || "5.2%"}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-serif text-white uppercase tracking-wider mb-2">
              Architectural Narrative
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Curated Amenities */}
          <div>
            <h3 className="text-base font-serif text-white uppercase tracking-wider mb-3">
              Signature Estate Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Representing Advisor & Actions Footer */}
          <div className="bg-[#121826] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
              />
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Represented Exclusively By
                </div>
                <div className="text-lg font-serif text-white font-bold">
                  {property.agent.name}
                </div>
                <div className="text-xs text-slate-400">
                  {property.agent.title}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onScheduleTour(property);
                }}
                className="flex-1 md:flex-none py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                Schedule Showing
              </button>
              <a
                href={`tel:${property.agent.phone}`}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Agent
              </a>
              <button
                onClick={() => alert(`Official confidential dossier for ${property.title} has been downloaded to your session.`)}
                className="py-3 px-4 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
