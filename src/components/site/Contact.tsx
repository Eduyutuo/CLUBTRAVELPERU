import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t.contact.success);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: "var(--gradient-earth)" }}
      />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto bg-card border rounded-3xl p-8 md:p-10 space-y-5"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.name}</Label>
              <Input id="name" name="name" required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.email}</Label>
              <Input id="email" name="email" type="email" required maxLength={255} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone">{t.contact.phone}</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">{t.contact.destination}</Label>
              <select
                id="destination"
                name="destination"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.contact.destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 text-base"
          >
            {t.contact.submit} <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
