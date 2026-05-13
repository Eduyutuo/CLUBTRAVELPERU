import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Tours } from "@/components/site/Tours";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inversiones Elsa María — Tours por Perú y los Andes" },
      {
        name: "description",
        content:
          "Agencia de turismo con 15+ años de experiencia. Tours a Machu Picchu, Salar de Uyuni, Titicaca, Camino Inca y Amazonía. Diseñados a tu medida.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Tours />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" />
      </div>
    </I18nProvider>
  );
}
