export interface QuickFact {
  label: string;
  value: string;
}

export interface TreatmentArea {
  name: string;
  text?: string;
  href?: string;
}

export interface PriceRow {
  name: string;
  price: string;
  note?: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface RelatedLink {
  name: string;
  href: string;
}

export interface ResultsSection {
  heading: string;
  intro: string;
  bullets: string[];
}

export interface TreatmentPageData {
  slug: string;
  category: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroHighlight: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  fromPrice: string;
  quickFacts: QuickFact[];
  areasHeading: string;
  areasIntro: string;
  areas: TreatmentArea[];
  aboutHeading: string;
  aboutHighlight: string;
  aboutParagraphs: string[];
  aboutBullets: string[];
  aboutImage: string;
  results?: ResultsSection;
  whyHeading: string;
  whyPoints: { title: string; text: string }[];
  pricing: PriceRow[];
  pricingNote: string;
  faq: FaqEntry[];
  related: RelatedLink[];
}
