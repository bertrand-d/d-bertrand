import { cn } from "@/lib/cn";

export function HoverRoll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      <span className="invisible inline-flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </span>
      <span className="absolute inset-0 overflow-hidden">
        <span className="flex flex-col gap-[0.28em] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[calc(-50%-0.14em)]">
          <span className="inline-flex h-full items-center justify-center gap-2 whitespace-nowrap">
            {children}
          </span>
          <span
            className="inline-flex h-full items-center justify-center gap-2 whitespace-nowrap"
            aria-hidden
          >
            {children}
          </span>
        </span>
      </span>
    </span>
  );
}
