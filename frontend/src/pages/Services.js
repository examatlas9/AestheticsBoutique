import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Check, ArrowRight, Scissors, Star, Heart, Sparkles, ShoppingBag, Gem } from "lucide-react";

const services = [
  {
    id: "sarees",
    icon: <ShoppingBag size={24} className="text-brandMaroon" />,
    title: "Designer Sarees",
    hindi: "डिज़ाइनर साड़ियाँ",
    tagline: "Vibrant. Timeless. Handpicked.",
    description: "Explore our curated collection of sarees from across India — Banarasi silk, Kanjivaram, Georgette, Chiffon, Chanderi, and more. From everyday elegance to wedding grandeur, we have a saree for every woman.",
    image: "https://images.unsplash.com/photo-1756267318202-afebdffc107a?w=700&q=80",
    features: ["Banarasi Silk & Kanjivaram", "Georgette & Chiffon", "Chanderi & Cotton", "Wedding & Party wear", "Casual & Office wear", "Embroidered & Printed"],
    pricing: "₹500 onwards",
  },
  {
    id: "bridal",
    icon: <Heart size={24} className="text-brandMaroon" />,
    title: "Bridal Wear",
    hindi: "ब्राइडल कलेक्शन",
    tagline: "For Your Most Special Day",
    description: "Your wedding day deserves nothing but the best. Our exclusive bridal collection features stunning lehengas, bridal sarees, Anarkali sets, and complete bridal packages to make your dream wedding a reality.",
    image: "https://images.pexels.com/photos/13022612/pexels-photo-13022612.jpeg?auto=compress&cs=tinysrgb&w=700",
    features: ["Bridal Lehengas", "Bridal Sarees", "Reception Gowns", "Engagement Outfits", "Bridal Accessories", "Complete Bridal Package"],
    pricing: "₹7,000 – ₹2,50,000",
  },
  {
    id: "anarkali",
    icon: <Gem size={24} className="text-brandMaroon" />,
    title: "Anarkali Suits",
    hindi: "अनारकली सूट",
    tagline: "Tradition Meets Modern Style",
    description: "Our Anarkali collection brings the magic of Indian ethnic fashion with contemporary cuts and designs. Perfect for festive occasions, mehendi ceremonies, family functions, and special events.",
    image: "https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?w=700&q=80",
    features: ["Floor-length Anarkali", "Short & Mid-length", "Georgette & Silk", "Embroidered Designs", "Custom colours", "Festive & Wedding wear"],
    pricing: "₹1,500 onwards",
  },
  {
    id: "tailoring",
    icon: <Scissors size={24} className="text-brandMaroon" />,
    title: "Ladies Tailoring",
    hindi: "महिला सिलाई सेवा",
    tagline: "Perfect Fit, Every Time",
    description: "Our skilled tailors bring decades of expertise to every stitch. Whether it's a custom blouse, suit stitching, or altering a beloved outfit — we ensure a perfect fit tailored exactly to your measurements.",
    image: "https://images.unsplash.com/photo-1771315938116-cd51af9489fc?w=700&q=80",
    features: ["Custom Blouse Stitching", "Suit & Salwar Kameez", "Wedding Lehenga Stitching", "Alterations & Adjustments", "Kurta & Kurti", "Saree Fall & Petticoat"],
    pricing: null,
    pricing_details: [
      { service: "Alterations", price: "₹100 – ₹500" },
      { service: "Blouse Stitching", price: "₹600 – ₹1,500" },
      { service: "Suit Stitching", price: "₹800 – ₹2,000" },
      { service: "Wedding Lehenga", price: "₹7,000 – ₹30,000" },
    ],
  },
  {
    id: "beauty",
    icon: <Sparkles size={24} className="text-brandMaroon" />,
    title: "Beauty Parlour",
    hindi: "ब्यूटी पार्लर",
    tagline: "Look Beautiful, Feel Confident",
    description: "Our professional beauty parlour offers a full range of grooming and beauty services. From everyday hair care to complete bridal makeup — our skilled beauticians use premium products for stunning results.",
    image: "https://images.unsplash.com/photo-1653130029149-9109b115ab9a?w=700&q=80",
    features: ["Bridal Makeup", "Hair Styling & Blowout", "Facial & Skin Care", "Threading & Waxing", "Mehndi (Henna)", "Pre-bridal Packages"],
    pricing: "₹200 onwards",
  },
  {
    id: "accessories",
    icon: <Star size={24} className="text-brandMaroon" />,
    title: "Accessories",
    hindi: "ज्वेलरी और एक्सेसरीज़",
    tagline: "The Perfect Finishing Touch",
    description: "Complete your look with our handpicked collection of fashion accessories — designer dupattas, jewellery sets, bangles, potli bags, hair accessories, and much more to complement your outfit.",
    image: "https://images.unsplash.com/photo-1761549924624-6a00e5dfabb7?w=700&q=80",
    features: ["Jewellery Sets", "Designer Dupattas", "Bangles & Kadas", "Potli & Clutch Bags", "Hair Accessories", "Bridal Jewellery"],
    pricing: "₹150 onwards",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services | Aesthetics Boutique - Designer Sarees, Bridal Wear & Tailoring in Ranchi";
  }, []);

  return (
    <main className="pt-20 bg-brandIvory">
      {/* Page Header */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमारी सेवाएं</p>
          <h1 className="font-cormorant text-5xl sm:text-6xl text-stone-900 font-light leading-tight mb-3">
            Our Services
          </h1>
          <div className="gold-divider mx-auto mb-5" />
          <p className="font-outfit text-stone-500 max-w-2xl mx-auto text-sm leading-relaxed">
            From designer sarees to bridal collections, ladies tailoring to beauty services — Aesthetics Boutique is your one-stop fashion destination in Ranchi.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section data-testid="services-list" className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              data-testid={`service-card-${service.id}`}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 grid md:grid-cols-2 ${
                idx % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 md:h-auto min-h-72 [direction:ltr]">
                <img
                  src={service.image}
                  alt={`${service.title} - Aesthetics Boutique Ranchi`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 [direction:ltr]">
                  <span className="bg-brandGold text-white text-xs font-outfit font-semibold px-4 py-1.5 rounded-full">
                    {service.hindi}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 [direction:ltr]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brandMaroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-cormorant text-3xl text-stone-900 font-semibold">{service.title}</h2>
                    <p className="font-outfit text-xs text-brandGold font-medium">{service.tagline}</p>
                  </div>
                </div>
                <p className="font-outfit text-stone-600 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs font-outfit text-stone-600">
                      <Check size={12} className="text-brandMaroon flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                {service.pricing_details ? (
                  <div className="mb-6">
                    <p className="font-outfit text-xs uppercase tracking-widest text-stone-400 mb-3 font-semibold">Pricing</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.pricing_details.map(p => (
                        <div key={p.service} className="bg-brandIvory rounded-xl px-3 py-2">
                          <p className="font-outfit text-xs text-stone-500">{p.service}</p>
                          <p className="font-outfit text-sm text-brandMaroon font-semibold">{p.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 flex items-center gap-2">
                    <span className="font-outfit text-xs text-stone-400 uppercase tracking-widest">Starting from</span>
                    <span className="font-cormorant text-2xl text-brandMaroon font-semibold">{service.pricing}</span>
                  </div>
                )}

                <a
                  href="tel:+919835139191"
                  data-testid={`service-call-btn-${service.id}`}
                  className="inline-flex items-center gap-2 bg-brandMaroon hover:bg-brandMaroonDark text-white font-outfit font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm"
                >
                  <Phone size={14} />
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brandMaroon text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-white mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="font-outfit text-white/70 text-sm mb-8">
            Call us or walk into our store at Kutchery Road, Ranchi — we'll help you find exactly what you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919835139191" data-testid="services-call-btn"
              className="flex items-center gap-2 bg-white text-brandMaroon font-outfit font-semibold px-7 py-3 rounded-full hover:bg-brandGold hover:text-white transition-all duration-300">
              <Phone size={16} /> Call: +91 98351 39191
            </a>
            <Link to="/contact" data-testid="services-enquiry-btn"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brandMaroon font-outfit font-medium px-7 py-3 rounded-full transition-all duration-300">
              Send Enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
