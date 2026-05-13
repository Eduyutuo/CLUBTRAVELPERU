import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import uyuni from "@/assets/tour-uyuni.jpg";
import titicaca from "@/assets/tour-titicaca.jpg";
import tambopata from "@/assets/tour-tambopata.jpg";
import inca from "@/assets/tour-inca-trail.jpg";

const tours = [
  {
    img: uyuni,
    es: "Ruta de Altura: Machu Picchu y el Salar de Uyuni",
    en: "High-Altitude Route: Machu Picchu & Salar de Uyuni",
    days: 8,
  },
  {
    img: titicaca,
    es: "Historia y Paisajes: Arequipa, Titicaca y Machu Picchu",
    en: "History & Landscapes: Arequipa, Titicaca & Machu Picchu",
    days: 9,
  },
  {
    img: tambopata,
    es: "Aventura Andina y Amazónica: Cusco y Tambopata",
    en: "Andean & Amazon Adventure: Cusco & Tambopata",
    days: 8,
  },
  {
    img: inca,
    es: "El Legendario Camino Inca a Machu Picchu",
    en: "The Legendary Inca Trail to Machu Picchu",
    days: 4,
  },
];

export function Tours() {
  const { t, lang } = useI18n();
  return (
    <section id="tours" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t.tours.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.tours.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.tours.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <article
              key={tour.es}
              className="group rounded-2xl overflow-hidden bg-card border hover:border-accent/40 transition-all hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.img}
                  alt={lang === "es" ? tour.es : tour.en}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-foreground">
                  <Clock className="w-3 h-3" />
                  {tour.days} {t.tours.duration}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-foreground leading-snug mb-5 flex-1">
                  {lang === "es" ? tour.es : tour.en}
                </h3>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <a href="#contacto">{t.tours.cta}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
