import { VerticalMarquee } from "@/components/motion/VerticalMarquee";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { site, testimonials } from "@/data/site";
import Image from "next/image";

const columns = [0, 1, 2].map((column) =>
  testimonials.filter((_, index) => index % 3 === column),
);

export function Testimonials() {
  return (
    <section id="avis" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Avis"
            title="Ils sont pleinement satisfaits"
            subtitle="Agences, fondateurs, associations : le même fil, un rendu propre et une collab fluide."
          />
        </Reveal>
      </Container>

      <Reveal delay={0.08}>
        <div className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-linear-to-b from-bg to-transparent sm:h-36"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t from-bg to-transparent sm:h-36"
          />

          <Container>
            <div className="h-[560px] md:hidden">
              <VerticalMarquee>
                {testimonials.map((item) => (
                  <TestimonialCard key={item.name} item={item} />
                ))}
              </VerticalMarquee>
            </div>

            <div className="hidden h-[640px] grid-cols-3 gap-5 md:grid">
              {columns.map((items, index) => (
                <VerticalMarquee key={index} reverse={index === 1}>
                  {items.map((item) => (
                    <TestimonialCard key={item.name} item={item} />
                  ))}
                </VerticalMarquee>
              ))}
            </div>
          </Container>
        </div>
      </Reveal>

      <Container>
        <Reveal delay={0.12}>
          <Card className="mx-auto mt-12 max-w-[400px] text-center text-base text-muted" hover={false}>
            Notée:
            <div className="mt-3 flex flex-col gap-2.5">
              <p className="flex items-center justify-center gap-1">
                <StarRating size={20} />
                sur
                <a
                  href={site.socials.malt}
                  className="text-primary transition-colors hover:text-primary-bright"
                  target="_blank"
                  rel="noreferrer"
                >
                  Malt
                </a>
              </p>
              <p className="flex items-center justify-center gap-1">
                <StarRating size={20} />
                sur
                <a
                  href={site.socials.google}
                  className="text-primary transition-colors hover:text-primary-bright"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
              </p>
              <p className="flex items-center justify-center gap-1">
                <span className="text-[2rem] font-semibold leading-none text-primary">
                  100%
                </span>{" "}
                recommandée sur
              </p>
              <p className="flex items-center justify-center gap-1">
                <a
                  href={site.socials.linkedin}
                  className="text-primary transition-colors hover:text-primary-bright"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                et
                <a
                  href={site.socials.collective}
                  className="text-primary transition-colors hover:text-primary-bright"
                  target="_blank"
                  rel="noreferrer"
                >
                  Collective work
                </a>
              </p>
            </div>
            <Button href="#contact" className="mt-6">
              Me contacter
            </Button>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <article className="glass flex flex-col gap-5 rounded-[22px] p-6">
      <header className="flex items-center gap-3">
        <Image
          src={item.photo}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-white">{item.name}</p>
          <p className="text-sm leading-snug text-grey">{item.role}</p>
        </div>
        <Image
          src={item.logo}
          alt=""
          width={72}
          height={32}
          className="hidden h-8 w-auto max-w-[72px] object-contain sm:block"
        />
      </header>
      <p className="text-[15px] leading-relaxed text-muted/90">“{item.quote}”</p>
    </article>
  );
}
