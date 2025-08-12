// site/src/components/Analytics.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Minimal typed gtag declarations (avoid `any`)
type GtagConfig = Record<string, unknown>;
type GtagEventParams = Record<string, unknown>;
type GtagFunction = {
  (command: 'js', date: Date): void;
  (command: 'config', id: string, params?: GtagConfig): void;
  (command: 'event', name: string, params?: GtagEventParams): void;
};
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: GtagFunction;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname || !window.gtag) return;
    const sp = searchParams?.toString();
    const url = sp ? `${pathname}?${sp}` : pathname;
    // Send one page_view per navigation
    window.gtag('event', 'page_view', { page_path: url });
  }, [pathname, searchParams]);

  return null;
}