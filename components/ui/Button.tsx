import { HoverRoll } from "@/components/ui/HoverRoll";
import { cn } from "@/lib/cn";
import Link from "next/link";

const variants = {
  primary:
    "bg-linear-to-br from-primary-bright via-primary to-secondary text-white shadow-[0_10px_30px_rgba(144,0,187,0.35)] hover:shadow-[0_14px_40px_rgba(177,5,229,0.45)] hover:-translate-y-0.5",
  outline:
    "border border-white/25 bg-white/5 text-white hover:border-primary hover:bg-primary/15",
  ghost: "text-white hover:text-primary-bright",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform",
    variants[variant],
    sizes[size],
    className,
  );

  const content = <HoverRoll>{children}</HoverRoll>;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
