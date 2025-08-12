"use client";

import TrackLink from "./TrackLink";

export default function Footer() {
  return (
    <footer className="bg-lavender border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-5 text-sm text-ink">
        <a href="#home" aria-label="Delekt home" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"logo/delekt-logo-v02.png"}
            alt="Delekt"
            className="h-8 md:h-9 w-auto"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          <a href="#how">How</a>
          <a href="#revenue">Revenue</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Socials */}
        <div className="mt-2 flex items-center gap-4">
          <TrackLink
            href="https://www.linkedin.com/company/delekt-sweden"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Delekt on LinkedIn"
            className="p-2 rounded-full hover:bg-white/60 transition"
            event="Social Click"
            eventProps={{ network: "LinkedIn" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V23h-4v-6.62c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z"/>
            </svg>
          </TrackLink>

          <TrackLink
            href="https://www.instagram.com/delekt_ab/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Delekt on Instagram"
            className="p-2 rounded-full hover:bg-white/60 transition"
            event="Social Click"
            eventProps={{ network: "Instagram" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.8.4-1.1.8-.3.3-.6.6-.8 1.1-.1.3-.2.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.8 1.1.3.3.6.6 1.1.8.3.1.9.2 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.1-.8.3-.3.6-.6.8-1.1.1-.3.2-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.6-1.1-.8-.3-.1-.9-.2-1.9-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2a4.5 4.5 0 1 0 .001 9.001A4.5 4.5 0 0 0 12 9.3zm5.1-2.6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </TrackLink>
        </div>

        <div className="text-center opacity-80 space-y-1">
          <p>© {new Date().getFullYear()} Delekt</p>
          <p>Rosstigen 3, 16 952 Solna</p>
          <a href="mailto:info@delekt.com" className="underline decoration-dotted underline-offset-4">
            info@delekt.com
          </a>
        </div>
      </div>
    </footer>
  );
}