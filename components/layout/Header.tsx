"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="relative z-50 pt-4">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 sm:px-8",
            scrolled
              ? "border-white/10 bg-[#050709]/80 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border-white/8 bg-white/4 backdrop-blur-md",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={site.calendar} external size="sm" className="hidden sm:inline-flex">
              Booker un appel
            </Button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={cn(
                    "absolute left-0 h-0.5 w-4 bg-current transition-all",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-0.5 w-4 bg-current transition-all",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg/95 px-6 pt-28 backdrop-blur-xl transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display rounded-2xl px-4 py-4 text-2xl text-white"
            >
              {item.label}
            </Link>
          ))}
          <div onClick={() => setOpen(false)}>
            <Button href={site.calendar} external className="mt-4 w-full">
              Booker un appel
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
