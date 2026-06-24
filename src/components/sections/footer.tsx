import { Phone, MapPin } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { site } from "@/lib/site-config";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3l.4-3H14V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.6 0 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4v2H7.5v3h2.8v8H14V9z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full border-t border-line/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <Wordmark size="md" />
        <p className="font-serif text-sm italic text-ember">
          🔥 Freshly Grilled Every Order 🔥
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm font-light text-cream-dim">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
            <Phone className="size-4" /> {site.phoneDisplay}
          </a>
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
            <MapPin className="size-4" /> {site.address}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {site.social.instagram && (
            <a href={site.social.instagram} aria-label="Instagram" className="inline-flex size-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold">
              <InstagramIcon className="size-4" />
            </a>
          )}
          {site.social.facebook && (
            <a href={site.social.facebook} aria-label="Facebook" className="inline-flex size-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold">
              <FacebookIcon className="size-4" />
            </a>
          )}
        </div>

        <div className="mt-2 flex flex-col items-center gap-1 font-sans text-[11px] uppercase tracking-[0.15em] text-ash">
          <span>© {site.name} · Kavre, Nepal</span>
          <span>Prices in {site.currency} · Subject to change</span>
        </div>
      </div>
    </footer>
  );
}
