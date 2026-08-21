import { Marquee } from "@/components/motion/Marquee";
import { logos } from "@/data/site";
import Image from "next/image";

export function Logos() {
  return (
    <section aria-label="Clients et partenaires" className="relative z-10 py-10">
      <Marquee>
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="grid h-12 w-36 shrink-0 place-items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              className="h-9 w-auto max-w-[140px] object-contain opacity-80"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(7406%) hue-rotate(284deg) brightness(76%) contrast(119%)",
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
