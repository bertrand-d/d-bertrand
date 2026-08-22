import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
import Script from "next/script";
import { site } from "@/data/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      url: site.url,
      image: `${site.url}/images/hero/me.png`,
      jobTitle: "Développeuse web freelance",
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      sameAs: [
        site.socials.malt,
        site.socials.linkedin,
        site.socials.github,
      ],
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "fr-FR",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/hero/me.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="noise flex min-h-full flex-col bg-bg text-muted">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VYNG9WZ812"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VYNG9WZ812');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
