import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const points = [
  {
    title: "Renfort fullstack, ancré front",
    text: "React, Next.js, Node.js : je renforce vos équipes avec un vrai sens du détail UI, sans lâcher le reste de la stack.",
  },
  {
    title: "Intégration Figma & design systems",
    text: "Pixel perfect, composants réutilisables, respect de vos tokens et de vos process.",
  },
  {
    title: "Missions ou projets ciblés",
    text: "Renfort temporaire, feature, API, automatisation : je m’adapte à votre rythme et à vos outils.",
  },
] as const;

export function Agencies() {
  return (
    <section id="agences" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Agences & équipes"
            title="Aussi pour les missions et les renforts"
            subtitle="Vous cherchez une développeuse fullstack avec une forte appétence front, pour intégrer, livrer ou renforcer une équipe ? Je m’intègre à vos process, pas l’inverse."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass mt-12 overflow-hidden rounded-[32px] px-6 py-10 sm:px-12 sm:py-14">
            <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
              {points.map((point) => (
                <li key={point.title}>
                  <p className="font-display text-lg text-white">{point.title}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted/85">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm text-muted/80">
                Déjà en collab avec des agences et des équipes produit — du brief
                à la livraison, sans micro-management.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href="/renfort-dev-agence/" variant="outline" className="shrink-0">
                  Voir la page agences
                </Button>
                <Button href={site.calendar} external className="shrink-0">
                  Discuter d’une mission
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
