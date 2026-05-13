import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toursData } from "@/lib/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Tours({ limit }: { limit?: number }) {
  const { t, lang } = useI18n();
  const displayedTours = limit ? toursData.slice(0, limit) : toursData;

  return (
    <section id="tours" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-6 block">
              {t.tours.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
              {t.tours.title}
            </h2>
          </motion.div>
          <Button asChild variant="ghost" className="text-accent font-black uppercase tracking-[0.2em] text-xs hover:bg-accent/10 group">
            <Link to="/tours" className="flex items-center gap-2">
              {t.tours.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
        >
          {displayedTours.map((tour) => (
            <motion.article
              variants={item}
              key={tour.id}
              className="group rounded-[2rem] overflow-hidden bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-premium flex flex-col hover:bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.img}
                  alt={lang === "es" ? tour.title.es : tour.title.en}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-5 left-5 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur shadow-sm text-[10px] font-bold text-foreground uppercase tracking-wider">
                    <Clock className="w-3 h-3 text-accent" />
                    {tour.durationDays} {t.tours.duration}
                  </span>
                </div>

                <a 
                  href={`https://wa.me/51929435139?text=Hola, me interesa el tour: ${lang === "es" ? tour.title.es : tour.title.en}`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{tour.code}</span>
                  <span className="text-sm font-semibold text-primary">USD {tour.prices[0]?.price || "---"}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-6 group-hover:text-accent transition-colors flex-1">
                  {lang === "es" ? tour.title.es : tour.title.en}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold"
                    asChild
                  >
                    <Link to={`/tours/${tour.id}`}>{t.tours.cta}</Link>
                  </Button>
                  <Button
                    className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-sm font-semibold"
                    asChild
                  >
                    <a href={`https://wa.me/51929435139?text=Hola, quiero reservar el tour: ${lang === "es" ? tour.title.es : tour.title.en}`} target="_blank" rel="noreferrer">
                      {t.tours.reserve}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
