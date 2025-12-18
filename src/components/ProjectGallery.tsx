import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageModal } from "./ImageModal";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    // Scroll active thumbnail into view
    useEffect(() => {
        if (thumbnailsRef.current) {
            const thumbnails = thumbnailsRef.current.children;
            if (thumbnails[currentIndex]) {
                (thumbnails[currentIndex] as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [currentIndex]);

    if (images.length === 0) {
        return null;
    }

    return (
        <section className="pt-12 pb-6 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Main Image Display */}
                <div className="relative mb-6">
                    {/* Main Image Container */}
                    <div
                        className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer rounded-sm"
                        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                        onClick={handleImageClick}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`${title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Left Navigation Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded shadow-md transition-all duration-200"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Right Navigation Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded shadow-md transition-all duration-200"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 z-10 bg-black/70 text-white px-3 py-1 text-xs font-medium rounded">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>

                {/* Thumbnail Gallery */}
                <div
                    ref={thumbnailsRef}
                    className="flex gap-2 justify-center flex-wrap"
                >
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={`relative w-14 h-14 md:w-16 md:h-16 overflow-hidden transition-all duration-200 ${index === currentIndex
                                ? "ring-2 ring-[#ED1C24] scale-105"
                                : "ring-1 ring-gray-300 opacity-60 hover:opacity-100 hover:ring-[#C9A961]"
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

            {/* Image Modal */}
            <ImageModal
                images={images}
                currentIndex={currentIndex}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onNavigate={setCurrentIndex}
            />
        </section>
    );
}
