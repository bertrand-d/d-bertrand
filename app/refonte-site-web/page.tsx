import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RefonteSiteWebLanding } from "@/components/landing/RefonteSiteWeb";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { refonteSiteWeb } from "@/data/landings/refonte-site-web";
import { site } from "@/data/site";
import type { Metadata } from "next";

const pageUrl = `${site.url}/${refonteSiteWeb.slug}/`;

export const metadata: Metadata = {
  title: refonteSiteWeb.title,
  description: refonteSiteWeb.description,
  alternates: {
    canonical: `/${refonteSiteWeb.slug}/`,
  },
  openGraph: {
    title: `${refonteSiteWeb.title} — ${site.name}`,
    description: refonteSiteWeb.description,
    url: pageUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${refonteSiteWeb.title} — ${site.name}`,
    description: refonteSiteWeb.description,
    images: ["/images/hero/me.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: refonteSiteWeb.title,
      description: refonteSiteWeb.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
      about: {
        "@type": "Service",
        name: "Refonte de site web",
        serviceType: "Refonte de site web",
        provider: {
          "@type": "Person",
          name: site.name,
          url: site.url,
        },
        areaServed: ["FR", "LU"],
        description: refonteSiteWeb.description,
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
          name: refonteSiteWeb.title,
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function RefonteSiteWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientGlow />
      <Header items={refonteSiteWeb.nav} />
      <main className="relative z-10 flex-1">
        <RefonteSiteWebLanding />
      </main>
      <Footer
        items={refonteSiteWeb.nav}
        extraLinks={refonteSiteWeb.footerExtraLinks}
      />
    </>
  );
}
