export const SITE = {
  name: "QApte",
  tagline: "Préparation aux certifications ISTQB",
  description:
    "Examens blancs ISTQB Foundation et CT-GenAI, corrections détaillées, renforcement ciblé et coach IA Testéo. Plateforme indépendante.",
  contactEmail: "contact@qapte.com",
  contactUrl: "mailto:contact@qapte.com",
  freeExamUrl: "https://qapte.com/examen/examen-1",
  pricingUrl: "https://qapte.com/tarifs",
  trainersUrl: "https://qapte.com/pour-les-formateurs",
  testeoUrl: "https://qapte.com/testeo",
}

export const NAV_LINKS = [
  { id: "certifications", label: "Certifications" },
  { id: "methode", label: "Méthode" },
  { id: "testeo", label: "Testéo" },
  { id: "tarifs", label: "Tarifs" },
  { id: "formateurs", label: "Formateurs" },
  { id: "faq", label: "FAQ" },
] as const

export const PROOF_POINTS = [
  { value: "10", label: "examens blancs par certification" },
  { value: "40", label: "questions par examen" },
  { value: "60 min", label: "épreuve chronométrée" },
  { value: "100%", label: "corrections expliquées" },
] as const

export const TRUST_POINTS = [
  "Examens chronométrés",
  "Corrections par proposition",
  "Références au syllabus",
  "Renforcement distinct",
  "Progression enregistrée",
] as const

export const DEMO_STEPS = [
  { id: "exam", label: "01 Examen", title: "Épreuve chronométrée", detail: "40 questions · 60 min" },
  { id: "result", label: "02 Résultat", title: "Score par chapitre", detail: "Seuil visible immédiatement" },
  { id: "correction", label: "03 Correction", title: "Chaque choix expliqué", detail: "Références au syllabus" },
  { id: "reinforcement", label: "04 Renforcement", title: "Cibler les écarts", detail: "Travail distinct de l'examen" },
  { id: "testeo", label: "05 Testéo", title: "Coach IA optionnel", detail: "Indice, exemple, exercice" },
] as const

export const DEMO_QUESTION = {
  chapter: "Chapitre 1 — Fondamentaux du test",
  progress: "Question 4/10",
  timer: "52:18",
  prompt: "Parmi les propositions suivantes, laquelle n’est PAS un objectif habituel du test ?",
  options: [
    "Trouver des défauts et des défaillances",
    "Réduire le niveau de risque lié à une qualité insuffisante",
    "Prouver que le logiciel ne contient plus aucun défaut",
    "Fournir des informations pour la prise de décision",
  ],
  correctIndex: 2,
  explanation:
    "Le test peut réduire le risque et mettre en évidence des défauts, mais il ne peut pas prouver l’absence totale de défauts.",
  reference: "CTFL v4.0 — Section 1.1.1",
} as const

export const DEMO_RESULT = {
  score: "26/40",
  status: "Seuil atteint dans cet exemple",
  chapters: [
    { label: "Chapitre 1", value: "5/8" },
    { label: "Chapitre 2", value: "3/5" },
    { label: "Chapitre 3", value: "4/5" },
    { label: "Chapitre 4", value: "6/8" },
    { label: "Chapitre 5", value: "4/7" },
    { label: "Chapitre 6", value: "4/7" },
  ],
  note: "Démonstration — copie fictive, aucun résultat enregistré.",
} as const

export const CERTIFICATIONS = [
  {
    id: "ctfl",
    code: "CTFL · v4.0",
    title: "Testeur certifié ISTQB® – Niveau Fondation",
    exams: "10 examens blancs",
    format: "40 questions · 60 min",
    points: null,
    free: "Essayer l’examen gratuit",
    freeHref: "https://qapte.com/examen/examen-1",
    detailsHref: "https://qapte.com/examens",
  },
  {
    id: "ct-genai",
    code: "CT-GenAI · v1.1",
    title: "Testeur certifié ISTQB® – Tests avec l’IA générative",
    exams: "10 examens blancs",
    format: "40 questions · 60 min · 46 pts",
    points: "46 pts",
    free: "Essayer 10 questions gratuites",
    freeHref: "https://qapte.com/examens",
    detailsHref: "https://qapte.com/examens",
  },
] as const

export const METHOD_STEPS = [
  {
    id: "exam",
    index: "01",
    title: "Examen",
    headline: "S'entraîner dans les conditions réelles.",
    summary:
      "Des examens blancs chronométrés, au format de l’épreuve, pour travailler le rythme, la lecture des questions et la gestion du temps.",
    detail: "40 questions · 60 minutes · conditions réalistes",
  },
  {
    id: "result",
    index: "02",
    title: "Résultat",
    headline: "Voir où vous en êtes, chapitre par chapitre.",
    summary:
      "Le score ne s’arrête pas à un total. Vous identifiez les chapitres solides et ceux qui demandent un vrai renforcement.",
    detail: "Score global + lecture par chapitre",
  },
  {
    id: "correction",
    index: "03",
    title: "Correction",
    headline: "Comprendre chaque proposition.",
    summary:
      "Chaque choix est expliqué. Vous ne retenez pas seulement la bonne réponse : vous comprenez pourquoi les autres ne conviennent pas.",
    detail: "Explications détaillées · références syllabus",
  },
  {
    id: "reinforcement",
    index: "04",
    title: "Renforcement",
    headline: "Revenir sur les notions fragiles.",
    summary:
      "Le renforcement est distinct de l’examen. Il cible les écarts identifiés pour transformer une erreur en point maîtrisé.",
    detail: "Travail ciblé hors examen",
  },
  {
    id: "testeo",
    index: "05",
    title: "Testéo",
    headline: "Débloquer avec un coach IA.",
    summary:
      "Testéo aide à clarifier une notion avec un indice, un exemple ou un exercice. Optionnel, après achat de l’offre avec coach.",
    detail: "150 échanges · 60 jours · par certification",
  },
] as const

export const OFFERS = [
  {
    id: "single",
    name: "Examen à l’unité",
    price: "9,90 €",
    note: "Paiement unique, sans abonnement",
    description: "Un examen blanc au choix, pour tester la méthode ou cibler un besoin précis.",
    features: ["1 examen blanc", "Correction détaillée", "Format chronométré"],
    cta: "Voir les tarifs",
    href: "https://qapte.com/tarifs",
    featured: false,
  },
  {
    id: "pack",
    name: "Accès complet",
    price: "19,99 €",
    note: "Paiement unique, sans abonnement",
    description: "Le pack complet pour s’entraîner sérieusement sur une certification.",
    features: ["10 examens blancs", "Corrections détaillées", "Renforcement ciblé"],
    cta: "Choisir le pack",
    href: "https://qapte.com/tarifs",
    featured: true,
  },
  {
    id: "coach",
    name: "Examens + Testéo",
    price: "29,99 €",
    note: "150 échanges · 60 jours",
    description: "Les examens, plus un coach IA pour clarifier les notions difficiles.",
    features: ["10 examens blancs", "Testéo inclus", "150 échanges / 60 jours"],
    cta: "Choisir avec Testéo",
    href: "https://qapte.com/tarifs",
    featured: false,
  },
] as const

export const FAQ_ITEMS = [
  {
    question: "QApte remplace-t-il l’examen de certification ?",
    answer:
      "Non. QApte est une plateforme d’entraînement indépendante. Les examens blancs préparent à l’épreuve, mais l’inscription à la certification officielle reste séparée.",
  },
  {
    question: "Les questions sont-elles officielles ?",
    answer:
      "Non. Les examens blancs QApte sont composés de questions originales. QApte n’est ni affiliée, ni approuvée, ni accréditée par ISTQB®, le CFTL ou GASQ.",
  },
  {
    question: "Puis-je suivre ma progression ?",
    answer:
      "Oui. Connectez-vous avant l’épreuve pour garder vos résultats et retrouver votre progression. Les achats sont rattachés à votre compte.",
  },
  {
    question: "Dois-je créer un compte ?",
    answer:
      "L’examen gratuit peut être passé sans compte. La connexion sert aux examens payants, au suivi de progression et à l’accès à vos achats.",
  },
  {
    question: "Qu’est-ce que Testéo ?",
    answer:
      "Testéo est un coach IA de révision optionnel. Il aide à clarifier une notion avec un indice, un exemple ou un exercice. L’offre comprend 150 échanges pendant 60 jours, par certification.",
  },
] as const

export const TRAINER_OFFER = {
  title: "Pour les formateurs",
  headline: "Donnez un examen blanc à votre groupe. Corrigez-le ensemble.",
  description:
    "Avant le cours, vos apprenants s’entraînent. En séance, vous reprenez les questions qui leur ont posé problème.",
  price: "149 € TTC",
  unit: "par promotion",
  details: ["10 places", "60 jours d’accès", "Foundation ou IA générative au choix"],
  cta: "Découvrir l’espace Formateurs",
  href: "https://qapte.com/pour-les-formateurs",
} as const

export const LEGAL_NOTE =
  "QApte est une plateforme indépendante d'entraînement. QApte n'est ni affiliée, ni approuvée, ni accréditée par ISTQB®, le CFTL ou GASQ. ISTQB® est une marque déposée de l'International Software Testing Qualifications Board. Les examens blancs QApte sont composés de questions originales et ne constituent pas des examens officiels. L'inscription à l'examen de certification n'est pas incluse, sauf indication contractuelle explicite."

export const FOOTER_LINKS = {
  platform: [
    { label: "Certifications", href: "#certifications" },
    { label: "Méthode QApte", href: "#methode" },
    { label: "Testéo", href: "#testeo" },
    { label: "Formateurs", href: "#formateurs" },
  ],
  practice: [
    { label: "Examens blancs", href: "https://qapte.com/examens" },
    { label: "Commencer gratuitement", href: "https://qapte.com/examen/examen-1" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Réviser avec Testéo", href: "https://qapte.com/testeo" },
  ],
  legal: [
    { label: "Mentions légales", href: "https://qapte.com/mentions-legales" },
    { label: "Accessibilité", href: "https://qapte.com/accessibilite" },
    { label: "Conditions générales", href: "https://qapte.com/conditions-generales" },
    { label: "Confidentialité", href: "https://qapte.com/confidentialite" },
  ],
} as const

export const DEMO_TESTEO = [
  {
    role: "user",
    text: "Je confonds test et débogage. Tu peux m'expliquer simplement ?",
  },
  {
    role: "assistant",
    text: "Le test met en évidence une défaillance. Le débogage, lui, cherche la cause du défaut dans le code ou la configuration, puis le corrige.",
  },
] as const
