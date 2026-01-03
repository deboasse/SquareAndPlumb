import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router-dom";

export function Home() {

  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-0.5 bg-[#C9A961] mx-auto mb-8"></div>
          <h2 className="text-4xl mb-6 text-[#1a1a1a]">
            Building Excellence, One Project at a Time
          </h2>
          <p className="text-[#5a5a5a] leading-relaxed mb-8">
            Square & Plumb is a full-service construction and renovation company
            dedicated to delivering exceptional craftsmanship and attention to
            detail. Our experienced team brings your vision to life with
            precision, quality, and integrity.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 border border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto mb-8"></div>
          <h2 className="text-4xl mb-6 text-[#1a1a1a]">Ready to Get Started?</h2>
          <p className="text-[#5a5a5a] leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can bring your vision to life with quality craftsmanship.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#ED1C24] text-white hover:bg-[#d01920] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
