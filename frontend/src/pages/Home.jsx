import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Star, Check, Scissors, Sparkles, Heart, ShoppingBag, ArrowRight, ChevronRight } from "lucide-react";

/* ── Hero Section ──────────────────────────────────── */
const HeroSection = () => (
  <section data-testid="hero-section" className="min-h-screen bg-brandIvory flex items-center pt-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-4">
            राँची का सबसे भरोसेमंद बुटीक
          </p>
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-stone-900 leading-tight font-light mb-2">
            जहाँ सुंदरता मिलती है
          </h1>
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-brandMaroon leading-tight font-medium mb-5">
            परंपरा से
          </h1>
          <div className="gold-divider mb-6" />
          <p className="font-outfit text-base text-stone-600 leading-relaxed mb-2">
            <em className="font-cormorant text-xl text-stone-500 not-italic">Where Beauty Meets Tradition</em>
          </p>
          <p className="font-outfit text-sm text-stone-500 leading-relaxed mb-8 max-w-md">
            Ranchi's premier destination for designer sarees, bridal lehengas, ladies tailoring, and beauty services. Trusted by 10,000+ women since 2010.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="tel:+919835139191"
              data-testid="hero-call-btn"
              className="flex items-center gap-2 bg-brandMaroon hover:bg-brandMaroonDark text-white font-outfit font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link
              to="/contact"
              data-testid="hero-book-btn"
              className="flex items-center gap-2 border-2 border-brandMaroon text-brandMaroon hover:bg-brandMaroon hover:text-white font-outfit font-medium px-7 py-3.5 rounded-full transition-all duration-300"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              data-testid="hero-services-btn"
              className="flex items-center gap-2 text-stone-600 hover:text-brandMaroon font-outfit text-sm transition-colors"
            >
              View Services <ChevronRight size={16} />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-stone-100">
              <Star size={14} className="text-brandGold fill-brandGold" />
              <span className="font-outfit font-bold text-stone-900 text-sm">4.6</span>
              <span className="text-stone-500 text-xs font-outfit">Google</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-stone-100">
              <Star size={14} className="text-brandGold fill-brandGold" />
              <span className="font-outfit font-bold text-stone-900 text-sm">4.5</span>
              <span className="text-stone-500 text-xs font-outfit">Justdial</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-stone-100">
              <span className="font-outfit font-bold text-stone-900 text-sm">284+</span>
              <span className="text-stone-500 text-xs font-outfit">Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4] max-h-[600px]">
            <img
              src="https://images.pexels.com/photos/13022612/pexels-photo-13022612.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Indian Bridal Fashion - Aesthetics Boutique Ranchi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandMaroon/30 to-transparent" />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-stone-100">
            <p className="font-outfit text-xs text-stone-500 mb-1">Trusted Since</p>
            <p className="font-cormorant text-3xl text-brandMaroon font-semibold">2010</p>
          </div>
          {/* Gold accent */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-brandGold/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Trust Banner ──────────────────────────────────── */
const TrustBanner = () => (
  <section data-testid="trust-banner" className="bg-brandMaroon text-white py-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "4.6★", label: "Google Rating" },
          { value: "4.5★", label: "Justdial Rating" },
          { value: "284+", label: "Happy Reviews" },
          { value: "10,000+", label: "Customers Served" },
        ].map((stat) => (
          <div key={stat.label} className="py-2">
            <p className="font-cormorant text-3xl md:text-4xl font-semibold text-brandGold mb-1">
              {stat.value}
            </p>
            <p className="font-outfit text-xs uppercase tracking-widest text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Services Preview ──────────────────────────────── */
const services = [
  {
    icon: <ShoppingBag size={28} className="text-brandMaroon" />,
    title: "Designer Sarees",
    hindi: "डिज़ाइनर साड़ियाँ",
    desc: "Silk, georgette, banarasi & more — vibrant collection for every occasion.",
    image: "https://images.unsplash.com/photo-1756267318202-afebdffc107a?w=500&q=80",
  },
  {
    icon: <Heart size={28} className="text-brandMaroon" />,
    title: "Bridal Wear",
    hindi: "ब्राइडल वियर",
    desc: "Exquisite lehengas, bridal sarees & accessories for your dream wedding.",
    image: "https://images.pexels.com/photos/13204681/pexels-photo-13204681.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    icon: <Scissors size={28} className="text-brandMaroon" />,
    title: "Ladies Tailoring",
    hindi: "महिला सिलाई",
    desc: "Custom blouses, suit stitching & alterations. Perfect fit guaranteed.",
    image: "https://images.unsplash.com/photo-1771315938116-cd51af9489fc?w=500&q=80",
  },
  {
    icon: <Sparkles size={28} className="text-brandMaroon" />,
    title: "Beauty Parlour",
    hindi: "ब्यूटी पार्लर",
    desc: "Professional makeup, hair styling, bridal beauty packages & more.",
    image: "https://images.unsplash.com/photo-1653130029149-9109b115ab9a?w=500&q=80",
  },
];

const ServicesPreview = () => (
  <section data-testid="services-preview" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमारी सेवाएं</p>
        <h2 className="font-cormorant text-4xl sm:text-5xl text-stone-900 font-medium mb-4">Our Services</h2>
        <div className="gold-divider mx-auto mb-5" />
        <p className="font-outfit text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
          From everyday wear to bridal collections — we dress you for every moment that matters.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="service-card bg-brandIvory rounded-2xl overflow-hidden border border-stone-100 group cursor-default">
            <div className="relative h-52 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-cormorant text-xl font-semibold">{s.title}</p>
                <p className="font-outfit text-xs text-white/70">{s.hindi}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{s.icon}</div>
                <p className="font-outfit text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/services"
          data-testid="view-all-services-btn"
          className="inline-flex items-center gap-2 border-2 border-brandMaroon text-brandMaroon hover:bg-brandMaroon hover:text-white font-outfit font-medium px-8 py-3 rounded-full transition-all duration-300"
        >
          View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

/* ── Why Choose Us ─────────────────────────────────── */
const reasons = [
  { icon: "✦", title: "Premium Quality", desc: "Only authentic fabrics & verified designer collections at our boutique." },
  { icon: "✦", title: "Expert Craftsmanship", desc: "15+ years of experience in tailoring & fashion styling." },
  { icon: "✦", title: "Affordable Prices", desc: "Best quality within every budget. Discounts & offers available." },
  { icon: "✦", title: "Personal Attention", desc: "Every customer is family. We ensure your complete satisfaction." },
];

const WhyChooseUs = () => (
  <section data-testid="why-choose-us" className="py-20 bg-brandIvory">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमें क्यों चुनें?</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-stone-900 font-medium mb-5">
            Why Choose<br />
            <span className="text-brandMaroon">Aesthetics Boutique?</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-8">
            For over 15 years, Aesthetics Boutique has been Ranchi's go-to destination for women who love fashion. We blend quality, affordability, and personalized service — all under one roof.
          </p>
          <div className="space-y-4">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-stone-100 shadow-sm">
                <div className="w-8 h-8 bg-brandMaroon/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-brandMaroon" />
                </div>
                <div>
                  <p className="font-outfit font-semibold text-stone-900 text-sm mb-1">{r.title}</p>
                  <p className="font-outfit text-stone-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square max-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?w=700&q=80"
              alt="Designer fashion at Aesthetics Boutique Ranchi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brandGold/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brandMaroon/20 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Bridal CTA Banner ─────────────────────────────── */
const BridalCTA = () => (
  <section data-testid="bridal-cta" className="relative py-24 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/13022612/pexels-photo-13022612.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
      <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-4">
        Special Bridal Collection
      </p>
      <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
        Plan Your<br />
        <span className="text-brandGold font-semibold">Dream Wedding Look</span>
      </h2>
      <p className="font-outfit text-white/80 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
        Complete bridal packages — lehengas, sarees, blouses, jewellery & makeup. Let us make your special day unforgettable.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+919835139191"
          data-testid="bridal-call-btn"
          className="flex items-center gap-2 bg-white text-brandMaroon font-outfit font-semibold px-8 py-3.5 rounded-full hover:bg-brandGold hover:text-white transition-all duration-300"
        >
          <Phone size={16} />
          Bridal Consultation
        </a>
        <Link
          to="/gallery"
          data-testid="bridal-gallery-btn"
          className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brandMaroon font-outfit font-medium px-8 py-3.5 rounded-full transition-all duration-300"
        >
          View Bridal Gallery <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

/* ── Testimonials Preview ──────────────────────────── */
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Ranchi",
    rating: 5,
    text: "Absolutely loved my bridal lehenga from Aesthetics Boutique! The quality is outstanding and the stitching was perfect. The staff was so helpful and patient. Highly recommended for all brides!",
    service: "Bridal Lehenga",
  },
  {
    name: "Anjali Singh",
    location: "Ranchi",
    rating: 5,
    text: "Best boutique in Ranchi for designer sarees. They have a wonderful collection for all occasions and the prices are very reasonable. I always find something beautiful here!",
    service: "Designer Sarees",
  },
  {
    name: "Meena Gupta",
    location: "Ranchi",
    rating: 5,
    text: "Got my blouse stitched here and the fit was perfect. Very classy work at affordable prices. The tailors are very skilled and they listen to exactly what you want. Must visit!",
    service: "Ladies Tailoring",
  },
];

const TestimonialsPreview = () => (
  <section data-testid="testimonials-preview" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">ग्राहकों की राय</p>
        <h2 className="font-cormorant text-4xl sm:text-5xl text-stone-900 font-medium mb-4">
          What Our Customers Say
        </h2>
        <div className="gold-divider mx-auto mb-5" />
        <div className="flex justify-center items-center gap-6 text-sm font-outfit">
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-brandGold fill-brandGold" />)}
            <span className="text-stone-700 font-medium ml-1">4.6 Google</span>
          </div>
          <div className="w-px h-5 bg-stone-200" />
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-brandGold fill-brandGold" />)}
            <span className="text-stone-700 font-medium ml-1">4.5 Justdial</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-brandIvory rounded-2xl p-6 border border-stone-100 service-card">
            <div className="flex mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="text-brandGold fill-brandGold" />
              ))}
            </div>
            <p className="font-outfit text-stone-700 text-sm leading-relaxed mb-5 italic">
              "{t.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-outfit font-semibold text-stone-900 text-sm">{t.name}</p>
                <p className="font-outfit text-xs text-stone-400">{t.location}</p>
              </div>
              <span className="text-xs bg-brandMaroon/10 text-brandMaroon px-3 py-1 rounded-full font-outfit font-medium">
                {t.service}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/reviews"
          data-testid="view-all-reviews-btn"
          className="inline-flex items-center gap-2 text-brandMaroon hover:text-brandMaroonDark font-outfit font-medium text-sm transition-colors"
        >
          Read All Reviews <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

/* ── Final CTA ─────────────────────────────────────── */
const FinalCTA = () => (
  <section data-testid="final-cta" className="py-20 bg-brandMaroon text-white">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-4">
        आज ही पधारें
      </p>
      <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white mb-3">
        Visit Us in <span className="text-brandGold font-semibold">Ranchi</span>
      </h2>
      <p className="font-outfit text-white/70 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
        1st Floor, Shree Gopal Complex, Kutchery Road, Near Shahid Chowk, Ranchi, Jharkhand 834001
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+919835139191"
          data-testid="cta-call-btn"
          className="flex items-center gap-2 bg-white text-brandMaroon font-outfit font-semibold px-8 py-3.5 rounded-full hover:bg-brandGold hover:text-white transition-all duration-300"
        >
          <Phone size={16} />
          +91 98351 39191
        </a>
        <a
          href="https://wa.me/919835139191"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-whatsapp-btn"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-outfit font-medium px-8 py-3.5 rounded-full transition-all duration-300"
        >
          WhatsApp Us
        </a>
        <a
          href="https://maps.app.goo.gl/oij3NA8bx6YLH73k8"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-directions-btn"
          className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brandMaroon font-outfit font-medium px-8 py-3.5 rounded-full transition-all duration-300"
        >
          <MapPin size={16} />
          Get Directions
        </a>
      </div>
    </div>
  </section>
);

/* ── Main Home Component ───────────────────────────── */
const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <BridalCTA />
      <TestimonialsPreview />
      <FinalCTA />
    </main>
  );
};

export default Home;
