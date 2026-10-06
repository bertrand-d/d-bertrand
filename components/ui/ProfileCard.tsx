import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Image from "next/image";

const stats = [
  ["6+", "ans d’exp."],
  ["+20", "projets réalisés"],
  ["100%", "recommandée"],
] as const;

const defaultBio =
  "6 ans d’expertise, aujourd’hui fullstack avec une forte appétence front : je livre des sites et apps soignés, du parcours utilisateur jusqu’aux APIs quand il le faut.";

export function ProfileCard({
  className,
  priority = false,
  bio = defaultBio,
  imageAlt = `${site.name}, développeuse web fullstack et webdesigner freelance`,
}: {
  className?: string;
  priority?: boolean;
  bio?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-[32px]",
        className,
      )}
    >
      <div className="grid md:grid-cols-[minmax(220px,42%)_1fr] md:items-stretch">
        <div className="relative min-h-[260px] sm:min-h-[320px]">
          <Image
            src="/images/hero/me.png"
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover object-[center_18%] max-md:[mask-image:linear-gradient(to_bottom,black_58%,transparent)] md:[mask-image:linear-gradient(to_right,black_48%,transparent)]"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>

        <div className="space-y-5 px-6 py-8 sm:px-10 sm:py-12">
          <p className="font-display text-2xl text-white sm:text-3xl">
            {site.name}
          </p>
          <p className="text-muted/85">{bio}</p>
          <ul className="grid gap-3 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <li
                key={label}
                className="rounded-2xl border border-white/8 bg-white/4 px-3 py-3 text-center"
              >
                <p className="font-display text-xl text-white">{value}</p>
                <p className="mt-1 text-[11px] tracking-wide text-grey">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
