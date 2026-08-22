import { cn } from "@/lib/cn";

export function VerticalMarquee({
  children,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("marquee-pause relative h-full overflow-hidden", className)}>
      <div
        className={cn(
          reverse ? "animate-marquee-y-reverse" : "animate-marquee-y",
        )}
      >
        <div className="flex flex-col gap-5 pb-5">{children}</div>
        <div className="flex flex-col gap-5 pb-5" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
