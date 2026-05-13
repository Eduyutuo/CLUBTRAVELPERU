import { createFileRoute, Link } from "@tanstack/react-router";
import { toursData } from "@/lib/data";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Check, X, MapPin, Calendar, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/tours/$tourId")({
  component: TourPageWrapper,
});

function TourPageWrapper() {
  return (
    <I18nProvider>
      <TourDetail />
    </I18nProvider>
  );
}

function TourDetail() {
  const { tourId } = Route.useParams();
  const { t, lang } = useI18n();

  const tour = toursData.find((t) => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-bold mt-20">Tour no encontrado</h1>
        <Button asChild className="mt-4 rounded-full">
          <Link to="/">Volver al inicio</Link>
        </Button>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Immersive Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <img
            src={tour.img}
            alt={lang === "es" ? tour.title.es : tour.title.en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 inset-x-0 pb-12 md:pb-20">
            <div className="container mx-auto px-6">
              <Link
                to="/"
                className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-all hover:-translate-x-1 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm uppercase tracking-widest">
                  {lang === "es" ? "Explorar más tours" : "Explore more tours"}
                </span>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg">
                    {tour.code}
                  </span>
                  <div className="h-[1px] w-12 bg-white/30" />
                  <span className="text-white/80 text-sm font-medium flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    Perú
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                  {lang === "es" ? tour.title.es : tour.title.en}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-white/90">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wide">
                      {tour.durationDays} {lang === "es" ? (tour.durationDays === 1 ? "Día" : "Días") : (tour.durationDays === 1 ? "Day" : "Days")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wide">
                      Min. {tour.minPeople} {lang === "es" ? "Pers." : "People"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  {lang === "es" ? "Resumen de la Experiencia" : "Experience Overview"}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {lang === "es" ? tour.description.es : tour.description.en}
              </p>
            </motion.div>

            {/* Itinerary */}
            {tour.itinerary.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground tracking-tight">
                    {lang === "es" ? "Itinerario Detallado" : "Detailed Itinerary"}
                  </h2>
                </div>
                
                <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-accent/50 before:to-primary/50">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-16 group">
                      <div className="absolute left-0 top-2 w-12 h-12 bg-background border-2 border-accent text-accent rounded-full flex items-center justify-center font-black text-lg z-10 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                        {day.day}
                      </div>
                      <div className="bg-card border border-border/50 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all group-hover:border-accent/20">
                        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                          {lang === "es" ? day.title.es : day.title.en}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {lang === "es" ? day.description.es : day.description.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Includes & Excludes */}
            {(tour.includes.length > 0 || tour.excludes.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10"
              >
                <div className="bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    {lang === "es" ? "Qué incluye" : "What's included"}
                  </h3>
                  <ul className="space-y-4">
                    {tour.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-medium">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary" />
                        <span>{lang === "es" ? inc.es : inc.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-[2.5rem] p-10 border border-border/50">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                    {lang === "es" ? "No incluye" : "Not included"}
                  </h3>
                  <ul className="space-y-4">
                    {tour.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-muted-foreground/80 font-medium">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                        <span>{lang === "es" ? exc.es : exc.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar / Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-card border-2 border-accent/20 rounded-[2.5rem] p-10 shadow-premium">
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2 block">Precio desde</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground">USD {tour.prices[0]?.price || "---"}</span>
                    <span className="text-muted-foreground font-semibold">/ pers.</span>
                  </div>
                </div>

                {tour.prices.length > 1 && (
                  <div className="mb-10 space-y-4">
                    <h4 className="font-bold text-sm text-foreground uppercase tracking-wider border-b pb-3 border-border/50">Opciones de Tarifa</h4>
                    {tour.prices.map((p, i) => (
                      <div key={i} className="flex justify-between items-center bg-muted/30 p-4 rounded-2xl hover:bg-muted transition-colors">
                        <span className="text-sm font-semibold text-muted-foreground">{lang === "es" ? p.label.es : p.label.en}</span>
                        <span className="font-black text-foreground text-lg">USD {p.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-2xl h-16 text-lg font-bold shadow-premium transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3" asChild>
                    <a href={`https://wa.me/51929435139?text=Hola, quiero más información sobre el tour: ${lang === "es" ? tour.title.es : tour.title.en}`} target="_blank" rel="noreferrer">
                      <MessageCircle className="w-6 h-6 fill-current" />
                      {lang === "es" ? "Reservar por WhatsApp" : "Book via WhatsApp"}
                    </a>
                  </Button>
                  <p className="text-center text-[11px] text-muted-foreground font-medium px-4">
                    Confirmación inmediata · Sin cargos ocultos · Soporte 24/7
                  </p>
                </div>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-primary text-primary-foreground rounded-[2rem] p-8 flex items-center gap-6 shadow-lg">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">Viaje Protegido</h4>
                  <p className="text-sm text-white/70">Seguro de viaje y asistencia local permanente incluida en todos nuestros servicios.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
