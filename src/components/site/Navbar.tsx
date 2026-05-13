import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 overflow-hidden shadow-xl"
          >
            <nav className="container mx-auto px-6 py-10 flex flex-col gap-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              {links.map((l, i) => (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={l.id} 
                    className="text-2xl font-black text-foreground hover:text-accent transition-colors flex items-center justify-between"
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[l.key]}
                    <div className="w-8 h-[2px] bg-accent/20" />
                  </Link>
                </motion.div>
              ))}
              <div className="h-[1px] w-full bg-border/50 my-2" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">Seleccionar Idioma</span>
                </div>
                <div className="flex gap-3">
                  {(["es", "en"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setOpen(false); }}
                      className={`flex-1 py-4 text-sm font-black uppercase rounded-2xl border-2 transition-all ${
                        lang === l ? "bg-accent text-white border-accent shadow-premium" : "border-border/50 text-muted-foreground hover:border-accent/30"
                      }`}
                    >
                      {l === "es" ? "Español" : "English"}
                    </button>
                  ))}
                </div>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-[2rem] h-16 text-lg font-black shadow-premium mt-4">
                <Link to="/contact" onClick={() => setOpen(false)}>{t.nav.cta}</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
