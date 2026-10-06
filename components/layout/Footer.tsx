import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  footerExtraLinks as defaultExtraLinks,
  nav as defaultNav,
  site,
  type NavItem,
} from "@/data/site";
import Link from "next/link";

export function Footer({
  items = defaultNav,
  extraLinks = defaultExtraLinks,
}: {
  items?: readonly NavItem[];
  extraLinks?: readonly NavItem[];
}) {
  return (
    <footer className="relative z-10 border-t border-white/8 pb-10 pt-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Logo size="lg" />
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted/80">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            {extraLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-grey">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
