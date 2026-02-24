import scrollToSection from "@/components/utils/scrollToSection";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <Image
            src="/logo-text.svg"
            alt="Raj Hills Constructions"
            width={160}
            height={40}
            className="opacity-80"
          />

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Raj Hills Constructions is a professionally managed construction and
            real estate company delivering quality residential and commercial
            projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <p className="text-sm text-gray-400">Delhi, India</p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: <span className="text-orange-500">+91 95609 61031</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2025 Raj Hills Constructions. All rights reserved.
      </div>
    </footer>
  );
}

// end code
{
  /* temp logo SVG for now   */
}
