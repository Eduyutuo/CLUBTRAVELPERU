import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

const dict = {
  es: {
    nav: { home: "Inicio", tours: "Tours", about: "Nosotros", contact: "Contacto", cta: "Reserva tu viaje" },
    hero: {
      title: "Descubre la magia del Perú y los Andes",
      subtitle: "Experiencias de viaje inolvidables, diseñadas a tu medida por expertos locales.",
      cta: "Explorar Tours",
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "15+ años creando rutas seguras y memorables",
      body: "En Inversiones Elsa María diseñamos viajes auténticos por Perú y los Andes. Cada itinerario combina cultura, naturaleza y aventura, con la calidez de un equipo local que conoce cada rincón.",
      benefits: [
        { title: "Asistencia 24/7", desc: "Acompañamiento durante todo el viaje, en cualquier momento." },
        { title: "Guías Oficiales Certificados", desc: "Profesionales acreditados con dominio de varios idiomas." },
        { title: "Atención Personalizada", desc: "Itinerarios a la medida de tus intereses y ritmo." },
      ],
    },
    tours: {
      eyebrow: "Tours estrella",
      title: "Nuestros Tours Estrella",
      subtitle: "Rutas favoritas de nuestros viajeros, listas para inspirar tu próxima aventura.",
      duration: "Días",
      cta: "Ver Itinerario completo",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuéntanos sobre tu próximo viaje",
      subtitle: "Te enviamos una propuesta personalizada en menos de 24 horas.",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      destination: "Destino de interés",
      destinations: ["Machu Picchu", "Salar de Uyuni", "Lago Titicaca", "Amazonía", "Camino Inca", "Otro"],
      submit: "Solicitar Cotización Gratuita",
      success: "¡Recibimos tu solicitud! Te contactaremos pronto.",
    },
    footer: {
      tagline: "Operador turístico oficial. RUC 20XXXXXXXX.",
      links: "Enlaces",
      contact: "Contacto",
      follow: "Síguenos",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: { home: "Home", tours: "Tours", about: "About", contact: "Contact", cta: "Book your trip" },
    hero: {
      title: "Discover the magic of Peru and the Andes",
      subtitle: "Unforgettable travel experiences, tailor-made by local experts.",
      cta: "Explore Tours",
    },
    about: {
      eyebrow: "About us",
      title: "15+ years crafting safe, memorable journeys",
      body: "At Inversiones Elsa María we design authentic trips across Peru and the Andes. Every itinerary blends culture, nature and adventure with the warmth of a local team that knows every corner.",
      benefits: [
        { title: "24/7 Assistance", desc: "Support throughout your trip, anytime you need us." },
        { title: "Certified Official Guides", desc: "Accredited professionals fluent in multiple languages." },
        { title: "Personalized Attention", desc: "Itineraries shaped around your interests and pace." },
      ],
    },
    tours: {
      eyebrow: "Featured tours",
      title: "Our Signature Tours",
      subtitle: "Traveler favorites, ready to inspire your next adventure.",
      duration: "Days",
      cta: "View full itinerary",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your next trip",
      subtitle: "We'll send you a personalized proposal within 24 hours.",
      name: "Full name",
      email: "Email address",
      phone: "Phone / WhatsApp",
      destination: "Destination of interest",
      destinations: ["Machu Picchu", "Salar de Uyuni", "Lake Titicaca", "Amazon", "Inca Trail", "Other"],
      submit: "Request Free Quote",
      success: "We got your request! We'll be in touch soon.",
    },
    footer: {
      tagline: "Official tour operator. RUC 20XXXXXXXX.",
      links: "Links",
      contact: "Contact",
      follow: "Follow us",
      rights: "All rights reserved.",
    },
  },
} as const;

type Dict = typeof dict.es;

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
