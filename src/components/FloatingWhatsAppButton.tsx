import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function FloatingWhatsAppButton() {
  const url = buildWhatsAppUrl(
    'Hello New Quality Furniture (Pileru), I would like to ask about furniture prices and availability.',
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with New Quality Furniture on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2.5 h-12 px-4 sm:px-5 rounded-full bg-[#1E5631] hover:bg-[#164024] text-white text-sm font-semibold shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp Showroom</span>
    </a>
  );
}
