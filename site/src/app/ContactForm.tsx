"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    if ((data.get("_gotcha") as string) || "") { setLoading(false); return; }
    try {
      const res = await fetch("https://formspree.io/f/xwpqalvq", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      if (res.ok) {
        // Track submit, then redirect (callback ensures the hit is sent)
        try {
          window.plausible?.("Contact Form Submitted", {
            callback: () => (window.location.href = "/preview/thanks.html"),
          });
          // Fallback if plausible isn't available
          setTimeout(() => (window.location.href = "/preview/thanks.html"), 250);
        } catch {
          window.location.href = "/preview/thanks.html";
        }
      } else {
        setErr("Could not send. Try again.");
        setLoading(false);
      }
    } catch {
      setErr("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input className="rounded-lg border p-3" type="text" name="building_address" placeholder="Address" required />
      <input className="rounded-lg border p-3" type="text" name="city" placeholder="City" required />
      <input className="rounded-lg border p-3" type="text" name="footfall" placeholder="How many units?" />
      <input className="rounded-lg border p-3" type="text" name="footfallnotes" placeholder="Residential or commercial?" />
      <textarea className="rounded-lg border p-3 md:col-span-2" name="placement_notes" placeholder="Anything else about your location?" rows={4}></textarea>
      <input className="rounded-lg border p-3" type="text" name="contact_name" placeholder="Your name" required />
      <input className="rounded-lg border p-3" type="email" name="email" placeholder="Email" required />
      <input className="rounded-lg border p-3" type="tel" name="phone" placeholder="Phone" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="md:col-span-2 rounded-lg px-5 py-3 bg-indigoDeep text-white" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {err ? <p className="md:col-span-2 text-red-600">{err}</p> : null}
    </form>
  );
}
