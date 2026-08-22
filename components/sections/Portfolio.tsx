"use client";

import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { works } from "@/data/site";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Des projets déjà en ligne"
            subtitle="Création de A à Z, intégration, maintenance ou automatisation."
          />
          <p className="hint-blink mt-8 flex flex-col items-center gap-2.5 text-center text-[15px] font-medium tracking-[0.02em] text-primary-bright">
            Survolez pour découvrir
            <svg
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              className="h-3 w-3 shrink-0"
            >
              <path
                d="M2.5 4.5 6 8l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        <div className="relative mt-7 py-6 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
          />
          <div className="flex origin-center -rotate-[6deg] scale-110 flex-col gap-5 sm:-rotate-[7deg]">
            <Marquee slow reverse className="before:hidden after:hidden">
              {works.filter((_, index) => index % 2 === 0).map((work) => (
                <WorkCard key={work.title} work={work} />
              ))}
            </Marquee>
            <Marquee slow className="before:hidden after:hidden">
              {works.filter((_, index) => index % 2 === 1).map((work) => (
                <WorkCard key={work.title} work={work} />
              ))}
            </Marquee>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WorkCard({ work }: { work: (typeof works)[number] }) {
  const frames = [work.cover, ...work.pictures];
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover || frames.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, 900);
    return () => window.clearInterval(id);
  }, [hover, frames.length]);

  return (
    <article
      className="w-[220px] shrink-0 sm:w-[380px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndex(0);
      }}
    >
      <div className="overflow-hidden rounded-[22px] border border-primary/20 bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(144,0,187,0.22)]">
        <div className="relative aspect-2/1 bg-bg">
          {frames.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === 0 ? work.alt : ""}
              fill
              unoptimized={src.endsWith(".gif")}
              className="object-contain transition-opacity duration-500"
              style={{ opacity: index === i ? 1 : 0 }}
              sizes="380px"
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <h3 className="truncate font-display text-lg text-white">
            {work.title}
          </h3>
          <span className="shrink-0 rounded-full bg-linear-to-br from-secondary to-primary px-2.5 py-1 text-xs font-medium text-white">
            {work.year}
          </span>
        </div>
      </div>
    </article>
  );
}
