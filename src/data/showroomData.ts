export type CategoryId = 'all' | 'sofas' | 'dining' | 'office' | 'mattresses' | 'tables';
export type BrandFilter = 'all' | 'Damro' | 'Sleepwell';

export interface ProductCategoryItem {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  brand: 'Damro' | 'Sleepwell';
  brandLabel: string;
  title: string;
  subtitle: string;
  description: string;
  variants: string[];
  warrantyText: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BrandShowcaseItem {
  id: 'damro' | 'sleepwell';
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  metric: string;
}

export interface CustomerReview {
  id: string;
  quote: string;
  reviewer: string;
  context: string;
  rating: number;
  verifiedLabel: string;
}

export interface ShowroomGalleryPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
}

export const SHOWROOM_INFO = {
  businessName: 'NEW QUALITY FURNITURE',
  dealerBadge: 'Authorized Damro & Sleepwell Dealer',
  phoneDisplay: '094418 82939',
  phoneHref: 'tel:+919441882939',
  whatsappNumber: '919441882939',
  addressLine1: 'Kadapa Rd, Opposite Bajaj Showroom',
  addressLine2: 'Pileru, Andhra Pradesh 517214',
  fullAddress: 'New Quality Furniture, Kadapa Rd, Opposite Bajaj Showroom, Pileru, Andhra Pradesh 517214',
  hours: 'Open Daily · Closes at 8:00 PM',
  ratingScore: '5.0',
  reviewCount: '66+',
  heroMainImageUrl: '/src/assets/images/hero_showroom_floor_1794995866484.jpg',
  heroDamroDisplayUrl: '/src/assets/images/hero_damro_sofa_set_1794995877074.jpg',
  heroSleepwellDisplayUrl: '/src/assets/images/hero_sleepwell_display_1794995867245.jpg',
  storeExteriorImageUrl: '/src/assets/images/store_exterior_front_1794995879204.jpg',
};

export const CATEGORY_TABS: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Collections' },
  { id: 'sofas', label: 'Sofas & Recliners' },
  { id: 'dining', label: 'Dining Sets' },
  { id: 'office', label: 'Office Furniture' },
  { id: 'mattresses', label: 'Sleepwell Mattresses' },
  { id: 'tables', label: 'TV Units & Tables' },
];

export const BRAND_PARTNERS: BrandShowcaseItem[] = [
  {
    id: 'damro',
    name: 'DAMRO FURNITURE',
    tagline: 'Official Authorized Showroom Partner',
    description:
      'Complete range of Damro living room sofas, solid wood dining sets, TV entertainment units, and ergonomic office furniture backed by genuine manufacturer warranty and transparent factory pricing.',
    highlights: ['Genuine Damro Warranty', 'Factory-Direct Value Rates', 'Free Local Showroom Consultation'],
  },
  {
    id: 'sleepwell',
    name: 'SLEEPWELL MATTRESSES',
    tagline: 'Certified Sleepwell Comfort Gallery',
    description:
      'Authentic Sleepwell orthopedic, memory foam, and pocket-spring mattresses tailored to every sleeping posture—paired with solid wood and engineered King & Queen cots.',
    highlights: ['100% Authentic Sleepwell Seal', 'Orthopedic & Memory Foam Range', 'Custom Cot Size Sizing'],
  },
];

export const PRODUCT_CATEGORIES: ProductCategoryItem[] = [
  {
    id: 'luxury-sofas-recliners',
    category: 'sofas',
    brand: 'Damro',
    brandLabel: 'Damro Living · Fabric & Leatherette',
    title: 'Luxury Sofas & Recliners',
    subtitle: '3+1+1 Sets, Plush Recliners & Loungers',
    description:
      'In-stock beige and rust suede recliners and 3-seater living sets on display at our Pileru showroom with smooth manual and power reclining comfort.',
    variants: ['3+1+1 Recliner Set', 'Single Manual Recliner', '3-Seater Recliner Sofa'],
    warrantyText: 'Genuine Damro Structural Warranty',
    imageUrl: '/src/assets/images/prod_luxury_recliners_1794995876609.jpg',
    imageAlt: 'Beige and rust brown plush recliner sofa sets displayed inside New Quality Furniture showroom',
  },
  {
    id: 'l-shape-corner-sofas',
    category: 'sofas',
    brand: 'Damro',
    brandLabel: 'Damro Living · Corner Loungers',
    title: 'Tufted L-Shape Corner Sofas',
    subtitle: 'Quilted Backrest, Adjustable Headrests & Cupholders',
    description:
      'Spacious L-shaped corner sofas featuring diamond-tufted cushioning, adjustable headrests, and integrated armrest cupholders for family living rooms.',
    variants: ['Left / Right L-Shape', 'Adjustable Headrests', 'Built-In Cupholders'],
    warrantyText: 'In Stock for Quick Local Delivery',
    imageUrl: '/src/assets/images/prod_lshape_corner_sofa_1794995869743.jpg',
    imageAlt: 'Grey tufted L-shape corner sofa with adjustable headrests and armrest cupholders in showroom',
  },
  {
    id: 'convertible-sofa-cum-beds',
    category: 'sofas',
    brand: 'Damro',
    brandLabel: 'Damro Dual-Purpose · Guest & Living',
    title: 'Pull-Out Sofa-Cum-Beds',
    subtitle: 'Space-Saving Sleeper with Cupholder Armrests',
    description:
      'Convertible tufted grey sofa-cum-bed with pull-out sleeper trundle and matching throw pillows—ideal for compact homes and guest rooms.',
    variants: ['2-Seater Pull-Out', '3-Seater Sleeper Bed', 'Charcoal Grey Fabric'],
    warrantyText: 'Genuine Damro Mechanism Warranty',
    imageUrl: '/src/assets/images/prod_sofa_cum_bed_1794995869626.jpg',
    imageAlt: 'Grey pull-out convertible sofa-cum-bed extended on showroom floor',
  },
  {
    id: 'dining-tables-sets',
    category: 'dining',
    brand: 'Damro',
    brandLabel: 'Damro Dining · Solid Hardwood',
    title: 'Solid Wood Dining Sets',
    subtitle: '4-Seater & 6-Seater Natural Grain Tables',
    description:
      'Rich natural-grain solid wood dining tables paired with slatted high-back chairs and cushioned seats for everyday family dining.',
    variants: ['4-Seater Compact', '6-Seater Family', 'Dining Bench Option'],
    warrantyText: 'Factory Pricing & Home Assembly',
    imageUrl: '/src/assets/images/prod_solid_wood_dining_1794995871102.jpg',
    imageAlt: 'Solid wood dining tables with slatted chairs displayed in showroom dining gallery',
  },
  {
    id: 'walnut-dining-collections',
    category: 'dining',
    brand: 'Damro',
    brandLabel: 'Damro Dining · Dark Espresso & Walnut',
    title: 'Dark Walnut Dining Collections',
    subtitle: 'Sleek Espresso Finish with Upholstered Chairs',
    description:
      'Modern dark walnut rectangular dining sets with cushioned fabric seats—durable finishes designed for easy cleaning and long-term daily use.',
    variants: ['4-Seater Espresso', '6-Seater Espresso', 'Cushioned Chair Set'],
    warrantyText: 'Factory Pricing & Home Assembly',
    imageUrl: '/src/assets/images/prod_walnut_dining_set_1794995871546.jpg',
    imageAlt: 'Dark espresso finish dining tables and cushioned chairs lined up in showroom',
  },
  {
    id: 'office-tables-chairs',
    category: 'office',
    brand: 'Damro',
    brandLabel: 'Damro Workspace · Home & Corporate',
    title: 'Office Tables & Ergonomic Chairs',
    subtitle: 'Executive Desks, Study Tables & High-Back Chairs',
    description:
      'Complete office setups featuring spacious walnut work desks and ergonomic high-back mesh and leatherette revolving chairs.',
    variants: ['Executive Manager Desk', 'Home Study Table', 'High-Back Ergonomic Chair'],
    warrantyText: 'Bulk & Individual Orders Welcome',
    imageUrl: '/src/assets/images/prod_office_desks_chairs_1794995872219.jpg',
    imageAlt: 'Dark walnut executive office tables paired with black high-back revolving chairs in showroom',
  },
  {
    id: 'sleepwell-mattresses-beds',
    category: 'mattresses',
    brand: 'Sleepwell',
    brandLabel: 'Sleepwell Authorized · Orthopedic & Memory Foam',
    title: 'Sleepwell Mattresses & Beds',
    subtitle: 'Orthopedic, Memory Foam & King / Queen Cots',
    description:
      'Full Sleepwell gallery aisle stocking genuine orthopedic, dual-comfort, and memory foam mattresses alongside engineered and solid wood King & Queen cots.',
    variants: ['Orthopedic Spine Care', 'Memory Foam Plush', 'King & Queen Storage Cots'],
    warrantyText: 'Official Sleepwell Manufacturer Warranty',
    imageUrl: '/src/assets/images/prod_sleepwell_aisle_1794995871902.jpg',
    imageAlt: 'Sleepwell mattress and wooden cot gallery aisle inside New Quality Furniture showroom',
  },
  {
    id: 'tv-wall-units-tables',
    category: 'tables',
    brand: 'Damro',
    brandLabel: 'Damro Living · Entertainment & Storage',
    title: 'TV Wall Units & Center Tables',
    subtitle: 'Walnut Showcase Units & Coffee Tables',
    description:
      'Two-tone walnut and cream TV entertainment wall units with glass display cabinets and open media shelving to anchor your living room.',
    variants: ['Full Glass-Door Wall Unit', 'Low TV Console Stand', 'Matching Coffee Table'],
    warrantyText: 'Complete Home Installation Available',
    imageUrl: '/src/assets/images/prod_tv_wall_unit_1794995958248.jpg',
    imageAlt: 'Walnut and cream TV entertainment wall unit with glass display cabinet in showroom',
  },
];

export const SHOWROOM_GALLERY: ShowroomGalleryPhoto[] = [
  {
    id: 'gallery-recliner-floor',
    title: 'Main Living & Recliner Floor',
    caption: 'Try 20+ sofa and recliner sets in person',
    imageUrl: '/src/assets/images/gallery_recliner_floor_1794995873846.jpg',
    imageAlt: 'Wide aisle view of recliners and sofa sets on the showroom floor',
  },
  {
    id: 'gallery-coffee-table',
    title: 'Walnut & Cream Center Table',
    caption: 'Dual-drawer storage coffee tables',
    imageUrl: '/src/assets/images/gallery_coffee_table_1794995874703.jpg',
    imageAlt: 'Walnut wood and cream two-drawer center coffee table on display',
  },
  {
    id: 'gallery-tv-console',
    title: 'Compact TV Media Console',
    caption: 'Two-tone oak & walnut drawer units',
    imageUrl: '/src/assets/images/gallery_tv_console_1794995874652.jpg',
    imageAlt: 'Walnut and natural oak low TV media console with two drawers',
  },
  {
    id: 'gallery-sofa-sets',
    title: '3+1+1 Fabric Sofa Displays',
    caption: 'Striped & solid upholstery choices',
    imageUrl: '/src/assets/images/gallery_fabric_sofas_1794995877513.jpg',
    imageAlt: 'Striped and grey 3+1+1 living room sofa sets arranged around coffee table',
  },
];

export const VALUE_PROPOSITIONS: ValuePropItem[] = [
  {
    id: 'google-rated',
    metric: '5.0 / 5.0',
    title: '5.0★ Google Rated',
    description: 'Proven local trust across 66+ verified customer reviews in Pileru and surrounding towns.',
  },
  {
    id: 'reasonable-rates',
    metric: 'Factory Value',
    title: 'Reasonable Rates',
    description: 'Transparent showroom pricing and best-value deals on authentic Damro & Sleepwell lines.',
  },
  {
    id: 'doorstep-delivery',
    metric: 'Fast Dispatch',
    title: 'Doorstep Delivery',
    description: 'Safe, timely local home delivery and careful room placement across Pileru & nearby areas.',
  },
  {
    id: 'expert-staff',
    metric: 'Personal Care',
    title: 'Friendly Expert Staff',
    description: 'Patient, knowledgeable guidance to help you match dimensions, fabrics, and comfort to your space.',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    quote: 'Super Quality sofas, Dining and Office Tables. Good service, timely response.',
    reviewer: 'Verified Local Customer',
    context: 'Living, Dining & Office Setup · Pileru',
    rating: 5,
    verifiedLabel: 'Google Review',
  },
  {
    id: 'review-2',
    quote: 'Fine quality furniture, reasonable rates, door delivery is there.',
    reviewer: 'Verified Homeowner',
    context: 'Home Furniture Purchase · Pileru',
    rating: 5,
    verifiedLabel: 'Google Review',
  },
  {
    id: 'review-3',
    quote: 'Excellent customer service and friendly staff.',
    reviewer: 'Verified Showroom Visitor',
    context: 'Showroom Consultation · Pileru',
    rating: 5,
    verifiedLabel: 'Google Review',
  },
];
