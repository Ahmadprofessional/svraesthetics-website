import type { TreatmentArea, FaqEntry, PriceRow } from "@/types/treatment-page";

export interface LandingPageData {
  slug: string;
  treatmentName: string;
  metaTitle: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  sub: string;
  offer: string;
  bullets: string[];
  heroImage: string;
  heroImageAlt: string;
  fromPrice: string;
  areasHeading: string;
  areas: TreatmentArea[];
  pricing: PriceRow[];
  faq: FaqEntry[];
}

export const landingPages: LandingPageData[] = [
  {
    slug: "dermal-fillers",
    treatmentName: "Dermal Fillers",
    metaTitle: "Dermal Fillers Milton Keynes — From £100, 25% Off First Treatment | SVR Aesthetics",
    eyebrow: "Dermal fillers · Bletchley, Milton Keynes",
    headline: "Natural-looking dermal fillers",
    highlight: "from £100",
    sub: "Lips, cheeks, chin, jawline, tear trough and nose — placed by a Registered Nurse Prescriber with over 15 years in the NHS. Free consultation, results you'll see immediately.",
    offer: "25% off your first treatment",
    bullets: ["Free, no-obligation consultation with Sonali", "Premium hyaluronic acid fillers — fully reversible", "Immediate results, minimal downtime", "Clear quote agreed before anything begins"],
    heroImage: "/images/redesign/dermal-fillers-hero.webp",
    heroImageAlt: "Natural dermal filler results at SVR Aesthetics, Milton Keynes",
    fromPrice: "£100",
    areasHeading: "What would you like to enhance?",
    areas: [
      { name: "Lips", text: "Hydrated, defined, naturally fuller — never overdone." },
      { name: "Cheeks", text: "Lift and restore mid-face volume. Lasts up to 18 months." },
      { name: "Chin & jawline", text: "Sharper definition and a balanced profile." },
      { name: "Tear trough", text: "Brighten tired, hollow under-eyes." },
      { name: "Nose", text: "15-minute liquid rhinoplasty — no surgery." },
      { name: "Nose-to-mouth lines", text: "Soften folds for a rested expression." },
    ],
    pricing: [
      { name: "Dermal fillers", price: "from £100", note: "Exact price depends on area and volume" },
      { name: "Lip enhancement", price: "from £100" },
      { name: "Consultation", price: "Free", note: "No obligation" },
      { name: "First treatment", price: "25% off" },
    ],
    faq: [
      { question: "How long do results last?", answer: "6 months to 2 years depending on the area and product. Cheek filler typically lasts up to 18 months; lips around 6–12 months." },
      { question: "Does it hurt?", answer: "Most fillers contain local anaesthetic and we apply numbing cream, so most clients feel slight pressure rather than pain." },
      { question: "Is there downtime?", answer: "Some swelling or light bruising for a few days is possible. Most people return to normal activities immediately." },
      { question: "Can filler be removed?", answer: "Yes — we only use hyaluronic acid fillers, which can be dissolved with hyaluronidase that Sonali keeps in clinic." },
    ],
  },
  {
    slug: "facials",
    treatmentName: "Facials",
    metaTitle: "Facials Milton Keynes — HydraFacial, Peels & Microneedling From £50 | SVR Aesthetics",
    eyebrow: "Advanced facials · Bletchley, Milton Keynes",
    headline: "Glow-giving facials",
    highlight: "from £50",
    sub: "HydraFacial, chemical peels, carbon (Hollywood) peel, medical microneedling and PRP — results-driven skin treatments in a calm, nurse-led clinic. Free skin consultation included.",
    offer: "25% off your first facial",
    bullets: ["Free skin consultation — we recommend only what will help", "Medical-grade treatments, not a spa pamper", "Instant glow with little or no downtime", "Tailored to acne, pigmentation, texture, dullness and ageing"],
    heroImage: "/images/redesign/facials.webp",
    heroImageAlt: "HydraFacial treatment at SVR Aesthetics, Milton Keynes",
    fromPrice: "£50",
    areasHeading: "Choose your facial",
    areas: [
      { name: "HydraFacial", text: "Cleanse, extract and deeply hydrate — instant glow, zero downtime." },
      { name: "Chemical peels", text: "Light to deep peels for pigmentation, acne and dullness." },
      { name: "Carbon (Hollywood) peel", text: "Pico-laser peel that tightens pores in 30 minutes." },
      { name: "Medical microneedling", text: "Collagen-boosting for scars, pores and fine lines." },
      { name: "Vampire facial (PRP)", text: "Your own growth factors for firmness and radiance." },
      { name: "Skin rejuvenation", text: "Tailored facials that brighten and restore skin health." },
    ],
    pricing: [
      { name: "Facial treatment", price: "from £50" },
      { name: "Skin rejuvenation", price: "from £70" },
      { name: "Microneedling course", price: "from £500" },
      { name: "Consultation", price: "Free", note: "No obligation" },
      { name: "First treatment", price: "25% off" },
    ],
    faq: [
      { question: "Which facial is right for me?", answer: "That's what the free skin consultation is for — we assess your skin and recommend the treatment (or course) that will actually help." },
      { question: "Is there any downtime?", answer: "HydraFacial and carbon peel have none. Microneedling and deeper peels may leave 1–2 days of redness." },
      { question: "How often should I have a facial?", answer: "For maintenance, every 4–6 weeks. Courses of 3–6 are recommended for microneedling and peels." },
      { question: "Are the treatments safe for all skin types?", answer: "Yes — we choose the treatment and intensity for your skin type and tone, and always patch test where appropriate." },
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}
