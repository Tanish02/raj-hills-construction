"use client";

import scrollToSection from "@/components/utils/scrollToSection";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2"
        >
          <Image
            src="/LOGO/logo.svg"
            alt="Raj Hills Construction"
            width={48}
            height={48}
            priority
            className="w-11 h-11 object-contain"
          />

          <div className="flex flex-col justify-center leading-[1.1]">
            <span className="text-white font-semibold text-base">
              Raj Hills
            </span>
            <span className="text-orange-500 text-[11px] tracking-[0.18em]">
              CONSTRUCTION
            </span>
          </div>
        </button>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 relative">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className="relative text-sm font-medium transition-colors duration-300"
            >
              <span
                className={`${
                  active === s.id ? "text-orange-400" : "text-white"
                } hover:text-orange-400`}
              >
                {s.label}
              </span>

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-orange-400 transition-all duration-300 ${
                  active === s.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } bg-black border-t border-white/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`cursor-pointer text-lg transition ${
                active === s.id
                  ? "text-orange-400"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

// end code
