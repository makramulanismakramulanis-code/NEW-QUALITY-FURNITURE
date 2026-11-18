import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRODUCT_CATEGORIES,
  SHOWROOM_GALLERY,
  SHOWROOM_INFO,
} from '../data/showroomData';
import {
  buildGoogleMapsDirectionsUrl,
  buildInquiryMessage,
  buildWhatsAppUrl,
  filterCatalogItems,
} from './whatsapp';

test('filterCatalogItems filters by category and brand accurately', () => {
  const all = filterCatalogItems(PRODUCT_CATEGORIES, 'all', 'all');
  assert.equal(all.length, 8);

  const sofas = filterCatalogItems(PRODUCT_CATEGORIES, 'sofas', 'all');
  assert.equal(sofas.length, 3);
  assert.equal(sofas[0].id, 'luxury-sofas-recliners');

  const dining = filterCatalogItems(PRODUCT_CATEGORIES, 'dining', 'all');
  assert.equal(dining.length, 2);

  const tables = filterCatalogItems(PRODUCT_CATEGORIES, 'tables', 'Damro');
  assert.equal(tables.length, 1);

  const sleepwell = filterCatalogItems(PRODUCT_CATEGORIES, 'all', 'Sleepwell');
  assert.equal(sleepwell.length, 1);
  assert.equal(sleepwell[0].id, 'sleepwell-mattresses-beds');

  const mismatch = filterCatalogItems(PRODUCT_CATEGORIES, 'dining', 'Sleepwell');
  assert.equal(mismatch.length, 0);
});

test('all showroom product, hero, exterior, and gallery image URLs are unique and local', () => {
  const allUrls = [
    SHOWROOM_INFO.heroMainImageUrl,
    SHOWROOM_INFO.heroDamroDisplayUrl,
    SHOWROOM_INFO.heroSleepwellDisplayUrl,
    SHOWROOM_INFO.storeExteriorImageUrl,
    ...PRODUCT_CATEGORIES.map((item) => item.imageUrl),
    ...SHOWROOM_GALLERY.map((photo) => photo.imageUrl),
  ];

  assert.equal(allUrls.length, 16);
  assert.equal(new Set(allUrls).size, allUrls.length);
  for (const url of allUrls) {
    assert.ok(url.startsWith('/src/assets/images/'), `Expected enhanced showroom photo, got: ${url}`);
  }
});

test('buildInquiryMessage formats customer details and skips empty optional fields', () => {
  const minimal = buildInquiryMessage({
    itemTitle: 'Luxury Sofas & Recliners',
    brandName: 'Damro',
    variant: '',
    customerName: '',
    deliveryArea: '',
    notes: '',
  });
  assert.match(minimal, /Luxury Sofas & Recliners \(Damro\)/);
  assert.doesNotMatch(minimal, /Preferred Option/);
  assert.doesNotMatch(minimal, /Delivery Area/);

  const detailed = buildInquiryMessage({
    itemTitle: 'Solid Wood Dining Sets',
    brandName: 'Damro',
    variant: '6-Seater Family',
    customerName: 'Ramesh',
    deliveryArea: 'Pileru Town',
    notes: 'Walnut finish preferred',
  });
  assert.match(detailed, /Preferred Option: 6-Seater Family/);
  assert.match(detailed, /Name: Ramesh/);
  assert.match(detailed, /Delivery Area: Pileru Town/);
  assert.match(detailed, /Notes: Walnut finish preferred/);
});

test('buildWhatsAppUrl encodes message cleanly for +91 94418 82939', () => {
  const url = buildWhatsAppUrl('Hello Showroom', '+91 94418 82939');
  assert.equal(url, 'https://wa.me/919441882939?text=Hello%20Showroom');
});

test('buildGoogleMapsDirectionsUrl targets Pileru Kadapa Rd showroom', () => {
  const mapsUrl = buildGoogleMapsDirectionsUrl();
  assert.ok(mapsUrl.startsWith('https://www.google.com/maps/search/?api=1&query='));
  assert.ok(mapsUrl.includes('Pileru'));
  assert.ok(mapsUrl.includes('Kadapa'));
});
