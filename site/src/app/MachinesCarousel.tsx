"use client";
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

type Props = { images: string[]; intervalMs?: number };

export default function MachinesCarousel({ images = [], intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [go, setGo] = useState(false);

  const slidingRef = useRef(false);
  const indexRef = useRef(index);
  useEffect(() => { indexRef.current = index; }, [index]);

  const preload = useCallback((file: string) =>
    new Promise<void>((resolve) => {
      const img = new window.Image();
      img.src = `./machines/${file}`;
      if (img.complete) return resolve();
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }), []);

  const startSlide = useCallback(async (nxt: number) => {
    slidingRef.current = true;
    setNext(nxt);
    setGo(false);

    await preload(images[nxt]);

    requestAnimationFrame(() =>
      requestAnimationFrame(() => setGo(true))
    );

    setTimeout(() => {
      setIndex(nxt);
      setNext(null);
      setGo(false);
      slidingRef.current = false;
    }, 520); // keep in sync with duration-500
  }, [images, preload]);

  useEffect(() => {
    if (!images.length) return;
    const tick = () => {
      if (slidingRef.current) return;
      const nxt = (indexRef.current + 1) % images.length;
      startSlide(nxt);
    };
    const t = setInterval(tick, intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs, startSlide]);

  if (!images.length) return null;

  const curFile  = images[index];
  const nextFile = next != null ? images[next] : null;

  const Img = ({ file, className = "", eager = false }: { file?: string; className?: string; eager?: boolean }) =>
    file ? (
      <img
        src={`./machines/${file}`}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${className}`}
        style={{ backfaceVisibility: "hidden", willChange: "transform" }}
      />
    ) : null;

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl border bg-paper">
        <Img
          file={curFile}
          eager
          className={`transition-transform duration-500 ${nextFile && go ? "-translate-x-full" : "translate-x-0"}`}
        />
        {nextFile && (
          <Img
            file={nextFile}
            className={`transition-transform duration-500 ${go ? "translate-x-0" : "translate-x-full"}`}
          />
        )}
      </div>
    </div>
  );
}