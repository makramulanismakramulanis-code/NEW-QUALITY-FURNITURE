import { Award, BadgeIndianRupee, Quote, Star, Truck, Users } from 'lucide-react';
import { CUSTOMER_REVIEWS, SHOWROOM_INFO, VALUE_PROPOSITIONS } from '../data/showroomData';

const PROP_ICONS: Record<string, typeof Star> = {
  'google-rated': Award,
  'reasonable-rates': BadgeIndianRupee,
  'doorstep-delivery': Truck,
  'expert-staff': Users,
};

export function WhyChooseAndReviewsSection() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section
        aria-labelledby="why-choose-heading"
        className="border-t border-[#4A3525]/12 bg-[#F2ECE3]/55 py-14 sm:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] mb-2">
              Why Pileru Families Trust Us
            </p>
            <h2
              id="why-choose-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-[#2F2015] text-balance"
            >
              Honest Guidance, Fair Pricing, and Care After Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((prop) => {
              const IconComponent = PROP_ICONS[prop.id] || Award;
              return (
                <div
                  key={prop.id}
                  className="bg-white border border-[#4A3525]/12 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#4A3525]/12 text-[#4A3525]">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] tabular-nums">
                        {prop.metric}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#2F2015]">{prop.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Reviews & Social Proof Section */}
      <section
        id="reviews"
        aria-labelledby="reviews-heading"
        className="border-t border-[#4A3525]/12 py-14 sm:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] mb-2">
                Verified Local Feedback
              </p>
              <h2
                id="reviews-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#2F2015] text-balance"
              >
                Loved by Homeowners &amp; Offices Across Pileru
              </h2>
            </div>

            {/* Prominent 5.0/5.0 Google Review Summary Block */}
            <div className="bg-white border border-[#4A3525]/15 rounded-xl px-6 py-4 flex items-center gap-5 shrink-0">
              <div>
                <p className="font-display text-3xl font-bold text-[#2F2015] tabular-nums leading-none">
                  {SHOWROOM_INFO.ratingScore}
                  <span className="text-lg font-sans font-medium text-[#6B7280]"> / 5.0</span>
                </p>
                <p className="mt-1 text-xs font-medium text-[#4B5563]">
                  Google Reviews ({SHOWROOM_INFO.reviewCount} ratings)
                </p>
              </div>
              <div className="flex items-center gap-0.5 text-[#D97706]" aria-label="5 out of 5 stars on Google">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review) => (
              <blockquote
                key={review.id}
                className="bg-white border border-[#4A3525]/12 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-0.5 text-[#D97706]" aria-label="5 stars">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#4A3525]/25" aria-hidden="true" />
                  </div>

                  <p className="font-display text-lg sm:text-xl leading-snug text-[#2F2015]">
                    “{review.quote}”
                  </p>
                </div>

                <footer className="mt-6 pt-4 border-t border-[#4A3525]/10 text-xs text-[#4B5563]">
                  <p className="font-semibold text-[#1F2937]">{review.reviewer}</p>
                  <p className="mt-0.5">
                    {review.context} · {review.verifiedLabel}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
