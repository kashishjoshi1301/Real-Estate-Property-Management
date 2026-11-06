"use client";

import React, { useState, useMemo } from "react";
import { 
  Heart, 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Eye, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

export default function PropertyListings({ 
  properties = [], 
  onSelectProperty, 
  onScheduleTour,
  savedIds = [],
  onToggleSave
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  const categories = [
    "All",
    "Penthouses",
    "Waterfront",
    "Architectural",
    "Historic",
    "New Developments"
  ];

  // Handle next/prev image per card without opening modal
  const handleNextImage = (e, propId, totalImages) => {
    e.stopPropagation();
    setCurrentImageIndices((prev) => ({
      ...prev,
      [propId]: ((prev[propId] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (e, propId, totalImages) => {
    e.stopPropagation();
    setCurrentImageIndices((prev) => ({
      ...prev,
      [propId]: ((prev[propId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortBy === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "sqft") {
      result.sort((a, b) => b.sqft - a.sqft);
    }

    return result;
  }, [properties, activeCategory, sortBy]);

  return (
    <section id="featured-listings" className="py-24 bg-[#080B11] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Featured Sovereign Residences
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Hand-selected trophy real estate represented exclusively by Sterling Key, complete with full concierge records and institutional management options.
            </p>
          </div>

          {/* Sort Filter Dropdown */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#121826] border border-white/10 rounded-xl px-4 py-2.5 text-xs uppercase tracking-wider text-slate-300 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="sqft">Largest Square Footage</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Compass style) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25"
                  : "bg-[#121826] border border-white/10 text-slate-300 hover:text-white hover:border-amber-400/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const currentImgIdx = currentImageIndices[property.id] || 0;
            const isSaved = savedIds.includes(property.id);

            return (
              <div
                key={property.id}
                onClick={() => onSelectProperty(property)}
                className="group bg-[#0E1422] border border-white/10 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container with Slider Controls */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={property.images[currentImgIdx]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient shade on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {property.status}
                    </span>
                    {property.capRate && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Yield {property.capRate}
                      </span>
                    )}
                  </div>

                  {/* Favorite Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(property.id);
                    }}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:text-rose-500 hover:bg-black/80 transition-all z-10"
                    title="Save to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform active:scale-125 ${
                        isSaved ? "fill-rose-500 text-rose-500" : ""
                      }`}
                    />
                  </button>

                  {/* Image Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(e, property.id, property.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(e, property.id, property.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Photo indicator dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {property.images.map((_, idx) => (
                          <span
                            key={idx}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === currentImgIdx ? "w-4 bg-amber-400" : "w-1.5 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Property Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Address */}
                    <div className="flex items-center text-xs text-amber-400 font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                      <span>{property.neighborhood}, {property.city}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif text-white font-medium group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mb-4">
                      {property.address}
                    </p>

                    {/* Price Header */}
                    <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/10">
                      <span className="text-2xl font-serif font-bold text-white tracking-tight">
                        {property.priceFormatted}
                      </span>
                      {property.rentalPrice && (
                        <span className="text-xs text-slate-400 font-sans">
                          or {property.rentalPrice}
                        </span>
                      )}
                    </div>

                    {/* Redfin-Style Spec Pillars */}
                    <div className="grid grid-cols-3 gap-2 py-1 text-slate-300 text-xs mb-4">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-amber-400" />
                        <span><strong>{property.beds}</strong> Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-amber-400" />
                        <span><strong>{property.baths}</strong> Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-amber-400" />
                        <span><strong>{property.sqft.toLocaleString()}</strong> SF</span>
                      </div>
                    </div>

                    {/* Amenities Pill Preview */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {property.amenities.slice(0, 2).map((amenity, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                        >
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                          +{property.amenities.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProperty(property);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onScheduleTour(property);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 bg-[#0E1422] rounded-2xl border border-white/10">
            <p className="text-lg font-serif text-slate-300">No properties found matching your selection.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-6 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
