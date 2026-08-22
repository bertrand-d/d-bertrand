"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";
import { cn } from "@/lib/cn";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function Process() {
  const reduce = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.72"],
  });

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

        {reduce ? (
          <div className="mx-auto mt-14 max-w-xl space-y-5">
            {processSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        ) : (
          <div ref={timelineRef} className="relative mt-8">
            <ProcessLine progress={scrollYProgress} />
            <StepScene step={processSteps[0]} align="left" />
            <StepScene step={processSteps[1]} align="right" />
            <LastStepScene step={processSteps[2]} lineProgress={scrollYProgress} />
          </div>
        )}
      </Container>
    </section>
  );
}

function ProcessLine({ progress }: { progress: MotionValue<number> }) {
  const fill = progress;
  const dot = useTransform(fill, [0, 1], ["0%", "100%"]);
  const haloScale = useTransform(fill, [0, 1], [0.65, 3.6]);
  const haloOpacity = useTransform(fill, [0, 0.45, 1], [0.08, 0.4, 1]);
  const haloFilter = useTransform(fill, [0, 1], ["blur(6px)", "blur(20px)"]);
  const outerHaloScale = useTransform(fill, [0, 1], [0.9, 5]);
  const outerHaloOpacity = useTransform(fill, [0, 0.55, 1], [0, 0.18, 0.7]);
  const coreShadow = useTransform(
    fill,
    [0, 1],
    [
      "0 0 8px rgba(177,5,229,0.2)",
      "0 0 22px rgba(177,5,229,1), 0 0 56px rgba(177,5,229,0.85)",
    ],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-2 bottom-[12.5rem] left-0 z-0 w-28 -translate-x-1/2 sm:bottom-[13.5rem] md:left-1/2"
    >
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/12" />
      <motion.div
        style={{ scaleY: fill }}
        className="absolute top-0 left-1/2 h-full w-[3px] origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-primary-bright via-primary to-secondary"
      />
      <motion.span
        style={{
          top: dot,
          scale: outerHaloScale,
          opacity: outerHaloOpacity,
        }}
        className="absolute left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-bright blur-2xl"
      />
      <motion.span
        style={{
          top: dot,
          scale: haloScale,
          opacity: haloOpacity,
          filter: haloFilter,
        }}
        className="absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-bright"
      />
      <motion.span
        style={{ top: dot, boxShadow: coreShadow }}
        className="absolute left-1/2 z-1 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}

function StepScene({
  step,
  align,
}: {
  step: (typeof processSteps)[number];
  align: "left" | "right";
}) {
  const isDesktop = useIsDesktop();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2, 0.38, 0.58, 1],
    [0.84, 1.08, 1.08, 1.08, 0.9, 0.86],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.08], [0.35, 1]);

  return (
    <div ref={ref} className="relative pb-6 md:h-[66vh] md:pb-0">
      <div className="md:sticky md:top-24 lg:top-28">
        <div className="grid grid-cols-1 items-start md:grid-cols-2 md:gap-x-16">
          {align === "left" ? (
            <motion.div
              style={isDesktop ? { scale, opacity } : undefined}
              className="relative z-10 w-full max-w-xl origin-center pl-4 md:max-w-none md:justify-self-end md:pl-0 md:pr-2"
            >
              <StepCard step={step} />
            </motion.div>
          ) : (
            <>
              <div className="hidden md:block" />
              <motion.div
                style={isDesktop ? { scale, opacity } : undefined}
                className="relative z-10 w-full max-w-xl origin-center pl-4 md:max-w-none md:pl-2"
              >
                <StepCard step={step} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function LastStepScene({
  step,
  lineProgress,
}: {
  step: (typeof processSteps)[number];
  lineProgress: MotionValue<number>;
}) {
  const isDesktop = useIsDesktop();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.42"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.35, 1]);
  const glowOpacity = useTransform(lineProgress, [0.88, 0.97], [0, 1]);
  const cardGlow = useTransform(
    lineProgress,
    [0.88, 0.97],
    [
      "0 0 0 1px rgba(177,5,229,0), 0 0 24px rgba(177,5,229,0), 0 0 60px rgba(144,0,187,0)",
      "0 0 0 1px rgba(177,5,229,0.9), 0 0 36px rgba(177,5,229,0.55), 0 0 90px rgba(144,0,187,0.42)",
    ],
  );

  return (
    <div ref={ref} className="relative z-10 pb-8 pt-6 sm:pb-12 sm:pt-8">
      <motion.div
        style={isDesktop ? { scale, opacity } : undefined}
        className="relative mx-auto w-full max-w-xl origin-center pl-4 md:pl-0"
      >
        <motion.div
          aria-hidden
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(177,5,229,0.5),rgba(144,0,187,0.18)_45%,transparent_72%)] blur-2xl"
        />
        <StepCard step={step} style={{ boxShadow: cardGlow }} glow />
      </motion.div>
    </div>
  );
}

function StepCard({
  step,
  style,
  glow = false,
}: {
  step: (typeof processSteps)[number];
  style?: MotionStyle;
  glow?: boolean;
}) {
  return (
    <motion.article
      style={style}
      className={cn(
        "glass rounded-[28px] p-7 sm:p-9",
        glow && "border-primary-bright/80",
      )}
    >
      <p className="font-display text-4xl text-primary/80">{step.id}</p>
      <h3 className="mt-4 font-display text-2xl text-white sm:text-3xl">
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
    </motion.article>
  );
}
