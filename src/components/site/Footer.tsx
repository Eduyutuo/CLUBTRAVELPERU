import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-bold text-lg tracking-tight">
              CLUB <span className="text-accent">TRAVEL PERU</span>
            </div>
            <p className="mt-1 text-xs text-primary-foreground/50 uppercase tracking-widest">INVERSIONES ELSA MARIA SAC</p>
            <p className="mt-1 text-[10px] text-primary-foreground/40 uppercase tracking-tight">Representante: NESTOR PAREDES FLORES</p>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-sm">{t.footer.tagline}</p>
            <p className="mt-2 text-xs text-primary-foreground/50">RUC: 20610729968</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:clubtravelperu1@gmail.com" className="hover:text-accent transition-colors">
                  clubtravelperu1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="https://wa.me/51929435139" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +51 929 435 139
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Calle Rinconada 121, La Molina, Lima
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">{t.footer.follow}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Clubtravelperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook Club Travel Peru"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@clubtravelperu2?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="TikTok Club Travel Peru"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Club Travel Peru – INVERSIONES ELSA MARIA SAC. {t.footer.rights}</p>
          <p>Turismo Receptivo · Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
}
