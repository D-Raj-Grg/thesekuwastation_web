"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site-config";

/**
 * Mounts the Google Maps iframe only once its container scrolls near the
 * viewport. Avoids the iframe stealing focus and scroll-jumping the page on
 * load, and saves bandwidth until the map is actually needed.
 */
export function MapEmbed() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full min-h-72 overflow-hidden rounded-2xl border border-line bg-card">
      {show ? (
        <iframe
          title={`Map to ${site.name}`}
          src={site.mapEmbedUrl}
          className="size-full min-h-72"
          style={{ border: 0, filter: "grayscale(0.3) contrast(1.1) brightness(0.9)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex size-full min-h-72 flex-col items-center justify-center gap-2 text-ash">
          <MapPin className="size-6 text-ember" />
          <span className="font-sans text-xs uppercase tracking-[0.15em]">Loading map…</span>
        </div>
      )}
    </div>
  );
}
