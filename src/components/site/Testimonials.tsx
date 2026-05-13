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
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--gradient-hero, #0a1628)" }}
    >
      {/* decorative */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #d4a853 0%, transparent 60%), radial-gradient(circle at 80% 30%, #7c6a3e 0%, transparent 50%)" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {t.testimonials.title}
          </h2>
          {/* trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 5.0 · Google Reviews
            </span>
            <span>·</span>
            <span>+15 años de trayectoria</span>
            <span>·</span>
            <span>Miles de viajeros satisfechos</span>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              className="relative rounded-2xl p-6 flex flex-col gap-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* quote icon */}
              <Quote className="w-8 h-8 text-accent/30 shrink-0" />

              {/* stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* text */}
              <p className="text-sm text-white/80 leading-relaxed flex-1">"{item.text}"</p>

              {/* author */}
              <div className="border-t border-white/10 pt-4 space-y-0.5">
                <p className="font-semibold text-white text-sm">{item.name}</p>
                <p className="text-xs text-white/50">{item.country}</p>
                <p className="text-xs text-accent/80 font-medium">{item.tour}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
