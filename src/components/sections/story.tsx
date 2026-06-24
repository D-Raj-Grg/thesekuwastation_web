import Image from "next/image";
import { Section } from "@/components/brand/section";
import { SectionHeading } from "@/components/brand/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const GALLERY = [
  "/food/gallery-1.jpg",
  "/food/gallery-2.jpg",
  "/food/gallery-3.jpg",
  "/food/gallery-4.jpg",
  "/food/gallery-5.jpg",
  "/food/gallery-6.jpg",
];

const STATS = [
  { value: "100%", label: "Charcoal grilled" },
  { value: "To order", label: "Never reheated" },
  { value: "Daily", label: "Fresh marinade" },
];

export function Story() {
  return (
    <Section id="story" spark>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Smoke, Spice & Fire"
          />
          <BlurFade inView delay={0.1}>
            <p className="max-w-md font-sans text-base font-light leading-relaxed text-cream-dim">
              The Sekuwa Station began with a simple belief — that the best food
              comes straight off the coals. Every skewer is hand-marinated in
              timur, ginger and Himalayan spice, then grilled over open charcoal
              the moment you order.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.18}>
            <p className="max-w-md font-serif text-lg italic text-ash">
              No shortcuts. No reheating. Just smoke, spice and fire — the way
              sekuwa is meant to be.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.26}>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-card/60 p-3 text-center">
                  <div className="font-display text-2xl tracking-wide text-gold">{s.value}</div>
                  <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-ash">{s.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        <BlurFade inView direction="left" className="min-w-0">
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {GALLERY.map((src) => (
                <div key={src} className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl border border-line sm:h-56 sm:w-44">
                  <Image src={src} alt="" fill sizes="180px" className="object-cover" />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="mt-3 [--duration:30s]">
              {[...GALLERY].reverse().map((src) => (
                <div key={src} className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl border border-line sm:h-56 sm:w-44">
                  <Image src={src} alt="" fill sizes="180px" className="object-cover" />
                </div>
              ))}
            </Marquee>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-char to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-char to-transparent" />
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
