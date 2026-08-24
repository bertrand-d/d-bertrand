"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-44 transition-opacity duration-500 lg:hidden",
          "bg-[#050709]/80 backdrop-blur-md",
          "[mask-image:linear-gradient(to_bottom,black_45%,transparent)]",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <Container className="relative z-50 pt-3 sm:pt-4">
        <div
          className={cn(
            "flex items-center justify-between gap-3 py-1.5 transition-all duration-300 lg:rounded-full lg:border lg:px-8 lg:py-2",
            open || scrolled
              ? "lg:border-white/12 lg:bg-[#050709]/88 lg:shadow-lg lg:shadow-black/35 lg:backdrop-blur-xl"
              : "lg:border-white/8 lg:bg-white/4 lg:backdrop-blur-md",
          )}
        >
          <div className="shrink-0" onClick={() => setOpen(false)}>
            <Logo size="sm" className="sm:hidden" />
            <Logo className="hidden sm:inline-flex" />
          </div>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
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
            <Button
              href={site.calendar}
              external
              size="sm"
              className="hidden sm:inline-flex"
            >
              Booker un appel
            </Button>
            <button
              type="button"
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border text-white transition-colors duration-300 lg:hidden",
                open
                  ? "border-primary-bright/45 bg-primary/25"
                  : "border-white/12 bg-white/5",
              )}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3.5 w-[18px]">
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full origin-center bg-current transition-all duration-300",
                    open ? "top-[6px] rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-200",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full origin-center bg-current transition-all duration-300",
                    open ? "top-[6px] -rotate-45" : "top-[12px]",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#050709]/94 backdrop-blur-2xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-primary/28 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-secondary/45 blur-3xl"
            />

            <div className="relative flex h-full flex-col px-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-24">
              <nav
                className="flex min-h-0 flex-1 flex-col justify-center"
                aria-label="Menu mobile"
              >
                <ul className="space-y-1">
                  {nav.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.4,
                        delay: reduce ? 0 : 0.05 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-4 rounded-2xl py-2.5 pr-2"
                      >
                        <span className="w-7 shrink-0 font-display text-xs tracking-[0.2em] text-primary-bright/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.85rem] leading-none tracking-tight text-white transition-colors duration-300 group-active:text-primary-bright">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 space-y-6 border-t border-white/8 pt-6"
              >
                <div onClick={() => setOpen(false)}>
                  <Button href={site.calendar} external size="lg" className="w-full">
                    Booker un appel
                  </Button>
                </div>
                <SocialIcons className="justify-center" />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
