import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#intro"
      className={cn(
        "font-display inline-flex items-baseline gap-0.5 text-[17px] font-semibold tracking-tight text-white",
        className,
      )}
    >
      <span>d</span>
      <span className="text-primary-bright">.</span>
      <span>bertrand</span>
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}
