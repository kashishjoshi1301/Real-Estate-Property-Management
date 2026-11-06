# Sterling Key Properties & Asset Management
> **Where Architectural Mastery Meets Unrivaled Living.**

An ultra-luxury, high-performance real estate and institutional property management web platform built on **Next.js (App Router)** and **Tailwind CSS**.

Synthesized from the world's 5 leading real estate & management platforms:
1. **The Agency RE** (`theagencyre.com`): Cinematic visual luxury, dark aesthetic with gold accents, editorial storytelling, and private advisory profiles.
2. **Compass** (`compass.com`): Lightning-fast multi-attribute search engine, category filter pills, interactive card carousels, and persistent client favorites.
3. **Redfin** (`redfin.com`): Interactive financial calculator with live sliders for acquisition target, down payment %, 15/30-year fixed loan terms, and a visual breakdown of principal & interest, property taxes, insurance, and HOA dues.
4. **Douglas Elliman** (`elliman.com`): Prestige global flagship destinations (New York, Beverly Hills, Miami, London, Aspen) and architectural provenance.
5. **Greystar** (`greystar.com`): Institutional property management architecture with 4 operational pillars (algorithmic yield pricing, biometric tenant vetting, 24/7 concierge maintenance dispatch, GAAP automated owner distributions) and an interactive **dual Resident & Owner Portal**.

---

## 🏛️ Brand Identity & Logo
- **Name**: Sterling Key Properties
- **Emblem**: Custom octagonal architectural crest featuring an interlocking master key, stylized geometric monogram, and luxury gold gradients (`components/Logo.jsx` and `public/sterling-key-logo.svg`).
- **Color Palette**: Deep Obsidian (`#080B11`), Royal Midnight (`#0E1422`), Imperial Gold (`#D4AF37`), and Champagne Pearl (`#F8FAFC`).

---

## ⚡ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 & custom glassmorphism utilities
- **Icons**: Lucide React
- **Animations**: CSS smooth hardware-accelerated transitions & keyframes
- **State Management**: React state for interactive filtering, calculators, modals, and saved collections

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the platform.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📂 Key Features & Components
- `components/Navbar.jsx`: Sticky glassmorphic header with private market ticker, section shortcuts, favorites badge counter, and direct portal launcher.
- `components/HeroSection.jsx`: High-impact cinematic banner with live multi-tab search engine (Buy, Rent, Developments, Property Management).
- `components/PropertyListings.jsx`: Filterable gallery with card image carousels, status badges, specs, and quick-view inspection triggers.
- `components/PropertyManagementSection.jsx`: Greystar-inspired asset management hub featuring the 4 operational pillars, service tiers, and an interactive **Owner Yield & Cap Rate Simulator**.
- `components/MortgageCalculator.jsx`: Redfin-inspired financing tool with real-time sliders and a visual monthly outlay breakdown.
- `components/DestinationsSection.jsx`: Editorial showcase of prime global markets with median prices and rental yield insights.
- `components/AdvisorySection.jsx`: Top private wealth brokers, career sales volume metrics, and press accolades (WSJ, AD, FT, Robb Report).
- `components/PropertyModal.jsx`: Full-screen deep inspection modal with multi-photo carousel, specs, floor plan details, and booking form.
- `components/PortalModal.jsx`: Greystar-style dual gateway:
  - **Resident Portal**: Pay rent via ACH, 24/7 maintenance dispatch, biometric key pass generator, amenity reservations.
  - **Owner Portal**: Live Net Operating Income (NOI) tracker, distribution ledger, occupancy dashboard, GAAP tax export.
- `components/ScheduleModal.jsx`: Private showing and asset audit booking with calendar synchronization.
- `components/SavedDrawer.jsx`: Slide-over drawer managing favorited residences with instant showing scheduling.
- `components/Footer.jsx`: Multi-column luxury footer with "The Sovereign Wire" private off-market newsletter subscription, 5 global flagship offices, and Fair Housing / MLS disclosures.

---
© Sterling Key Properties & Asset Management LLC. All rights reserved.
# Real-State-Property-Management
