'use client';

import { useEffect, useState } from 'react';

export default function ShareRow({ title }: { title: string }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Read the URL after mount so the server and first client render match.
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-2 text-[12px]">
      <span className="font-semibold text-neutral-500 dark:text-neutral-400">শেয়ার:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1877f2] px-3 py-1.5 font-semibold text-white transition hover:opacity-90"
      >
        ফেসবুক
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#25d366] px-3 py-1.5 font-semibold text-white transition hover:opacity-90"
      >
        হোয়াটসঅ্যাপ
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-neutral-800 px-3 py-1.5 font-semibold text-white transition hover:opacity-90 dark:bg-neutral-700"
      >
        এক্স
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border border-neutral-300 px-3 py-1.5 font-semibold transition hover:border-brand hover:text-brand dark:border-neutral-700"
      >
        {copied ? 'কপি হয়েছে' : 'লিংক কপি'}
      </button>
    </div>
  );
}
