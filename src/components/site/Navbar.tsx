import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { id: "inicio", key: "home" as const },
  { id: "tours", key: "tours" as const },
  { id: "nosotros", key: "about" as const },
  { id: "contacto", key: "contact" as const },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Club Travel Peru" className="h-14 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className={`hidden sm:flex items-center text-xs font-semibold rounded-full border overflow-hidden ${
              scrolled ? "border-border" : "border-white/30"
            }`}
          >
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            <a href="#contacto">{t.nav.cta}</a>
          </Button>
          <button
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-sm font-medium" onClick={() => setOpen(false)}>
                {t.nav[l.key]}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs uppercase rounded-full border ${
                    lang === l ? "bg-primary text-primary-foreground border-primary" : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 rounded-full mt-2">
              <a href="#contacto">{t.nav.cta}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
