export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
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
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Building Trust.
          <br />
          Delivering Excellence.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 text-lg">
          Raj Hills Construction is a trusted name in residential and commercial
          development, delivering quality projects with integrity and precision.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="tel:+919560961031"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919560961031"
            target="_blank"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
