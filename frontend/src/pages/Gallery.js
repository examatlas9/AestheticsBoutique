import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const categories = [
  { id: "all", label: "All", hindi: "सभी" },
  { id: "sarees", label: "Sarees", hindi: "साड़ियाँ" },
  { id: "bridal", label: "Bridal", hindi: "ब्राइडल" },
  { id: "anarkali", label: "Anarkali", hindi: "अनारकली" },
  { id: "tailoring", label: "Tailoring", hindi: "सिलाई" },
  { id: "beauty", label: "Beauty", hindi: "ब्यूटी" },
  { id: "store", label: "Store", hindi: "स्टोर" },
];

const galleryItems = [
  {
    id: 1,
    category: "bridal",
    image: "https://images.pexels.com/photos/13022612/pexels-photo-13022612.jpeg?auto=compress&cs=tinysrgb&w=700",
    title: "Bridal Lehenga Collection",
    desc: "Stunning red bridal lehenga with intricate zari work",
  },
  {
    id: 2,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1756267318202-afebdffc107a?w=700&q=80",
    title: "Designer Saree Display",
    desc: "Vibrant collection of designer sarees for all occasions",
  },
  {
    id: 3,
    category: "bridal",
    image: "https://images.pexels.com/photos/13204681/pexels-photo-13204681.jpeg?auto=compress&cs=tinysrgb&w=700",
    title: "Bridal Fashion Show",
    desc: "Exquisite bridal wear for your special day",
  },
  {
    id: 4,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1761549924624-6a00e5dfabb7?w=700&q=80",
    title: "Saree Boutique",
    desc: "Our beautiful saree display in the store",
  },
  {
    id: 5,
    category: "anarkali",
    image: "https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?w=700&q=80",
    title: "Anarkali & Ethnic Wear",
    desc: "Designer anarkali suits and ethnic collections",
  },
  {
    id: 6,
    category: "tailoring",
    image: "https://images.unsplash.com/photo-1771315938116-cd51af9489fc?w=700&q=80",
    title: "Expert Tailoring",
    desc: "Precision ladies tailoring with expert craftsmanship",
  },
  {
    id: 7,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1653130029149-9109b115ab9a?w=700&q=80",
    title: "Professional Makeup",
    desc: "Beauty and makeup services by skilled professionals",
  },
  {
    id: 8,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?w=700&q=80",
    title: "Premium Fabric Collection",
    desc: "Finest fabrics for custom stitching",
  },
  {
    id: 9,
    category: "bridal",
    image: "https://images.unsplash.com/photo-1610047614222-d33c39abfab2?w=700&q=80",
    title: "Bridal Special Collection",
    desc: "Complete bridal wear in vivid colours",
  },
  {
    id: 10,
    category: "store",
    image: "https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=700",
    title: "Our Boutique Store",
    desc: "Inside Aesthetics Boutique, Ranchi",
  },
  {
    id: 11,
    category: "anarkali",
    image: "https://images.unsplash.com/photo-1736090849235-4e4e90f61572?w=700&q=80",
    title: "Festive Ethnic Wear",
    desc: "Festive and party wear for all celebrations",
  },
  {
    id: 12,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80",
    title: "Bridal Makeup & Styling",
    desc: "Complete bridal beauty transformations",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Gallery | Aesthetics Boutique - Designer Sarees & Bridal Wear Photos";
  }, []);

  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

  return (
    <main className="pt-20 bg-brandIvory">
      {/* Header */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमारी गैलरी</p>
          <h1 className="font-cormorant text-5xl sm:text-6xl text-stone-900 font-light leading-tight mb-3">
            Our Gallery
          </h1>
          <div className="gold-divider mx-auto mb-5" />
          <p className="font-outfit text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
            A glimpse into our beautiful collection — from designer sarees to bridal wear, elegant tailoring to beauty transformations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-[72px] z-30 border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div data-testid="gallery-filters" className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                data-testid={`gallery-filter-${cat.id}`}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-outfit font-medium transition-all duration-200 ${
                  activeFilter === cat.id
                    ? "bg-brandMaroon text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.label}
                <span className="text-xs opacity-60">/ {cat.hindi}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section data-testid="gallery-grid" className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                data-testid={`gallery-item-${item.id}`}
                className="gallery-item break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - Aesthetics Boutique Ranchi`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-stone-900/80 to-transparent">
                      <p className="font-outfit text-white font-semibold text-sm">{item.title}</p>
                      <p className="font-outfit text-white/70 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="font-outfit font-medium text-stone-900 text-sm">{item.title}</p>
                  <span className="text-xs bg-brandMaroon/10 text-brandMaroon px-2 py-0.5 rounded-full font-outfit capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-400 font-outfit">
              No items found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brandMaroon text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-white mb-3">
            Love What You See?
          </h2>
          <p className="font-outfit text-white/70 text-sm mb-8">
            Visit our boutique in Ranchi or call us to know more about any item from our collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919835139191" data-testid="gallery-call-btn"
              className="flex items-center gap-2 bg-white text-brandMaroon font-outfit font-semibold px-7 py-3 rounded-full hover:bg-brandGold hover:text-white transition-all">
              <Phone size={16} /> Call Now
            </a>
            <Link to="/contact" data-testid="gallery-enquiry-btn"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brandMaroon font-outfit font-medium px-7 py-3 rounded-full transition-all">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
