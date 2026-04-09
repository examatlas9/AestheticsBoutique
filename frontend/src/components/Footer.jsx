import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-cormorant text-3xl text-brandGold mb-1 font-semibold">
              Aesthetics Boutique
            </h3>
            <p className="text-xs text-stone-500 tracking-widest uppercase font-outfit mb-4">
              एसथेटिक्स बुटीक
            </p>
            <p className="font-outfit text-sm text-stone-400 leading-relaxed mb-5">
              Ranchi's most trusted boutique for designer sarees, bridal wear, ladies tailoring & beauty services.
            </p>
            <div className="flex items-center gap-2 bg-stone-800 rounded-xl px-4 py-3 w-fit">
              <Star size={14} className="text-brandGold fill-brandGold" />
              <span className="text-sm font-outfit text-white font-medium">4.6</span>
              <span className="text-stone-500 text-xs">Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit text-xs uppercase tracking-[0.2em] text-stone-400 mb-5 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone-400 hover:text-brandGold text-sm font-outfit transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit text-xs uppercase tracking-[0.2em] text-stone-400 mb-5 font-semibold">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Designer Sarees",
                "Bridal Lehengas",
                "Anarkali Suits",
                "Ladies Tailoring",
                "Beauty Parlour",
                "Accessories",
              ].map((s) => (
                <li key={s} className="text-stone-400 hover:text-brandGold text-sm font-outfit transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit text-xs uppercase tracking-[0.2em] text-stone-400 mb-5 font-semibold">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-brandGold mt-0.5 flex-shrink-0" />
                <p className="text-stone-400 text-sm font-outfit leading-relaxed">
                  1st Floor, Shree Gopal Complex,<br />
                  Kutchery Road, Near Shahid Chowk,<br />
                  Ranchi, Jharkhand 834001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-brandGold flex-shrink-0" />
                <a href="tel:+919835139191" className="text-stone-400 hover:text-brandGold text-sm font-outfit transition-colors">
                  +91 98351 39191
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-brandGold flex-shrink-0 mt-0.5" />
                <div className="text-stone-400 text-sm font-outfit">
                  <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p>Sunday: 11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500 font-outfit">
          <p>© 2025 Aesthetics Boutique & Beauty Parlour. All rights reserved.</p>
          <p>FJCCI Member: AL-321 | Ranchi, Jharkhand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
