import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-[28px] p-6 sm:p-8",
        hover &&
          "transition-transform duration-500 ease-out hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
