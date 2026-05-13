import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
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
    setTimeout(() => {
      console.log("Form data:", data);
      toast.success(t.contact.success);
      reset();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block">
                {t.contact.eyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                {t.contact.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Phone, label: "Teléfono / WhatsApp", value: "+51 929 435 139", color: "text-green-600" },
                { icon: Mail, label: "Correo Electrónico", value: "clubtravelperu1@gmail.com", color: "text-blue-600" },
                { icon: MapPin, label: "Oficina Central", value: "Calle Rinconada 121, La Molina, Lima", color: "text-accent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-muted flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-white`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-base font-bold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-accent/10 p-8 rounded-[2rem] border border-accent/20 flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-accent mt-1" />
              <div>
                <h4 className="font-bold text-foreground">Respuesta en menos de 1 hora</h4>
                <p className="text-sm text-muted-foreground">Nuestro equipo de expedición está listo para ayudarte a planificar tu próxima gran aventura.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card border border-border/50 rounded-[3rem] p-10 md:p-12 space-y-8 shadow-premium"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1">{t.contact.name}</Label>
                  <Input 
                    id="name" 
                    {...register("name")} 
                    placeholder="Tu nombre"
                    className={`h-12 rounded-xl border-border/50 bg-muted/20 px-4 focus:ring-accent ${errors.name ? "border-destructive" : ""}`} 
                  />
                  {errors.name && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1">{t.contact.email}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register("email")} 
                    placeholder="correo@ejemplo.com"
                    className={`h-12 rounded-xl border-border/50 bg-muted/20 px-4 focus:ring-accent ${errors.email ? "border-destructive" : ""}`} 
                  />
                  {errors.email && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest ml-1">{t.contact.phone}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    {...register("phone")} 
                    placeholder="+51 ..."
                    className={`h-12 rounded-xl border-border/50 bg-muted/20 px-4 focus:ring-accent ${errors.phone ? "border-destructive" : ""}`} 
                  />
                  {errors.phone && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="destination" className="text-xs font-bold uppercase tracking-widest ml-1">{t.contact.destination}</Label>
                  <select
                    id="destination"
                    {...register("destination")}
                    className={`flex h-12 w-full rounded-xl border border-border/50 bg-muted/20 px-4 py-1 text-sm shadow-sm transition-all focus:ring-2 focus:ring-accent outline-none appearance-none ${errors.destination ? 'border-destructive' : ''}`}
                  >
                    <option value="">{lang === "es" ? "Seleccione destino..." : "Select destination..."}</option>
                    {t.contact.destinations.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.destination && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.destination.message}</p>}
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-2xl h-16 text-lg font-bold shadow-premium transition-all hover:scale-[1.02] active:scale-95 mt-4"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {lang === "es" ? "Enviando..." : "Sending..."}
                  </span>
                ) : (
                  <>
                    {t.contact.submit} <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
