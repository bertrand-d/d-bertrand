import type { NavItem } from "@/data/site";

export const creationSiteWeb = {
  slug: "creation-site-web",
  title: "Création de site web sur mesure",
  description:
    "Création de site web pour TPE, PME et indépendants : site vitrine, e-commerce, landing page ou application. Développeuse web fullstack — devis clair, livraison soignée.",
  eyebrow: "Création de site web",
  h1: "Un site web qui vous ressemble.",
  lead:
    "Site vitrine, e-commerce, landing page ou application : je conçois et développe votre site de A à Z. Une seule interlocutrice, du premier échange à la mise en ligne.",
  nav: [
    { href: "#process", label: "Process" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#avis", label: "Avis" },
    { href: "#offres", label: "Offres" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ] satisfies NavItem[],
  footerExtraLinks: [
    { href: "/", label: "Accueil" },
    { href: "/mentions-legales/", label: "Mentions légales" },
  ] satisfies NavItem[],
  formats: [
    {
      title: "Site vitrine",
      text: "Présenter votre activité avec clarté, crédibilité et un parcours pensé pour convertir.",
    },
    {
      title: "E-commerce",
      text: "Vendre en ligne avec une boutique fluide, responsive, et des parcours d’achat soignés.",
    },
    {
      title: "Landing page",
      text: "Une page focalisée sur une offre, une campagne ou un lancement — claire et efficace.",
    },
    {
      title: "Application web",
      text: "Un outil ou un espace sur mesure pour vos clients, vos équipes ou votre produit.",
    },
  ],
  benefits: [
    {
      title: "Un site pensé pour vos objectifs",
      text: "Pas un template générique : une interface alignée avec votre image et vos priorités business.",
    },
    {
      title: "Du design au code, sans friction",
      text: "Thème adapté, UI assistée par IA ou mise en relation designer — puis intégration et développement fullstack.",
    },
    {
      title: "Livraison claire, sans surprise",
      text: "Devis précis, délais annoncés, suivi transparent. Vous savez toujours où on en est.",
    },
  ],
  faqs: [
    {
      q: "Combien coûte la création d’un site web ?",
      a: "Ça dépend du périmètre (nombre de pages, e-commerce, fonctionnalités). L’offre Starter démarre pour un site simple livré rapidement ; le Premium couvre les projets plus ambitieux. On cadrera le budget dès le premier appel.",
    },
    {
      q: "Je n’ai pas de maquette, c’est un problème ?",
      a: "Non. Selon votre budget : design via un partenaire, base / thème adapté à votre activité, ou UI assistée par IA. On choisit ensemble la bonne option.",
    },
    {
      q: "Quels types de sites réalises-tu ?",
      a: "Sites vitrine, landing pages, e-commerce, applications web et automatisations associées. Stack adaptée au projet (React, Next.js, Webflow, etc.).",
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "Un délai estimatif est toujours fourni avec le devis. Un site Starter peut être livré en 48h à 5 jours ouvrés.",
    },
    {
      q: "Et après la mise en ligne ?",
      a: "Documentation, formation, forfait de maintenance ou interventions à la demande — selon votre rythme, sans engagement forcé.",
    },
  ],
} as const;
