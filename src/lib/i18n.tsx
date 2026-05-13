import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

const dict = {
  es: {
    nav: { home: "Inicio", tours: "Tours", about: "Nosotros", contact: "Contacto", cta: "Reserva tu viaje" },
    hero: {
      title: "Descubre la magia del Perú con Club Travel Peru",
      subtitle: "Experiencias de viaje premium inspiradas en la excelencia Disney, diseñadas por expertos locales.",
      cta: "Explorar Tours",
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "15+ años creando rutas seguras y memorables",
      body: "En Club Travel Peru fusionamos la calidez de nuestra tierra con los estándares de servicio de clase mundial aprendidos en Disney. Nuestro propósito es transformar cada viaje en una experiencia mágica y sin preocupaciones.",
      benefits: [
        { title: "Asistencia 24/7", desc: "Acompañamiento constante durante toda tu estadía." },
        { title: "Calidad Disney", desc: "Atención al detalle y hospitalidad de nivel internacional." },
        { title: "Guías Expertos", desc: "Profesionales certificados apasionados por compartir nuestra cultura." },
      ],
    },
    tours: {
      eyebrow: "Tours estrella",
      title: "Nuestros Tours Estrella",
      subtitle: "Rutas seleccionadas cuidadosamente para ofrecerte momentos inolvidables.",
      duration: "Días",
      cta: "Ver Itinerario completo",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Lo que dicen nuestros viajeros",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuéntanos sobre tu próximo viaje",
      subtitle: "Estamos listos para diseñar tu experiencia soñada. Contáctanos por WhatsApp o correo.",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      destination: "Destino de interés",
      destinations: ["Machu Picchu", "Valle Sagrado", "Lago Titicaca", "Amazonía", "Camino Inca", "Otro"],
      submit: "Solicitar Cotización Gratuita",
      success: "¡Gracias! Tu solicitud ha sido recibida, te contactaremos pronto.",
    },
    footer: {
      tagline: "Club Travel Peru. RUC 20610729968.",
      links: "Enlaces",
      contact: "Contacto",
      follow: "Síguenos",
      rights: "© 2024 Club Travel Peru. Todos los derechos reservados.",
    },
  },
  en: {
    nav: { home: "Home", tours: "Tours", about: "About", contact: "Contact", cta: "Book your trip" },
    hero: {
      title: "Discover the magic of Peru with Club Travel Peru",
      subtitle: "Premium travel experiences inspired by Disney excellence, crafted by local experts.",
      cta: "Explore Tours",
    },
    about: {
      eyebrow: "About us",
      title: "15+ years crafting safe, memorable journeys",
      body: "At Club Travel Peru, we blend our local warmth with world-class service standards inspired by the Disney experience. Our goal is to transform every trip into a magical, worry-free adventure.",
      benefits: [
        { title: "24/7 Assistance", desc: "Constant support throughout your entire stay." },
        { title: "Disney Quality", desc: "Attention to detail and world-class hospitality." },
        { title: "Expert Guides", desc: "Certified professionals passionate about sharing our culture." },
      ],
    },
    tours: {
      eyebrow: "Featured tours",
      title: "Our Signature Tours",
      subtitle: "Carefully curated routes to offer you unforgettable moments.",
      duration: "Days",
      cta: "View full itinerary",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What our travelers say",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your next trip",
      subtitle: "We're ready to design your dream experience. Contact us via WhatsApp or email.",
      name: "Full name",
      email: "Email address",
      phone: "Phone / WhatsApp",
      destination: "Destination of interest",
      destinations: ["Machu Picchu", "Sacred Valley", "Lake Titicaca", "Amazon", "Inca Trail", "Other"],
      submit: "Request Free Quote",
      success: "Thank you! We've received your request and will be in touch soon.",
    },
    footer: {
      tagline: "Club Travel Peru. RUC 20610729968.",
      links: "Links",
      contact: "Contact",
      follow: "Follow us",
      rights: "© 2024 Club Travel Peru. All rights reserved.",
    },
  },
} as const;

type Dict = (typeof dict)[Lang];

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "es",
  setLang: () => {},
  t: dict.es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return <I18nCtx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
