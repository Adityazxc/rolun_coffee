import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600",
    },
    {
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600",
    },
    {
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="hero" className="bg-[var(--bg-clear)] py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Background */}
                    <img
                        src={slides[current].image}
                        alt=""
                        className="h-auto w-full md:h-[550px] md:object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Tombol Previous */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Tombol Next */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Indicator */}
                    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-3 w-3 rounded-full transition ${current === index
                                    ? "bg-white"
                                    : "bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}