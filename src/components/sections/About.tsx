import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
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
            <div className="p-8 bg-gray-100 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">10+</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Years of Industry Experience
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Active</h3>
              <p className="mt-2 text-gray-700 text-sm">Company Status</p>
            </div>

            <div className="p-8 bg-gray-100 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Delhi</h3>
              <p className="mt-2 text-gray-700 text-sm">Registered Location</p>
            </div>

            <div className="p-8 bg-gray-100 rounded-xl border hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-orange-500">Quality</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Focused Construction Approach
              </p>
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-gray-900 text-center">
            Our Leadership
          </h3>

          <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Strong leadership and industry expertise drive our commitment to
            excellence in every project we undertake.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            {/* Director 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-orange-500">
                <Image
                  src="/images/director1.jpg"
                  alt="Mahender Sharma"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Mahender Sharma
              </h4>

              <p className="text-orange-500 text-sm font-medium">Director</p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                With extensive experience in residential and commercial
                construction, he leads strategic planning and project execution
                with a focus on quality, efficiency, and client satisfaction.
              </p>
            </div>

            {/* Director 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-orange-500">
                <Image
                  src="/images/director2.jpg"
                  alt="Rameshwer Saini"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Rameshwer Saini
              </h4>

              <p className="text-orange-500 text-sm font-medium">Director</p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Focused on operational excellence and sustainable development,
                he ensures timely delivery and structural integrity across all
                ongoing and completed projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//end code
