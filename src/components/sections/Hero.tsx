export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Residential & Commercial Construction
            <br />
            <span className="text-orange-400">
              Built with Precision Since 2015.
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Raj Hills Construction delivers high-quality residential and
            commercial projects with integrity, structural precision, and
            long-term reliability.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="tel:+919079976593"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919079976593"
              target="_blank"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// end code
