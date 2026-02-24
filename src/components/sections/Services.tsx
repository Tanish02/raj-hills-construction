import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Our Services
          </h2>
          <p className="text-gray-600">
            We provide comprehensive construction services tailored to
            residential and commercial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              {/* Animated Accent Line */}
              <span className="absolute left-0 top-0 h-0 w-1 bg-orange-500 transition-all duration-500 group-hover:h-full"></span>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// end code
