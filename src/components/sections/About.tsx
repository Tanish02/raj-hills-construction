export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Raj Hills Constructions Private Limited is a professionally
              managed construction and real estate company incorporated in 2015.
              We specialize in residential and commercial development,
              delivering projects with precision, transparency, and quality.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              With a strong foundation in structural excellence and customer
              satisfaction, we focus on building long-term value through
              innovative design and reliable execution.
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">10+</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Years of Industry Experience
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Active</h3>
              <p className="mt-2 text-gray-700 text-sm">Company Status</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Delhi</h3>
              <p className="mt-2 text-gray-700 text-sm">Registered Location</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Quality</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Focused Construction Approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// end code
