import { company } from "@/data/company";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-400">
            Get in touch with us to discuss your construction requirements.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
            <a
              href={`tel:${company.phone}`}
              className="text-orange-400 hover:underline"
            >
              {company.phone}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-2">WhatsApp</h3>
            <a
              href={`https://wa.me/${company.whatsapp.replace("+", "")}`}
              target="_blank"
              className="text-orange-400 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-2">Address</h3>
            <p className="text-gray-400">{company.address}</p>
          </div>
        </div>
        <div className="mt-16 border border-white/10 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=NewDelhi&output=embed"
            className="w-full h-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// end code
