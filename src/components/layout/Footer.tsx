import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Company */}
        <div>
          <Image
            src="/logo-text.svg"
            alt="Raj Hills Constructions"
            width={140}
            height={30}
            priority
            className="opacity-80"
          />
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Raj Hills Constructions is a professionally managed construction and
            real estate company delivering quality residential and commercial
            projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <p className="text-sm text-gray-400">Delhi, India</p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: <span className="text-white">+91 95609 61031</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Raj Hills Constructions. All rights
        reserved.
      </div>
    </footer>
  );
}

// end code
