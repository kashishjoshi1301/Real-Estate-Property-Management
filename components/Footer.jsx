"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Mail, ArrowRight, ShieldCheck, MapPin, CheckCircle2, PhoneCall } from "lucide-react";

export default function Footer({ onOpenPortal, onOpenSchedule }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#05070B] text-slate-400 text-xs border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Creed Banner */}
        <div className="bg-[#0C111C] border border-amber-500/20 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
                The Sovereign Wire · Private Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                Receive Off-Market Pocket Listings Before MLS Registration
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Join 14,000+ family offices, sovereign trustees, and private real estate collectors receiving our quarterly intelligence dossier and discreet off-market offerings.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-semibold">
                    You have been granted confidential access to The Sovereign Wire.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter private email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#06090F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
                  >
                    Subscribe <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Flagship Locations */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-6 text-center">
            Global Flagship Advisory Chambers
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[#090D15] border border-white/5">
              <div className="text-white font-serif font-bold text-sm mb-1">New York</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                767 Fifth Avenue, Penthouse 50<br />New York, NY 10153
              </p>
              <div className="text-amber-400 text-[10px] mt-2">+1 (212) 791-8840</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090D15] border border-white/5">
              <div className="text-white font-serif font-bold text-sm mb-1">Beverly Hills</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                9601 Wilshire Boulevard<br />Beverly Hills, CA 90210
              </p>
              <div className="text-amber-400 text-[10px] mt-2">+1 (310) 849-2910</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090D15] border border-white/5">
              <div className="text-white font-serif font-bold text-sm mb-1">Miami Beach</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                1100 Brickell Avenue, Suite 3200<br />Miami, FL 33131
              </p>
              <div className="text-amber-400 text-[10px] mt-2">+1 (305) 912-4411</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090D15] border border-white/5">
              <div className="text-white font-serif font-bold text-sm mb-1">London</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                25 Berkeley Square<br />Mayfair, London W1J 6HN
              </p>
              <div className="text-amber-400 text-[10px] mt-2">+44 20 7946 0912</div>
            </div>

            <div className="p-4 rounded-xl bg-[#090D15] border border-white/5">
              <div className="text-white font-serif font-bold text-sm mb-1">Aspen</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                400 East Cooper Avenue<br />Aspen, CO 81611
              </p>
              <div className="text-amber-400 text-[10px] mt-2">+1 (970) 925-1020</div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 border-t border-white/10 pt-12">
          {/* Col 1: Brand */}
          <div className="col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Sterling Key Properties represents the world's most architectural estates and institutional multi-family assets. Blending the boutique storytelling of The Agency, the technical precision of Compass and Redfin, the prestige of Douglas Elliman, and the operational dominance of Greystar.
            </p>
            <div className="flex items-center gap-3 text-amber-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Sovereign Asset Management Firm</span>
            </div>
          </div>

          {/* Col 2: Real Estate */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#featured-listings" className="hover:text-amber-300 transition-colors">Exclusive Buy</a></li>
              <li><a href="#featured-listings" className="hover:text-amber-300 transition-colors">Managed Rentals</a></li>
              <li><a href="#featured-listings" className="hover:text-amber-300 transition-colors">Penthouses & Lofts</a></li>
              <li><a href="#featured-listings" className="hover:text-amber-300 transition-colors">Waterfront & Coastal</a></li>
              <li><a href="#featured-listings" className="hover:text-amber-300 transition-colors">New Developments</a></li>
            </ul>
          </div>

          {/* Col 3: Property Management */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Asset Services
            </h4>
            <ul className="space-y-2.5">
              <li><button onClick={onOpenPortal} className="hover:text-amber-300 transition-colors text-left">Resident Portal</button></li>
              <li><button onClick={onOpenPortal} className="hover:text-amber-300 transition-colors text-left">Property Owner Portal</button></li>
              <li><a href="#property-management" className="hover:text-amber-300 transition-colors">Algorithmic Pricing</a></li>
              <li><a href="#property-management" className="hover:text-amber-300 transition-colors">24/7 Concierge Maintenance</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Owner Yield Calculator</a></li>
            </ul>
          </div>

          {/* Col 4: Advisory & Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Private Office
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#advisory" className="hover:text-amber-300 transition-colors">Managing Partners</a></li>
              <li><button onClick={onOpenSchedule} className="hover:text-amber-300 transition-colors text-left">Book Showing</button></li>
              <li><a href="#neighborhoods" className="hover:text-amber-300 transition-colors">Market Guides</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Private Treaty Sales</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Press & Accolades</a></li>
            </ul>
          </div>
        </div>

        {/* Compliance & Copyright Disclaimers */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Sterling Key Properties & Asset Management LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-amber-400 font-bold">⌂</span> Equal Housing Opportunity
            </span>
            <span>·</span>
            <span>MLS IDX Compliant</span>
            <span>·</span>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400">Sovereign Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
