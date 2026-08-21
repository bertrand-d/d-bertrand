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
            subtitle="Création de A à Z, intégration, maintenance ou automatisation. Survolez pour découvrir."
          />
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <Marquee slow>
            {works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </Marquee>
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
      className="w-[300px] shrink-0 sm:w-[380px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndex(0);
      }}
    >
      <div className="overflow-hidden rounded-[22px] border border-primary/20 bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(144,0,187,0.22)]">
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
