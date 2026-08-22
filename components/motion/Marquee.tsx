import { cn } from "@/lib/cn";

export function Marquee({
  children,
  className,
  slow = false,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}) {
  const animation = reverse
    ? slow
      ? "animate-marquee-slow-reverse"
      : "animate-marquee-reverse"
    : slow
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className={cn(
        "marquee-pause relative overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-linear-to-r before:from-bg before:to-transparent sm:before:w-28",
        "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-linear-to-l after:from-bg after:to-transparent sm:after:w-28",
        className,
      )}
    >
      <div className={cn("flex w-max", animation)}>
        <div className="flex shrink-0 items-stretch gap-5 pr-5">{children}</div>
        <div className="flex shrink-0 items-stretch gap-5 pr-5" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
