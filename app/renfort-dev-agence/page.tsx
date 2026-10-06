import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RenfortDevAgenceLanding } from "@/components/landing/RenfortDevAgence";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { renfortDevAgence } from "@/data/landings/renfort-dev-agence";
import { site } from "@/data/site";
import type { Metadata } from "next";

const pageUrl = `${site.url}/${renfortDevAgence.slug}/`;

export const metadata: Metadata = {
  title: renfortDevAgence.title,
  description: renfortDevAgence.description,
  alternates: {
    canonical: `/${renfortDevAgence.slug}/`,
  },
  openGraph: {
    title: `${renfortDevAgence.title} — ${site.name}`,
    description: renfortDevAgence.description,
    url: pageUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${renfortDevAgence.title} — ${site.name}`,
    description: renfortDevAgence.description,
    images: ["/images/hero/me.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: renfortDevAgence.title,
      description: renfortDevAgence.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
      about: {
        "@type": "Service",
        name: "Renfort développeuse freelance",
        serviceType:
          "Renfort développeuse fullstack pour agences et équipes produit",
        provider: {
          "@type": "Person",
          name: site.name,
          url: site.url,
        },
        areaServed: ["FR", "LU"],
        description: renfortDevAgence.description,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${site.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: renfortDevAgence.title,
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function RenfortDevAgencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientGlow />
      <Header items={renfortDevAgence.nav} />
      <main className="relative z-10 flex-1">
        <RenfortDevAgenceLanding />
      </main>
      <Footer
        items={renfortDevAgence.nav}
        extraLinks={renfortDevAgence.footerExtraLinks}
      />
    </>
  );
}
