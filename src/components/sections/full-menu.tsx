"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { menu, menuCategories, type Dish, type MenuSection } from "@/lib/menu-data";
import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/brand/section-heading";

export function FullMenu() {
  const [active, setActive] = useState(menuCategories[0]?.id);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    menuCategories.forEach((c) => {
      const el = document.getElementById(`menu-${c.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Center the active chip within the horizontal bar ONLY — never scroll the page.
  useEffect(() => {
    const chip = active ? chipRefs.current[active] : null;
    const bar = barRef.current;
    if (!chip || !bar) return;
    const target = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
    bar.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <section id="menu" className="relative w-full scroll-mt-16 px-0 py-16 sm:py-24">
      <div className="mx-auto mb-8 w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="The Full Spread" title="Menu" subtitle="Every dish, freshly cooked to order. Prices in NPR." />
      </div>

      {/* Sticky category chips */}
      <div className="sticky top-16 z-30 border-y border-line/50 bg-char/90 backdrop-blur-md">
        <div ref={barRef} className="relative mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              ref={(el) => { chipRefs.current[c.id] = el; }}
              onClick={() => {
                document.getElementById(`menu-${c.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-1.5 font-sans text-xs uppercase tracking-[0.12em] transition-colors",
                active === c.id
                  ? "border-ember bg-ember text-char"
                  : "border-line text-cream-dim hover:border-gold/60 hover:text-gold",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-14 px-5 sm:px-8">
        {menu.map((section) => (
          <MenuBlock key={section.id} section={section} />
        ))}
      </div>

      <p className="mt-12 text-center font-serif text-sm italic text-ash">
        🔥 Freshly Grilled Every Order · {site.currency}
      </p>
    </section>
  );
}

function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <div id={`menu-${section.id}`} className="scroll-mt-32">
      <div className="mb-5 flex items-center gap-3">
        <span className="size-2 rotate-45 bg-ember" />
        <h3 className="font-display text-3xl tracking-wide text-gold">{section.title}</h3>
        <span className="h-px flex-1 bg-line" />
      </div>

      {section.note && (
        <div className="mb-4">
          <span className="inline-block rounded-full bg-gold px-3 py-1 font-serif text-xs font-semibold italic text-char">
            {section.note}
          </span>
        </div>
      )}

      {section.kind === "list" ? (
        <ul
          className={cn(
            "gap-x-10",
            section.columns === 2 ? "sm:columns-2" : "",
          )}
        >
          {section.items.map((dish) => (
            <DishRow key={dish.name} dish={dish} />
          ))}
        </ul>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse">
            <thead>
              <tr className="border-b border-line">
                {section.headers.map((h, i) => (
                  <th
                    key={h}
                    className={cn(
                      "px-3 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-ember",
                      i === 0 ? "text-left" : "text-center",
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.name} className="border-t border-line/30">
                  <td
                    className={cn(
                      "px-3 py-3 text-left font-sans font-medium",
                      row.fav ? "text-gold" : "text-cream",
                    )}
                  >
                    {row.name}
                    {row.fav && <Star className="ml-1.5 inline size-3 fill-ember text-ember" />}
                  </td>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="px-3 py-3 text-center font-sans font-light text-cream">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="flex items-baseline gap-2 break-inside-avoid py-1.5">
      <span className={cn("font-sans font-light", dish.fav ? "font-medium text-gold" : "text-cream")}>
        {dish.name}
        {dish.fav && <Star className="ml-1.5 inline size-3 fill-ember text-ember" />}
        {dish.note && <span className="ml-1.5 font-serif text-xs italic text-ash">({dish.note})</span>}
      </span>
      <span className="mb-1 flex-1 border-b border-dotted border-cream-dim/30" />
      <span className={cn("shrink-0 font-sans font-medium", dish.fav ? "text-ember" : "text-gold")}>
        {dish.price ?? "—"}
      </span>
    </li>
  );
}
