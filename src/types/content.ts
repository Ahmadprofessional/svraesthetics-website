export interface ServiceCard {
  slug: string;
  icon: string;
  heading: string;
  text: string;
  href: string;
}

export interface NavCategory {
  label: string;
  items: string[];
}

export interface WhyChooseItem {
  text: string;
}

export interface BeforeAfterImage {
  src: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

export interface RelatedTreatmentLink {
  text: string;
  href: string;
}

export interface FooterLink {
  text: string;
  href: string;
}
