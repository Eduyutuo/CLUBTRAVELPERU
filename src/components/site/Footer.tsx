import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 rounded-2xl shadow-lg transition-transform group-hover:scale-105">
                <img src={logo} alt="Club Travel Perú Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight leading-none text-white">
                  CLUB <span className="text-accent">TRAVEL PERÚ</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">
                  Travel & Expeditions
                </span>
              </div>
            </Link>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.footer.whatsapp}</p>
                  <a href="https://wa.me/51929435139" className="text-base font-bold hover:text-accent transition-colors">+51 929 435 139</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.footer.email}</p>
                  <a href="mailto:clubtravelperu1@gmail.com" className="text-base font-bold hover:text-accent transition-colors">clubtravelperu1@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">{t.footer.navigation}</h4>
            <ul className="space-y-4">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.tours, path: "/tours" },
                { name: t.nav.about, path: "/about" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                    <span className="font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">Síguenos</h4>
            <p className="text-white/60 mb-6 font-medium leading-relaxed">Únete a nuestra comunidad de aventureros y descubre lo mejor de los Andes.</p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Clubtravelperu" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/clubtravelperu" }, // Placeholder as none provided
                { 
                  icon: () => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ), 
                  label: "TikTok", 
                  href: "https://www.tiktok.com/@clubtravelperu2?lang=en" 
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                  aria-label={social.label}
                >
                  {typeof social.icon === 'function' ? <social.icon /> : <social.icon className="w-6 h-6" />}
                </a>
              ))}
            </div>
            
            <div className="mt-12 bg-white/5 p-6 rounded-[2rem] border border-white/10">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Información Corporativa</p>
              <div className="space-y-1">
                <p className="text-xs font-bold text-white/80 uppercase tracking-tight">INVERSIONES ELSA MARIA SAC</p>
                <p className="text-xs text-white/60">RUC: 20610729968</p>
                <p className="text-xs text-white/60">La Molina, Lima</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-white/40">
            © {new Date().getFullYear()} Club Travel Perú – Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-white/40 hover:text-accent uppercase tracking-widest transition-colors">Términos</a>
            <a href="#" className="text-xs font-bold text-white/40 hover:text-accent uppercase tracking-widest transition-colors">Privacidad</a>
            <a href="#" className="text-xs font-bold text-white/40 hover:text-accent uppercase tracking-widest transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
