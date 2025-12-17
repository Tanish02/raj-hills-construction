export default function Hero() {
  return (
    <section id="Home" className="relative min-h-screen flex items-center">
      {/* BACKGROUND IMAGE*/}
      <div
        className="absolute insert-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/*Content*/}
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
        {/* CTA Button */}
      </div>

      <h2 className="text-3xl font-semibold mb-4">Hero</h2>
      <p className="text-gray-600">
        Raj Hills Construction is a trusted name in residential and commercial
        development.
      </p>
    </section>
  );
}
