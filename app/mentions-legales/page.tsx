import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Mentions légales — ${site.name}`,
  description: "Mentions légales du site d-bertrand.fr",
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex-1 pt-32 pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-bright">
            Légal
          </p>
          <h1 className="font-display mt-3 text-4xl text-white">
            Mentions légales
          </h1>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted/90">
            <section>
              <h2 className="font-display mb-2 text-xl text-white">Éditeur</h2>
              <p>
                {site.name}
                <br />
                Développeuse web freelance
                <br />
                {site.location}
                <br />
                <a className="text-primary-bright" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <br />
                <a className="text-primary-bright" href={site.phoneHref}>
                  {site.phone}
                </a>
              </p>
            </section>
            <section>
              <h2 className="font-display mb-2 text-xl text-white">Hébergement</h2>
              <p>
                Le site {site.url.replace("https://", "")} est hébergé par le
                prestataire choisi pour la mise en production.
              </p>
            </section>
            <section>
              <h2 className="font-display mb-2 text-xl text-white">
                Propriété intellectuelle
              </h2>
              <p>
                L’ensemble des contenus (textes, visuels, code) est protégé.
                Toute reproduction non autorisée est interdite.
              </p>
            </section>
          </div>
          <Link
            href="/"
            className="mt-12 inline-flex text-sm text-primary-bright hover:underline"
          >
            ← Retour à l’accueil
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
