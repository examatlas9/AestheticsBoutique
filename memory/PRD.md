# Aesthetics Boutique Website - PRD

## Project Overview
Complete high-converting marketing website for **Aesthetics Boutique & Beauty Parlour**, Ranchi, Jharkhand.

**Business:** Aesthetics Boutique (एसथेटिक्स बुटीक)
**Location:** 1st Floor, Shree Gopal Complex, Kutchery Road, Near Shahid Chowk, Ranchi, Jharkhand 834001
**Phone:** +91 98351 39191 | +91 94313 89262
**Hours:** Mon–Sat: 10 AM–8 PM | Sun: 11 AM–6 PM
**Rating:** 4.6 Google, 4.5 Justdial (284+ reviews)
**Membership:** FJCCI Member AL-321

---

## User Personas
- **Brides-to-be** (25–35): Searching for bridal lehengas, sarees, complete bridal packages
- **Fashion-conscious women** (20–45): Designer sarees, Anarkali suits, party wear
- **Regular customers** (18–50): Everyday wear, tailoring, alterations, beauty services
- **Wedding shoppers** (families): Occasion wear for weddings and festivals

---

## Core Requirements (Static)
1. Bilingual website (Hindi + English)
2. All goals: Phone calls + walk-in + online enquiry
3. WhatsApp integration (floating button)
4. SEO optimized for Ranchi local search
5. Mobile-first design
6. Premium Indian boutique aesthetic

---

## Architecture
- **Frontend:** React.js with React Router DOM
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Cormorant Garamond (headings) + Outfit (body)
- **Colors:** brandMaroon (#800020), brandGold (#D4AF37), brandIvory (#FDFBF7)

---

## What's Been Implemented (Feb 2026)

### Pages
- **Homepage (`/`):** Hero (Hindi/English headlines + bridal image), Trust Banner (4.6★/4.5★), 4-card Services Preview, Why Choose Us, Bridal CTA Banner, 3 Testimonials, Final CTA with Call/WhatsApp/Directions
- **About (`/about`):** Brand story, Stats section, Mission & Vision, Journey Timeline (2010–2025), CTA
- **Services (`/services`):** 6 detailed service cards (Designer Sarees, Bridal Wear, Anarkali Suits, Ladies Tailoring with pricing, Beauty Parlour, Accessories)
- **Gallery (`/gallery`):** 12-item photo grid with category filter tabs (All/Sarees/Bridal/Anarkali/Tailoring/Beauty/Store)
- **Reviews (`/reviews`):** 8 realistic testimonials, Rating summary (4.6/4.5/284+), Write Review CTA
- **Contact (`/contact`):** Enquiry form (5 fields), Contact info cards, WhatsApp CTA, Google Maps embed

### Components
- **Navbar:** Sticky with glass effect on scroll, mobile hamburger menu, "Call Now" CTA button
- **Footer:** Brand info, Quick Links, Services list, Contact details
- **WhatsAppButton:** Floating button with pulse animation and tooltip

### Backend APIs
- `GET /api/` — Health check
- `POST /api/enquiry` — Submit customer enquiry (stored in MongoDB)
- `GET /api/enquiries` — Retrieve all enquiries
- `POST /api/status` — Status check (legacy)

### SEO
- Updated HTML meta title and description
- OG tags (Open Graph)
- Local keywords: boutique ranchi, designer sarees ranchi, bridal wear ranchi, ladies tailoring ranchi
- Document title updated per page
- Google Maps embed for address visibility

---

## Pricing Included on Website
- Alterations: ₹100–₹500
- Blouse Stitching: ₹600–₹1,500
- Suit Stitching: ₹800–₹2,000
- Wedding Lehenga Stitching: ₹7,000–₹30,000
- Designer Sarees: ₹500 onwards
- Bridal Wear: ₹7,000–₹2,50,000

---

## Test Results (Feb 2026)
- Backend: 100% (6/6 tests pass)
- Frontend: 95% (19/20) — Minor: native HTML5 form validation (correct behavior)

---

## Prioritized Backlog

### P0 (Critical - Done)
- [x] All 6 pages built and working
- [x] Enquiry form + backend API
- [x] WhatsApp integration
- [x] Bilingual content
- [x] Responsive design

### P1 (High Priority - Next)
- [ ] WhatsApp Business API for auto-reply on enquiry submission
- [ ] Admin panel to view and manage enquiries
- [ ] Image optimization / CDN for gallery
- [ ] Google Analytics / tracking setup
- [ ] Instagram feed integration (for live product showcase)

### P2 (Nice to Have)
- [ ] Online appointment booking with calendar
- [ ] Blog/Articles section for SEO
- [ ] Offers/Deals page with seasonal promotions
- [ ] Customer login for order tracking
- [ ] Payment gateway for advance booking

---

## Next Tasks
1. Add admin dashboard to view/respond to enquiries
2. Connect Google Analytics for tracking leads
3. Set up Google My Business profile link
4. Add Instagram gallery integration
5. Create WhatsApp Business auto-reply system
