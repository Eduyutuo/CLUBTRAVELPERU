import { useI18n } from "@/lib/i18n";
import { LifeBuoy, BadgeCheck, Heart } from "lucide-react";

const icons = [LifeBuoy, BadgeCheck, Heart];

export function About() {
  const { t } = useI18n();
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {t.about.title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:pt-4">
            {t.about.body}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {t.about.benefits.map((b, i) => {
            const Icon = icons[i];
            return (
              <div
                key={b.title}
                className="p-8 rounded-2xl bg-card border hover:border-accent/40 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
