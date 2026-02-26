"use client";
import scrollToSection from "@/components/utils/scrollToSection";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/LOGO/logo.svg"
              alt="Raj Hills Construction"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />

            <div className="flex flex-col leading-[1.1]">
              <span className="text-white font-semibold text-sm">
                Raj Hills
              </span>
              <span className="text-orange-500 text-[10px] tracking-[0.18em]">
                CONSTRUCTION
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
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
            Phone:{" "}
            <a
              href="tel:+919079976593"
              className="text-orange-500 hover:underline"
            >
              +91 9079976593
            </a>
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Email:{" "}
            <a
              href="mailto:rajhillsconstructions@gmail.com"
              className="text-orange-500 hover:underline"
            >
              rajhillsconstructions@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2025 Raj Hills Construction. All rights reserved.
      </div>
    </footer>
  );
}

// end code
// svg code for logo
