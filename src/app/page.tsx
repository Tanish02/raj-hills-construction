import fs from "fs";
import path from "path";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  const galleryPath = path.join(process.cwd(), "public/images/gallery");

  const files = fs
    .readdirSync(galleryPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

  const images = files.map((file) => `/images/gallery/${file}`);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Gallery images={images} />
      <Contact />
    </>
  );
}
