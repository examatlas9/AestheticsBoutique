import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Award, Users, Heart, Check, ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Excellence", hindi: "वर्षों का अनुभव" },
  { value: "10,000+", label: "Happy Customers", hindi: "खुश ग्राहक" },
  { value: "284+", label: "5-Star Reviews", hindi: "समीक्षाएं" },
  { value: "6+", label: "Services Offered", hindi: "सेवाएं" },
];

const milestones = [
  { year: "2010", event: "Founded in Ranchi as a small saree store on Kutchery Road" },
  { year: "2013", event: "Expanded to include bridal wear & lehenga collections" },
  { year: "2016", event: "Added ladies tailoring & custom stitching services" },
  { year: "2019", event: "Launched beauty parlour services under one roof" },
  { year: "2022", event: "Recognized as Ranchi's most trusted boutique — FJCCI Member" },
  { year: "2025", event: "Serving 10,000+ happy customers & growing every day" },
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | Aesthetics Boutique - Ranchi's Premier Fashion Destination";
  }, []);

  return (
    <main className="pt-20 bg-brandIvory">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-4">
                हमारी कहानी
              </p>
              <h1 className="font-cormorant text-5xl sm:text-6xl text-stone-900 font-light leading-tight mb-2">
                Our Story
              </h1>
              <h2 className="font-cormorant text-3xl text-brandMaroon font-medium mb-6">
                15 Years of Elegance in Ranchi
              </h2>
              <div className="gold-divider mb-7" />
              <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-5">
                Aesthetics Boutique was born in the heart of Ranchi with a simple vision — to make every woman feel beautiful, confident, and celebrated. What started as a small saree store on Kutchery Road has grown into Ranchi's most loved fashion destination.
              </p>
              <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-5">
                Today, we offer an exquisite range of designer sarees, bridal lehengas, Anarkali suits, ladies tailoring, and beauty services — all under one roof. Our team of skilled artisans and fashion experts work with passion to ensure every customer walks out looking and feeling her best.
              </p>
              <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-8">
                We are proud members of the <strong className="text-stone-900">Federation of Jharkhand Chamber of Commerce & Industries (FJCCI)</strong> — a testament to our commitment to quality and business ethics.
              </p>
              <Link
                to="/contact"
                data-testid="about-contact-btn"
                className="inline-flex items-center gap-2 bg-brandMaroon hover:bg-brandMaroonDark text-white font-outfit font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1756267318202-afebdffc107a?w=800&q=85"
                  alt="Aesthetics Boutique store interior in Ranchi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brandMaroon text-white rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-brandGold fill-brandGold" />
                  <Star size={16} className="text-brandGold fill-brandGold" />
                  <Star size={16} className="text-brandGold fill-brandGold" />
                  <Star size={16} className="text-brandGold fill-brandGold" />
                  <Star size={16} className="text-brandGold fill-brandGold" />
                </div>
                <p className="font-outfit text-xs text-white/80">Rated 4.6 on Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section data-testid="about-stats" className="py-16 bg-brandMaroon">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-cormorant text-4xl md:text-5xl text-brandGold font-semibold mb-2">{s.value}</p>
                <p className="font-outfit text-xs uppercase tracking-widest text-white/70 mb-1">{s.label}</p>
                <p className="font-outfit text-xs text-white/40">{s.hindi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमारा उद्देश्य</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-stone-900 font-medium mb-4">
              Our Mission & Vision
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brandIvory rounded-3xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-brandMaroon/10 rounded-2xl flex items-center justify-center mb-5">
                <Heart size={22} className="text-brandMaroon" />
              </div>
              <h3 className="font-cormorant text-2xl text-stone-900 font-medium mb-4">Our Mission</h3>
              <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-4">
                हमारा मिशन है कि हर महिला को premium fashion experience मिले। To provide every woman in Ranchi with access to premium fashion — beautifully crafted, affordably priced, and personally delivered.
              </p>
              <ul className="space-y-2">
                {["Bring designer fashion to every home in Ranchi", "Deliver perfection in every stitch and every style", "Make every customer feel celebrated and confident"].map(point => (
                  <li key={point} className="flex items-start gap-2 text-sm font-outfit text-stone-600">
                    <Check size={14} className="text-brandMaroon mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brandIvory rounded-3xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-brandGold/20 rounded-2xl flex items-center justify-center mb-5">
                <Award size={22} className="text-brandGold" />
              </div>
              <h3 className="font-cormorant text-2xl text-stone-900 font-medium mb-4">Our Vision</h3>
              <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-4">
                हम चाहते हैं कि Aesthetics Boutique Jharkhand का सबसे विश्वसनीय boutique बने। To become Jharkhand's most trusted name in women's fashion and beauty — where quality, tradition, and modern style converge.
              </p>
              <ul className="space-y-2">
                {["Be the #1 boutique in Jharkhand", "Preserve India's rich textile heritage", "Empower women through fashion & beauty"].map(point => (
                  <li key={point} className="flex items-start gap-2 text-sm font-outfit text-stone-600">
                    <Check size={14} className="text-brandGold mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-brandIvory">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमारी यात्रा</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-stone-900 font-medium mb-4">Our Journey</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brandGold/30 transform -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div key={m.year} className={`flex gap-6 md:gap-10 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 inline-block text-left">
                      <p className="font-cormorant text-3xl text-brandMaroon font-semibold mb-1">{m.year}</p>
                      <p className="font-outfit text-sm text-stone-600 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brandMaroon rounded-full border-4 border-brandGold flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-outfit text-xs uppercase tracking-widest text-brandGold mb-3">Visit Us Today</p>
          <h2 className="font-cormorant text-4xl text-white font-light mb-5">
            Be a Part of Our <span className="text-brandGold font-semibold">Story</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919835139191" data-testid="about-call-btn"
              className="flex items-center gap-2 bg-brandMaroon hover:bg-brandMaroonDark text-white font-outfit font-medium px-7 py-3 rounded-full transition-all duration-300">
              Call Us Now
            </a>
            <Link to="/services" data-testid="about-services-btn"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-stone-900 font-outfit font-medium px-7 py-3 rounded-full transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
