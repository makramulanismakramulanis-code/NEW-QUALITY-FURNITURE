import {
  BrandFilter,
  CategoryId,
  ProductCategoryItem,
  SHOWROOM_INFO,
} from '../data/showroomData';

export interface InquiryDraft {
  itemTitle: string;
  brandName: string;
  variant: string;
  customerName: string;
  deliveryArea: string;
  notes: string;
}

export function filterCatalogItems(
  items: ProductCategoryItem[],
  category: CategoryId,
  brand: BrandFilter,
): ProductCategoryItem[] {
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesBrand = brand === 'all' || item.brand === brand;
    return matchesCategory && matchesBrand;
  });
}

export function buildInquiryMessage(draft: InquiryDraft): string {
  const lines: string[] = [
    `Hello New Quality Furniture (Pileru), I would like to inquire about:`,
    `• Collection: ${draft.itemTitle} (${draft.brandName})`,
  ];

  if (draft.variant.trim()) {
    lines.push(`• Preferred Option: ${draft.variant.trim()}`);
  }
  if (draft.customerName.trim()) {
    lines.push(`• Name: ${draft.customerName.trim()}`);
  }
  if (draft.deliveryArea.trim()) {
    lines.push(`• Delivery Area: ${draft.deliveryArea.trim()}`);
  }
  if (draft.notes.trim()) {
    lines.push(`• Notes: ${draft.notes.trim()}`);
  }

  lines.push('Please share current showroom pricing and availability.');
  return lines.join('\n');
}

export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = SHOWROOM_INFO.whatsappNumber,
): string {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${digitsOnly}?text=${encoded}`;
}

export function buildGoogleMapsDirectionsUrl(
  address: string = SHOWROOM_INFO.fullAddress,
): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
