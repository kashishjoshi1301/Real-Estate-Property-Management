"use client";

import React, { useState } from "react";
import { NEIGHBORHOODS_DATA } from "../data/mockData";
import { MapPin, TrendingUp, Compass, ArrowRight, Building2 } from "lucide-react";

export default function DestinationsSection({ onSelectCity }) {
  const [activeCity, setActiveCity] = useState(NEIGHBORHOODS_DATA[0]);

  return (
    <section id="neighborhoods" className="py-24 bg-[#0A0E18] text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-amber-400 mb-2">
              <Compass className="w-3.5 h-3.5" /> Douglas Elliman Heritage
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
              Global Flagship Destinations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From historic London townhouses to Miami deepwater island compounds, we represent real estate across the world's most resilient sovereign havens.
            </p>
          </div>
        </div>

        {/* Interactive Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {NEIGHBORHOODS_DATA.map((city) => (
            <div
              key={city.id}
              onClick={() => {
                setActiveCity(city);
                if (onSelectCity) onSelectCity(city.name.split(",")[0]);
              }}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border transition-all duration-500 ${
                activeCity.id === city.id
                  ? "border-amber-400 shadow-2xl shadow-amber-500/10 scale-[1.01]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {/* City Photo */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badges on Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
                  Avg Yield {city.avgYield}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  Median {city.medianPrice}
                </span>
              </div>

              {/* City Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{city.tag}</span>
                </div>
                <h3 className="text-2xl font-serif text-white font-bold mb-2 group-hover:text-amber-200 transition-colors">
                  {city.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 opacity-90">
                  {city.districts.slice(0, 3).map((district, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/15 text-slate-200 backdrop-blur-sm"
                    >
                      {district}
                    </span>
                  ))}
                  {city.districts.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400">
                      +{city.districts.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
