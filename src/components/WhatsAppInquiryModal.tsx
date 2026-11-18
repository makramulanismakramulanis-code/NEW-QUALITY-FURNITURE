import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, X } from 'lucide-react';
import { ProductCategoryItem, SHOWROOM_INFO } from '../data/showroomData';
import { buildInquiryMessage, buildWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppInquiryModalProps {
  item: ProductCategoryItem | null;
  onClose: () => void;
}

export function WhatsAppInquiryModal({ item, onClose }: WhatsAppInquiryModalProps) {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (item) {
      setSelectedVariant(item.variants[0] ?? '');
      setNotes('');
      setCopied(false);
    }
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const message = buildInquiryMessage({
    itemTitle: item.title,
    brandName: item.brand,
    variant: selectedVariant,
    customerName,
    deliveryArea,
    notes,
  });

  const whatsappUrl = buildWhatsAppUrl(message);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2937]/60 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-[#4A3525]/20 rounded-xl overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-white border-b border-[#4A3525]/12 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E5631]">
              WhatsApp Showroom Inquiry · {SHOWROOM_INFO.phoneDisplay}
            </p>
            <h3 id="whatsapp-modal-title" className="font-display text-xl font-bold text-[#2F2015] mt-1">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#4B5563] hover:text-[#2F2015] hover:bg-[#F2ECE3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A3525] mb-2">
              Choose Preferred Option
            </p>
            <div className="flex flex-wrap gap-2">
              {item.variants.map((variant) => {
                const isSelected = selectedVariant === variant;
                return (
                  <button
                    key={variant}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#4A3525] text-white border-[#4A3525]'
                        : 'bg-white text-[#374151] border-[#4A3525]/20 hover:bg-[#F2ECE3]'
                    }`}
                  >
                    {variant}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Your Name (Optional)
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Suresh Reddy"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#4A3525]/20 rounded-lg text-[#1F2937] focus:outline-none focus:border-[#1E5631]"
              />
            </div>
            <div>
              <label htmlFor="inquiry-area" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Delivery Area (Optional)
              </label>
              <input
                id="inquiry-area"
                type="text"
                value={deliveryArea}
                onChange={(e) => setDeliveryArea(e.target.value)}
                placeholder="e.g. Pileru / Kalikiri"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#4A3525]/20 rounded-lg text-[#1F2937] focus:outline-none focus:border-[#1E5631]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-[#374151] mb-1.5">
              Room Size or Finish Preference (Optional)
            </label>
            <input
              id="inquiry-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Looking for dark walnut finish or recliner fabric options"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#4A3525]/20 rounded-lg text-[#1F2937] focus:outline-none focus:border-[#1E5631]"
            />
          </div>

          {/* Live Message Preview */}
          <div className="bg-white border border-[#4A3525]/15 rounded-lg p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-[#4B5563]">Message Preview</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A3525] hover:text-[#1E5631] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1E5631]" aria-hidden="true" />
                    <span className="text-[#1E5631]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre
              data-testid="whatsapp-message-preview"
              className="text-xs text-[#374151] whitespace-pre-wrap font-sans leading-relaxed"
            >
              {message}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-[#4A3525]/12 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-semibold text-[#4B5563] hover:text-[#2F2015] rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1E5631] hover:bg-[#164024] rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Send on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
