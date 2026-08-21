import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 pb-10 pt-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Logo className="text-xl" />
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-grey">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
