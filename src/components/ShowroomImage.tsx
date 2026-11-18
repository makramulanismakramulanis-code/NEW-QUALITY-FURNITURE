import { useState } from 'react';
import { Armchair } from 'lucide-react';

interface ShowroomImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export function ShowroomImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ShowroomImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DE] to-[#E2D6C5] text-[#4A3525] p-6 text-center ${className}`}
      >
        <Armchair className="w-10 h-10 mb-3 opacity-70" aria-hidden="true" />
        <p className="font-display text-lg font-semibold">{fallbackTitle}</p>
        <p className="text-xs text-[#4A3525]/75 mt-1">New Quality Furniture · Pileru</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
