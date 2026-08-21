import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { px: 40, className: "h-10 w-10" },
    md: { px: 52, className: "h-[52px] w-[52px]" },
    lg: { px: 72, className: "h-[72px] w-[72px]" },
  }[size];

  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/images/logo/logo.png"
        alt={site.name}
        width={dimensions.px}
        height={dimensions.px}
        className={cn("object-contain mix-blend-lighten", dimensions.className)}
        priority
      />
    </Link>
  );
}
