import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { argumentsList } from "@/data/site";

const icons = [
  <PathIcon key="1" d="M4 12a8 8 0 1 0 8-8M12 4v4m0 0 3-1" />,
  <PathIcon key="2" d="M5 16V8l7-4 7 4v8l-7 4-7-4Z" />,
  <PathIcon key="3" d="M12 4v16M6 9l6-3 6 3M6 15l6 3 6-3" />,
  <PathIcon key="4" d="M4 12h16M8 8l-4 4 4 4m8-8 4 4-4 4" />,
];

export function Arguments() {
  return (
    <section className="relative z-10 py-10 sm:py-16">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {argumentsList.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card className="h-full hover:rotate-1">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
                  {icons[index]}
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

function PathIcon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
