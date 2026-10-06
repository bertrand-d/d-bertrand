import { Reveal } from "@/components/motion/Reveal";
import { Contact } from "@/components/sections/Contact";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { renfortDevAgence } from "@/data/landings/renfort-dev-agence";
import { site } from "@/data/site";

export function RenfortDevAgenceLanding() {
  return (
    <>
      <Hero />
      <Missions />
      <Collab />
      <Process
        title="Un cadre clair, même en renfort"
        subtitle="De l’appel de cadrage à la livraison : je m’aligne sur votre rythme d’équipe, avec la même exigence de clarté."
      />
      <Portfolio
        title="Des livraisons déjà en production"
        subtitle="Sites, apps et intégrations livrés pour des agences, des marques et des équipes produit."
      />
      <Testimonials
        title="Ils ont travaillé avec moi"
        subtitle="Agences et équipes : collab fluide, rendu propre, autonomie réelle."
        ctaHref={site.calendar}
        ctaExternal
        ctaLabel="Discuter d’une mission"
      />
      <Faq />
      <Contact
        eyebrow="Prochaine étape"
        title="Parlons de votre besoin de renfort"
        description="Un échange court pour cadrer la mission, la stack et le format (régie ou forfait). Ou contactez-moi directement."
        ctaLabel="Discuter d’une mission"
        showLocation={false}
        className="py-16 sm:py-24"
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-bright">
            {renfortDevAgence.eyebrow}
          </p>
          <h1 className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl">
            <span className="text-gradient">{renfortDevAgence.h1}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg">
            {renfortDevAgence.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.calendar} external size="lg">
              Discuter d’une mission
            </Button>
            <Button href="#portfolio" variant="outline" size="lg">
              Voir le portfolio
            </Button>
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted/75">
            <StarRating size={14} />
            <span>5/5 · 100% recommandée</span>
          </p>
        </div>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-16 max-w-4xl">
            <ProfileCard priority />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Missions() {
  return (
    <section id="missions" className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Missions"
            title="Ce que je peux prendre en charge"
            subtitle="Renfort fullstack avec une forte appétence front — pour livrer plus vite, sans sacrifier la qualité."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {renfortDevAgence.missions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card className="h-full" hover={false}>
                <h3 className="font-display text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted/85">
                  {item.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Collab() {
  return (
    <section className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Collaboration"
            title="Conçue pour s’intégrer à vos équipes"
            subtitle="Pas besoin de changer vos process : je m’y greffe, je livre, je reste alignée."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {renfortDevAgence.collab.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[28px] border border-white/8 bg-white/3 p-7">
                <p className="font-display text-lg text-white">{item.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted/85">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Avant de démarrer une mission"
            subtitle="Les questions qui reviennent le plus souvent côté agences et équipes produit."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={[...renfortDevAgence.faqs]} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
