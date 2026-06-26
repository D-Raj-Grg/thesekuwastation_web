import Image from "next/image";
import { Flame, Star } from "lucide-react";
import { Section } from "@/components/brand/section";
import { SectionHeading } from "@/components/brand/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import { sekuwaColumns, sekuwaPricing } from "@/lib/menu-data";
import { site } from "@/lib/site-config";

export function SekuwaPricing() {
  return (
    <Section className="border-y border-line/50">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <BlurFade inView direction="right">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line sm:aspect-[3/2] lg:aspect-[4/5]">
            <Image
              src="/food/sekuwa-platter.jpg"
              alt="Charcoal-grilled sekuwa platter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-char/70 to-transparent" />
          </div>
        </BlurFade>

        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Our Signature"
            title="Sekuwa, by Weight"
            subtitle="Charcoal-grilled to order — never sitting, never reheated."
          />

          <BlurFade inView delay={0.1}>
            <p className="max-w-md font-sans text-sm font-light leading-relaxed text-cream-dim">
              Marinated in timur, ginger, garlic and fire-spice, then{" "}
              <Highlighter action="underline" color="#e0651a" isView>
                grilled fresh over charcoal
              </Highlighter>{" "}
              the moment you order.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-line">
                    {sekuwaColumns.map((c, i) => (
                      <th
                        key={c}
                        className={`px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-ember ${i === 0 ? "text-left" : "text-right"}`}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sekuwaPricing.map((row) => (
                    <tr key={row.meat} className="border-t border-line/40 first:border-t-0">
                      <td className="px-5 py-3.5 text-left font-sans text-lg font-medium tracking-wide text-cream">
                        {row.meat}
                        {row.fav && (
                          <Star className="ml-1.5 inline size-3 fill-ember text-ember" />
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-right font-sans text-lg font-light text-cream">
                        {row.jir}
                      </td>
                      <td className="px-5 py-3.5 text-right font-sans text-lg font-light text-cream">
                        {row.half}
                      </td>
                      <td className="px-5 py-3.5 text-right font-sans text-lg font-light text-cream">
                        {row.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-center gap-2 border-t border-line/40 bg-ember/10 px-5 py-2.5">
                <Flame className="size-3.5 text-ember" />
                <span className="font-serif text-xs italic text-cream-dim">
                  Freshly grilled every order · Prices in {site.currency}
                </span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </Section>
  );
}
