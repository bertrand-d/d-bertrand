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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero/me.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="noise flex min-h-full flex-col bg-bg text-muted">
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
