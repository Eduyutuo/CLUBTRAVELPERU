import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { toursData } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/tours/")({
  component: ToursListingPage,
});

function ToursListingPage() {
  const { t, lang } = useI18n();

  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-6 block">Catálogo Exclusivo</span>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8 leading-none">
            {lang === "es" ? "Nuestras Expediciones" : "Our Expeditions"}
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            {lang === "es" 
              ? "Diseñadas con pasión para conectar profundamente con la esencia del Perú."
              : "Passionately designed to connect deeply with the essence of Peru."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {toursData.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden border border-border/50 shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={tour.img} 
                  alt={lang === "es" ? tour.title.es : tour.title.en} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                    {tour.code}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-black tracking-widest uppercase">Premium</span>
                  </div>
                  <span className="text-xl font-black text-foreground">USD {tour.prices[0]?.price}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight group-hover:text-accent transition-colors">
                  {lang === "es" ? tour.title.es : tour.title.en}
                </h3>

                <div className="flex items-center gap-6 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground uppercase">{lang === "es" ? "Todo el día" : "Full Day"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground uppercase">Grupo VIP</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="rounded-2xl border-primary/20 text-primary hover:bg-primary/5 hover:border-primary transition-all font-black uppercase text-xs tracking-widest h-12"
                    asChild
                  >
                    <Link to={`/tours/${tour.id}`}>Detalles</Link>
                  </Button>
                  <Button
                    className="rounded-2xl bg-accent hover:bg-accent/90 text-white shadow-sm font-black uppercase text-xs tracking-widest h-12"
                    asChild
                  >
                    <a href={`https://wa.me/51929435139?text=Hola, quiero reservar el tour: ${lang === "es" ? tour.title.es : tour.title.en}`} target="_blank" rel="noreferrer">
                      Reserva
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
