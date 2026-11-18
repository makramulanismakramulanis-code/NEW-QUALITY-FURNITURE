import { useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Brands', href: '#brands' },
  { label: 'Customer Reviews', href: '#reviews' },
  { label: 'Visit Showroom', href: '#showroom' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generalWhatsAppUrl = buildWhatsAppUrl(
    'Hello New Quality Furniture (Pileru), I would like to inquire about Damro furniture and Sleepwell mattresses.',
  );

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#4A3525]/12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#4A3525] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5631]"
        >
          {SHOWROOM_INFO.businessName}
        </a>

        {/* Zone 2: Concise single-line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#374151]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#4A3525] hover:underline underline-offset-4 decoration-[#4A3525]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5631]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#1E5631] hover:bg-[#164024] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#4A3525]/20 text-[#4A3525] hover:bg-[#4A3525]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#4A3525]/12 bg-[#FAF8F5] px-4 py-4 space-y-2"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-medium text-[#1F2937] hover:bg-[#F2ECE3] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#4A3525]/12 flex flex-col sm:flex-row gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#1E5631] hover:bg-[#164024] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={SHOWROOM_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#4A3525] border border-[#4A3525]/25 hover:bg-[#F2ECE3] rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call {SHOWROOM_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
