"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { site, testimonials } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";

const avatars = testimonials.slice(0, 5);

export function Hero() {
  return (
    <section id="intro" className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 pr-4"
          >
            <span className="flex -space-x-2">
              {avatars.map((person) => (
                <Image
                  key={person.name}
                  src={person.photo}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border border-bg object-cover"
                />
              ))}
            </span>
            <StarRating size={13} />
            <span className="text-xs font-medium text-offwhite sm:text-sm">
              5/5 · 100% recommandée
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-bright"
          >
            Développeuse web freelance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="font-display text-[2.4rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Je crée des sites web qui{" "}
            <span className="relative inline-block">
              convertissent
              <svg
                className="pointer-events-none absolute -inset-x-3 -inset-y-1 h-[calc(100%+12px)] w-[calc(100%+24px)] overflow-visible"
                viewBox="0 0 220 70"
                fill="none"
                aria-hidden
              >
                <path
                  className="draw-circle"
                  pathLength={1}
                  d="M18 38 C 12 12, 70 6, 112 10 C 168 16, 214 22, 206 40 C 198 60, 140 64, 90 62 C 40 60, 24 54, 18 38 Z"
                  stroke="#b105e5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg"
          >
            Le regard d’une designer, la rigueur d’une développeuse. Sites sur
            mesure, intégration Figma et automatisations — livrés sans friction,
            du premier appel à la mise en ligne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={site.calendar} external size="lg">
              Booker un appel
              <ArrowIcon />
            </Button>
            <Button href="#portfolio" variant="outline" size="lg">
              Voir le portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 flex items-center justify-center gap-3"
          >
            {[
              { href: site.socials.malt, label: "Malt" },
              { href: site.socials.linkedin, label: "LinkedIn" },
              { href: site.socials.github, label: "GitHub" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted/80 transition-colors hover:border-primary/50 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="glass relative overflow-hidden rounded-[32px] p-4 sm:p-6">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
              <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                <div className="absolute inset-6 rounded-full bg-primary/30 blur-3xl" />
                <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src="/images/hero/me.png"
                    alt="Delphine Bertrand, développeuse web freelance"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
                <OrbitingIcon
                  src="/images/hero/react.png"
                  alt="React"
                  className="top-[8%] right-[2%]"
                  delay="0s"
                />
                <OrbitingIcon
                  src="/images/hero/js.png"
                  alt="JavaScript"
                  className="bottom-[18%] left-[-4%]"
                  delay="1.2s"
                />
                <OrbitingIcon
                  src="/images/hero/webflow.png"
                  alt="Webflow"
                  className="bottom-[-2%] right-[12%]"
                  delay="2.4s"
                />
              </div>

              <div className="space-y-5 px-2 pb-2">
                <p className="font-display text-2xl text-white sm:text-3xl">
                  Delphine Bertrand
                </p>
                <p className="text-muted/85">
                  6 ans à transformer des maquettes en interfaces nettes,
                  performantes, et construites avec des composants réutilisables.
                </p>
                <ul className="grid grid-cols-3 gap-3">
                  {[
                    ["6+", "ans d’exp."],
                    ["5/5", "sur Malt"],
                    ["100%", "recommandée"],
                  ].map(([value, label]) => (
                    <li
                      key={label}
                      className="rounded-2xl border border-white/8 bg-white/4 px-3 py-3 text-center"
                    >
                      <p className="font-display text-xl text-white">{value}</p>
                      <p className="mt-1 text-[11px] tracking-wide text-grey">
                        {label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function OrbitingIcon({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className?: string;
  delay: string;
}) {
  return (
    <span
      className={`animate-float absolute z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-surface/90 shadow-lg ${className}`}
      style={{ animationDelay: delay }}
    >
      <Image src={src} alt={alt} width={28} height={28} />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
