import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CreationSiteWebLanding } from "@/components/landing/CreationSiteWeb";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { creationSiteWeb } from "@/data/landings/creation-site-web";
import { site } from "@/data/site";
import type { Metadata } from "next";

const pageUrl = `${site.url}/${creationSiteWeb.slug}/`;

export const metadata: Metadata = {
  title: creationSiteWeb.title,
  description: creationSiteWeb.description,
  alternates: {
    canonical: `/${creationSiteWeb.slug}/`,
  },
  openGraph: {
    title: `${creationSiteWeb.title} — ${site.name}`,
    description: creationSiteWeb.description,
    url: pageUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${creationSiteWeb.title} — ${site.name}`,
    description: creationSiteWeb.description,
    images: ["/images/hero/me.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: creationSiteWeb.title,
      description: creationSiteWeb.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
      about: {
        "@type": "Service",
        name: "Création de site web",
        serviceType: "Création de site web sur mesure",
        provider: {
          "@type": "Person",
          name: site.name,
          url: site.url,
        },
        areaServed: ["FR", "LU"],
        description: creationSiteWeb.description,
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
          name: creationSiteWeb.title,
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function CreationSiteWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientGlow />
      <Header items={creationSiteWeb.nav} />
      <main className="relative z-10 flex-1">
        <CreationSiteWebLanding />
      </main>
      <Footer
        items={creationSiteWeb.nav}
        extraLinks={creationSiteWeb.footerExtraLinks}
      />
    </>
  );
}
