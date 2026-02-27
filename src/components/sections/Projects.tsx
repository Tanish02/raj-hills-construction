import Image from "next/image";
import { Project, projects } from "../../data/projects";

export default function Projects() {
  const delhiProjects = projects.filter(
    (project) => project.location === "Delhi, India",
  );

  const rajasthanProjects = projects.filter(
    (project) => project.location === "Rajasthan, India",
  );

  return (
    <section id="projects" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-700">
            A selection of residential and commercial projects delivered with
            quality, precision, and trust.
          </p>
        </div>

        {/* Delhi */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Delhi, India
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {delhiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Rajasthan */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Rajasthan, India
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rajasthanProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Typed Card Component */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-72 transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end p-6">
        <div>
          <h3 className="text-white text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-300 text-sm">{project.location}</p>
        </div>
      </div>
    </div>
  );
}

//end code
