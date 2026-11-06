"use client";

import React from "react";
import { X, Trash2, ExternalLink, Bed, Bath, Maximize2, Sparkles, Calendar } from "lucide-react";
import { PROPERTIES_DATA } from "../data/mockData";

export default function SavedDrawer({ isOpen, onClose, savedIds = [], onRemoveSave, onSelectProperty, onScheduleTour }) {
  if (!isOpen) return null;

  const savedProperties = PROPERTIES_DATA.filter((p) => savedIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#0B0F17] border-l border-amber-500/30 h-full flex flex-col justify-between shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121826]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h3 className="text-base font-serif text-white font-medium">
              Saved Residences ({savedProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {savedProperties.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <Sparkles className="w-8 h-8 text-amber-500/40 mx-auto" />
              <p className="text-sm font-serif text-slate-300">Your curated collection is empty.</p>
              <p className="text-xs text-slate-500">
                Click the heart icon on any residence to save it to your private portfolio.
              </p>
            </div>
          ) : (
            savedProperties.map((p) => (
              <div
                key={p.id}
                className="bg-[#121826] border border-white/10 rounded-2xl p-4 flex gap-4 relative group"
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-serif text-white font-medium line-clamp-1">
                      {p.title}
                    </h4>
                    <div className="text-xs text-amber-400 font-mono font-bold mt-0.5">
                      {p.priceFormatted}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {p.beds} Beds · {p.baths} Baths · {p.sqft.toLocaleString()} SF
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(p);
                      }}
                      className="text-xs text-amber-300 hover:text-amber-200 font-semibold uppercase tracking-wider flex items-center gap-1"
                    >
                      View Details <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onRemoveSave(p.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProperties.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#121826] space-y-2">
            <button
              onClick={() => {
                onClose();
                onScheduleTour(savedProperties[0]);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule Showings For Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
