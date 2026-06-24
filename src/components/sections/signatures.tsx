import Image from "next/image";
import { Star } from "lucide-react";
import { Section } from "@/components/brand/section";
import { SectionHeading } from "@/components/brand/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { signatures } from "@/lib/menu-data";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Signatures() {
  return (
    <Section id="signatures" spark>
      <SectionHeading
        eyebrow="🔥 Most Loved"
        title="Chef's Signatures"
        subtitle="New here? Start with these — the table favourites, grilled to order."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {signatures.map((dish, i) => (
          <BlurFade key={dish.name} inView delay={i * 0.06} className={cn(i === 0 && "sm:col-span-2 lg:col-span-1")}>
            <article
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-line bg-card",
                i === 0 && "sm:flex sm:flex-row lg:block",
              )}
            >
              <div className={cn("relative aspect-[4/3] w-full overflow-hidden", i === 0 && "sm:aspect-auto sm:w-1/2 lg:aspect-[4/3] lg:w-full")}>
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-char/70 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-gold backdrop-blur-sm">
                  <Star className="size-3 fill-ember text-ember" /> Most Loved
                </span>
              </div>
              <div className={cn("flex flex-col gap-1 p-4", i === 0 && "sm:justify-center lg:justify-start")}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl tracking-wide text-cream">{dish.name}</h3>
                  <span className="shrink-0 font-sans text-lg font-medium text-gold">
                    {dish.price}
                  </span>
                </div>
                <p className="font-serif text-sm italic text-ash">{dish.blurb}</p>
              </div>
              {i === 0 && <BorderBeam size={70} duration={8} colorFrom="#e0651a" colorTo="#e8b04b" borderWidth={1.5} />}
            </article>
          </BlurFade>
        ))}
      </div>

      <p className="mt-6 text-center font-serif text-xs italic text-ash">
        <span className="text-ember">★</span> marks our Most Loved across the full menu · Prices in {site.currency}
      </p>
    </Section>
  );
}
