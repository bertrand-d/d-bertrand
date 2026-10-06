import type { NavItem } from "@/data/site";

export const webdesignerFreelance = {
  slug: "webdesigner-freelance",
  title: "Webdesigner freelance — création de site web",
  description:
    "Webdesigner freelance pour TPE, AE et PME : création de site vitrine, e-commerce ou landing page. Un site soigné, devis clair, mise en ligne accompagnée.",
  eyebrow: "Webdesigner freelance",
  h1: "Webdesigner à votre service pour un site qui vous ressemble",
  lead:
    "Création de site vitrine, e-commerce ou landing page : un rendu soigné, pensé pour votre activité, du premier échange jusqu’à la mise en ligne.",
  nav: [
    { href: "#besoin", label: "Besoin" },
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
  clarify: [
    {
      title: "Site vitrine",
      text: "Présenter votre activité avec clarté et crédibilité, pour donner envie de vous contacter.",
    },
    {
      title: "E-commerce & landing",
      text: "Vendre en ligne ou concentrer une offre sur une page efficace, prête à convertir.",
    },
    {
      title: "Design adapté à votre budget",
      text: "Thème personnalisé, UI assistée par IA, ou designer partenaire — on choisit ce qui vous convient.",
    },
  ],
  benefits: [
    {
      title: "Une seule interlocutrice",
      text: "Du brief à la mise en ligne, vous avancez avec quelqu’un qui suit le projet de bout en bout.",
    },
    {
      title: "Un site pensé pour convertir",
      text: "Beau, clair et rapide : un parcours qui inspire confiance et pousse à l’action.",
    },
    {
      title: "Cadre et délais annoncés",
      text: "Devis précis, étapes expliquées, livraison soignée. Vous savez où on en est.",
    },
  ],
  faqs: [
    {
      q: "Je n’ai pas de maquette, c’est grave ?",
      a: "Non. On choisit ensemble la meilleure option : thème adapté, UI assistée par IA, ou design avec un partenaire.",
    },
    {
      q: "Quels types de sites proposes-tu ?",
      a: "Sites vitrine, landing pages, e-commerce et applications web. Le format dépend de votre activité et de vos objectifs.",
    },
    {
      q: "Combien ça coûte ?",
      a: "Ça dépend du périmètre. L’offre Starter convient à un site simple livré rapidement ; le Premium pour un projet plus ambitieux. On cadrera le budget dès le premier appel.",
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "Un délai estimatif est toujours fourni avec le devis. Un site Starter peut être livré en 48h à 5 jours ouvrés.",
    },
    {
      q: "Et après la mise en ligne ?",
      a: "Documentation, formation, forfait de maintenance ou interventions à la demande — selon votre rythme.",
    },
  ],
} as const;
