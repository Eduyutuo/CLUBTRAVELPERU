import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-bold text-lg tracking-tight">
              INVERSIONES <span className="text-accent">ELSA MARÍA</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-sm">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@elsamaria.travel</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +51 984 000 000</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Cusco, Perú</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t.footer.follow}</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Inversiones Elsa María. {t.footer.rights}</p>
          <p>Made with care in the Andes.</p>
        </div>
      </div>
    </footer>
  );
}
