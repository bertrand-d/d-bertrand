import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { argumentsList } from "@/data/site";

export function Arguments() {
  return (
    <section className="relative z-10 py-10 sm:py-16">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {argumentsList.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card className="h-full hover:rotate-1">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-primary p-2.5">
                  <span
                    role="img"
                    aria-label={item.iconAlt}
                    className="h-full w-full bg-white"
                    style={{
                      mask: `url(${item.icon}) no-repeat center / contain`,
                      WebkitMask: `url(${item.icon}) no-repeat center / contain`,
                    }}
                  />
                </span>
                <h3 className="font-display text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted/80">
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
