"use client";
import { useEffect, useMemo, useState } from "react";

type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: "What products are offered in the vending machines?",
    a: "A curated mix of popular snacks and drinks. We tailor the selection to your building’s preferences.",
  },
  {
    q: "How do I get a vending machine installed in my building?",
    a: "Send the form on this page. We’ll do a quick site check, confirm power/placement, and schedule install.",
  },
  {
    q: "Who handles maintenance, restocking, and repairs?",
    a: "We do. Remote monitoring triggers restocks and service visits, so you don’t have to manage anything.",
  },
  {
    q: "What are the costs or fees involved?",
    a: "No upfront costs. We install and operate the machine and share a transparent portion of monthly sales with you.",
  },
  {
    q: "What types of buildings qualify?",
    a: "Residential, offices, gyms, universities, hotels, and other mid-to-high footfall sites typically work well.",
  },
  {
    q: "How much space is needed for installation?",
    a: "Roughly the footprint of a standard fridge and access to a standard power outlet.",
  },
  {
    q: "What is the revenue-sharing model?",
    a: "A clear, monthly share of sales. We’ll confirm the exact split based on your building and traffic.",
  },
  {
    q: "Can products be customized for my building?",
    a: "Yes. We can tune the mix by brand or category and adapt seasonally based on what sells.",
  },
  {
    q: "What happens if the machine malfunctions?",
    a: "We’re alerted automatically and dispatch service. If there’s an issue on-site, contact us and we’ll handle it.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Shuffle once on mount
  const shuffled = useMemo(() => [...items].sort(() => Math.random() - 0.5), []);
  const firstFour = shuffled.slice(0, 4);
  const rest = shuffled.slice(4);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">FAQ</h2>

      {/* First 4 questions + bottom fade + toggle button */}
      <div className="relative mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {firstFour.map((item, idx) => (
            <button
              key={item.q}
              onClick={() => setActive(idx)}
              className="text-left rounded-2xl border p-4 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <h4 className="font-semibold">{item.q}</h4>
            </button>
          ))}
        </div>
        {/* bottom fade only when collapsed */}
        {!showAll && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent rounded-b-2xl" />
        )}

        {/* centered circular toggle button (always visible) */}
        <div className="absolute inset-x-0 -bottom-5 flex justify-center">
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="faq-more"
            aria-label={showAll ? "Hide extra questions" : "Show more questions"}
            onClick={() => setShowAll(v => !v)}
            className={`relative z-10 h-10 w-10 rounded-full border bg-white/80 backdrop-blur shadow-sm transition-transform duration-300 hover:bg-white ${
              showAll ? "rotate-180" : "rotate-0"
            }`}
          >
            {/* horizontal bar */}
            <span
              className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-ink"
            />
            {/* vertical bar (collapses when expanded) */}
            <span
              className={`absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-ink transition-all duration-300 ${
                showAll ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Collapsible rest (slide down) */}
        <div
        id="faq-more"
        className={`overflow-hidden mt-6 transition-all duration-500 ${
          showAll 
          ? "max-h-[2000px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((item, idx) => (
            <button
              key={item.q}
              onClick={() => setActive(idx + 4)}
              className="text-left rounded-2xl border p-4 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <h4 className="font-semibold">{item.q}</h4>
            </button>
          ))}
        </div>
      </div>

      {/* Modal for answer */}
      {active !== null && shuffled[active] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative z-10 w-full max-w-lg rounded-2xl border bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold">{shuffled[active].q}</h3>
            <p className="mt-3 text-stone">{shuffled[active].a}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActive(null)}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}