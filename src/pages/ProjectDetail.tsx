import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "../data/projectData";

export function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = slug ? getProjectBySlug(slug) : undefined;

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
                        backgroundImage: `url('${project.thumbnail}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 text-white hover:text-[#C9A961] transition-colors mb-6"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Our Work
                        </Link>
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
                    {project.images.length > 0 && (
                        <div className="relative">
                            {/* Gallery Container with Navigation */}
                            <div className="flex items-center gap-4">
                                {/* Left Navigation Arrow */}
                                <button
                                    onClick={prevImage}
                                    className="flex-shrink-0 w-14 h-14 bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-200 shadow-md border border-gray-200"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>

                                {/* Main Image Display */}
                                <div className="relative flex-1 aspect-[4/3] bg-gray-100 overflow-hidden">
                                    <img
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Image Counter Badge */}
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 text-base font-medium rounded-sm">
                                        {currentImageIndex + 1} / {project.images.length}
                                    </div>
                                </div>

                                {/* Right Navigation Arrow */}
                                <button
                                    onClick={nextImage}
                                    className="flex-shrink-0 w-14 h-14 bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-200 shadow-md border border-gray-200"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="flex gap-4 justify-center mt-8 flex-wrap">
                                {project.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`relative overflow-hidden transition-all duration-200 ${currentImageIndex === index
                                                ? "ring-4 ring-[#ED1C24] ring-offset-1"
                                                : "ring-1 ring-gray-200 hover:ring-2 hover:ring-[#C9A961]"
                                            }`}
                                        style={{
                                            width: '100px',
                                            height: '75px',
                                            opacity: currentImageIndex === index ? 1 : 0.8,
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-full h-full object-cover transition-transform duration-200 ${currentImageIndex !== index ? 'hover:scale-105' : ''
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}


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
