"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-config";
import { Wordmark } from "@/components/brand/wordmark";

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#signatures", label: "Signatures" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/60 bg-char/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={site.name} className="shrink-0">
          <Wordmark size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-sans text-sm font-light uppercase tracking-[0.18em] text-cream-dim transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-full bg-ember px-5 font-sans text-sm font-medium tracking-wide text-char transition-colors hover:bg-ember-deep sm:inline-flex"
          >
            <Phone className="size-4" />
            Call to Order
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-cream md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down */}
      <div
        className={cn(
          "overflow-hidden border-t border-line/60 bg-char/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden",
          open ? "max-h-80" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col px-5 py-2">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/40 py-3 font-sans text-base uppercase tracking-[0.18em] text-cream-dim last:border-b-0"
            >
              {n.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            onClick={() => setOpen(false)}
            className="my-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ember font-sans font-medium tracking-wide text-char"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
