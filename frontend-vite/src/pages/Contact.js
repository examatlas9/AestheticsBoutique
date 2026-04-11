import React, { useState, useEffect } from "react";
import axios from "axios";
import { Phone, MapPin, Clock, CheckCircle, Send, MessageCircle } from "lucide-react";

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL;

const serviceOptions = [
  "Designer Sarees",
  "Bridal Lehengas",
  "Anarkali Suits",
  "Ladies Tailoring - Blouse",
  "Ladies Tailoring - Suit",
  "Ladies Tailoring - Lehenga",
  "Ladies Tailoring - Alterations",
  "Beauty Parlour",
  "Accessories",
  "Other / General Enquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Aesthetics Boutique - Ranchi | +91 98351 39191";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.replace(/\s+/g, ""))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/enquiry`, form);
      setSuccess(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please call us directly at +91 98351 39191");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-brandMaroon" />,
      title: "Our Address",
      hindi: "हमारा पता",
      lines: [
        "1st Floor, Shree Gopal Complex",
        "Kutchery Road, Near Shahid Chowk",
        "Ranchi, Jharkhand 834001",
      ],
    },
    {
      icon: <Phone size={20} className="text-brandMaroon" />,
      title: "Call / WhatsApp",
      hindi: "फ़ोन / व्हाट्सएप",
      lines: ["+91 98351 39191", "+91 94313 89262"],
    },
    {
      icon: <Clock size={20} className="text-brandMaroon" />,
      title: "Business Hours",
      hindi: "व्यापार का समय",
      lines: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: 11:00 AM – 6:00 PM"],
    },
  ];

  return (
    <main className="pt-20 bg-brandIvory">
      {/* Header */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">हमसे संपर्क करें</p>
          <h1 className="font-cormorant text-5xl sm:text-6xl text-stone-900 font-light leading-tight mb-3">
            Contact Us
          </h1>
          <div className="gold-divider mx-auto mb-5" />
          <p className="font-outfit text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
            We'd love to hear from you! Fill the form below, call us, or WhatsApp — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section data-testid="contact-section" className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-brandMaroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-stone-900 text-sm mb-0.5">{info.title}</p>
                    <p className="font-outfit text-xs text-stone-400 mb-2">{info.hindi}</p>
                    {info.lines.map((line, i) => (
                      idx === 1 ? (
                        <a key={i} href={`tel:${line.replace(/\s+/g, "")}`}
                          className="block font-outfit text-sm text-brandMaroon hover:underline"
                          data-testid={`contact-phone-${i}`}>
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="font-outfit text-sm text-stone-600">{line}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA Card */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-stone-900 text-sm">WhatsApp Us</p>
                    <p className="font-outfit text-xs text-stone-500">Instant reply guaranteed</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919835139191?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-btn"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-outfit font-medium py-3 rounded-xl text-sm transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h2 className="font-cormorant text-3xl text-stone-900 font-medium mb-2">Send an Enquiry</h2>
                <p className="font-outfit text-stone-500 text-sm mb-6">अपनी जानकारी भरें और हम जल्द ही संपर्क करेंगे।</p>

                {success ? (
                  <div data-testid="form-success" className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-stone-900 font-medium mb-2">
                      Enquiry Received!
                    </h3>
                    <p className="font-outfit text-stone-600 text-sm mb-6">
                      Thank you! We'll contact you within 24 hours. For urgent queries, call +91 98351 39191.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="bg-brandMaroon text-white font-outfit font-medium px-6 py-2.5 rounded-full text-sm hover:bg-brandMaroonDark transition-all"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="enquiry-form" className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-outfit text-xs font-semibold text-stone-600 uppercase tracking-wide mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="आपका नाम / Your Name"
                          data-testid="enquiry-name-input"
                          required
                          className="w-full font-outfit text-sm border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brandMaroon focus:ring-2 focus:ring-brandMaroon/10 placeholder-stone-300 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-outfit text-xs font-semibold text-stone-600 uppercase tracking-wide mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          data-testid="enquiry-phone-input"
                          required
                          className="w-full font-outfit text-sm border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brandMaroon focus:ring-2 focus:ring-brandMaroon/10 placeholder-stone-300 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-outfit text-xs font-semibold text-stone-600 uppercase tracking-wide mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        data-testid="enquiry-email-input"
                        className="w-full font-outfit text-sm border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brandMaroon focus:ring-2 focus:ring-brandMaroon/10 placeholder-stone-300 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-outfit text-xs font-semibold text-stone-600 uppercase tracking-wide mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        data-testid="enquiry-service-select"
                        required
                        className="w-full font-outfit text-sm border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brandMaroon focus:ring-2 focus:ring-brandMaroon/10 bg-white transition-all"
                      >
                        <option value="">-- सेवा चुनें / Select Service --</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-outfit text-xs font-semibold text-stone-600 uppercase tracking-wide mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us more about what you're looking for..."
                        data-testid="enquiry-message-input"
                        className="w-full font-outfit text-sm border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brandMaroon focus:ring-2 focus:ring-brandMaroon/10 placeholder-stone-300 resize-none transition-all"
                      />
                    </div>

                    {error && (
                      <div data-testid="form-error" className="bg-red-50 border border-red-100 text-red-600 font-outfit text-sm px-4 py-3 rounded-xl">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      data-testid="enquiry-submit-btn"
                      className="flex items-center justify-center gap-2 w-full bg-brandMaroon hover:bg-brandMaroonDark text-white font-outfit font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Enquiry — हमें भेजें
                        </>
                      )}
                    </button>

                    <p className="font-outfit text-xs text-stone-400 text-center">
                      * We respond within 24 hours. For urgent queries, call +91 98351 39191
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section data-testid="map-section" className="pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <div className="p-6 flex items-center justify-between border-b border-stone-100">
              <div>
                <h3 className="font-cormorant text-2xl text-stone-900 font-medium">Find Us on the Map</h3>
                <p className="font-outfit text-xs text-stone-400">Kutchery Road, Near Shahid Chowk, Ranchi</p>
              </div>
              <a
                href="https://maps.app.goo.gl/oij3NA8bx6YLH73k8"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="directions-btn"
                className="flex items-center gap-2 bg-brandMaroon text-white font-outfit text-sm font-medium px-5 py-2.5 rounded-xl transition-all hover:bg-brandMaroonDark"
              >
                <MapPin size={14} /> Get Directions
              </a>
            </div>
            <div className="h-80 md:h-[450px]">
              <iframe
                title="Aesthetics Boutique Location - Ranchi"
                src="https://maps.google.com/maps?q=Aesthetics+Boutique+Kutchery+Road+Ranchi+Jharkhand+India&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
