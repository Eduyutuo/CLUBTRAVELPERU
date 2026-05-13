import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toursData } from "@/lib/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Tours() {
  const { t, lang } = useI18n();
  return (
    <section id="tours" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t.tours.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.tours.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.tours.subtitle}</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {toursData.map((tour) => (
            <motion.article
              variants={item}
              key={tour.id}
              className="group rounded-2xl overflow-hidden bg-card border hover:border-accent/40 transition-all hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.img}
                  alt={lang === "es" ? tour.title.es : tour.title.en}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-foreground">
                  <Clock className="w-3 h-3" />
                  {tour.durationDays} {t.tours.duration}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-foreground leading-snug mb-5 flex-1">
                  {lang === "es" ? tour.title.es : tour.title.en}
                </h3>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  asChild
                >
                  <Link to={`/tours/${tour.id}`}>{t.tours.cta}</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
