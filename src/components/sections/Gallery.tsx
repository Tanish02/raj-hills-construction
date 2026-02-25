"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % images.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-28 bg-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Recent Work</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          A selection of completed residential and commercial projects,
          reflecting our commitment to structural precision and architectural
          excellence.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 w-max">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              onClick={() => open(index % images.length)}
              className="relative w-[350px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={src}
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition text-sm">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <X size={20} />
            </button>

            <Image
              src={images[activeIndex]}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-orange-500 transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-orange-500 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// end code
//card view to slide showcase
