import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Globe, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useI18n();

  return (
    <div className="pt-24 pb-20 bg-background">
      {/* Hero */}
      <section className="bg-primary py-24 text-white rounded-b-[4rem]">
        <div className="container mx-auto px-6 text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            {lang === "es" ? "¿Hablamos?" : "Let's Talk"}
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            {lang === "es" 
              ? "Estamos aquí para diseñar tu próximo gran recuerdo. Contáctanos por cualquier medio."
              : "We are here to design your next great memory. Contact us by any means."}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-[2.5rem] bg-white shadow-premium border border-border/40"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-foreground mb-1 uppercase tracking-wider text-xs">WhatsApp 24/7</h3>
                  <a href="https://wa.me/51929435139" className="text-lg font-bold text-foreground hover:text-accent transition-colors">+51 929 435 139</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white shadow-premium border border-border/40"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-foreground mb-1 uppercase tracking-wider text-xs">Email</h3>
                  <a href="mailto:clubtravelperu1@gmail.com" className="text-lg font-bold text-foreground hover:text-accent transition-colors">clubtravelperu1@gmail.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] bg-white shadow-premium border border-border/40"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-foreground mb-1 uppercase tracking-wider text-xs">Horario de Atención</h3>
                  <p className="text-lg font-bold text-foreground">Lun - Dom: 24/7</p>
                </div>
              </div>
            </motion.div>

            <div className="p-8 rounded-[2.5rem] bg-card border border-border/50">
              <h3 className="font-black text-foreground mb-6 uppercase tracking-widest text-xs">Síguenos</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-border/50 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-premium border border-border/40"
            >
              <h2 className="text-3xl font-black text-foreground mb-10 tracking-tight">Envíanos un mensaje</h2>
              <form className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Nombre Completo</label>
                  <input type="text" className="w-full h-14 px-6 rounded-2xl bg-muted/50 border-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <input type="email" className="w-full h-14 px-6 rounded-2xl bg-muted/50 border-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Mensaje</label>
                  <textarea rows={6} className="w-full p-6 rounded-3xl bg-muted/50 border-none focus:ring-2 focus:ring-accent transition-all resize-none" />
                </div>
                <div className="sm:col-span-2">
                  <Button className="w-full h-16 rounded-2xl bg-accent hover:bg-accent/90 text-white font-black text-lg shadow-premium flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Area */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-[4rem] overflow-hidden aspect-[21/9] bg-muted relative group border border-border/50">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000" className="w-full h-full object-cover grayscale opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-premium border border-white/20 text-center max-w-md">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-black text-foreground mb-2">Sede Central</h3>
              <p className="text-muted-foreground font-medium">Calle Rinconada 121, La Molina, Lima</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
