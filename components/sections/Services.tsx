import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Ce que je mets sur la table"
            subtitle="Sites, intégration, design system, automatisation. Une seule interlocutrice, un rendu soigné."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.07}>
              <Card className="group h-full">
                <p className="font-display text-sm text-primary-bright">
                  {service.id}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted/85">
                  {service.text}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-offwhite"
                    >
                      {tag}
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
