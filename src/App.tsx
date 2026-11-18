import { useState } from 'react';
import { BrandFilter, CategoryId, ProductCategoryItem } from './data/showroomData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandsAndCatalogSection } from './components/BrandsAndCatalogSection';
import { WhyChooseAndReviewsSection } from './components/WhyChooseAndReviewsSection';
import { ShowroomFooter } from './components/ShowroomFooter';
import { WhatsAppInquiryModal } from './components/WhatsAppInquiryModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>('all');
  const [activeInquiryItem, setActiveInquiryItem] = useState<ProductCategoryItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2937]">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <BrandsAndCatalogSection
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          onSelectCategory={setSelectedCategory}
          onSelectBrand={setSelectedBrand}
          onInquireItem={(item) => setActiveInquiryItem(item)}
        />

        <WhyChooseAndReviewsSection />
      </main>

      <ShowroomFooter />

      <FloatingWhatsAppButton />

      <WhatsAppInquiryModal
        item={activeInquiryItem}
        onClose={() => setActiveInquiryItem(null)}
      />
    </div>
  );
}
