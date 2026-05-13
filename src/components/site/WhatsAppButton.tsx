import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "51929435139";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20tours%20en%20Per%C3%BA.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-8 right-8 z-[100] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 group-hover:rounded-3xl group-hover:scale-110">
        <MessageCircle className="w-10 h-10 fill-current" />
        <span className="absolute right-full mr-6 py-3 px-6 bg-white text-foreground text-sm font-bold rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border/50">
          ¿En qué podemos ayudarte?
        </span>
      </span>
    </a>
  );
}
