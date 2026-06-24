import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

/** Section header: eyebrow + display title + ember-diamond rule (from the menu). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <BlurFade inView>
          <span className="font-sans text-[10px] font-light uppercase tracking-[0.4em] text-gold sm:text-xs">
            {eyebrow}
          </span>
        </BlurFade>
      )}
      <BlurFade inView delay={0.08}>
        <h2 className="font-display text-3xl leading-[0.95] tracking-wide text-cream sm:text-5xl">
          {title}
        </h2>
      </BlurFade>
      <Rule centered={centered} />
      {subtitle && (
        <BlurFade inView delay={0.16}>
          <p className="max-w-md font-serif text-base italic text-ash sm:text-lg">
            {subtitle}
          </p>
        </BlurFade>
      )}
    </div>
  );
}

function Rule({ centered }: { centered: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 py-1",
        centered ? "justify-center" : "justify-start",
      )}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-20" />
      <span className="size-1.5 rotate-45 bg-ember" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-20" />
    </div>
  );
}
