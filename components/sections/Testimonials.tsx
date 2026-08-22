import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { site, testimonials } from "@/data/site";
import Image from "next/image";

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
        <div className="mt-12">
          <Marquee>
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="glass flex w-[320px] shrink-0 flex-col gap-5 rounded-[22px] p-6 sm:w-[420px]"
              >
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
                    <p className="truncate text-sm text-grey">{item.role}</p>
                  </div>
                  <Image
                    src={item.logo}
                    alt=""
                    width={72}
                    height={32}
                    className="hidden h-8 w-auto max-w-[72px] object-contain sm:block"
                  />
                </header>
                <p className="text-[15px] leading-relaxed text-muted/90">
                  “{item.quote}”
                </p>
              </article>
            ))}
          </Marquee>
        </div>
      </Reveal>

      <Container>
        <Reveal delay={0.12}>
          <Card className="mx-auto mt-12 max-w-md text-center" hover={false}>
            <p className="text-sm text-muted">Notée</p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm">
              <StarRating />
              <span>
                sur{" "}
                <a
                  href={site.socials.malt}
                  className="text-primary-bright hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Malt
                </a>
              </span>
            </p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm">
              <StarRating />
              <span>
                sur{" "}
                <a
                  href={site.socials.google}
                  className="text-primary-bright hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
              </span>
            </p>
            <p className="mt-4 font-display text-2xl text-primary-bright">100%</p>
            <p className="text-sm text-muted">
              recommandée sur{" "}
              <a
                href={site.socials.linkedin}
                className="text-primary-bright hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <Button href="#contact" className="mt-6">
              Me contacter
            </Button>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
