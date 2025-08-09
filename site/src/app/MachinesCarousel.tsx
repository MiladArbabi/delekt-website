"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

type Props = { images: string[]; intervalMs?: number; };

export default function MachinesCarousel({
  images = [],
  intervalMs = 3000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState<number | null>(null); // when set, we animate
  const [go, setGo] = useState(false);                   // flip to start CSS transition
  const slidingRef = useRef(false);
  const indexRef = useRef(index);

  useEffect(() => { indexRef.current = index; }, [index]);

  useEffect(() => {
    if (!images.length) return;
    const tick = () => {
      if (slidingRef.current) return;
      const nxt = (indexRef.current + 1) % images.length;
      startSlide(nxt);
    };
    const t = setInterval(tick, intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  if (!images.length) return null;

  const startSlide = (nxt: number) => {
    setNext(nxt);
    slidingRef.current = true;
    setGo(false);
    // double-RAF so the initial translate classes apply before we flip to moving state
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setGo(true))
    );
    // finalize after the CSS duration (keep in sync with duration-500 below)
    setTimeout(() => {
      setIndex(nxt);
      setNext(null);
      setGo(false);
      slidingRef.current = false;
    }, 520);
  };

  const curFile  = images[index];
  const nextFile = next != null ? images[next] : null;

  const Img = ({ file, className = "", eager = false }: { file?: string; className?: string; eager?: boolean }) =>
    file ? (
      <img
        src={`./machines/${file}`}   // resolves correctly under /preview
        alt=""                       // no fallback text if something fails
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${className}`}
      />
    ) : null;

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl border">
        {/* current slide */}
        <Img
          file={curFile}
          eager
          className={`transition-transform duration-500 ${nextFile && go ? "-translate-x-full" : "translate-x-0"}`}
        />
        {/* next slide (only mounted during animation) */}
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