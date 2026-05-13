import { heroPremium as heroImg } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function Hero() {
  const { t, lang } = useI18n();
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={heroImg}
        alt="Paisaje majestuoso de los Andes peruanos"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-background/80" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl pt-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-[1px] w-8 bg-accent" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent-foreground/90 bg-accent/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-accent/30">
            {lang === "es" ? "Perú · Bolivia · Andes" : "Peru · Bolivia · Andes"}
          </span>
          <div className="h-[1px] w-8 bg-accent" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0],
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
          }}
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 tracking-tighter"
        >
          {t.hero.title.split(' ').map((word, i) => (
            <span key={i} className={i === 0 ? "text-white" : "text-white/90 block sm:inline"}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -5, 0],
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
          }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 h-14 text-lg font-semibold shadow-premium transition-all hover:scale-105">
            <Link to="/tours">
              {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
            <MapPin className="w-4 h-4 text-accent" />
            {lang === "es" ? "Cusco, Perú" : "Cusco, Peru"}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase font-bold">
          {lang === "es" ? "Explora" : "Explore"}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
