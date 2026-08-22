export const site = {
  name: "Delphine Bertrand",
  shortName: "d.bertrand",
  title: "Delphine Bertrand — Développeuse web freelance",
  description:
    "Développeuse web freelance spécialisée dans la création de sites web et applications sur mesure. React, Next.js, design systems. France et Luxembourg.",
  url: "https://www.d-bertrand.fr",
  email: "dbertrand.webdev@gmail.com",
  phone: "+33 7 76 05 98 11",
  phoneHref: "tel:+33776059811",
  location: "Paris, France",
  calendar: "https://calendar.app.google/om8Kt58FNxPY9wni8",
  socials: {
    malt: "https://www.malt.fr/profile/delphinebertranddevfront",
    linkedin: "https://www.linkedin.com/in/delphinewebdev/",
    github: "https://github.com/bertrand-d",
    google: "https://g.co/kgs/fsYoG5s",
    collective: "https://www.collective.work/profile/delphine-bertrand",
  },
} as const;

export const nav = [
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#avis", label: "Avis" },
  { href: "#offres", label: "Offres" },
  { href: "#faq", label: "FAQ" },
] as const;

export const logos = [
  { src: "/images/logos/ath.png", alt: "ATH Agency" },
  { src: "/images/logos/soundatech.png", alt: "Soundatech" },
  { src: "/images/logos/volkswagen.png", alt: "Volkswagen" },
  { src: "/images/logos/keneya.png", alt: "Keneya" },
  { src: "/images/logos/editus.png", alt: "Editus" },
  { src: "/images/logos/ohigo.png", alt: "Ohigo" },
  { src: "/images/logos/nayro.png", alt: "Nayro" },
  { src: "/images/logos/the_next_stories_logo.png", alt: "The Next Stories" },
  { src: "/images/logos/mhc.png", alt: "Metz Hockey Club" },
  { src: "/images/logos/Logo_AFM.png", alt: "AFM" }
] as const;

export const processSteps = [
  {
    id: "01",
    title: "La rencontre",
    duration: "30 min",
    text: "On parle de votre projet, de vos objectifs et de vos contraintes. À l’issue de l’échange, vous recevez un devis clair, sans surprise.",
    points: ["Écoute et conseils", "Périmètre défini", "Devis personnalisé"],
  },
  {
    id: "02",
    title: "Planification & intégration",
    duration: "selon le projet",
    text: "Choix des technologies, architecture en composants réutilisables, puis intégration pixel perfect. Vous savez toujours où on en est.",
    points: ["Stack adaptée", "Composants réutilisables", "Suivi transparent"],
  },
  {
    id: "03",
    title: "Livraison & tests",
    duration: "jusqu’à validation",
    text: "Le site est déployé, testé, ajusté selon vos retours. Vous partez avec un site propre, performant et durable.",
    points: ["Recette ensemble", "Mise en ligne", "Site durable"],
  },
] as const;

export const argumentsList = [
  {
    title: "Un accompagnement clair",
    text: "Du premier contact à la mise en ligne, chaque étape est expliquée. Un planning précis, pour que vous sachiez toujours où on en est.",
    icon: "/images/icons/accompagnement-dequipe.png",
    iconAlt: "Accompagnement du client",
  },
  {
    title: "La techno qui vous convient",
    text: "CMS, no-code, développement sur-mesure ou automatisation : je choisis l’outil le plus pertinent, pas le plus à la mode.",
    icon: "/images/icons/adaptation.png",
    iconAlt: "Adaptation aux besoins du client",
  },
  {
    title: "Conçu pour vos objectifs",
    text: "Visibilité, conversions, crédibilité : le site n’est pas une vitrine décorative. Il soutient réellement le développement de votre activité.",
    icon: "/images/icons/cibler.png",
    iconAlt: "Cibler les objectifs du client",
  },
  {
    title: "Zéro frais caché",
    text: "Dès le départ, vous connaissez le prix global et ce qu’il inclut. Pas d’options dissimulées, pas de facturation imprévue.",
    icon: "/images/icons/afficher.png",
    iconAlt: "Transparence des tarifs",
  },
] as const;

export const services = [
  {
    id: "01",
    title: "Sites sur mesure",
    text: "Landing pages, sites vitrine, e-commerce, applications... Une interface fidèle à votre image, rapide, responsive, pensée pour convertir.",
    tags: ["React", "Next.js", "TypeScript", "Webflow"],
  },
  {
    id: "02",
    title: "Intégrations Figma",
    text: "De la maquette au code, pixel perfect. Composants réutilisables, design system respecté, animations soignées.",
    tags: ["Pixel perfect", "Atomic design", "Responsive"],
  },
  {
    id: "03",
    title: "Design systems",
    text: "Ancienne graphiste, je rends votre interface cohérente : tokens, composants, documentation. Un socle durable pour vos équipes.",
    tags: ["UI", "Composants", "Cohérence"],
  },
  {
    id: "04",
    title: "Automatisations",
    text: "Scripts, agents IA, webhooks, Playwright : je retire l'aspect manuel de vos process. Moins d’erreurs, plus d’heures récupérées chaque semaine.",
    tags: ["IA", "n8n", "Webhooks", "Node.js", "Playwright"],
  },
] as const;

export const works = [
  {
    title: "Soundatech",
    year: "2026",
    cover: "/images/works/soundatech/soundatech-1.webp",
    alt: "Automatisation Trafft pour Soundatech",
    pictures: [] as string[],
  },
  {
    title: "Swiftway",
    year: "2026",
    cover: "/images/works/swiftway/swiftway-1.png",
    alt: "Plateforme de réservation d’hôtels",
    pictures: [
      "/images/works/swiftway/swiftway-2.png",
      "/images/works/swiftway/swiftway-3.png",
    ],
  },
  {
    title: "Lostwoods",
    year: "2026",
    cover: "/images/works/lostwoods/lostwoods.png",
    alt: "Page d’accueil Lostwoods",
    pictures: [
      "/images/works/lostwoods/lostwoods-gallery-1.png",
      "/images/works/lostwoods/lostwoods-gallery-2.png",
      "/images/works/lostwoods/lostwoods-gallery-3.png",
    ],
  },
  {
    title: "Volkswagen",
    year: "2026",
    cover: "/images/works/volkswagen/volkswagen-1.gif",
    alt: "Template DOOH Volkswagen",
    pictures: [] as string[],
  },
  {
    title: "Sans Concession",
    year: "2026",
    cover: "/images/works/sans-concession/sans-concession.gif",
    alt: "Plateforme Sans Concession",
    pictures: [
      "/images/works/sans-concession/sans-concession-1.png",
      "/images/works/sans-concession/sans-concession-2.png",
      "/images/works/sans-concession/sans-concession-3.png",
    ],
  },
  {
    title: "Zeus Invest",
    year: "2026",
    cover: "/images/works/zeus-invest/zeus-invest.png",
    alt: "Site Zeus Invest",
    pictures: [
      "/images/works/zeus-invest/zeus-invest-2.png",
      "/images/works/zeus-invest/zeus-invest-3.png",
      "/images/works/zeus-invest/zeus-invest-4.png",
    ],
  },
  {
    title: "Nayro",
    year: "2025",
    cover: "/images/works/nayro/nayro-4.png",
    alt: "Site Nayro",
    pictures: [
      "/images/works/nayro/nayro-2.png",
      "/images/works/nayro/nayro-5.png",
      "/images/works/nayro/nayro-1.png",
    ],
  },
  {
    title: "Tpress Studio",
    year: "2025",
    cover: "/images/works/tpress-studio/tpress-studio-1.png",
    alt: "Site Tpress Studio",
    pictures: [
      "/images/works/tpress-studio/tpress-studio-3.png",
      "/images/works/tpress-studio/tpress-studio-4.png",
      "/images/works/tpress-studio/tpress-studio-5.png",
    ],
  },
  {
    title: "Keneya",
    year: "2025",
    cover: "/images/works/keneya/keneya-1.png",
    alt: "Site Keneya",
    pictures: [
      "/images/works/keneya/keneya-2.png",
      "/images/works/keneya/keneya-3.png",
      "/images/works/keneya/keneya-4.png",
    ],
  },
  {
    title: "The Next Stories",
    year: "2025",
    cover: "/images/works/the-next-stories/the-next-stories-2.png",
    alt: "Studio vidéo The Next Stories",
    pictures: [
      "/images/works/the-next-stories/the-next-stories-4.png",
      "/images/works/the-next-stories/the-next-stories-1.png",
      "/images/works/the-next-stories/the-next-stories-3.png",
    ],
  },
  {
    title: "Ohigo",
    year: "2022",
    cover: "/images/works/ohigo/ohigo-gallery-1.webp",
    alt: "Site Ohigo",
    pictures: [
      "/images/works/ohigo/ohigo-gallery-2.webp",
      "/images/works/ohigo/ohigo-gallery-3.webp",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Julia Michaux",
    role: "Fondatrice, Ohigo",
    quote:
      "C’est une personne très gentille, à l’écoute, réactive, disponible et qui prend le temps d’échanger afin de trouver les bonnes solutions. Je recommande son travail à 100%.",
    photo: "/images/testimonials/user/JuliaMichaux.webp",
    logo: "/images/testimonials/logo/ohigo.png",
  },
  {
    name: "Nataliya Chernova",
    role: "CEO, Happy Raise",
    quote:
      "Très professionnelle et impliquée. Elle a su vite comprendre le problème et trouver une solution en temps record. Pédagogue, elle maîtrise parfaitement les rendez-vous clients.",
    photo: "/images/testimonials/user/NataliyaChernova.webp",
    logo: "/images/testimonials/logo/happy-raise.png",
  },
  {
    name: "Virgile Speth",
    role: "CEO, Keneya",
    quote:
      "Un seul mot : professionnalisme. Je recommande vivement Delphine pour son travail, sa disponibilité, ses recommandations, sa sympathie et son implication.",
    photo: "/images/testimonials/user/v-speth-keneya.jpeg",
    logo: "/images/testimonials/logo/keneya.png",
  },
  {
    name: "Alexis Theulier",
    role: "CEO et DA, ATH Agency",
    quote:
      "Un travail pro, de la meilleure qualité, une écoute parfaite, un souci du détail. En bref, la personne idéale pour votre projet. Nous avons hâte de retravailler avec elle.",
    photo: "/images/testimonials/user/Alexis-theulier.jpg",
    logo: "/images/testimonials/logo/ath.png",
  },
  {
    name: "Yannick Closset",
    role: "CEO, Soundatech",
    quote:
      "Une dev incroyablement talentueuse. Je cherchais quelqu’un pour une automation quasi impossible : elle a réussi son pari. Disponible et rapide, un vrai bonheur.",
    photo: "/images/testimonials/user/yannick.png",
    logo: "/images/testimonials/logo/soundatech.png",
  },
  {
    name: "Philippe Boyer",
    role: "CEO, Nayro",
    quote:
      "Dès le départ j’ai été rassuré par son professionnalisme, son écoute et ses conseils. Le résultat est parfait. Je vous recommande Delphine sans hésiter.",
    photo: "/images/testimonials/user/p-boyer-nayro.jpeg",
    logo: "/images/testimonials/logo/nayro.png",
  },
  {
    name: "Sébastien Goubrievsky",
    role: "Directeur SI, Editus",
    quote:
      "Elle a cette capacité rare de comprendre rapidement les enjeux. Elle excelle dans la création d’UIs intuitives. Sa rigueur et son sens du détail en font une personne de confiance.",
    photo: "/images/testimonials/user/seb-goub.jpg",
    logo: "/images/testimonials/logo/editus.png",
  },
  {
    name: "Alexis Presti",
    role: "CEO & UI Designer, TPress Studio",
    quote:
      "Toujours impliquée, elle a respecté l’ensemble de mes maquettes tout en apportant ses avis. Très agréable de travailler avec elle, je recommande fortement.",
    photo: "/images/testimonials/user/Alexis.jpg",
    logo: "/images/testimonials/logo/tpress.png",
  },
  {
    name: "Michel Dufour",
    role: "Président, AICMC",
    quote:
      "Très compétente, à l’écoute des besoins et impératifs. Excellente communication, et de vrais conseils pour améliorer le fonctionnement du site.",
    photo: "/images/testimonials/user/michel-dufour.jpg",
    logo: "/images/testimonials/logo/aicmc.png",
  },
] as const;

export const offers = [
  {
    name: "Starter",
    tag: null as string | null,
    pitch: "Un site professionnel prêt à être mis en ligne rapidement.",
    ideal: "Artisans, indépendants, associations, lancement d’activité.",
    cta: "Réserver un créneau",
    items: [
      "1 à 3 pages",
      "Design moderne adapté à votre activité",
      "Responsive mobile, tablette, desktop",
      "Formulaire de contact",
      "SEO de base",
      "Intégration de vos contenus",
      "Liens vers vos réseaux",
      "Mise en ligne",
      "Livré en 48h à 5 jours ouvrés",
    ],
  },
  {
    name: "Premium",
    tag: "Best seller",
    pitch:
      "Un site conçu pour renforcer votre image et convertir davantage de visiteurs.",
    ideal: "PME, cabinets, agences, entreprises en croissance.",
    cta: "Booker un call",
    items: [
      "Tout le Starter",
      "Design entièrement personnalisé",
      "UX travaillée",
      "SEO renforcé",
      "Blog ou actualités",
      "Animations et interactions",
      "Outils tiers (Calendly, CRM, newsletter…)",
      "Conseils stratégiques",
      "Livré en 2 à 4 semaines",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Je n’ai pas de maquette, peux-tu t’en charger ?",
    a: "Oui. Selon votre budget, on choisit ensemble la meilleure option : un design personnalisé créé avec mes designers partenaires, ou une base prête à l’emploi que j’adapte à votre activité.",
  },
  {
    q: "Peux-tu intervenir sur un site déjà existant ?",
    a: "Absolument. Correction de bugs, performances, SEO technique, responsive, nouvelles pages ou refonte complète : je m’adapte à l’existant.",
  },
  {
    q: "Proposes-tu une maintenance après la livraison ?",
    a: "Oui, selon votre rythme : documentation et formation, forfait mensuel d’heures réservées, ou interventions à la demande sans engagement.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Une landing page : 1 à 2 semaines. Un site plus complet : 3 à 8 semaines. Un délai estimatif est toujours fourni avec le devis. L’offre Starter peut être livrée en 48h à 5 jours.",
  },
  {
    q: "Comment se passe la collaboration ?",
    a: "Un premier appel pour cadrer. Un devis. Puis un rythme d’échanges clair (points, recette, ajustements). Vous n’êtes jamais dans le flou.",
  },
  {
    q: "Travailles-tu avec les agences ?",
    a: "Oui, régulièrement. Intégration Figma, renforcement de design system, pages à livrer vite : je m’intègre à vos process et à vos outils.",
  },
] as const;
