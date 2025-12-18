"use client";

import scrollToSection from "@/components/utils/scrollToSection";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false); // close mobile menu
  };

  const linkClass = (id: string) =>
    `cursor-pointer transition ${
      active === id ? "text-orange-400" : "text-white"
    } hover:text-orange-400`;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="text-white font-semibold text-lg"
        >
          Raj Hills
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={linkClass(s.id)}
            >
              {s.label}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {sections.map((s) => (
              <li
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={`${linkClass(s.id)} text-lg`}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// end code
