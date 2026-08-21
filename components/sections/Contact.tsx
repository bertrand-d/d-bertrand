import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="glass overflow-hidden rounded-[32px] px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-bright">
                  Contact
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-5xl">
                  <span className="text-gradient">Travaillons ensemble</span>
                </h2>
                <p className="mt-4 max-w-lg text-muted/90">
                  Une question, un brief, un projet à lancer ? Réservez un
                  créneau. Pas de démarchage commercial.
                </p>
                <Button href={site.calendar} external size="lg" className="mt-8">
                  Booker un appel
                </Button>
              </div>
              <ul className="space-y-5">
                <Info
                  label="Téléphone"
                  value={site.phone}
                  href={site.phoneHref}
                />
                <Info
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <Info label="Localisation" value={site.location} />
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="font-display text-lg text-white">{value}</span>
  );

  return (
    <li className="rounded-2xl border border-white/8 bg-white/4 px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-grey">{label}</p>
      {href ? (
        <a href={href} className="mt-1 inline-block hover:text-primary-bright">
          {content}
        </a>
      ) : (
        <p className="mt-1">{content}</p>
      )}
    </li>
  );
}
