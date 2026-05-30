import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Modalities } from "@/components/site/Modalities";
import { WhyChoose } from "@/components/site/WhyChoose";
import { About } from "@/components/site/About";
import { Results } from "@/components/site/Results";
import { Pricing } from "@/components/site/Pricing";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academic Scarlet — Academia em Belo Horizonte | Treine Forte" },
      {
        name: "description",
        content:
          "Academia em Belo Horizonte com musculação, CrossFit, funcional, spinning e MMA. Estrutura completa, professores qualificados e resultados reais. Agende sua aula gratuita.",
      },
      { property: "og:title", content: "Academic Scarlet — Academia em Belo Horizonte" },
      {
        property: "og:description",
        content: "Treine forte. Evolua todos os dias. Aula gratuita disponível.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Modalities />
        <WhyChoose />
        <About />
        <Results />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
