"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";
import { cn } from "@/lib/cn";
import { useState } from "react";

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Trois étapes sans prise de tête."
            subtitle="Je réalise vos souhaits sous la forme d’un projet web unique, qui vous inspire et vous ressemble."
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14 hidden grid-cols-3 gap-4 lg:grid">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full border px-4 py-3 text-left transition-all duration-500",
                  active === index
                    ? "border-primary bg-primary/20 text-white"
                    : "border-white/10 text-muted hover:border-primary/40",
                )}
              >
                <span className="mr-2 font-display text-sm text-primary-bright">
                  {step.id}
                </span>
                <span className="text-sm font-semibold">{step.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.08}>
              <article
                onMouseEnter={() => setActive(index)}
                className={cn(
                  "glass h-full rounded-[28px] p-7 transition-all duration-500",
                  active === index
                    ? "ring-1 ring-primary-bright/50"
                    : "opacity-90 lg:opacity-70",
                )}
              >
                <p className="font-display text-4xl text-primary/80">{step.id}</p>
                <h3 className="mt-4 font-display text-2xl text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary-bright">
                  {step.duration}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted/85">
                  {step.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-offwhite"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
