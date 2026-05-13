import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Shield, Sparkles, Navigation, Award, Target, History, Star, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useI18n();

  const stats = [
    { label: t.about.yearsExperience, value: "15+", icon: History },
    { label: t.about.happyTravelers, value: "2,000+", icon: Users },
    { label: t.about.uniqueDestinations, value: "12+", icon: MapIcon },
    { label: t.about.satisfaction, value: "100%", icon: Award },
  ];

  const values = t.about.pillars.map((p, i) => ({
    ...p,
    icon: [Sparkles, Shield, Navigation][i]
  }));

  return (
    <div className="pt-20 bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Peruvian Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white container mx-auto px-6 space-y-6">
          <motion.span
            initial={{ opacity: 0, tracking: "0.2em" }}
            animate={{ opacity: 1, tracking: "0.5em" }}
            className="text-sm font-black uppercase text-accent block"
          >
            {t.about.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase"
          >
            CLUB <span className="text-accent">TRAVEL PERÚ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {t.about.mainSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-widest text-xs">{t.about.since}</span>
              <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9]">
                {t.about.promise}
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium">
              <p>{t.about.body}</p>
              <p className="p-8 bg-accent/5 rounded-[2.5rem] border-l-4 border-accent text-foreground italic">
                {t.about.quote}
              </p>
              <p>{t.about.body2}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium border-8 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000" 
                className="w-full h-full object-cover" 
                alt="Adventure in Peru"
              />
            </div>
            {/* Experience Floating Card */}
            <div className="absolute sm:-bottom-10 sm:-left-10 bottom-4 left-4 bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-premium border border-border/40 text-center z-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
              </div>
              <span className="block text-4xl sm:text-6xl font-black text-foreground leading-none tracking-tighter">15+</span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-3 sm:mt-4 block">{t.about.yearsExperience}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-white border border-border/50 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-8">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6">{t.about.mission.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  {t.about.mission.text}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-[3.5rem] bg-white border border-border/50 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Sparkles className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6">{t.about.vision.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  {t.about.vision.text}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-accent font-black uppercase tracking-widest text-xs">{t.about.ourValues}</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.about.pillarsTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3rem] bg-white border border-border/50 shadow-sm hover:shadow-premium transition-all group"
              >
                <div className="w-20 h-20 rounded-3xl bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all">
                  <v.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors">{v.title}</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Representative Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-card rounded-[4rem] p-12 md:p-20 border border-border/50 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-accent font-black uppercase tracking-widest text-xs">{t.about.legalIdentity}</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.about.transparencyTitle}</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.about.socialReason}</h4>
                    <p className="text-xl font-bold text-foreground">INVERSIONES ELSA MARIA SAC</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.about.commercialName}</h4>
                    <p className="text-xl font-bold text-foreground">CLUB TRAVEL PERU</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-1">RUC</h4>
                    <p className="text-xl font-bold text-foreground">20610729968</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3.5rem] shadow-premium border border-border/40 space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center overflow-hidden border-4 border-accent/20">
                   <Users className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground">Nestor Paredes Flores</h4>
                  <p className="text-accent font-bold uppercase tracking-widest text-[10px]">{t.about.legalRep}</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed italic">
                "Nuestra meta no es solo vender tours, sino crear embajadores de la cultura peruana en todo el mundo."
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t.about.businessLine}</p>
                <p className="text-lg font-bold text-foreground">Turismo Receptivo Internacional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Teaser */}
      <section className="py-24 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-accent text-accent" />)}
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">{t.about.ctaTitle}</h2>
          <div className="pt-4">
             <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-12 h-16 text-xl font-black shadow-premium transition-all hover:scale-105">
                <Link to="/contact">{t.about.ctaBtn}</Link>
             </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function MapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
}
