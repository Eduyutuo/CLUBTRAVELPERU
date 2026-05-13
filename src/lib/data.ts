import heroPremium from "@/assets/hero-premium.jpg";
import machuPicchu from "@/assets/machu-picchu-premium.jpg";
import rainbowMountain from "@/assets/rainbow-mountain.jpg";
import salkantay from "@/assets/salkantay-trek.jpg";
import tambopata from "@/assets/tambopata-jungle.jpg";
import arequipa from "@/assets/arequipa-colca.jpg";
import titicaca from "@/assets/puno-titicaca.jpg";
import incaTrail from "@/assets/tour-inca-trail.jpg";
import uyuni from "@/assets/tour-uyuni.jpg";

export type Tour = {
  id: string;
  img: string;
  title: {
    es: string;
    en: string;
  };
  durationDays: number;
  code: string;
  minPeople: number;
  description: {
    es: string;
    en: string;
  };
  itinerary: Array<{
    day: number;
    title: { es: string; en: string };
    description: { es: string; en: string };
  }>;
  prices: {
    label: { es: string; en: string };
    price: number;
  }[];
  includes: { es: string; en: string }[];
  excludes: { es: string; en: string }[];
};

export const toursData: Tour[] = [
  {
    id: "machu-picchu-1-dia",
    img: machuPicchu,
    title: {
      es: "1 Día Machu Picchu Full Day: Guía Privado",
      en: "1 Day Machu Picchu Full Day: Private Guide",
    },
    durationDays: 1,
    code: "PE1CUZ1-1 EXT",
    minPeople: 2,
    description: {
      es: "¡Descubre la Ciudad Perdida de los Incas en experiencia privada única! Traslados VIP desde tu hotel en Cusco, guía experto exclusivo para tu grupo y la emoción de explorar terrazas infinitas, templos sagrados y misterios que desafían el tiempo.",
      en: "Discover the Lost City of the Incas in a unique private experience! VIP transfers from your hotel in Cusco, exclusive expert guide for your group and the thrill of exploring infinite terraces, sacred temples and mysteries that defy time.",
    },
    itinerary: [
      {
        day: 1,
        title: {
          es: "Cusco - Aguas Calientes - Machu Picchu - Cusco",
          en: "Cusco - Aguas Calientes - Machu Picchu - Cusco",
        },
        description: {
          es: "• Auto privado Cusco - Ollantaytambo (1.5-2h): Cruce el Valle Sagrado al amanecer con vistas impresionantes.\n• Tren Perú Rail por valles andinos hacia Aguas Calientes (1.5h).\n• Bus Consettur exclusivo a Machu Picchu (30 min).\n• Exploración privada 2-3h (Circuito 2/3): Torre Circular, Plaza Principal, Cuartos Reales, Templo de las Tres Ventanas, Piedra Intihuatana, Casa del Inca.\n• Almuerzo buffet de 3 tiempos incluido.\n• Regreso en tren hacia Ollantaytambo, auto privado a Cusco.",
          en: "• Private car Cusco - Ollantaytambo (1.5-2h): Cross the Sacred Valley at dawn with breathtaking views.\n• Peru Rail Train through Andean valleys to Aguas Calientes (1.5h).\n• Exclusive Consettur bus to Machu Picchu (30 min).\n• Private exploration 2-3h (Circuit 2/3): Circular Tower, Main Square, Royal Quarters, Temple of the Three Windows, Intihuatana Stone, Inca House.\n• 3-course buffet lunch included.\n• Return by train to Ollantaytambo, private car to Cusco.",
        },
      },
    ],
    prices: [
      { label: { es: "Adulto Extranjero", en: "Foreign Adult" }, price: 339 },
      { label: { es: "Menor (3-11 años)", en: "Child (3-11 years)" }, price: 248 },
    ],
    includes: [
      { es: "Traslados privados en auto hotel-estación-hotel", en: "Private transfers by car hotel-station-hotel" },
      { es: "Boletos tren ida/vuelta Perú Rail", en: "Round trip train tickets Peru Rail" },
      { es: "Bus turístico ida/vuelta Consettur", en: "Round trip tourist bus Consettur" },
      { es: "Entrada Machu Picchu (Circuito 2 o 3)", en: "Machu Picchu Entrance (Circuit 2 or 3)" },
      { es: "Guía profesional privado español/inglés", en: "Private professional guide Spanish/English" },
      { es: "Almuerzo completo 3 tiempos", en: "Complete 3-course lunch" },
      { es: "Asistencia personalizada 24/7", en: "24/7 personalized assistance" },
    ],
    excludes: [
      { es: "Vuelos nacionales/internacionales", en: "Domestic/international flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Propinas", en: "Tips" },
      { es: "Bebidas adicionales", en: "Additional drinks" },
      { es: "Alimentación no especificada", en: "Meals not specified" },
      { es: "Servicios opcionales", en: "Optional services" },
    ],
  },
  {
    id: "cusco-inolvidable-5-dias",
    img: rainbowMountain,
    title: {
      es: "5 Días – Cusco Inolvidable & Vinicunca",
      en: "5 Days – Unforgettable Cusco & Rainbow Mountain",
    },
    durationDays: 5,
    code: "PE2CUZ5-2",
    minPeople: 2,
    description: {
      es: "Vive la magia de Cusco, el Valle Sagrado y Machu Picchu, culminando con la impresionante Montaña de Colores (Vinicunca).",
      en: "Live the magic of Cusco, the Sacred Valley and Machu Picchu, culminating with the impressive Rainbow Mountain (Vinicunca).",
    },
    itinerary: [
      { day: 1, title: { es: "Bienvenidos a Cusco", en: "Welcome to Cusco" }, description: { es: "Traslado privado y tarde de aclimatación.", en: "Private transfer and afternoon of acclimatization." } },
      { day: 2, title: { es: "Valle Sagrado", en: "Sacred Valley" }, description: { es: "Chinchero, Maras, Moray y Ollantaytambo. Tren a Aguas Calientes.", en: "Chinchero, Maras, Moray and Ollantaytambo. Train to Aguas Calientes." } },
      { day: 3, title: { es: "Machu Picchu", en: "Machu Picchu" }, description: { es: "Tour privado en la Ciudadela Sagrada.", en: "Private tour in the Sacred Citadel." } },
      { day: 4, title: { es: "Montaña de Colores", en: "Rainbow Mountain" }, description: { es: "Aventura hacia Vinicunca (5,200 msnm).", en: "Adventure towards Vinicunca (5,200 msl)." } },
      { day: 5, title: { es: "Despedida", en: "Farewell" }, description: { es: "Traslado al aeropuerto.", en: "Transfer to the airport." } },
    ],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 467 }],
    includes: [{ es: "Todo incluido según programa", en: "All included as per program" }],
    excludes: [{ es: "Vuelos", en: "Flights" }],
  },
  {
    id: "salkantay-trek-5-dias",
    img: salkantay,
    title: {
      es: "Salkantay Trek 5 Días: Sky Domes Experience",
      en: "Salkantay Trek 5 Days: Sky Domes Experience",
    },
    durationDays: 5,
    code: "PE53CUZ-1",
    minPeople: 2,
    description: {
      es: "Una de las rutas de trekking más espectaculares del mundo, con campamentos de lujo tipo Sky Domes y vistas del nevado Salkantay.",
      en: "One of the most spectacular trekking routes in the world, with luxury Sky Domes campings and views of Salkantay mountain.",
    },
    itinerary: [
      { day: 1, title: { es: "Cusco - Laguna Humantay", en: "Cusco - Humantay Lake" }, description: { es: "Caminata hacia la laguna turquesa y noche en Sky Domes.", en: "Hike to the turquoise lake and night in Sky Domes." } },
      { day: 2, title: { es: "Abra Salkantay", en: "Salkantay Pass" }, description: { es: "El punto más alto (4,630 msnm) con vistas del Apu Salkantay.", en: "The highest point (4,630 msl) with views of Apu Salkantay." } },
      { day: 3, title: { es: "Bosque Nublado", en: "Cloud Forest" }, description: { es: "Descenso hacia la selva alta y plantaciones de café.", en: "Descent to the high jungle and coffee plantations." } },
      { day: 4, title: { es: "Llactapata - Aguas Calientes", en: "Llactapata - Aguas Calientes" }, description: { es: "Vistas remotas de Machu Picchu desde la montaña.", en: "Remote views of Machu Picchu from the mountain." } },
      { day: 5, title: { es: "Machu Picchu", en: "Machu Picchu" }, description: { es: "Exploración de la maravilla y retorno a Cusco.", en: "Exploration of the wonder and return to Cusco." } },
    ],
    prices: [{ label: { es: "Precio por persona", en: "Price per person" }, price: 749 }],
    includes: [{ es: "Guía, equipo, alimentación y Sky Domes", en: "Guide, equipment, meals and Sky Domes" }],
    excludes: [{ es: "Bolsa de dormir", en: "Sleeping bag" }],
  },
  {
    id: "arequipa-colca-2-dias",
    img: arequipa,
    title: {
      es: "2 Días – Arequipa & Cañón del Colca",
      en: "2 Days – Arequipa & Colca Canyon",
    },
    durationDays: 2,
    code: "PE-AQP-02",
    minPeople: 2,
    description: {
      es: "Descubre la Ciudad Blanca y el vuelo majestuoso del Cóndor en uno de los cañones más profundos del mundo.",
      en: "Discover the White City and the majestic flight of the Condor in one of the deepest canyons in the world.",
    },
    itinerary: [
      { day: 1, title: { es: "Arequipa - Chivay", en: "Arequipa - Chivay" }, description: { es: "Viaje por la Reserva de Salinas y Aguada Blanca. Baños termales.", en: "Trip through Salinas and Aguada Blanca Reserve. Hot springs." } },
      { day: 2, title: { es: "Cruz del Cóndor - Arequipa", en: "Condor Cross - Arequipa" }, description: { es: "Avistamiento de cóndores y retorno a la Ciudad Blanca.", en: "Condor sighting and return to the White City." } },
    ],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 145 }],
    includes: [{ es: "Transporte, guía y 1 noche de hotel", en: "Transport, guide and 1 night hotel" }],
    excludes: [{ es: "Boleto turístico y entradas a baños termales", en: "Tourist ticket and hot springs entrance" }],
  },
  {
    id: "puno-titicaca-2-dias",
    img: titicaca,
    title: {
      es: "2 Días – Puno: Uros, Amantaní & Taquile",
      en: "2 Days – Puno: Uros, Amantani & Taquile",
    },
    durationDays: 2,
    code: "PE-PUN-02",
    minPeople: 1,
    description: {
      es: "Vive una experiencia auténtica durmiendo en una isla del Lago Titicaca con una familia local.",
      en: "Live an authentic experience sleeping on an island in Lake Titicaca with a local family.",
    },
    itinerary: [
      { day: 1, title: { es: "Uros - Amantaní", en: "Uros - Amantani" }, description: { es: "Visita a las islas flotantes y noche con familia local.", en: "Visit to floating islands and night with local family." } },
      { day: 2, title: { es: "Taquile - Puno", en: "Taquile - Puno" }, description: { es: "Caminata por Taquile y retorno a Puno.", en: "Hike through Taquile and return to Puno." } },
    ],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 95 }],
    includes: [{ es: "Traslados, lancha, alimentación y hospedaje familiar", en: "Transfers, boat, meals and family stay" }],
    excludes: [{ es: "Cena extra", en: "Extra dinner" }],
  },
  {
    id: "tambopata-reserva-3-dias",
    img: tambopata,
    title: {
      es: "3 Días – Selva de Tambopata: Lago Sandoval",
      en: "3 Days – Tambopata Jungle: Sandoval Lake",
    },
    durationDays: 3,
    code: "PE-TAM-03",
    minPeople: 2,
    description: {
      es: "Sumérgete en la biodiversidad de la Amazonía peruana en un lodge exclusivo.",
      en: "Immerse yourself in the biodiversity of the Peruvian Amazon in an exclusive lodge.",
    },
    itinerary: [
      { day: 1, title: { es: "Puerto Maldonado - Lodge", en: "Puerto Maldonado - Lodge" }, description: { es: "Traslado en lancha y caminata nocturna.", en: "Boat transfer and night walk." } },
      { day: 2, title: { es: "Lago Sandoval", en: "Sandoval Lake" }, description: { es: "Avistamiento de nutrias gigantes y monos.", en: "Sighting of giant otters and monkeys." } },
      { day: 3, title: { es: "Lodge - Aeropuerto", en: "Lodge - Airport" }, description: { es: "Retorno a la ciudad.", en: "Return to the city." } },
    ],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 385 }],
    includes: [{ es: "Todo incluido (alojamiento, tours, comidas)", en: "All included (accommodation, tours, meals)" }],
    excludes: [{ es: "Vuelos", en: "Flights" }],
  },
  {
    id: "inca-trail-4-dias",
    img: incaTrail,
    title: {
      es: "Camino Inca Clásico 4 Días",
      en: "Classic Inca Trail 4 Days",
    },
    durationDays: 4,
    code: "PE-ICT-04",
    minPeople: 2,
    description: {
      es: "La ruta de senderismo más famosa de Sudamérica. Camina por senderos originales incas hasta llegar a la Puerta del Sol.",
      en: "The most famous trekking route in South America. Walk through original Inca trails until you reach the Sun Gate.",
    },
    itinerary: [
      { day: 1, title: { es: "Cusco - Km 82", en: "Cusco - Km 82" }, description: { es: "Inicio de la caminata y primer campamento.", en: "Start of the hike and first camp." } },
      { day: 2, title: { es: "Abra Warmiwañusca", en: "Warmiwañusca Pass" }, description: { es: "El punto más alto de la ruta (4,215 msnm).", en: "The highest point of the route (4,215 msl)." } },
      { day: 3, title: { es: "Sayacmarca - Wiñay Wayna", en: "Sayacmarca - Wiñay Wayna" }, description: { es: "Exploración de sitios arqueológicos impresionantes.", en: "Exploration of impressive archaeological sites." } },
      { day: 4, title: { es: "Inti Punku - Machu Picchu", en: "Inti Punku - Machu Picchu" }, description: { es: "Entrada triunfal a la ciudadela al amanecer.", en: "Triumphant entry to the citadel at dawn." } },
    ],
    prices: [{ label: { es: "Precio por persona", en: "Price per person" }, price: 699 }],
    includes: [{ es: "Permisos, guía, porteadores y alimentación", en: "Permits, guide, porters and meals" }],
    excludes: [{ es: "Bolsa de dormir", en: "Sleeping bag" }],
  },
  {
    id: "salar-uyuni-3-dias",
    img: uyuni,
    title: {
      es: "Salar de Uyuni & Lagunas de Colores 3 Días",
      en: "Uyuni Salt Flats & Colored Lagoons 3 Days",
    },
    durationDays: 3,
    code: "BO-UYU-03",
    minPeople: 1,
    description: {
      es: "Explora el espejo más grande del mundo y los paisajes surrealistas del altiplano boliviano.",
      en: "Explore the world's largest mirror and the surreal landscapes of the Bolivian highlands.",
    },
    itinerary: [
      { day: 1, title: { es: "Cementerio de Trenes - Salar", en: "Train Cemetery - Salt Flat" }, description: { es: "Visita al Salar y pernocte en hotel de sal.", en: "Visit to the Salt Flat and overnight in a salt hotel." } },
      { day: 2, title: { es: "Lagunas Altiplánicas", en: "Highland Lagoons" }, description: { es: "Laguna Colorada y géiseres Sol de Mañana.", en: "Colorada Lagoon and Sol de Mañana geysers." } },
      { day: 3, title: { es: "Laguna Verde - Uyuni", en: "Verde Lagoon - Uyuni" }, description: { es: "Vistas del volcán Licancabur y retorno.", en: "Views of Licancabur volcano and return." } },
    ],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 195 }],
    includes: [{ es: "Transporte 4x4, guía y alimentación", en: "4x4 transport, guide and meals" }],
    excludes: [{ es: "Entradas a parques nacionales", en: "Entrance fees to national parks" }],
  },
];
export { heroPremium };
