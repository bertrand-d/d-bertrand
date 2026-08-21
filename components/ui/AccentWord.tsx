import { cn } from "@/lib/cn";

export function AccentWord({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={cn("accent-word", className)}>
      <span className="accent-word__text">{children}</span>
    </span>
  );
}
