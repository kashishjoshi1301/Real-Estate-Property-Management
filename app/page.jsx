"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyListings from "../components/PropertyListings";
import PropertyManagementSection from "../components/PropertyManagementSection";
import MortgageCalculator from "../components/MortgageCalculator";
import DestinationsSection from "../components/DestinationsSection";
import AdvisorySection from "../components/AdvisorySection";
import Footer from "../components/Footer";

import PropertyModal from "../components/PropertyModal";
import PortalModal from "../components/PortalModal";
import ScheduleModal from "../components/ScheduleModal";
import SavedDrawer from "../components/SavedDrawer";

import { PROPERTIES_DATA } from "../data/mockData";

export default function HomePage() {
  const [properties, setProperties] = useState(PROPERTIES_DATA);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduleTargetProperty, setScheduleTargetProperty] = useState(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [savedIds, setSavedIds] = useState(["prop-1", "prop-3"]); // pre-populate with 2 favorites for immediate showcase

  // Save / Bookmark toggle
  const handleToggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Open Schedule modal for specific property
  const handleScheduleTour = (property) => {
    setScheduleTargetProperty(property);
    setIsScheduleOpen(true);
  };

  // Open Schedule modal generally
  const handleOpenGeneralSchedule = () => {
    setScheduleTargetProperty(null);
    setIsScheduleOpen(true);
  };

  // Search filter handler from Hero
  const handleSearchSubmit = (filter) => {
    let filtered = [...PROPERTIES_DATA];

    if (filter.tab === "rent") {
      filtered = filtered.filter((p) => p.rentalPrice !== null || p.listingType === "rent");
    } else if (filter.tab === "management") {
      const pmSection = document.getElementById("property-management");
      if (pmSection) pmSection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (filter.location.trim() !== "") {
      const q = filter.location.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.city.toLowerCase().includes(q) ||
          p.neighborhood.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q)
      );
    }

    if (filter.propertyType !== "all") {
      filtered = filtered.filter((p) => p.category === filter.propertyType);
    }

    if (filter.priceRange === "under10") {
      filtered = filtered.filter((p) => p.price < 10000000);
    } else if (filter.priceRange === "10to30") {
      filtered = filtered.filter((p) => p.price >= 10000000 && p.price <= 30000000);
    } else if (filter.priceRange === "30to60") {
      filtered = filtered.filter((p) => p.price > 30000000 && p.price <= 60000000);
    } else if (filter.priceRange === "ultra60") {
      filtered = filtered.filter((p) => p.price > 60000000);
    }

    setProperties(filtered);

    // Smooth scroll down to listings
    const listingsSection = document.getElementById("featured-listings");
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // City selection from Destinations section
  const handleSelectCity = (cityName) => {
    const q = cityName.toLowerCase();
    const filtered = PROPERTIES_DATA.filter((p) =>
      p.city.toLowerCase().includes(q) || p.neighborhood.toLowerCase().includes(q)
    );
    setProperties(filtered.length > 0 ? filtered : PROPERTIES_DATA);

    const listingsSection = document.getElementById("featured-listings");
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation Header */}
      <Navbar
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenSchedule={handleOpenGeneralSchedule}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Cinematic Hero & Multi-Tab Search */}
        <HeroSection
          onSearchSubmit={handleSearchSubmit}
          onSelectTab={(tab) => {
            if (tab === "management") {
              const el = document.getElementById("property-management");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* Featured Luxury Portfolio (The Agency & Compass style) */}
        <PropertyListings
          properties={properties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onScheduleTour={handleScheduleTour}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
        />

        {/* Institutional Property Management (Greystar inspired) */}
        <PropertyManagementSection
          onOpenPortal={() => setIsPortalOpen(true)}
          onOpenSchedule={handleOpenGeneralSchedule}
        />

        {/* Financial & Mortgage Calculator (Redfin & Compass inspired) */}
        <MortgageCalculator
          onOpenSchedule={handleOpenGeneralSchedule}
        />

        {/* Global Destinations & Developments (Douglas Elliman inspired) */}
        <DestinationsSection
          onSelectCity={handleSelectCity}
        />

        {/* Private Client Advisory & Elite Brokers (The Agency inspired) */}
        <AdvisorySection
          onOpenSchedule={handleOpenGeneralSchedule}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenSchedule={handleOpenGeneralSchedule}
      />

      {/* Interactive Modals & Drawers */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleTour={handleScheduleTour}
      />

      <PortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        preselectedProperty={scheduleTargetProperty}
      />

      <SavedDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemoveSave={handleToggleSave}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onScheduleTour={handleScheduleTour}
      />
    </div>
  );
}
