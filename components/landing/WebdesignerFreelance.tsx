import { Reveal } from "@/components/motion/Reveal";
import { Contact } from "@/components/sections/Contact";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { webdesignerFreelance } from "@/data/landings/webdesigner-freelance";
import { site } from "@/data/site";

export function WebdesignerFreelanceLanding() {
  return (
    <>
      <Hero />
      <Clarify />
      <Benefits />
      <Process
        title="Trois étapes pour lancer votre site"
        subtitle="Un cadre simple et transparent, du premier échange jusqu’à la mise en ligne."
      />
      <Portfolio
        title="Des sites déjà en ligne"
        subtitle="Création de A à Z pour des indépendants, commerces et projets qui avaient besoin d’un vrai site."
      />
      <Testimonials
        subtitle="Indépendants, fondateurs, associations : le même fil, un rendu propre et une collab fluide."
        ctaHref={site.calendar}
        ctaExternal
        ctaLabel="Booker un appel"
      />
      <Pricing
        title="Tarifs pour votre site web"
        subtitle="Deux formules claires pour démarrer votre projet. Le devis s’adapte toujours à votre besoin."
      />
      <Faq />
      <Contact
        eyebrow="Prochaine étape"
        title="Parlons de votre projet de site"
        description="Un appel de 30 minutes pour cadrer le besoin, le design et le budget — ou contactez-moi directement. Pas de démarchage commercial."
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
            {webdesignerFreelance.eyebrow}
          </p>
          <h1 className="font-display text-[2.2rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-gradient">{webdesignerFreelance.h1}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg">
            {webdesignerFreelance.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.calendar} external size="lg">
              Booker un appel
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
            <ProfileCard
              priority
              imageAlt={`${site.name}, webdesigner freelance`}
              bio="6 ans d’expérience en création de sites web : je vous accompagne de l’idée à la mise en ligne, avec un rendu soigné et un suivi clair."
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Clarify() {
  return (
    <section id="besoin" className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ce que je peux créer"
            title="Le site adapté à votre activité"
            subtitle="Vitrine, e-commerce ou page d’offre : on part de votre besoin, pas d’un modèle générique."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {webdesignerFreelance.clarify.map((item, index) => (
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

function Benefits() {
  return (
    <section className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pourquoi me confier votre site"
            title="Création de site, sans prise de tête"
            subtitle="Un rendu soigné, une collab fluide, et une mise en ligne sereine — pour TPE, AE et PME."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {webdesignerFreelance.benefits.map((item, index) => (
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
            title="Les questions qui reviennent"
            subtitle="Les points à clarifier avant de lancer votre site."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={[...webdesignerFreelance.faqs]} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
