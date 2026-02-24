"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
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

  // ESC key support
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
    <section id="gallery" className="scroll-mt-24 py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Gallery
        </h2>

        <p className="text-gray-700 mb-16 max-w-2xl">
          A glimpse of our completed and ongoing construction projects.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => open(index)}
              className="relative cursor-pointer group overflow-hidden rounded-x shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              <Image
                src={src}
                alt="Project"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-72 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <Image
              src={images[activeIndex]}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-orange-500 transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
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

//end code
