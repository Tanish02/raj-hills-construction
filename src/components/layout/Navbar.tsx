"use client";

import scrollToSection from "../utils/scrollToSection";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between h-16 items-center">
        <span className="font-bold text-lg">Raj Hills</span>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-orange-500"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
