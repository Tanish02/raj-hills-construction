export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Raj Hills Constructions Private Limited is a professionally managed
            construction and real estate company based in Delhi, India.
            Established in 2015, we have been actively delivering residential
            and commercial projects with a strong focus on quality, reliability,
            and long-term value.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            With nearly a decade of industry experience, we specialize in
            residential developments, commercial spaces, and real estate
            projects developed on owned or leased properties. Every project
            reflects our commitment to solid engineering, thoughtful design, and
            timely execution.
          </p>
        </div>

        {/* Right Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-3xl font-semibold text-orange-500">10+</h3>
            <p className="mt-2 text-gray-400 text-sm">Years of Experience</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-3xl font-semibold text-orange-500">Active</h3>
            <p className="mt-2 text-gray-400 text-sm">Registered Company</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-3xl font-semibold text-orange-500">Delhi</h3>
            <p className="mt-2 text-gray-400 text-sm">Based Operations</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-3xl font-semibold text-orange-500">Quality</h3>
            <p className="mt-2 text-gray-400 text-sm">Driven Execution</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// end code
