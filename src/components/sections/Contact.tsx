import { Phone, MessageCircle, MapPin } from "lucide-react";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Phone */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500 transition">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-medium">Phone</h3>
            </div>

            <p className="mt-3 text-gray-400 text-sm">
              Call us directly for project inquiries
            </p>

            <a
              href="tel:+919560961031"
              className="inline-block mt-4 text-orange-500 font-medium hover:underline"
            >
              +91 95609 61031
            </a>
          </div>

          {/* WhatsApp */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500 transition">
            <div className="flex items-center gap-3 text-white">
              <MessageCircle className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-medium">WhatsApp</h3>
            </div>

            <p className="mt-3 text-gray-400 text-sm">
              Quick responses on WhatsApp
            </p>

            <a
              href="https://wa.me/919560961031"
              target="_blank"
              className="inline-block mt-4 text-orange-500 font-medium hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500 transition">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-medium">Address</h3>
            </div>

            <p className="mt-3 text-gray-400 text-sm">
              Delhi, India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// end code
