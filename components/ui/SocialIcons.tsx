import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const items = [
  {
    href: site.socials.malt,
    label: "Malt",
    icon: <MaltIcon />,
  },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: site.socials.github,
    label: "GitHub",
    icon: <GitHubIcon />,
  },
];

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="group relative z-1 grid h-9 w-9 place-items-center rounded-full border border-primary text-primary transition-colors duration-300 before:absolute before:inset-0 before:-z-1 before:scale-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:text-white hover:before:scale-110"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MaltIcon() {
  return (
    <span
      aria-hidden
      className="h-4 w-4 bg-primary transition-colors duration-300 group-hover:bg-white"
      style={{
        mask: "url(/images/icons/malt.svg) no-repeat center / contain",
        WebkitMask: "url(/images/icons/malt.svg) no-repeat center / contain",
      }}
    />
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.49h4.56V24H.22V8.49zM8.23 8.49h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.77h-4.56v-7.78c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.23V8.49z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.2.68.81.56A12 12 0 0 0 12 .3z" />
    </svg>
  );
}
