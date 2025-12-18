import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

// Mock data for project details
const projectDetails: Record<number, {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}> = {
  1: {
    id: 1,
    title: "Modern Kitchen Remodel",
    subtitle: "Complete transformation with custom cabinetry and high-end appliances",
    location: "Gloucester, MA",
    year: "2024",
    description: "A stunning kitchen renovation featuring custom white oak cabinetry, quartz countertops, and professional-grade appliances. The design emphasizes clean lines and functional elegance with ample natural light.",
    images: [
      "https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjI0MDg1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1080&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1080&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1080&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080&q=80",
    ],
  },
  2: {
    id: 2,
    title: "Custom Home Interior",
    subtitle: "Bespoke interior design with premium finishes throughout",
    location: "Rockport, MA",
    year: "2023",
    description: "A complete custom home interior featuring handcrafted millwork, designer lighting, and carefully curated materials that blend modern aesthetics with timeless elegance.",
    images: [
      "https://images.unsplash.com/photo-1716221234833-1888747eabec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600210492486-724fc6e83ce1?w=1080&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1080&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1080&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1080&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1080&q=80",
    ],
  },
  3: {
    id: 3,
    title: "Luxury Bathroom Design",
    subtitle: "Spa-inspired retreat with premium fixtures and natural stone",
    location: "Manchester, MA",
    year: "2024",
    description: "A luxurious bathroom renovation featuring marble tile, a freestanding soaking tub, frameless glass shower, and custom dual vanity with elegant lighting.",
    images: [
      "https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjI0MDc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1080&q=80",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470d6?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753104-e016b86c2aa7?w=1080&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1080&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1080&q=80",
    ],
  },
  4: {
    id: 4,
    title: "Contemporary Living Room",
    subtitle: "Open concept design with floor-to-ceiling windows",
    location: "Essex, MA",
    year: "2023",
    description: "A contemporary living space that maximizes natural light and views while incorporating high-performance building techniques and sustainable materials.",
    images: [
      "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MjQwOTI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1080&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1080&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1080&q=80",
    ],
  },
  5: {
    id: 5,
    title: "Architectural Details",
    subtitle: "Custom millwork and fine craftsmanship",
    location: "Gloucester, MA",
    year: "2024",
    description: "Showcasing our commitment to exceptional craftsmanship through custom millwork, built-ins, and architectural details that define the character of the space.",
    images: [
      "https://images.unsplash.com/photo-1760237655540-8197ef24838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwd29vZHxlbnwxfHx8fDE3NjI0MDkyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=1080&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1080&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1080&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1080&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1080&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c2f9d7c8a?w=1080&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080&q=80",
    ],
  },
  6: {
    id: 6,
    title: "Modern Home Exterior",
    subtitle: "Contemporary design with energy-efficient construction",
    location: "Rockport, MA",
    year: "2023",
    description: "A modern home exterior featuring clean lines, sustainable materials, and high-performance building envelope for superior energy efficiency.",
    images: [
      "https://images.unsplash.com/photo-1750114784669-9f1c70d90e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZXh0ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNDA5Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1080&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1080&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1080&q=80",
    ],
  },
  7: {
    id: 7,
    title: "Complete Renovation",
    subtitle: "Whole-house transformation from foundation to finish",
    location: "Gloucester, MA",
    year: "2024",
    description: "A comprehensive home renovation including structural improvements, updated systems, and complete interior and exterior refinishing with modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1759150712360-6d48015e4f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjI0MDkyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1080&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fc6e83ce1?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1080&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1080&q=80",
    ],
  },
  8: {
    id: 8,
    title: "Luxury Interior",
    subtitle: "High-end finishes and designer details throughout",
    location: "Manchester, MA",
    year: "2023",
    description: "A luxurious interior featuring custom finishes, designer lighting, premium materials, and meticulous attention to every detail for an elevated living experience.",
    images: [
      "https://images.unsplash.com/photo-1729837149098-1e173e7b96fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25zdHJ1Y3Rpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI0MDkyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1080&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1080&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c2f9d7c8a?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470d6?w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753104-e016b86c2aa7?w=1080&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1080&q=80",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1080&q=80",
    ],
  },
};

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectId = parseInt(id || "0");
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/work")}
            className="text-[#ED1C24] hover:underline"
          >
            Return to Our Work
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.images[0]}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <button
              onClick={() => navigate("/work")}
              className="inline-flex items-center gap-2 text-white hover:text-[#C9A961] transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Our Work
            </button>
            <h1 className="text-5xl mb-4">{project.title}</h1>
            <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">{project.subtitle}</h2>
            <div className="flex items-center justify-center gap-8 text-gray-600 mb-6">
              <div>
                <span className="text-[#C9A961]">Location:</span> {project.location}
              </div>
              <div>
                <span className="text-[#C9A961]">Year:</span> {project.year}
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Image Gallery Carousel */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shadow-2xl mb-8">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ED1C24] hover:text-white text-gray-800 p-4 transition-all duration-300 shadow-lg group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ED1C24] hover:text-white text-gray-800 p-4 transition-all duration-300 shadow-lg group"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 justify-center flex-wrap">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-4 ring-[#ED1C24] scale-105"
                      : "ring-2 ring-gray-300 hover:ring-[#C9A961] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl mb-4">Interested in a similar project?</h3>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life with the same level of craftsmanship and attention to detail.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#ED1C24] text-white px-8 py-4 hover:bg-[#d11920] transition-colors"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
