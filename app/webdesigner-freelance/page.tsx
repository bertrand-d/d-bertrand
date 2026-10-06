import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WebdesignerFreelanceLanding } from "@/components/landing/WebdesignerFreelance";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { webdesignerFreelance } from "@/data/landings/webdesigner-freelance";
import { site } from "@/data/site";
import type { Metadata } from "next";

const pageUrl = `${site.url}/${webdesignerFreelance.slug}/`;

export const metadata: Metadata = {
  title: webdesignerFreelance.title,
  description: webdesignerFreelance.description,
  alternates: {
    canonical: `/${webdesignerFreelance.slug}/`,
  },
  openGraph: {
    title: `${webdesignerFreelance.title} — ${site.name}`,
    description: webdesignerFreelance.description,
    url: pageUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${webdesignerFreelance.title} — ${site.name}`,
    description: webdesignerFreelance.description,
    images: ["/images/hero/me.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: webdesignerFreelance.title,
      description: webdesignerFreelance.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
      },
      about: {
        "@type": "Service",
        name: "Webdesigner freelance",
        serviceType: "Création de site web",
        provider: {
          "@type": "Person",
          name: site.name,
          url: site.url,
        },
        areaServed: ["FR", "LU"],
        description: webdesignerFreelance.description,
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
          name: webdesignerFreelance.title,
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function WebdesignerFreelancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientGlow />
      <Header items={webdesignerFreelance.nav} />
      <main className="relative z-10 flex-1">
        <WebdesignerFreelanceLanding />
      </main>
      <Footer
        items={webdesignerFreelance.nav}
        extraLinks={webdesignerFreelance.footerExtraLinks}
      />
    </>
  );
}
