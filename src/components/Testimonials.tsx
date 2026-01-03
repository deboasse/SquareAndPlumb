import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Lisa L",
        text: "Five Stars Doubled with the work of Chris and his amazing team at Square & Plumb Builders Inc. He took our small house on the neck in Ipswich to a beautiful expansion in 5 months. Brand new top to bottom (except the existing foundation and garage underneath) to something we only dreamed of, except even better. His attention and suggestions and ability to make everything work for us has been amazing. His respectful, professional and hard working crew outdid themselves. I would look no further for any job you need done. Honest, sincere and a true gentleman.",
        rating: 5,
    },
    {
        id: 2,
        name: "Kristen W",
        text: "Square and Plumb builders were a delight to work with. Chris, Rita and all his crew were efficient, respectful of construction in the house while living here, clean and fast. They did a beautiful job on our new bathroom we could not be happier with the final product. I would highly reccomend them to anyone with a project.",
        rating: 5,
    },
    {
        id: 3,
        name: "Eric P",
        text: "This company is amazing. Chris and his team at Square & Plumb Builders blew us away. They completed the construction of our pavilion and pool shed on time and on budget and the finished product was beyond our expectations. Chris is a master builder and his word is like gold. He delivers on every promise and makes the experience a real pleasure. I would not hesitate to recommend Chris and Square & Plumb Builders to anyone interested in avoiding nightmares and enjoying the experience, start to finish.",
        rating: 5,
    },
    {
        id: 4,
        name: "Benjamin B",
        text: "Working with Square And Plumb was an absolute pleasure. They took the time to understand exactly what I wanted and communicated with me every step of the way. The attention to detail in their work is evident, and I'm thrilled with how everything turned out. It's clear they take pride in their craft, and it shows in the final result. I couldn't have asked for a better experience, and I wholeheartedly recommend Square And Plumb to anyone looking for quality carpentry work.",
        rating: 5,
    },
    {
        id: 5,
        name: "Jennifer P",
        text: "5 Star Experience! I've never worked with a construction team as professional, organized, considerate and committed to excellence as the owners and crew from Square and Plumb Builders. Their communication was excellent. They brought design and construction solutions to the project. Their scheduling was quick and they adhered to it completely. Updates were communicated, progress photos were sent, and pricing was fair and reasonable. We feel like we won the lottery by having them manage our project!",
        rating: 5,
    },
    {
        id: 6,
        name: "Michael V",
        text: "Rita and Chris, the owners of Square and Plumb, are great communicators and true professionals. They addressed and resolved our structural issue promptly and to our complete satisfaction. We highly recommend them so don't hesitate to contact them for your next project.",
        rating: 5,
    },
    {
        id: 7,
        name: "Lucas B",
        text: "I cannot recommend Square&Plumb builders highly enough. Their dedication to excellence, unwavering professionalism, and exceptional craftsmanship make them the go-to choice for any kitchen, bathroom or anything home related renovation project. If you're seeking a contractor who will transform your vision into reality with precision and care, look no further than Square & plumb builders. Keep up the great work.",
        rating: 5,
    },
];

export function Testimonials() {
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollSpeed = 0.5; // pixels per frame

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Reset scroll when reaching the end
                if (
                    scrollContainer.scrollLeft >=
                    scrollContainer.scrollWidth - scrollContainer.clientWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isPaused]);

    return (
        <section className="py-32 bg-[#f5f5f5] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="w-16 h-0.5 bg-[#C9A961] mx-auto mb-8"></div>
                    <h2 className="text-4xl text-[#1a1a1a] mb-4">What Our Clients Say</h2>
                    <p className="text-[#5a5a5a] max-w-2xl mx-auto">
                        Don't just take our word for it — hear from the homeowners who've
                        trusted us with their projects
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{ scrollBehavior: "auto" }}
                >
                    {/* Duplicate testimonials for seamless loop */}
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            style={{
                                flexShrink: 0,
                                width: "500px",
                                minWidth: "500px",
                                backgroundColor: "#ffffff",
                                padding: "32px",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                position: "relative"
                            }}
                        >
                            {/* Quote Icon */}
                            <div style={{ position: "absolute", top: "24px", right: "24px", color: "#ED1C24", opacity: 0.1 }}>
                                <Quote style={{ width: "64px", height: "64px" }} />
                            </div>

                            {/* Star Rating */}
                            <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        style={{ fill: "#C9A961" }}
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p style={{ color: "#5a5a5a", lineHeight: "1.625", marginBottom: "24px", position: "relative", zIndex: 10 }}>
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
                                <p style={{ color: "#1a1a1a", fontWeight: "500" }}>— {testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pause indicator */}
                <div className="text-center mt-8">
                    <p className="text-sm text-[#5a5a5a]">
                        Hover to pause • Auto-scrolling testimonials
                    </p>
                </div>
            </div>
        </section>
    );
}
