import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offers, site } from "@/data/site";

export function Pricing() {
  return (
    <section id="offres" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Offres"
            title="Choisissez la formule qui vous convient"
            subtitle="Deux cadres clairs. Le devis final s’adapte toujours à votre projet."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal key={offer.name} delay={index * 0.08}>
              <Card className="relative h-full">
                {offer.tag ? (
                  <span className="absolute top-5 right-5 rounded-xl bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {offer.tag}
                  </span>
                ) : null}
                <h3 className="font-display text-3xl text-white">
                  Offre {offer.name}
                </h3>
                <p className="mt-4 text-muted/90">{offer.pitch}</p>
                <p className="mt-2 text-sm text-grey">Idéal pour : {offer.ideal}</p>
                <Button href={site.calendar} external className="mt-7 w-full">
                  {offer.cta}
                </Button>
                <p className="mt-8 text-sm font-semibold text-white">Inclus</p>
                <ul className="mt-3 space-y-2.5">
                  {offer.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-bright" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
