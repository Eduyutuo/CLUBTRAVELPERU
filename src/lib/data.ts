import uyuni from "@/assets/tour-uyuni.jpg";
import titicaca from "@/assets/tour-titicaca.jpg";
import tambopata from "@/assets/tour-tambopata.jpg";
import inca from "@/assets/tour-inca-trail.jpg";

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
    img: inca, // Temp image
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
    id: "cusco-esencial-5-dias",
    img: uyuni, // Temp image
    title: {
      es: "5 Días – Cusco Esencial",
      en: "5 Days – Essential Cusco",
    },
    durationDays: 5,
    code: "PE2CUZ5-1",
    minPeople: 2,
    description: {
      es: "Explora el corazón del Imperio Inca con este programa de 5 días que combina historia, cultura y paisajes inolvidables. Ruta: Cusco City Tour, Valle Sagrado, Machu Picchu.",
      en: "Explore the heart of the Inca Empire with this 5-day program that combines history, culture and unforgettable landscapes. Route: Cusco City Tour, Sacred Valley, Machu Picchu.",
    },
    itinerary: [
      {
        day: 1,
        title: { es: "¡Bienvenidos a Cusco!", en: "Welcome to Cusco!" },
        description: {
          es: "A tu llegada a la ciudad de Cusco, nuestro equipo te recibirá con una cálida bienvenida y traslado privado al hotel. El resto del día será libre para descansar, aclimatarte a la altura o dar un paseo por las encantadoras calles de piedra del centro histórico.\nAlimentación: Ninguna.\nTraslado: Servicio privado.\nAlojamiento: Cusco.",
          en: "Upon arrival in the city of Cusco, our team will greet you with a warm welcome and private transfer to the hotel. The rest of the day is free to rest, acclimatize to the altitude or take a walk through the charming stone streets of the historic center.\nMeals: None.\nTransfer: Private service.\nAccommodation: Cusco.",
        },
      },
      {
        day: 2,
        title: { es: "Valle Sagrado de los Incas", en: "Sacred Valley of the Incas" },
        description: {
          es: "El Valle Sagrado te espera con paisajes de ensueño y sitios arqueológicos únicos: Chinchero, Maras, Moray y Ollantaytambo. Disfrutarás de un delicioso almuerzo buffet en Urubamba y, al final del día, viajarás en tren hacia Aguas Calientes, la puerta de entrada a Machu Picchu.\nAlimentación: Desayuno y almuerzo buffet.\nTour: Servicio compartido.\nAlojamiento: Aguas Calientes.",
          en: "The Sacred Valley awaits you with dream landscapes and unique archaeological sites: Chinchero, Maras, Moray and Ollantaytambo. You will enjoy a delicious buffet lunch in Urubamba and, at the end of the day, you will travel by train to Aguas Calientes, the gateway to Machu Picchu.\nMeals: Breakfast and buffet lunch.\nTour: Shared service.\nAccommodation: Aguas Calientes.",
        },
      },
      {
        day: 3,
        title: { es: "Machu Picchu – La Ciudad Perdida", en: "Machu Picchu – The Lost City" },
        description: {
          es: "Muy temprano ascenderemos en bus hacia la Ciudadela de Machu Picchu. Acompañado por su guía privado, recorrerá los templos, escalinatas y terrazas de esta joya arqueológica. Tras el recorrido, disfrutará de un almuerzo local y posteriormente emprenderá el regreso a Cusco en servicio bimodal.\nTour: Servicio privado.\nAlimentación: Desayuno y almuerzo.\nAlojamiento: Cusco.",
          en: "Very early we will ascend by bus to the Citadel of Machu Picchu. Accompanied by your private guide, you will tour the temples, stairways and terraces of this archaeological jewel. After the tour, you will enjoy a local lunch and later start the return to Cusco in bimodal service.\nTour: Private service.\nMeals: Breakfast and lunch.\nAccommodation: Cusco.",
        },
      },
      {
        day: 4,
        title: { es: "City Tour Cusco – Historia Viva", en: "Cusco City Tour – Living History" },
        description: {
          es: "Descubre la fusión del pasado inca y colonial en un recorrido lleno de historia: Coricancha (Templo del Sol), Sacsayhuamán, Qenqo, y Puca Pucará.\nAlimentación: Desayuno.\nTour: Servicio compartido.\nAlojamiento: Cusco.",
          en: "Discover the fusion of the Inca and colonial past in a tour full of history: Coricancha (Temple of the Sun), Sacsayhuaman, Qenqo, and Puca Pucara.\nMeals: Breakfast.\nTour: Shared service.\nAccommodation: Cusco.",
        },
      },
      {
        day: 5,
        title: { es: "¡Hasta pronto, Perú!", en: "See you soon, Peru!" },
        description: {
          es: "A la hora indicada, nuestro equipo pasará por tu hotel para llevarte al aeropuerto. ¡Despídete de Cusco con la certeza de haber vivido una experiencia única!\nAlimentación: Desayuno.\nTraslado: Servicio privado.",
          en: "At the indicated time, our team will pick you up from your hotel to take you to the airport. Say goodbye to Cusco with the certainty of having lived a unique experience!\nMeals: Breakfast.\nTransfer: Private service.",
        },
      },
    ],
    prices: [
      { label: { es: "Tarifa 1 (Hoteles 3★) - Doble", en: "Rate 1 (3★ Hotels) - Double" }, price: 592 },
      { label: { es: "Tarifa 2 (Hoteles 3★ superior) - Doble", en: "Rate 2 (Superior 3★ Hotels) - Double" }, price: 617 },
      { label: { es: "Tarifa 3 (Hoteles 4★) - Doble", en: "Rate 3 (4★ Hotels) - Double" }, price: 669 },
    ],
    includes: [
      { es: "Traslados completos (hoteles, aeropuertos, estaciones y puertos)", en: "Complete transfers (hotels, airports, stations and ports)" },
      { es: "03 noches en Cusco + 01 noche en Aguas Calientes (desayunos incluidos)", en: "03 nights in Cusco + 01 night in Aguas Calientes (breakfasts included)" },
      { es: "Tours con ingresos y transporte turístico", en: "Tours with entrances and tourist transport" },
      { es: "Tour a Machu Picchu en servicio privado con guía certificado", en: "Machu Picchu tour in private service with certified guide" },
      { es: "Guías oficiales acreditados por MINCETUR", en: "Official guides accredited by MINCETUR" },
      { es: "Alimentación según programa", en: "Meals according to program" },
      { es: "Cargos hoteleros incluidos (exoneración IGV para turistas)", en: "Hotel charges included (IGV exemption for tourists)" },
      { es: "Asistencia permanente durante todo el viaje", en: "Permanent assistance throughout the trip" },
    ],
    excludes: [
      { es: "Boletos aéreos internacionales o nacionales", en: "International or domestic flights" },
      { es: "Servicios opcionales", en: "Optional services" },
      { es: "Alimentación no mencionada", en: "Meals not mentioned" },
      { es: "Seguros, propinas y gastos personales", en: "Insurance, tips and personal expenses" },
    ],
  },
  {
    id: "cusco-inolvidable-5-dias",
    img: inca,
    title: {
      es: "5 Días – Cusco Inolvidable",
      en: "5 Days – Unforgettable Cusco",
    },
    durationDays: 5,
    code: "PE2CUZ5-2",
    minPeople: 2,
    description: {
      es: "Vive la magia de Cusco, el Valle Sagrado y Machu Picchu, culminando con la impresionante Montaña de Colores.",
      en: "Live the magic of Cusco, the Sacred Valley and Machu Picchu, culminating with the impressive Rainbow Mountain.",
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
    img: inca,
    title: {
      es: "Salkantay Trek 5 Días: Sky Domes Experience",
      en: "Salkantay Trek 5 Days: Sky Domes Experience",
    },
    durationDays: 5,
    code: "PE53CUZ-1",
    minPeople: 2,
    description: {
      es: "Una de las rutas de trekking más espectaculares del mundo, con campamentos de lujo tipo Sky Domes.",
      en: "One of the most spectacular trekking routes in the world, with luxury Sky Domes campings.",
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
    id: "aventura-andina-tambopata",
    img: tambopata,
    title: {
      es: "Machu Picchu y Amazonía en Tambopata",
      en: "Machu Picchu & Tambopata Amazon",
    },
    durationDays: 8,
    code: "PE2CUZ8-1",
    minPeople: 2,
    description: {
      es: "Combina la historia de los Incas con la biodiversidad extrema de la selva peruana.",
      en: "Combine Inca history with the extreme biodiversity of the Peruvian jungle.",
    },
    itinerary: [],
    prices: [{ label: { es: "Desde", en: "Starting from" }, price: 1071 }],
    includes: [],
    excludes: [],
  }
];
