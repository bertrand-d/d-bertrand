import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const without = [
  "Un site générique, difficile à faire évoluer",
  "Des visiteurs qui ne comprennent pas votre offre",
  "Des retouches coûteuses à chaque nouvelle page",
  "Une image qui ne justifie pas vos tarifs",
];

const withMe = [
  "Une interface fidèle à votre marque",
  "Un parcours pensé pour convertir",
  "Des composants réutilisables, un site durable",
  "Un rendu premium qui inspire confiance",
];

export function Contrast() {
  return (
    <section className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pourquoi ça change tout"
            title="Votre site est-il vraiment fait pour vous ?"
            subtitle="La question n’est pas seulement d’avoir un site. C’est qu’un prospect comprenne, en quelques secondes, que vous êtes la bonne personne."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="rounded-[28px] border border-white/8 bg-white/3 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-grey">
                Sans site soigné
              </p>
              <ul className="mt-6 space-y-4">
                {without.map((item) => (
                  <li key={item} className="flex gap-3 text-muted/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-grey/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="glass rounded-[28px] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-bright">
                Avec un site pensé
              </p>
              <ul className="mt-6 space-y-4">
                {withMe.map((item) => (
                  <li key={item} className="flex gap-3 text-offwhite">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
