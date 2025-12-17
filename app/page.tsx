"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import scrollToSection from "@/components/utils/scrollToSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path) scrollToSection(path);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}

// end code
