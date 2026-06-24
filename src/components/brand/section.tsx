import { cn } from "@/lib/utils";

/** Standard page section wrapper with consistent rhythm + optional spark field. */
export function Section({
  id,
  className,
  spark = false,
  children,
}: {
  id?: string;
  className?: string;
  spark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-20 overflow-hidden px-5 py-16 sm:px-8 sm:py-24",
        spark && "spark-field",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
