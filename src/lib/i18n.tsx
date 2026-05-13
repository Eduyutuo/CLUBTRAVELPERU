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
      title: "Nuestra Historia",
      body: "Tras años de experiencia en turismo en Disney, donde aprendimos el valor de crear experiencias memorables, decidimos regresar a Perú con una visión clara: transformar la forma de viajar en el país. Identificamos la falta de servicios turísticos personalizados, de alto nivel y con precios justos, enfocados realmente en el viajero. Así nació Club Travel Perú, con el objetivo de marcar la diferencia. Hoy, con más de 15 años de trayectoria, hemos superado desafíos como crisis globales y cierres de fronteras, fortaleciendo nuestra resiliencia y compromiso con cada cliente.",
      body2: "Nos mantenemos fieles a nuestra esencia: crear viajes que no solo se recorren, sino que se viven y permanecen en el alma. Miles de viajeros ya confían en nosotros para hacer realidad experiencias inolvidables.",
      mission: { title: "Misión", text: "Diseñamos viajes únicos y a medida en Perú, con pasión, ética y excelencia, para que cada viajero viva experiencias inolvidables y conecte profundamente con la esencia del destino." },
      vision: { title: "Visión", text: "Ser la agencia líder en turismo personalizado en Perú, reconocida por transformar cada viaje en experiencias auténticas e inolvidables, con excelencia en el servicio, precios justos y un compromiso genuino con cada viajero." },
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
      rights: "Todos los derechos reservados.",
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
      title: "Our Story",
      body: "After years of experience in Disney tourism, where we learned the value of creating memorable experiences, we decided to return to Peru with a clear vision: to transform the way of traveling in the country. We identified the lack of personalized, high-level tourist services with fair prices, truly focused on the traveler. Thus Club Travel Peru was born, with the objective of making a difference. Today, with more than 15 years of trajectory, we have overcome challenges such as global crises and border closures, strengthening our resilience and commitment to each client.",
      body2: "We stay true to our essence: creating trips that are not just toured, but lived and remain in the soul. Thousands of travelers already trust us to make unforgettable experiences come true.",
      mission: { title: "Mission", text: "We design unique and tailor-made trips in Peru, with passion, ethics and excellence, so that each traveler lives unforgettable experiences and connects deeply with the essence of the destination." },
      vision: { title: "Vision", text: "To be the leading agency in personalized tourism in Peru, recognized for transforming each trip into authentic and unforgettable experiences, with excellence in service, fair prices and a genuine commitment to each traveler." },
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
      rights: "All rights reserved.",
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
