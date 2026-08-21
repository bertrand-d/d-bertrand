import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/site";

export function Faq() {
  return (
    <section id="faq" className="relative z-10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Vos questions. Mes réponses."
            subtitle="Les points qui reviennent le plus souvent avant de démarrer."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
