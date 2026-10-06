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
import { refonteSiteWeb } from "@/data/landings/refonte-site-web";
import { site } from "@/data/site";

export function RefonteSiteWebLanding() {
  return (
    <>
      <Hero />
      <Signs />
      <Benefits />
      <Process
        title="Trois étapes pour votre refonte"
        subtitle="Un cadre clair pour moderniser votre site sans y laisser votre énergie — ni votre patience."
      />
      <Portfolio
        title="Des projets déjà en ligne"
        subtitle="Créations et refontes pour des activités qui avaient besoin d’un site à la hauteur."
      />
      <Testimonials
        subtitle="Indépendants, fondateurs, associations : le même fil, un rendu propre et une collab fluide."
        ctaHref={site.calendar}
        ctaExternal
        ctaLabel="Booker un appel"
      />
      <Pricing
        title="Tarifs pour votre refonte de site"
        subtitle="Deux formules pour cadrer votre projet. Le devis final s’adapte à l’ampleur de la refonte."
      />
      <Faq />
      <Contact
        eyebrow="Prochaine étape"
        title="Parlons de votre refonte de site"
        description="Un appel de 30 minutes pour regarder l’existant, le besoin et le budget — ou contactez-moi directement. Pas de démarchage commercial."
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
            {refonteSiteWeb.eyebrow}
          </p>
          <h1 className="font-display text-[2.2rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-gradient">{refonteSiteWeb.h1}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg">
            {refonteSiteWeb.lead}
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
              imageAlt={`${site.name}, refonte de site web`}
              bio="6 ans d’expérience en création et refonte de sites web : je vous aide à moderniser l’existant, avec un rendu soigné et un suivi clair."
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Signs() {
  return (
    <section id="signes" className="relative z-10 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Et si c’était le moment ?"
            title="Les signes qu’une refonte s’impose"
            subtitle="Pas besoin d’être expert : si plusieurs points vous parlent, votre site freine probablement votre activité."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {refonteSiteWeb.signs.map((item, index) => (
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
            eyebrow="Comment on s’y prend"
            title="Une refonte utile, pas juste un coup de peinture"
            subtitle="L’objectif : un site plus crédible, plus simple à faire vivre, et plus efficace pour vos demandes."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {refonteSiteWeb.benefits.map((item, index) => (
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
            title="Avant de lancer votre refonte"
            subtitle="Les questions qui reviennent le plus souvent quand on modernise un site existant."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={[...refonteSiteWeb.faqs]} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
