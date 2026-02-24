import { projects } from "@/data/projects";

import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600">
            A selection of residential and commercial projects delivered with
            quality, precision, and trust.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image section*/}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
