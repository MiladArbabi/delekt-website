"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];       // e.g. ["01.jpeg", "02.jpeg", ...]
  intervalMs?: number;    // default 3000
};

export default function MachinesCarousel({ images, intervalMs = 3000 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setI((s) => (s + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (!images.length) return null;

  const prev = (i - 1 + images.length) % images.length;
  const next = (i + 1) % images.length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* 25% | 50% | 25% with faded sides */}
      <div className="grid grid-cols-[25%_50%_25%] items-center gap-3">
        <Frame dimmed>
          <Image
            src={`/machines/${images[prev]}`}
            alt=""
            fill
            sizes="(min-width: 768px) 25vw, 90vw"
            priority={false}
          />
        </Frame>

        <Frame>
          <Image
            src={`/machines/${images[i]}`}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 90vw"
            priority
          />
        </Frame>

        <Frame dimmed>
          <Image
            src={`/machines/${images[next]}`}
            alt=""
            fill
            sizes="(min-width: 768px) 25vw, 90vw"
          />
        </Frame>
      </div>
    </div>
  );
}

function Frame({ children, dimmed = false }: { children: React.ReactNode; dimmed?: boolean }) {
  return (
    <div
      className={`relative h-56 md:h-80 rounded-2xl overflow-hidden transition-opacity duration-500 ${
        dimmed ? "opacity-40" : ""
      }`}
    >
      {children}
    </div>
  );
}
