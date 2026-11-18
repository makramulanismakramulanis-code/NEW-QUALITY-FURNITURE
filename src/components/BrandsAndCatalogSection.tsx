import { Check, MessageCircle, RotateCcw, ShieldCheck } from 'lucide-react';
import {
  BRAND_PARTNERS,
  BrandFilter,
  CATEGORY_TABS,
  CategoryId,
  PRODUCT_CATEGORIES,
  ProductCategoryItem,
  SHOWROOM_GALLERY,
} from '../data/showroomData';
import { filterCatalogItems } from '../utils/whatsapp';
import { ShowroomImage } from './ShowroomImage';

interface BrandsAndCatalogSectionProps {
  selectedCategory: CategoryId;
  selectedBrand: BrandFilter;
  onSelectCategory: (category: CategoryId) => void;
  onSelectBrand: (brand: BrandFilter) => void;
  onInquireItem: (item: ProductCategoryItem) => void;
}

export function BrandsAndCatalogSection({
  selectedCategory,
  selectedBrand,
  onSelectCategory,
  onSelectBrand,
  onInquireItem,
}: BrandsAndCatalogSectionProps) {
  const visibleItems = filterCatalogItems(
    PRODUCT_CATEGORIES,
    selectedCategory,
    selectedBrand,
  );

  const handleBrandExplore = (brand: 'Damro' | 'Sleepwell') => {
    onSelectBrand(brand);
    onSelectCategory('all');
    const collectionsEl = document.getElementById('collections');
    if (collectionsEl) {
      collectionsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Official Brand Partners Showcase */}
      <section
        id="brands"
        aria-labelledby="brands-heading"
        className="border-y border-[#4A3525]/12 bg-[#F2ECE3]/65 py-12 sm:py-16"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] mb-2">
                Official Authorized Dealership
              </p>
              <h2
                id="brands-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#2F2015] text-balance"
              >
                Genuine Factory Brands, Backed by Official Warranty
              </h2>
            </div>
            <p className="text-sm text-[#4B5563] max-w-md">
              Every sofa, dining table, desk, and mattress at our Kadapa Road showroom is sourced
              directly from authorized brand channels at honest local rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {BRAND_PARTNERS.map((brand) => {
              const targetBrand = brand.id === 'damro' ? 'Damro' : 'Sleepwell';
              return (
                <article
                  key={brand.id}
                  className="bg-white border border-[#4A3525]/12 rounded-xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#4A3525]/70">
                        {brand.tagline}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-[#1E5631] shrink-0" aria-hidden="true" />
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#2F2015]">
                      {brand.name}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563]">
                      {brand.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm text-[#374151]">
                      {brand.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-[#1E5631] shrink-0" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#4A3525]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => handleBrandExplore(targetBrand)}
                      className="text-sm font-semibold text-[#1E5631] hover:text-[#164024] hover:underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      View {targetBrand} Collections →
                    </button>
                    <span className="text-xs font-medium text-[#6B7280]">Factory Pricing</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Catalog Grid */}
      <section
        id="collections"
        aria-labelledby="collections-heading"
        className="py-14 sm:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] mb-2">
                Original Store Products
              </p>
              <h2
                id="collections-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#2F2015] text-balance"
              >
                In-Showroom Furniture &amp; Sleep Systems
              </h2>
            </div>

            {/* Brand Quick Filter */}
            <div className="flex items-center gap-2 self-start lg:self-auto" role="group" aria-label="Filter by brand">
              {(['all', 'Damro', 'Sleepwell'] as BrandFilter[]).map((brand) => {
                const isActive = selectedBrand === brand;
                return (
                  <button
                    key={brand}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onSelectBrand(brand)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3525] ${
                      isActive
                        ? 'bg-[#4A3525] text-white'
                        : 'bg-[#F2ECE3] text-[#4A3525] hover:bg-[#E7DDD0]'
                    }`}
                  >
                    {brand === 'all' ? 'All Brands' : brand}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex items-center gap-1.5 p-1.5 bg-[#F2ECE3] rounded-xl mb-10 border border-[#4A3525]/10 overflow-x-auto"
          >
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3525] ${
                    isSelected
                      ? 'bg-white text-[#2F2015] shadow-xs font-semibold'
                      : 'text-[#4B5563] hover:text-[#2F2015]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Results Grid or Empty State */}
          {visibleItems.length === 0 ? (
            <div
              data-testid="empty-catalog-state"
              className="bg-white border border-[#4A3525]/12 rounded-xl p-10 text-center max-w-xl mx-auto"
            >
              <p className="font-display text-xl font-semibold text-[#2F2015]">
                No collections match both filters together
              </p>
              <p className="mt-2 text-sm text-[#4B5563]">
                {selectedBrand} does not carry items in the selected category. Reset filters to view
                all Damro and Sleepwell showroom collections.
              </p>
              <button
                type="button"
                onClick={() => {
                  onSelectCategory('all');
                  onSelectBrand('all');
                }}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#4A3525] hover:bg-[#2F2015] rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Show All Collections</span>
              </button>
            </div>
          ) : (
            <div
              data-testid="catalog-grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {visibleItems.map((item) => (
                <article
                  key={item.id}
                  data-testid={`product-card-${item.id}`}
                  className="group bg-white border border-[#4A3525]/12 rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE8DE]">
                      <ShowroomImage
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fallbackTitle={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-6 sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631]">
                        {item.brandLabel}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-bold text-[#2F2015]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[#4A3525]">{item.subtitle}</p>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563]">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-[#4A3525]/10 text-xs sm:text-sm text-[#4B5563] flex flex-wrap items-center gap-x-2 gap-y-1">
                        {item.variants.map((variant, index) => (
                          <span key={variant} className="inline-flex items-center gap-2">
                            {index > 0 && (
                              <span aria-hidden="true" className="text-[#4A3525]/35">
                                ·
                              </span>
                            )}
                            <span>{variant}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs font-medium text-[#6B7280]">{item.warrantyText}</span>

                    <button
                      type="button"
                      onClick={() => onInquireItem(item)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1E5631] hover:bg-[#164024] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Inquire Price on WhatsApp</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Inside Our Pileru Showroom Floor Strip */}
          <div className="mt-16 pt-12 border-t border-[#4A3525]/12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631] mb-1">
                  Inside Our Pileru Showroom
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2F2015]">
                  More Ready-to-Deliver Store Displays
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                All photographs taken directly at our Kadapa Rd showroom floor.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SHOWROOM_GALLERY.map((photo) => (
                <figure
                  key={photo.id}
                  className="bg-white border border-[#4A3525]/12 rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE8DE]">
                    <ShowroomImage
                      src={photo.imageUrl}
                      alt={photo.imageAlt}
                      fallbackTitle={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="p-3.5 sm:p-4">
                    <p className="font-semibold text-sm text-[#2F2015] leading-snug">
                      {photo.title}
                    </p>
                    <p className="text-xs text-[#4B5563] mt-1">{photo.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
