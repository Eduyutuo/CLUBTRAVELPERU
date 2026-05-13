import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import uyuni from "@/assets/tour-uyuni.jpg";
import titicaca from "@/assets/tour-titicaca.jpg";
import salkantay from "@/assets/tour-salkantay.jpg";
import lima from "@/assets/tour-lima.jpg";

const tours = [
  {
    img: uyuni,
    es: "8 Días Ruta de Altura: Machu Picchu y el Salar de Uyuni",
    en: "8 Days High-Altitude Route: Machu Picchu & Salar de Uyuni",
    days: 8,
  },
  {
    img: titicaca,
    es: "9 Días de Historia y Paisajes Únicos: Arequipa, Lago Titicaca y Machu Picchu",
    en: "9 Days of History & Unique Landscapes: Arequipa, Lake Titicaca & Machu Picchu",
    days: 9,
  },
  {
    img: salkantay,
    es: "5 Días Caminata a Machu Picchu vía Nevado Salkantay",
    en: "5 Days Trek to Machu Picchu via Salkantay Mountain",
    days: 5,
  },
  {
    img: lima,
    es: "8 Días Lima, Perú: La Experiencia",
    en: "8 Days Lima, Peru: The Experience",
    days: 8,
  },
];

export function Tours() {
  const { t, lang } = useI18n();

  const handleViewItinerary = (title: string) => {
    alert(`${t.tours.itineraryAlert}\n\n${title}`);
  };

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
          {tours.map((tour) => {
            const title = lang === "es" ? tour.es : tour.en;
            return (
              <article
                key={tour.es}
                className="group rounded-2xl overflow-hidden bg-card border hover:border-accent/40 transition-all hover:-translate-y-1 flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.img}
                    alt={title}
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
                    {title}
                  </h3>
                  <Button
                    onClick={() => handleViewItinerary(title)}
                    variant="outline"
                    className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {t.tours.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
