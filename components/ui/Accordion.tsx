"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";

export function Accordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:items-start">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <article key={item.q} className="glass overflow-hidden rounded-[22px]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-base font-semibold text-white sm:text-lg">
                {item.q}
              </span>
              <span
                className={cn(
                  "relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20",
                )}
                aria-hidden
              >
                <span className="absolute h-0.5 w-3 bg-primary-bright" />
                <span
                  className={cn(
                    "absolute h-3 w-0.5 bg-primary-bright transition-opacity duration-200",
                    isOpen && "opacity-0",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted/85">
                  {item.a}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
