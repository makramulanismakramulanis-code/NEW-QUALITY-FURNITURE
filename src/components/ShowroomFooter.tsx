import { Clock, ExternalLink, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { buildGoogleMapsDirectionsUrl, buildWhatsAppUrl } from '../utils/whatsapp';

export function ShowroomFooter() {
  const mapsUrl = buildGoogleMapsDirectionsUrl();
  const whatsappUrl = buildWhatsAppUrl(
    'Hello New Quality Furniture (Pileru), I plan to visit your Kadapa Rd showroom and would like directions or assistance.',
  );

  return (
    <footer className="bg-[#2F2015] text-[#FAF8F5] border-t border-[#4A3525]">
      {/* Visit Our Showroom Section */}
      <section
        id="showroom"
        aria-labelledby="showroom-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Contact & Showroom Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-2">
                Visit Our Showroom
              </p>
              <h2
                id="showroom-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#FAF8F5] text-balance"
              >
                Experience Comfort in Person on Kadapa Road, Pileru
              </h2>
              <p className="mt-4 text-base text-[#E7DDD0] leading-relaxed max-w-lg">
                Test our Damro recliner mechanisms, compare Sleepwell orthopedic firmness levels,
                and inspect solid wood finishes with our showroom team.
              </p>

              <dl className="mt-8 space-y-5 text-sm sm:text-base">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D97706] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#C7B8A5]">
                      Showroom Address
                    </dt>
                    <dd className="mt-1 text-[#FAF8F5] font-medium">
                      {SHOWROOM_INFO.addressLine1}
                      <br />
                      {SHOWROOM_INFO.addressLine2}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#D97706] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#C7B8A5]">
                      Store Hours
                    </dt>
                    <dd className="mt-1 text-[#FAF8F5] font-medium">{SHOWROOM_INFO.hours}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#D97706] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#C7B8A5]">
                      Phone &amp; WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={SHOWROOM_INFO.phoneHref}
                        className="text-[#FAF8F5] font-semibold hover:text-[#D97706] transition-colors tabular-nums underline underline-offset-4 decoration-[#FAF8F5]/30"
                      >
                        {SHOWROOM_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#2F2015] bg-[#FAF8F5] hover:bg-[#EFE8DE] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1E5631] hover:bg-[#164024] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Showroom Exterior + Landmark Map Card */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl overflow-hidden border border-[#FAF8F5]/15 bg-[#3B2A1D] flex flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D97706]">
                    Pileru Storefront &amp; Landmark Map
                  </p>
                  <p className="font-display text-xl font-bold text-[#FAF8F5] mt-1">
                    Kadapa Rd · Opposite Bajaj Showroom
                  </p>
                </div>
                <span className="text-xs font-medium text-[#E7DDD0] tabular-nums shrink-0 pt-1">
                  PIN 517214
                </span>
              </div>

              {/* Authentic Showroom Building Exterior Photo */}
              <div className="mb-4 rounded-lg overflow-hidden border border-[#FAF8F5]/15 bg-[#2A1D13] aspect-[16/9]">
                <img
                  src={SHOWROOM_INFO.storeExteriorImageUrl}
                  alt="New Quality Furniture building exterior on Kadapa Rd, Pileru featuring Damro and Sleepwell Gallery signage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Clean Architectural Street Map Diagram */}
              <div className="relative flex-1 rounded-lg bg-[#2A1D13] border border-[#FAF8F5]/10 p-4 sm:p-5 overflow-hidden flex flex-col justify-between">
                <svg
                  viewBox="0 0 480 210"
                  aria-hidden="true"
                  className="w-full h-44 sm:h-48 text-[#FAF8F5]"
                >
                  {/* Subtle neighborhood blocks */}
                  <rect x="20" y="14" width="145" height="62" rx="6" fill="#3B2A1D" opacity="0.6" />
                  <rect x="315" y="14" width="145" height="62" rx="6" fill="#3B2A1D" opacity="0.6" />
                  <rect x="20" y="134" width="165" height="62" rx="6" fill="#3B2A1D" opacity="0.6" />
                  <rect x="285" y="134" width="175" height="62" rx="6" fill="#3B2A1D" opacity="0.6" />

                  {/* Main Kadapa Rd Horizontal Artery */}
                  <line x1="0" y1="106" x2="480" y2="106" stroke="#D97706" strokeWidth="12" strokeOpacity="0.35" />
                  <line x1="0" y1="106" x2="480" y2="106" stroke="#FAF8F5" strokeWidth="1.5" strokeDasharray="8 6" strokeOpacity="0.45" />

                  {/* Cross street */}
                  <line x1="235" y1="0" x2="235" y2="210" stroke="#FAF8F5" strokeWidth="4" strokeOpacity="0.14" />

                  {/* Road & Direction Labels */}
                  <text x="16" y="95" fill="#E7DDD0" fontSize="10" fontWeight="600" letterSpacing="0.8">
                    ← TOWARDS KADAPA
                  </text>
                  <text x="464" y="95" textAnchor="end" fill="#E7DDD0" fontSize="10" fontWeight="600" letterSpacing="0.8">
                    PILERU CENTER / TIRUPATI →
                  </text>
                  <text x="120" y="126" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="600" letterSpacing="1">
                    KADAPA ROAD (NH 40)
                  </text>

                  {/* Opposite Landmark: Bajaj Showroom */}
                  <rect x="315" y="146" width="126" height="36" rx="5" fill="#4A3525" stroke="#FAF8F5" strokeOpacity="0.28" />
                  <text x="378" y="168" textAnchor="middle" fill="#E7DDD0" fontSize="11" fontWeight="500">
                    Bajaj Showroom
                  </text>

                  {/* New Quality Furniture Showroom Pin */}
                  <rect x="195" y="18" width="176" height="52" rx="8" fill="#1E5631" stroke="#FAF8F5" strokeOpacity="0.45" />
                  <text x="283" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    New Quality Furniture
                  </text>
                  <text x="283" y="56" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    Damro &amp; Sleepwell Dealer
                  </text>
                  <circle cx="283" cy="84" r="5.5" fill="#D97706" />
                </svg>

                <div className="mt-3 pt-3 border-t border-[#FAF8F5]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs text-[#E7DDD0]">
                    Easy customer parking right in front of the showroom on Kadapa Rd.
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] hover:text-[#FBBF24] whitespace-nowrap shrink-0"
                  >
                    <span>Get Turn-by-Turn Route</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Legal & Navigation Strip */}
      <div className="border-t border-[#FAF8F5]/12 bg-[#241810]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-5 pb-20 sm:pb-16 lg:pb-6 lg:pr-56 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7B8A5]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SHOWROOM_INFO.businessName} · {SHOWROOM_INFO.dealerBadge}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a href="#collections" className="hover:text-[#FAF8F5] transition-colors">
              Collections
            </a>
            <a href="#brands" className="hover:text-[#FAF8F5] transition-colors">
              Brands
            </a>
            <a href="#reviews" className="hover:text-[#FAF8F5] transition-colors">
              Reviews
            </a>
            <a href={SHOWROOM_INFO.phoneHref} className="hover:text-[#FAF8F5] transition-colors tabular-nums">
              {SHOWROOM_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
