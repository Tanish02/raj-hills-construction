import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* White Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-14">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-700">
              Get in touch with us to discuss your residential or commercial
              construction requirements.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Call us directly for project inquiries
              </p>

              <a
                href="tel:+919560961031"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                +91 95609 61031
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Quick responses on WhatsApp
              </p>

              <a
                href="https://wa.me/919560961031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Address */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
              </div>

              <p className="mt-3 text-gray-700 text-sm">Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// end code
