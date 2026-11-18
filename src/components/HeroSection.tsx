import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';
import { ShowroomImage } from './ShowroomImage';

export function HeroSection() {
  return (
    <section id="top" className="pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#1E5631] mb-4">
              {SHOWROOM_INFO.dealerBadge} · Pileru, Andhra Pradesh
            </p>

            <h1 className="font-display text-[clamp(2.1rem,3.8vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-[#2F2015] text-balance">
              Transform Your Home &amp; Office with Pileru’s Most Trusted Furniture Showroom.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] max-w-xl">
              Explore premium Damro sofas, dining sets, office tables, and authentic Sleepwell
              mattresses at reasonable rates—with fast local door delivery.
            </p>

            {/* Primary & Secondary Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#4A3525] hover:bg-[#2F2015] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3525]"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#showroom"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#4A3525] bg-transparent border border-[#4A3525]/30 hover:bg-[#F2ECE3] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3525]"
              >
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Get Directions</span>
              </a>

              <a
                href={SHOWROOM_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-[#1E5631] hover:text-[#164024] hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">Call {SHOWROOM_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Unboxed Local Trust Marker Directly Under CTAs */}
            <div className="mt-7 pt-6 border-t border-[#4A3525]/12 flex flex-col gap-1.5 text-sm text-[#374151]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1 text-[#D97706]" aria-label="5 out of 5 stars">
                  <Star className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                </span>
                <span className="font-semibold text-[#1F2937] tabular-nums">
                  {SHOWROOM_INFO.ratingScore} Rated by {SHOWROOM_INFO.reviewCount} Happy Customers in Pileru
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                {SHOWROOM_INFO.hours} · Kadapa Rd, Opposite Bajaj Showroom
              </p>
            </div>
          </div>

          {/* Right Authentic Showroom Collage Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <figure className="relative flex-1 rounded-xl overflow-hidden border border-[#4A3525]/12 bg-[#EFE8DE] aspect-[16/10] lg:aspect-auto lg:min-h-[290px]">
              <ShowroomImage
                src={SHOWROOM_INFO.heroMainImageUrl}
                alt="Inside New Quality Furniture showroom in Pileru showing sofas, center coffee tables, and walnut wall units"
                fallbackTitle="New Quality Furniture Showroom"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 py-3 text-xs font-medium text-[#FAF8F5]">
                Kadapa Road Showroom Floor · Live Damro &amp; Sleepwell Displays
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              <figure className="relative rounded-xl overflow-hidden border border-[#4A3525]/12 bg-[#EFE8DE] aspect-[4/3]">
                <ShowroomImage
                  src={SHOWROOM_INFO.heroDamroDisplayUrl}
                  alt="Damro slate-grey and teal 3+1+1 living room sofa display inside Pileru showroom"
                  fallbackTitle="Damro Living Collection"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 py-2 text-xs font-medium text-[#FAF8F5]">
                  Damro Sofa Sets
                </figcaption>
              </figure>

              <figure className="relative rounded-xl overflow-hidden border border-[#4A3525]/12 bg-[#EFE8DE] aspect-[4/3]">
                <ShowroomImage
                  src={SHOWROOM_INFO.heroSleepwellDisplayUrl}
                  alt="Sleepwell orthopedic mattresses and pillows display inside Pileru showroom"
                  fallbackTitle="Sleepwell Comfort Gallery"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 py-2 text-xs font-medium text-[#FAF8F5]">
                  Sleepwell Mattresses
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
