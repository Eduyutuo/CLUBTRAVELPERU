import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = {
  es: [
    {
      name: "Valentina R.",
      country: "🇨🇴 Colombia",
      text: "¡Una experiencia que superó todas nuestras expectativas! El guía privado fue increíble, conocía cada rincón de Machu Picchu. Volveríamos sin dudarlo.",
      tour: "5 Días – Cusco Esencial",
      rating: 5,
    },
    {
      name: "Camila & Andrés T.",
      country: "🇲🇽 México",
      text: "Desde la primera consulta hasta el aeropuerto de regreso, todo fue perfecto. El servicio personalizado marca una diferencia enorme. ¡Gracias Club Travel Peru!",
      tour: "7 Días – Perú Esencial desde Lima",
      rating: 5,
    },
    {
      name: "Fernanda M.",
      country: "🇦🇷 Argentina",
      text: "El Salkantay Trek fue la aventura de mi vida. Los campamentos privados son de otro nivel, y el equipo estuvo pendiente de nosotros en todo momento.",
      tour: "Salkantay Trek 5 Días",
      rating: 5,
    },
    {
      name: "Daniela P.",
      country: "🇨🇱 Chile",
      text: "Precios justos y calidad premium. La Montaña de Colores y el Valle Sagrado me quitaron el aliento. 100% recomendado para grupos de mujeres viajeras.",
      tour: "6 Días – Cusco Vibrante",
      rating: 5,
    },
  ],
  en: [
    {
      name: "Valentina R.",
      country: "🇨🇴 Colombia",
      text: "An experience that exceeded all our expectations! The private guide was incredible, knew every corner of Machu Picchu. We would go back without hesitation.",
      tour: "5 Days – Essential Cusco",
      rating: 5,
    },
    {
      name: "Camila & Andrés T.",
      country: "🇲🇽 Mexico",
      text: "From the first inquiry to the return airport, everything was perfect. The personalized service makes an enormous difference. Thank you Club Travel Peru!",
      tour: "7 Days – Essential Peru from Lima",
      rating: 5,
    },
    {
      name: "Fernanda M.",
      country: "🇦🇷 Argentina",
      text: "The Salkantay Trek was the adventure of my life. The private camps are on another level, and the guide team was with us every step of the way.",
      tour: "Salkantay Trek 5 Days",
      rating: 5,
    },
    {
      name: "Daniela P.",
      country: "🇨🇱 Chile",
      text: "Fair prices and premium quality. Rainbow Mountain and Sacred Valley took my breath away. 100% recommended for women traveler groups.",
      tour: "6 Days – Vibrant Cusco",
      rating: 5,
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  const { t, lang } = useI18n();
  const items = testimonials[lang];

  return (
    <section
      id="testimonios"
      className="py-24 relative overflow-hidden bg-[#0a1a14]"
    >
      {/* decorative gradients for depth */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 10% 20%, var(--accent) 0%, transparent 40%), radial-gradient(circle at 90% 80%, var(--primary) 0%, transparent 40%)" }}
      />

      <div className="container mx-auto px-12 md:px-24 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-4 block">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
            {t.testimonials.title}
          </h2>
          {/* trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-white/60 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {t.testimonials.trustBadges.reviews}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{t.testimonials.trustBadges.years}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{t.testimonials.trustBadges.satisfied}</span>
          </div>

        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              className="relative rounded-[2.5rem] p-8 flex flex-col gap-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-accent transition-all duration-500 hover:-translate-y-2 group shadow-2xl"
            >
              <Quote className="w-10 h-10 text-accent/40 shrink-0 group-hover:text-accent transition-colors" />

              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-base text-white leading-relaxed flex-1 font-medium italic">"{item.text}"</p>

              <div className="border-t border-white/10 pt-6 space-y-1">
                <p className="font-black text-white text-base tracking-tight">{item.name}</p>
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.country}</p>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest">{item.tour}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}
