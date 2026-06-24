"use client";

import Image from "next/image";
import { Phone, MapPin, UtensilsCrossed, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      {/* Background: video if provided, else slow-zoom hero image */}
      {site.heroVideo ? (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden
        >
          <source src="/hero-grill.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-poster.jpg"
            alt="Charcoal-grilled sekuwa skewers over open fire"
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover"
          />
        </div>
      )}

      {/* Overlays: darken for legibility + warm vignette, but keep the grill visible */}
      <div className="absolute inset-0 bg-char/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-char/70 via-char/20 to-char" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 35%, transparent 45%, rgba(26,20,17,0.8) 100%)",
        }}
      />

      {/* Ember particles */}
      <Particles
        className="absolute inset-0"
        quantity={70}
        color="#e0651a"
        size={0.6}
        staticity={40}
        ease={60}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 py-24">
        <BlurFade delay={0.05}>
          <span className="font-sans text-[11px] font-light uppercase tracking-[0.5em] text-gold sm:text-sm">
            {site.eyebrow}
          </span>
        </BlurFade>

        <BlurFade delay={0.15}>
          <h1 className="flex flex-col items-center leading-none">
            <span className="font-serif text-xl italic tracking-[0.3em] text-ember sm:text-2xl">
              The
            </span>
            <span className="font-display text-6xl tracking-wide text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-8xl">
              SEKUWA STATION
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="max-w-md font-serif text-lg italic text-cream-dim sm:text-2xl">
            {site.tagline}
          </p>
        </BlurFade>

        <BlurFade delay={0.45}>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex h-13 min-h-12 w-64 items-center justify-center gap-2 rounded-full bg-ember px-7 font-sans text-base font-medium uppercase tracking-[0.12em] text-char transition-colors hover:bg-gold sm:w-auto"
            >
              <UtensilsCrossed className="size-5" />
              View Menu
            </a>
            <div className="flex gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/50 px-6 font-sans text-sm font-medium uppercase tracking-[0.12em] text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="size-4" />
                Call
              </a>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/50 px-6 font-sans text-sm font-medium uppercase tracking-[0.12em] text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
              >
                <MapPin className="size-4" />
                Directions
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.25em] text-ash">
            {site.hoursShort}
          </p>
        </BlurFade>
      </div>

      {/* Scroll cue */}
      <a
        href="#signatures"
        aria-label="Scroll to signatures"
        className="absolute bottom-6 z-10 animate-bounce text-gold/70"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
}
