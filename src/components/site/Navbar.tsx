import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { id: "/", key: "home" as const },
  { id: "/tours", key: "tours" as const },
  { id: "/about", key: "about" as const },
  { id: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClasses = scrolled 
    ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm h-20" 
    : isHome 
      ? "bg-transparent h-24" 
      : "bg-background/80 backdrop-blur-xl border-b border-border/40 h-20";

  const linkClasses = (scrolled || !isHome)
    ? "text-foreground/80 hover:text-accent"
    : "text-white/80 hover:text-white";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${navClasses}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 transition-transform group-hover:scale-105">
            <img src={logo} alt="Club Travel Perú Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold tracking-tight leading-none ${scrolled || !isHome ? "text-foreground" : "text-white"}`}>
              CLUB <span className="text-accent">TRAVEL PERÚ</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${scrolled || !isHome ? "text-muted-foreground" : "text-white/60"}`}>
              Travel & Expeditions
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.id}
              className={`text-sm font-semibold tracking-wide transition-all relative group ${linkClasses}`}
            >
              {t.nav[l.key]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className={`hidden sm:flex items-center gap-1 p-1 rounded-full border ${scrolled || !isHome ? "border-border bg-muted/30" : "border-white/20 bg-white/5"}`}>
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full transition-all ${
                  lang === l
                    ? "bg-accent text-white shadow-sm"
                    : scrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-premium transition-all hover:scale-105 active:scale-95">
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>

          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome ? "text-foreground bg-muted" : "text-white bg-white/10"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 overflow-hidden"
        >
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <Link 
                key={l.id} 
                to={l.id} 
                className="text-lg font-bold text-foreground hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <div className="h-[1px] w-full bg-border/50" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Idioma</span>
              </div>
              <div className="flex gap-2">
                {(["es", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`px-4 py-2 text-xs font-bold uppercase rounded-xl border ${
                      lang === l ? "bg-accent text-white border-accent" : "border-border text-muted-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-2xl h-14 text-lg font-bold shadow-premium">
              <Link to="/contact" onClick={() => setOpen(false)}>{t.nav.cta}</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
