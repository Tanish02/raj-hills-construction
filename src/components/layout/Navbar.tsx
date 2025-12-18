"use client";

import scrollToSection from "@/components/utils/scrollToSection";
import { useEffect, useState } from "react";

const sections = ["home", "about", "services", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `cursor-pointer transition ${
      active === id ? "text-orange-400" : "text-white"
    } hover:text-orange-400`;

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-white font-semibold text-lg"
        >
          Raj Hills
        </button>

        {/* Links */}
        <ul className="flex gap-6">
          <li
            onClick={() => scrollToSection("home")}
            className={linkClass("home")}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className={linkClass("about")}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className={linkClass("services")}
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className={linkClass("projects")}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={linkClass("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
