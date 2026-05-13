import heroImg from "@/assets/hero-machu-picchu.jpg";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroImg}
        alt="Machu Picchu al amanecer en los Andes peruanos"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl pt-20">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium tracking-wider uppercase mb-6"
        >
          Perú · Bolivia · Andes
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 text-base">
            <a href="#tours">
              {t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-widest uppercase animate-pulse"
      >
        Scroll
      </motion.div>
    </section>
  );
}
