import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* White Card Container */}
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

          {/* Contact Grid */}
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
                href="tel:+919079976593"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                +91 9079976593
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
                href="https://wa.me/919079976593"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Send us your inquery for details
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rajhillsconstructions@gmail.com&su=Project Inquiry&body=Hello Raj Hills Construction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                rajhillsconstructions@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">Instagram</h3>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Follow our latest project updates
              </p>

              <a
                href="https://instagram.com/rajhillsconstructions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                Visit Instagram
              </a>
            </div>

            {/* Facebook */}
            <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Facebook className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-medium text-gray-900">Facebook</h3>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Connect with us on Facebook
              </p>

              <a
                href="https://facebook.com/profile.php?id=61581000238130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-500 font-bold hover:underline"
              >
                Visit Facebook
              </a>
            </div>

            {/* Location */}
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
