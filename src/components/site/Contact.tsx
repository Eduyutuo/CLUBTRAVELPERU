import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

export function Contact() {
  const { t, lang } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, { message: lang === "es" ? "El nombre es muy corto" : "Name is too short" }),
    email: z.string().email({ message: lang === "es" ? "Correo electrónico inválido" : "Invalid email address" }),
    phone: z.string().min(6, { message: lang === "es" ? "Número de teléfono inválido" : "Invalid phone number" }),
    destination: z.string().min(1, { message: lang === "es" ? "Selecciona un destino" : "Select a destination" }),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", data);
      toast.success(t.contact.success);
      reset();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: "var(--gradient-earth)" }}
      />
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto bg-card border rounded-3xl p-8 md:p-10 space-y-6"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.name}</Label>
              <Input id="name" {...register("name")} className={errors.name ? "border-destructive" : ""} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.email}</Label>
              <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">{t.contact.phone}</Label>
              <Input id="phone" type="tel" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">{t.contact.destination}</Label>
              <select
                id="destination"
                {...register("destination")}
                className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.destination ? 'border-destructive' : 'border-input'}`}
              >
                <option value="">{lang === "es" ? "Seleccione destino..." : "Select destination..."}</option>
                {t.contact.destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.destination && <p className="text-xs text-destructive">{errors.destination.message}</p>}
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 text-base mt-4 transition-all"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {lang === "es" ? "Enviando..." : "Sending..."}
              </span>
            ) : (
              <>
                {t.contact.submit} <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
