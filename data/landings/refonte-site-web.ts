import type { NavItem } from "@/data/site";

export const refonteSiteWeb = {
  slug: "refonte-site-web",
  title: "Refonte de site web",
  description:
    "Refonte de site web pour TPE, AE et PME : moderniser un site obsolète, améliorer le mobile, la clarté et les conversions. Devis clair, accompagnement jusqu’à la mise en ligne.",
  eyebrow: "Refonte de site web",
  h1: "Refonte de site web : un site à jour, clair et efficace",
  lead:
    "Votre site a vieilli, ne convertit plus ou n’est plus agréable sur mobile ? Je le repense et le remets en ligne — plus moderne, plus rapide, plus crédible.",
  nav: [
    { href: "#signes", label: "Signes" },
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
  signs: [
    {
      title: "Il fait daté",
      text: "Design vieillissant, messages flous : vos visiteurs doutent avant même de découvrir votre offre.",
    },
    {
      title: "Il est compliqué à utiliser sur mobile",
      text: "Boutons trop petits, pages lentes, formulaires qui bloquent — et une partie de vos prospects part.",
    },
    {
      title: "Il ne vous rapporte plus",
      text: "Peu de demandes, parcours confus, ou contenus impossibles à faire évoluer sans galère.",
    },
    {
      title: "Il est difficile à gérer",
      text: "Chaque modification devient un chantier. Vous avez besoin d’un site plus simple à faire vivre.",
    },
  ],
  benefits: [
    {
      title: "On part de l’existant",
      text: "Je regarde ce qui fonctionne déjà (contenus, SEO, outils) pour le conserver ou le réécrire proprement.",
    },
    {
      title: "Un site plus clair et plus rapide",
      text: "Structure, design et parcours revus pour inspirer confiance et faciliter la prise de contact.",
    },
    {
      title: "Mise en ligne accompagnée",
      text: "Basculer sans stress : redirection, contenus, tests, et un site prêt à reprendre le relais.",
    },
  ],
  faqs: [
    {
      q: "Faut-il tout jeter pour une refonte ?",
      a: "Pas forcément. On garde ce qui a de la valeur (textes, photos, référencement, outils) et on reconstruit ce qui freine votre image ou vos conversions.",
    },
    {
      q: "Est-ce que je vais perdre mon référencement ?",
      a: "On anticipe les redirections et la structure des pages pour limiter l’impact. L’objectif, c’est une refonte qui modernise sans casser inutilement votre visibilité.",
    },
    {
      q: "Combien de temps dure une refonte ?",
      a: "Ça dépend du volume de pages et des fonctionnalités. Un délai estimatif est toujours donné avec le devis, après le premier échange.",
    },
    {
      q: "Peux-tu reprendre un site WordPress / Wix / autre ?",
      a: "Oui. On part de votre outil actuel, puis on choisit la meilleure stack pour la suite — parfois en restant proche de l’existant, parfois en migrant.",
    },
    {
      q: "Combien ça coûte ?",
      a: "Selon le périmètre. Les offres Starter et Premium donnent un cadre ; le devis final s’adapte à votre refonte. On clarifie le budget dès le premier appel.",
    },
  ],
} as const;
