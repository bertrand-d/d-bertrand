import type { NavItem } from "@/data/site";

export const renfortDevAgence = {
  slug: "renfort-dev-agence",
  title: "Renfort développeuse freelance pour agences",
  description:
    "Développeuse web fullstack (forte appétence front) en renfort pour agences et équipes produit : React, Next.js, intégration Figma, design systems, APIs. Missions ciblées, delivery propre.",
  eyebrow: "Agences & équipes produit",
  h1: "Une développeuse fullstack pour renforcer vos équipes",
  lead:
    "Renfort temporaire, lot à livrer ou mission plus longue : je m’intègre à vos process, livre proprement, et avance sans friction — avec une vraie appétence front.",
  nav: [
    { href: "#missions", label: "Missions" },
    { href: "#process", label: "Process" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#avis", label: "Avis" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ] satisfies NavItem[],
  footerExtraLinks: [
    { href: "/", label: "Accueil" },
    { href: "/mentions-legales/", label: "Mentions légales" },
  ] satisfies NavItem[],
  missions: [
    {
      title: "Renfort front React / Next.js",
      text: "Sprints, features, pages critiques : je renforce votre équipe avec un rendu soigné et du code maintenable.",
    },
    {
      title: "Intégration Figma & design systems",
      text: "Pixel perfect, composants réutilisables, tokens respectés — je parle le même langage que vos designers.",
    },
    {
      title: "Fullstack quand il le faut",
      text: "APIs, Node.js, automatisations, wiring produit : je ne m’arrête pas à l’UI si le besoin le demande.",
    },
    {
      title: "Lots & delivery ciblés",
      text: "Un périmètre clair, une livraison nette, zéro micro-management. Idéal en renfort ou en sous-traitance.",
    },
  ],
  collab: [
    {
      title: "Je m’intègre à vos outils",
      text: "Git, Notion, Slack, Jira, Linear… Je m’adapte à votre façon de travailler, pas l’inverse.",
    },
    {
      title: "Communication claire",
      text: "Points courts, risques signalés tôt, livrables compréhensibles pour tech et non-tech.",
    },
    {
      title: "Autonomie réelle",
      text: "Vous n’avez pas à me porter. Je prends le sujet, je livre, je documente ce qu’il faut.",
    },
  ],
  faqs: [
    {
      q: "Interviens-tu en régie / TJM ou au forfait ?",
      a: "Les deux sont possibles selon le cadre de la mission. On choisit ensemble ce qui est le plus simple pour vous : renfort au temps passé, ou lot forfaité avec périmètre clair.",
    },
    {
      q: "Peux-tu t’intégrer à une équipe déjà en place ?",
      a: "Oui, c’est mon mode de travail habituel avec les agences. Je prends le contexte, les conventions du repo, et j’avance dans vos process.",
    },
    {
      q: "Quelles stacks maîtrises-tu ?",
      a: "Surtout React, Next.js, TypeScript, Node.js, intégration Figma et design systems. J’adapte aussi la stack au projet quand c’est pertinent. Je maitrise également d'autres stacks telles que Playwright, n8n, Tailwind, MySQL, Webflow, etc...",
    },
    {
      q: "Es-tu dispo pour des missions courtes ?",
      a: "Oui : renfort de quelques jours à plusieurs semaines, ou missions plus longues. On cadre le rythme dès le premier échange.",
    },
    {
      q: "Travailles-tu en remote ?",
      a: "Dans l'idéal, principalement en remote. Mais je peux également me déplacer de manière ponctuelle si nécessaire.",
    },
  ],
} as const;
