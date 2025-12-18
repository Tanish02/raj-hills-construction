import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400">
            We provide comprehensive construction services tailored to
            residential and commercial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-xl font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
