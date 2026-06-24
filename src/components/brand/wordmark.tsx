import { cn } from "@/lib/utils";

/** "The SEKUWA STATION" lockup in the menu's display style. */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { the: "text-[10px] tracking-[0.4em]", main: "text-xl" },
    md: { the: "text-xs tracking-[0.45em]", main: "text-2xl sm:text-3xl" },
    lg: { the: "text-base tracking-[0.45em]", main: "text-5xl sm:text-6xl" },
  }[size];

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-serif italic text-ember/90", scale.the)}>The</span>
      <span
        className={cn(
          "font-display tracking-wide text-cream",
          scale.main,
        )}
      >
        SEKUWA STATION
      </span>
    </span>
  );
}
