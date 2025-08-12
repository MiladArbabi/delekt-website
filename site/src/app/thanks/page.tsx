// site/src/app/thanks/page.tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks",
  description: "We’ve received your request. We’ll be in touch shortly.",
  robots: { index: false, follow: false },
  // Will resolve to https://delekt.com/thanks via metadataBase in layout
  alternates: { canonical: "/thanks" },
  openGraph: {
    title: "Thanks — Delekt",
    description: "We’ve received your request. We’ll be in touch shortly.",
    url: "/thanks",
    images: ["/logo/delekt-logo-v02.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-paper text-ink flex items-center justify-center">
      <div className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Thanks!</h1>
        <p className="mt-3 text-stone">We’ll be in touch shortly.</p>
        <Link href="/#home" className="mt-8 inline-block rounded-lg px-5 py-3 bg-indigoDeep text-white">Back home</Link>
      </div>
    </main>
  );
}
