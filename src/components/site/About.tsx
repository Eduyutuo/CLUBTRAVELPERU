import { useI18n } from "@/lib/i18n";
import { Shield, Sparkles, Map, Star, CheckCircle2, Navigation } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const icons = [Shield, Sparkles, Navigation];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function BenefitCard({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-card border border-border/50 transition-all duration-500 hover:border-accent/40 group shadow-sm hover:shadow-premium cursor-default"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
          <Icon className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-6 tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
      
      {/* Background Pattern */}
      <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Icon className="w-32 h-32" />
      </div>
    </motion.div>
  );
}

export function About() {
  const { t, lang } = useI18n();

  const premiumBenefits = [
    {
      title: t.about.pillars[0].title,
      desc: t.about.pillars[0].desc,
      icon: icons[0]
    },
    {
      title: t.about.pillars[1].title,
      desc: t.about.pillars[1].desc,
      icon: icons[1]
    },
    {
      title: t.about.pillars[2].title,
      desc: t.about.pillars[2].desc,
      icon: icons[2]
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-6 block"
              >
                {t.about.eyebrow}
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
                {t.about.title}
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                {t.about.body}
              </p>
              <div className="pt-6">
                <Button asChild className="rounded-full bg-primary text-white px-8 h-12 font-bold shadow-md hover:scale-105 transition-transform">
                  <Link to="/about">{t.about.knowMore}</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden border border-border/50 shadow-premium p-4 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop" 
                alt="Exploración en los Andes" 
                className="w-full h-full object-cover rounded-[3rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[4rem]" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute sm:-bottom-10 sm:-left-10 bottom-4 left-4 bg-white p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-premium border border-border/40 text-center z-20"
            >
              <span className="block text-4xl sm:text-6xl font-black text-accent leading-none tracking-tighter">15+</span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-2 sm:mt-3 block">{t.about.yearsExperience}</span>
            </motion.div>

            {/* Small Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 backdrop-blur-xl rounded-[2rem] border border-white/20 z-0"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {premiumBenefits.map((b, i) => (
            <BenefitCard key={i} {...b} index={i} />
          ))}
        </motion.div>

        {/* Trust Bar / Legal Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border/50 flex flex-wrap justify-center gap-x-20 gap-y-10"
        >
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground leading-none mb-1">{t.about.rucLabel}</p>
              <p className="text-lg font-bold text-foreground leading-none">20610729968</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground leading-none mb-1">{t.about.commercialName}</p>
              <p className="text-lg font-bold text-foreground leading-none">CLUB TRAVEL PERU</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground leading-none mb-1">{t.about.hqLabel}</p>
              <p className="text-lg font-bold text-foreground leading-none">La Molina, Lima</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
