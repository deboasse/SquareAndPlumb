import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function ImageModal({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}: ImageModalProps) {
    if (!isOpen) return null;

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        onNavigate(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        onNavigate(newIndex);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
                aria-label="Close modal"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-10 p-3 text-white/80 hover:text-white transition-all bg-black/30 rounded-full hover:bg-black/50 hover:scale-110"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-10 p-3 text-white/80 hover:text-white transition-all bg-black/30 rounded-full hover:bg-black/50 hover:scale-110"
                aria-label="Next image"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <div className="relative z-10 max-w-[90vw] max-h-[85vh]">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/50 rounded-full text-white/90 text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
