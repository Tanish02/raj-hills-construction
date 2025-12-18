import { gallery } from "@/data/gallery";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Gallery
          </h2>
          <p className="mt-4 text-gray-400">
            A glimpse of our completed and ongoing construction projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-white/10"
            >
              {/* Image */}
              <div className="relative h-72">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// end code
