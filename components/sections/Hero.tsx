"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AccentWord } from "@/components/ui/AccentWord";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SocialIcons } from "@/components/ui/SocialIcons";
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
            className="mb-7"
          >
            <span className="rating-chip flex-col md:flex-row inline-flex items-center gap-3 rounded-full border border-primary/35 bg-white/8 px-10 md:px-3 py-1.5">
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
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-bright"
          >
            Développeuse web & webdesigner freelance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="font-display text-[2.4rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Je crée des sites web qui <AccentWord>convertissent</AccentWord>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg"
          >
            Le regard d’une webdesigner, la rigueur d’une développeuse. Création
            ou refonte de site, intégration Figma et webmastering — livrés sans
            friction, du premier appel jusqu’à la mise en ligne.
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
            className="mt-7 flex justify-center"
          >
            <SocialIcons />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <ProfileCard priority />
        </motion.div>
      </Container>
    </section>
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
