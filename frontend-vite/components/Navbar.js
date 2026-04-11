import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home", hindi: "होम" },
  { path: "/about", label: "About", hindi: "हमारे बारे में" },
  { path: "/services", label: "Services", hindi: "सेवाएं" },
  { path: "/gallery", label: "Gallery", hindi: "गैलरी" },
  { path: "/reviews", label: "Reviews", hindi: "समीक्षाएं" },
  { path: "/contact", label: "Contact", hindi: "संपर्क" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl navbar-scrolled border-b border-stone-200/60" : "bg-white border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" data-testid="navbar-logo" className="flex flex-col leading-tight group">
            <span className="font-cormorant text-2xl font-semibold text-brandMaroon tracking-wide group-hover:text-brandMaroonDark transition-colors">
              Aesthetics Boutique
            </span>
            <span className="text-[10px] text-stone-500 tracking-[0.18em] uppercase font-outfit font-medium">
              एसथेटिक्स बुटीक • Ranchi
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`font-outfit text-sm tracking-wide transition-colors duration-200 hover:text-brandMaroon ${
                  location.pathname === link.path
                    ? "text-brandMaroon font-semibold"
                    : "text-stone-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919835139191"
              data-testid="navbar-call-btn"
              className="flex items-center gap-2 bg-brandMaroon hover:bg-brandMaroonDark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-stone-700 hover:text-brandMaroon transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-xl">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className={`flex items-center justify-between py-3 px-4 rounded-lg font-outfit text-sm transition-colors ${
                  location.pathname === link.path
                    ? "bg-brandMaroon/10 text-brandMaroon font-semibold"
                    : "text-stone-700 hover:bg-stone-50 hover:text-brandMaroon"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-stone-400">{link.hindi}</span>
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="tel:+919835139191"
                data-testid="mobile-call-btn"
                className="flex items-center justify-center gap-2 w-full bg-brandMaroon text-white text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300"
              >
                <Phone size={14} />
                Call: +91 98351 39191
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
