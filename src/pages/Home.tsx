import { Hero } from "../components/Hero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { projects } from "../data/projectData";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Home() {
  // Get 3 random projects on each page load
  const featuredProjects = useMemo(() => {
    return shuffleArray(projects).slice(0, 3);
  }, []);

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
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group relative overflow-hidden bg-white cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1a1a1a] group-hover:text-[#ED1C24] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
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
