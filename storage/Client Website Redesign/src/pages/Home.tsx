import { Hero } from "../components/Hero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
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

      {/* Featured Work Preview */}
      <section className="py-32 bg-[#f5f5f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-[#C9A961] mx-auto mb-8"></div>
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Featured Projects</h2>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto">
              Explore our latest work showcasing quality craftsmanship and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative overflow-hidden bg-white cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjI0MDg1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Kitchen Remodel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1a1a1a] group-hover:text-[#ED1C24] transition-colors">
                  Modern Kitchen Remodel
                </h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716221234833-1888747eabec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Custom Home Interior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1a1a1a] group-hover:text-[#ED1C24] transition-colors">
                  Custom Home Interior
                </h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjI0MDc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Bathroom Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1a1a1a] group-hover:text-[#ED1C24] transition-colors">
                  Luxury Bathroom Design
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/work"
              className="inline-block px-8 py-3 border border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

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
