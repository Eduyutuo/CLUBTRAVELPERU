import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "51929435139";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20tours%20en%20Per%C3%BA.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="text-sm font-semibold whitespace-nowrap hidden group-hover:inline transition-all">
          WhatsApp
        </span>
      </span>
    </a>
  );
}
