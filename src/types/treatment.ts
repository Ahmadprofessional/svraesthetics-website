export interface TreatmentSection {
  heading: string;
  intro: string;
  bullets: string[];
}

export interface TreatmentFaqItem {
  question: string;
  answer: string;
}

export interface Treatment {
  slug: string;
  heroHeading: string;
  heroIntro: string;
  whoWeOffer: string[];
  whatIs: TreatmentSection;
  results: TreatmentSection;
  trusted: { heading: string; paragraph: string };
  faq: TreatmentFaqItem[];
}
