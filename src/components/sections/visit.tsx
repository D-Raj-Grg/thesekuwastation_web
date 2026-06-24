import { Phone, MapPin, Clock, MessageCircle, Truck } from "lucide-react";
import { Section } from "@/components/brand/section";
import { SectionHeading } from "@/components/brand/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { MapEmbed } from "@/components/sections/map-embed";
import { site } from "@/lib/site-config";

export function Visit() {
  return (
    <Section id="visit">
      <SectionHeading eyebrow="Find Us" title="Visit the Station" subtitle="Drop by, call ahead, or get directions to the grill." />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Map (lazy-mounted to avoid load-time scroll jump) */}
        <BlurFade inView direction="right">
          <MapEmbed />
        </BlurFade>

        {/* Info + actions */}
        <BlurFade inView direction="left">
          <div className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-card p-6 sm:p-8">
            <InfoRow icon={<MapPin className="size-5 text-ember" />} label="Location">
              {site.address}
            </InfoRow>
            <InfoRow icon={<Clock className="size-5 text-ember" />} label="Hours">
              <div className="flex flex-col gap-0.5">
                {site.hours.map((h) => (
                  <span key={h.days}>
                    <span className="text-cream">{h.days}</span> · {h.time}
                  </span>
                ))}
              </div>
            </InfoRow>
            <InfoRow icon={<Phone className="size-5 text-ember" />} label="Call">
              <a href={site.phoneHref} className="transition-colors hover:text-gold">{site.phoneDisplay}</a>
            </InfoRow>

            <div className="mt-auto grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-ember px-5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-char transition-colors hover:bg-gold"
              >
                <Phone className="size-4 shrink-0" /> Call
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-gold/50 px-5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="size-4 shrink-0" /> WhatsApp
              </a>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-gold/50 px-5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <MapPin className="size-4 shrink-0" /> Directions
              </a>
            </div>

            {/* Delivery teaser */}
            {!site.delivery.live && (
              <div className="flex items-center justify-center gap-2 rounded-full border border-dashed border-ember/40 bg-ember/5 px-4 py-2.5">
                <Truck className="size-4 text-ember" />
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-cream-dim">
                  {site.delivery.label}
                </span>
              </div>
            )}
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div className="flex flex-col">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ash">{label}</span>
        <div className="font-sans text-sm font-light text-cream-dim">{children}</div>
      </div>
    </div>
  );
}
