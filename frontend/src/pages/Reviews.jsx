import React, { useEffect } from "react";
import { Star, Phone } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Doranda, Ranchi",
    rating: 5,
    date: "February 2026",
    service: "Bridal Lehenga",
    text: "I got my bridal lehenga from Aesthetics Boutique and I couldn't be happier! The quality of the fabric is outstanding, the embroidery is exquisite, and it fit perfectly after just one fitting. The staff was incredibly patient and helped me choose the perfect outfit for my big day. Highly recommend to every bride in Ranchi!",
    platform: "Google",
  },
  {
    name: "Anjali Kumari",
    location: "Kanke, Ranchi",
    rating: 5,
    date: "January 2026",
    service: "Designer Sarees",
    text: "Aesthetics Boutique is great! They have many nice clothes and accessories. I love their discounts — you can save a lot of money. The quality is nice too. I always find something cute to wear here. Their saree collection is the best in Ranchi. I recommend Aesthetics Boutique to everyone!",
    platform: "Justdial",
  },
  {
    name: "Meena Gupta",
    location: "Harmu, Ranchi",
    rating: 5,
    date: "December 2025",
    service: "Ladies Tailoring",
    text: "Got my blouse stitched here and the stitching quality was impeccable! Very classy work at affordable prices. The tailor listened carefully to every detail I wanted and the final blouse was exactly what I imagined. Will definitely come back for all my stitching needs. Must visit!",
    platform: "Google",
  },
  {
    name: "Pooja Singh",
    location: "Bariatu, Ranchi",
    rating: 5,
    date: "November 2025",
    service: "Anarkali Suits",
    text: "Wonderful collection for all occasions. I bought an Anarkali suit for my cousin's wedding and received so many compliments! The fabric quality is top-notch and the fitting was perfect. The staff is very polite and helpful. Prices are very reasonable for the quality they offer.",
    platform: "Justdial",
  },
  {
    name: "Sunita Mahto",
    location: "Lalpur, Ranchi",
    rating: 5,
    date: "October 2025",
    service: "Bridal Makeup",
    text: "The beauty parlour at Aesthetics Boutique is amazing! I got my full bridal makeup done here and the result was absolutely stunning. The beauticians are very skilled and used premium quality products. My makeup lasted all day without any touch-ups. Every bride should try their services!",
    platform: "Google",
  },
  {
    name: "Kavita Pandey",
    location: "Ashok Nagar, Ranchi",
    rating: 4,
    date: "September 2025",
    service: "Wedding Lehenga",
    text: "Visited for wedding shopping and found a beautiful lehenga for my daughter's reception. The shop has an excellent collection of bridal and party wear. Staff is knowledgeable and helped us select the best outfit within our budget. The stitching was done on time and with great care.",
    platform: "Google",
  },
  {
    name: "Nisha Devi",
    location: "Ratu Road, Ranchi",
    rating: 5,
    date: "August 2025",
    service: "Designer Sarees",
    text: "I have been a regular customer at Aesthetics Boutique for over 5 years now. Their saree collection is always updated with the latest trends and the prices are the best in Ranchi. Every festival season, this is my first stop. The quality never disappoints and the staff always makes you feel welcome.",
    platform: "Justdial",
  },
  {
    name: "Rani Sinha",
    location: "Morabadi, Ranchi",
    rating: 5,
    date: "July 2025",
    service: "Alteration Services",
    text: "Got some alterations done on an old saree blouse and the result was like a brand new outfit. The tailors here are very experienced and do precise work. Delivery was on time and the price was very reasonable. I will definitely recommend Aesthetics Boutique to all my friends and family!",
    platform: "Google",
  },
];

const StarRating = ({ rating, size = 14 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        className={i <= rating ? "text-brandGold fill-brandGold" : "text-stone-200 fill-stone-200"}
      />
    ))}
  </div>
);

const Reviews = () => {
  useEffect(() => {
    document.title = "Customer Reviews | Aesthetics Boutique - Ranchi's Most Trusted Boutique";
  }, []);

  return (
    <main className="pt-20 bg-brandIvory">
      {/* Header */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brandGold font-outfit font-semibold mb-3">ग्राहकों की राय</p>
          <h1 className="font-cormorant text-5xl sm:text-6xl text-stone-900 font-light leading-tight mb-3">
            Customer Reviews
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-outfit text-stone-500 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            Don't just take our word for it — here's what our customers say about Aesthetics Boutique.
          </p>

          {/* Rating Summary */}
          <div data-testid="rating-summary" className="flex flex-wrap justify-center gap-6">
            <div className="bg-brandIvory rounded-2xl px-8 py-5 border border-stone-100 text-center min-w-40">
              <p className="font-cormorant text-5xl text-brandMaroon font-semibold mb-1">4.6</p>
              <StarRating rating={5} size={16} />
              <p className="font-outfit text-xs text-stone-500 mt-2">Google Reviews</p>
            </div>
            <div className="bg-brandIvory rounded-2xl px-8 py-5 border border-stone-100 text-center min-w-40">
              <p className="font-cormorant text-5xl text-brandMaroon font-semibold mb-1">4.5</p>
              <StarRating rating={5} size={16} />
              <p className="font-outfit text-xs text-stone-500 mt-2">Justdial Rating</p>
            </div>
            <div className="bg-brandIvory rounded-2xl px-8 py-5 border border-stone-100 text-center min-w-40">
              <p className="font-cormorant text-5xl text-brandMaroon font-semibold mb-1">284+</p>
              <p className="font-outfit text-xs text-stone-500 mt-2">Total Reviews</p>
              <p className="font-outfit text-xs text-brandGold font-medium">Verified Ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section data-testid="reviews-grid" className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                data-testid={`review-card-${idx}`}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm service-card"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-brandMaroon/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-cormorant text-xl text-brandMaroon font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-outfit font-semibold text-stone-900">{review.name}</p>
                      <p className="font-outfit text-xs text-stone-400">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-stone-100 text-stone-500 px-3 py-1 rounded-full font-outfit">
                      {review.platform}
                    </span>
                    <p className="font-outfit text-xs text-stone-400 mt-1">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Text */}
                <p className="font-outfit text-stone-600 text-sm leading-relaxed my-4 italic">
                  "{review.text}"
                </p>

                {/* Service */}
                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <span className="text-xs bg-brandMaroon/10 text-brandMaroon px-3 py-1 rounded-full font-outfit font-medium">
                    {review.service}
                  </span>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={10} className="text-brandGold fill-brandGold" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 bg-brandMaroon text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-white mb-3">
            Share Your Experience
          </h2>
          <p className="font-outfit text-white/70 text-sm mb-8 leading-relaxed">
            Have you visited Aesthetics Boutique? We'd love to hear from you! Your review helps other women in Ranchi discover us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/oij3NA8bx6YLH73k8"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="write-review-btn"
              className="flex items-center gap-2 bg-white text-brandMaroon font-outfit font-semibold px-7 py-3 rounded-full hover:bg-brandGold hover:text-white transition-all"
            >
              <Star size={16} /> Write a Google Review
            </a>
            <a
              href="tel:+919835139191"
              data-testid="reviews-call-btn"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brandMaroon font-outfit font-medium px-7 py-3 rounded-full transition-all"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
