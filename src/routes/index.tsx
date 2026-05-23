import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";

import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sahar Nadeem — Web Developer & Creative Designer" },
      {
        name: "description",
        content:
          "Portfolio of Sahar Nadeem — Web Developer, Creative Designer & Frontend Developer crafting elegant, modern digital experiences.",
      },
      { property: "og:title", content: "Sahar Nadeem — Portfolio" },
      {
        property: "og:description",
        content:
          "Designing modern digital experiences with creativity, elegance, and purpose.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
