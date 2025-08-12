// site/src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from "next/script";
import Analytics from "../components/Analytics";
import { Suspense } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700','800'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL("https://delekt.com"),
  title: {
    default: "Delekt — Vending machines for offices & BRFs in Stockholm",
    template: "%s — Delekt",
  },
  description:
    "Cashless snack & drink vending machines for offices and BRFs in Stockholm and across Sweden. Zero capex. Transparent revenue share.",
  openGraph: {
    type: "website",
    url: "https://delekt.com/",
    title: "Delekt — Vending machines for offices & BRFs in Stockholm",
    description:
      "Cashless snack & drink vending machines. Zero capex. Transparent revenue share.",
    images: [{ url: "/logo/delekt-logo-v02.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delekt — Vending machines for offices & BRFs in Stockholm",
    description:
      "Cashless snack & drink vending machines. Zero capex. Transparent revenue share.",
    images: ["/logo/delekt-logo-v02.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/machines/01.jpeg" />
        {/* Plausible (exclude /preview/* paths) */}
        <Script
          id="plausible"
          defer
          data-domain="delekt.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        {/* JSON-LD: Organization */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Delekt",
            url: "https://delekt.com/",
            logo: "https://delekt.com/logo/delekt-logo-v02.png",
            sameAs: [
              "https://www.linkedin.com/company/delekt-sweden",
              "https://www.instagram.com/delekt_ab/",
            ],
          })}
        </Script>
        {/* JSON-LD: LocalBusiness */}
        <Script id="ld-local" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Delekt",
            url: "https://delekt.com/",
            email: "info@delekt.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rosstigen 3",
              postalCode: "169 52",
              addressLocality: "Solna",
              addressCountry: "SE",
            },
          })}
        </Script>
        {/* JSON-LD: FAQPage (matches on-page FAQ) */}
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What products are offered in the vending machines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "A curated mix of popular snacks and drinks. We tailor the selection to your building’s preferences.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get a vending machine installed in my building?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Send the form on this page. We’ll do a quick site check, confirm power/placement, and schedule install.",
                },
              },
              {
                "@type": "Question",
                name: "Who handles maintenance, restocking, and repairs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We do. Remote monitoring triggers restocks and service visits, so you don’t have to manage anything.",
                },
              },
              {
                "@type": "Question",
                name: "What are the costs or fees involved?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No upfront costs. We install and operate the machine and share a transparent portion of monthly sales with you.",
                },
              },
            ],
          })}
        </Script>
      {/* Google Analytics 4 */}
        <Script
          id="ga-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-CTYDNMW9QK"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            // Avoid duplicate pageviews; we’ll send them manually in <Analytics/>
            gtag('config', 'G-CTYDNMW9QK', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className={`${montserrat.className} bg-paper text-ink antialiased`}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
