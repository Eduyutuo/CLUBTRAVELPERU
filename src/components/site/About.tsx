import { useI18n } from "@/lib/i18n";
import { LifeBuoy, BadgeCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

const icons = [LifeBuoy, BadgeCheck, Heart];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
  const { t } = useI18n();
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {t.about.title}
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.about.body}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.about.body2}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">{t.about.mission.title}</h3>
            <p className="text-muted-foreground leading-relaxed italic">"{t.about.mission.text}"</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-accent/5 border border-accent/10"
          >
            <h3 className="text-2xl font-bold text-accent mb-4">{t.about.vision.title}</h3>
            <p className="text-muted-foreground leading-relaxed italic">"{t.about.vision.text}"</p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {t.about.benefits.map((b, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                variants={item}
                key={b.title}
                className="p-8 rounded-2xl bg-card border hover:border-accent/40 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
