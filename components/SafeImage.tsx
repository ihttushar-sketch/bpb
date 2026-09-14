'use client';

import { useState } from 'react';

/**
 * Renders a photo if the file exists in /public/images, otherwise falls back
 * to a labelled placeholder. Lets the demo portal ship before the real photos
 * are dropped in, and light up the moment they are.
 */
export default function SafeImage({
  src,
  alt,
  fallbackLabel = 'ছবি যোগ করুন',
  className = '',
  imgClassName = 'object-cover',
  rounded = 'rounded-lg',
}: {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  imgClassName?: string;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        className={`${className} ${rounded} flex flex-col items-center justify-center gap-2 border-2 border-dashed border-brand/40 bg-brand-soft text-center text-brand dark:bg-brand/10`}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="11" r="3" />
          <path d="m5 18 4.2-4.2a1.6 1.6 0 0 1 2.3 0L17 19" strokeLinecap="round" />
        </svg>
        <span className="px-2 text-[11px] font-semibold leading-tight">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <div className={`${className} ${rounded} overflow-hidden bg-neutral-100 dark:bg-neutral-800`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full transition duration-500 ${imgClassName} ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
