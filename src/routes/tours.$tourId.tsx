import { createFileRoute, Link } from "@tanstack/react-router";
import { toursData } from "@/lib/data";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Users, Check, X } from "lucide-react";
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
        <h1 className="text-3xl font-bold mt-20">Tour not found</h1>
        <Button asChild className="mt-4">
          <Link to="/">Go back</Link>
        </Button>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={tour.img}
            alt={lang === "es" ? tour.title.es : tour.title.en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {lang === "es" ? "Volver" : "Back"}
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full mb-4">
                  {tour.code}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
                  {lang === "es" ? tour.title.es : tour.title.en}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border rounded-3xl p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="text-2xl font-bold mb-4">{lang === "es" ? "Descripción" : "Description"}</h2>
              <p className="text-muted-foreground leading-relaxed">
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
                <h2 className="text-2xl font-bold mb-6">{lang === "es" ? "Itinerario" : "Itinerary"}</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4 border border-border p-6 rounded-2xl bg-muted/20">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold">
                        {lang === "es" ? "D" : "D"}{day.day}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {lang === "es" ? day.title.es : day.title.en}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
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
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    {lang === "es" ? "Incluye" : "Includes"}
                  </h3>
                  <ul className="space-y-3">
                    {tour.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mt-0.5 text-green-500/70" />
                        <span>{lang === "es" ? inc.es : inc.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <X className="text-destructive w-5 h-5" />
                    {lang === "es" ? "No Incluye" : "Not Included"}
                  </h3>
                  <ul className="space-y-3">
                    {tour.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="w-4 h-4 mt-0.5 text-destructive/70" />
                        <span>{lang === "es" ? exc.es : exc.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar / Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col gap-1 p-3 bg-muted/30 rounded-xl">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                    {lang === "es" ? "Duración" : "Duration"}
                  </span>
                  <span className="font-medium text-sm">
                    {tour.durationDays} {lang === "es" ? (tour.durationDays === 1 ? "Día" : "Días") : (tour.durationDays === 1 ? "Day" : "Days")}
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-3 bg-muted/30 rounded-xl">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                    {lang === "es" ? "Mínimo" : "Min."}
                  </span>
                  <span className="font-medium text-sm">
                    {tour.minPeople} {lang === "es" ? "Personas" : "People"}
                  </span>
                </div>
              </div>

              {tour.prices.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 border-b pb-2">{lang === "es" ? "Precios" : "Prices"}</h3>
                  <div className="space-y-3">
                    {tour.prices.map((p, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{lang === "es" ? p.label.es : p.label.en}</span>
                        <span className="font-bold">USD {p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-full h-14" asChild>
                <a href={`https://wa.me/51987654321?text=Hola, quiero más información sobre el tour: ${lang === "es" ? tour.title.es : tour.title.en}`} target="_blank" rel="noreferrer">
                  {lang === "es" ? "Reservar Ahora" : "Book Now"}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
