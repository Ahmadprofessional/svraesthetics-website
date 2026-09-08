import type { Treatment } from "@/types/treatment";
import type { TreatmentPageData, TreatmentArea, QuickFact } from "@/types/treatment-page";
import { treatmentGroups } from "@/data/nav";

interface CatalogEntry {
  name: string;
  category: string;
  fromPrice?: string;
  image: string;
  time: string;
  results: string;
  lasts: string;
  downtime: string;
  areasHeading?: string;
}

const IMG = {
  injectables: "/images/redesign/injectables.webp",
  fillers: "/images/redesign/dermal-fillers-hero.webp",
  facials: "/images/redesign/facials.webp",
  laser: "/images/redesign/laser.webp",
  wellness: "/images/redesign/wellness.webp",
  removal: "/images/redesign/removal.webp",
};

export const catalog: Record<string, CatalogEntry> = {
  "botox-milton-keynes": { name: "Botox", category: "Injectables", fromPrice: "£150", image: IMG.injectables, time: "15–30 min", results: "3–14 days", lasts: "3–4 months", downtime: "None", areasHeading: "Botox treatments we offer" },
  "anti-wrinkle-milton-keynes": { name: "Anti-Wrinkle Treatment", category: "Injectables", fromPrice: "£150", image: IMG.injectables, time: "15–30 min", results: "3–14 days", lasts: "3–4 months", downtime: "None", areasHeading: "Areas we treat" },
  "anti-wrinkle-injections-milton-keynes": { name: "Anti-Wrinkle Injections", category: "Injectables", fromPrice: "£150", image: IMG.injectables, time: "15 min", results: "3–14 days", lasts: "3–4 months", downtime: "None", areasHeading: "Areas we treat" },
  "jaw-tightening-milton-keynes": { name: "Jaw Tightening", category: "Injectables", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "12–18 months", downtime: "Minimal", areasHeading: "Jaw tightening options" },
  "hyperhidrosis-excessive-sweating-treatment": { name: "Sweating Treatment", category: "Injectables", image: IMG.injectables, time: "20–30 min", results: "1–2 weeks", lasts: "Up to 6 months", downtime: "None" },
  "fat-dissolving-injections-milton-keynes": { name: "Fat Dissolving Injections", category: "Injectables", fromPrice: "£100", image: IMG.injectables, time: "20–30 min", results: "3–6 weeks", lasts: "Permanent*", downtime: "3–4 days", areasHeading: "Products we use" },
  "non-surgical-facelift-milton-keynes": { name: "Non-Surgical Facelift", category: "Dermal Fillers", image: IMG.fillers, time: "45–60 min", results: "Immediate", lasts: "12–18 months", downtime: "Minimal", areasHeading: "What a thread lift can address" },
  "non-surgical-rhinoplasty-milton-keynes": { name: "Non-Surgical Rhinoplasty", category: "Dermal Fillers", image: IMG.fillers, time: "15–30 min", results: "Immediate", lasts: "9–18 months", downtime: "Minimal", areasHeading: "Who it's for" },
  "lip-enhancement-milton-keynes": { name: "Lip Enhancement", category: "Dermal Fillers", fromPrice: "£100", image: IMG.fillers, time: "30 min", results: "Immediate", lasts: "6–12 months", downtime: "1–3 days" },
  "jawline-filler-milton-keynes": { name: "Jawline Filler", category: "Dermal Fillers", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "Up to 12 months", downtime: "Minimal" },
  "chin-filler-milton-keynes": { name: "Chin Filler", category: "Dermal Fillers", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "Up to 12 months", downtime: "Minimal" },
  "cheek-augmentation-milton-keynes": { name: "Cheek Augmentation", category: "Dermal Fillers", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "Up to 18 months", downtime: "Minimal" },
  "tear-trough-filler-milton-keynes": { name: "Tear Trough Filler", category: "Dermal Fillers", image: IMG.fillers, time: "30 min", results: "Immediate", lasts: "Up to 12 months", downtime: "Minimal" },
  "nose-to-mouth-lines-milton-keynes": { name: "Nose-to-Mouth Lines", category: "Dermal Fillers", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "9–18 months", downtime: "Minimal", areasHeading: "What we treat" },
  "hand-filler-milton-keynes": { name: "Hand Filler", category: "Dermal Fillers", image: IMG.fillers, time: "30–45 min", results: "Immediate", lasts: "12–18 months", downtime: "Minimal", areasHeading: "What hand filler addresses" },
  "skin-tag-removal-milton-keynes": { name: "Skin Tag Removal", category: "Skin & Lesion Removal", fromPrice: "£30", image: IMG.removal, time: "2–15 min", results: "1–2 weeks", lasts: "Permanent", downtime: "Minimal", areasHeading: "Lesions we remove" },
  "tattoo-removal-milton-keynes": { name: "Tattoo Removal", category: "Skin & Lesion Removal", fromPrice: "£20", image: IMG.removal, time: "30–60 min", results: "Gradual", lasts: "Permanent", downtime: "1–2 weeks", areasHeading: "Removal treatments" },
  "semi-permanent-makeup-removal": { name: "Semi Permanent Makeup Removal", category: "Skin & Lesion Removal", fromPrice: "£50", image: IMG.removal, time: "30–45 min", results: "Gradual", lasts: "Permanent", downtime: "Minimal", areasHeading: "Areas we treat" },
  "cryopen-milton-keynes": { name: "CryoPen", category: "Skin & Lesion Removal", fromPrice: "£30", image: IMG.removal, time: "2–15 min", results: "2–6 weeks", lasts: "Permanent", downtime: "Minimal", areasHeading: "What CryoPen treats" },
  "facials-milton-keynes": { name: "Facials", category: "Facials & Skin", fromPrice: "£50", image: IMG.facials, time: "30–60 min", results: "Immediate", lasts: "With courses", downtime: "None", areasHeading: "Our facial treatments" },
  "hydrafacial-milton-keynes": { name: "HydraFacial", category: "Facials & Skin", image: IMG.facials, time: "30–45 min", results: "Immediate", lasts: "5–7 days+", downtime: "None", areasHeading: "Facial options" },
  "best-results-microneedling-in-milton-keynes-svr-aesthetics": { name: "Microneedling", category: "Facials & Skin", fromPrice: "£500", image: IMG.facials, time: "45–60 min", results: "2–6 weeks", lasts: "Long-lasting", downtime: "1–2 days", areasHeading: "What microneedling improves" },
  "vampire-facial": { name: "Vampire Facial", category: "Facials & Skin", image: IMG.facials, time: "60–90 min", results: "2–4 weeks", lasts: "6–12 months", downtime: "1–2 days" },
  "chemical-peels-milton-keynes": { name: "Chemical Peels", category: "Facials & Skin", image: IMG.facials, time: "30–45 min", results: "1–2 weeks", lasts: "With courses", downtime: "Varies", areasHeading: "Peels we offer" },
  "carbon-peel-milton-keynes": { name: "Carbon Peel", category: "Facials & Skin", image: IMG.facials, time: "30–45 min", results: "Immediate", lasts: "Weeks–months", downtime: "None" },
  "laser-hair-removal-milton-keynes": { name: "Laser Hair Removal", category: "Laser, Hair & Wellness", image: IMG.laser, time: "15–60 min", results: "After 3–4 sessions", lasts: "Permanent reduction", downtime: "None", areasHeading: "Treatment" },
  "best-hair-loss-treatment-in-milton-keynes-svr-aesthetics": { name: "Hair Loss Treatment", category: "Laser, Hair & Wellness", fromPrice: "£150", image: IMG.wellness, time: "45–60 min", results: "3–6 months", lasts: "Ongoing", downtime: "None", areasHeading: "Causes we treat" },
  "vitamin-therapy-milton-keynes": { name: "Vitamin Therapy", category: "Laser, Hair & Wellness", image: IMG.wellness, time: "30–60 min", results: "Same day", lasts: "Weeks", downtime: "None", areasHeading: "What we offer" },
  "milton-keynes-blood-test": { name: "Blood Tests", category: "Laser, Hair & Wellness", image: IMG.wellness, time: "10 min", results: "Within days", lasts: "—", downtime: "None", areasHeading: "Tests available" },
  "full-body-massage-milton-keynes": { name: "Full Body Massage", category: "Laser, Hair & Wellness", fromPrice: "£35", image: IMG.wellness, time: "60 min", results: "Immediate", lasts: "—", downtime: "None", areasHeading: "Massage treatments" },
};

const allNavLinks = treatmentGroups.flatMap((g) => [{ label: g.label, href: g.href }, ...g.items]);

function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function resolveHref(name: string): string | undefined {
  const n = norm(name);
  const hit = allNavLinks.find((l) => norm(l.label) === n || n.includes(norm(l.label)) || norm(l.label).includes(n));
  return hit?.href;
}

function sentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) ?? [text];
}

function titleCase(s: string) {
  return s.replace(/\w\S*/g, (w) => (w.length > 3 || w === w.toUpperCase() ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase())).replace(/^\w/, (c) => c.toUpperCase());
}

const defaultWhy = (name: string) => [
  { title: "Registered Nurse Prescriber", text: "Over 15 years in NHS operating theatres before aesthetics. Medical training you can actually check." },
  { title: "Free, honest consultation", text: `A full assessment and a ${name.toLowerCase()} plan built around you and your budget — with a clear quote before anything begins.` },
  { title: "Premium products only", text: "Clinically proven, CE-marked products chosen for safety, performance and longevity." },
  { title: "Aftercare that continues", text: "Clear aftercare guidance and follow-up support so you feel looked after long after you leave." },
];

const genericFaq = [
  { question: "How do I book a consultation?", answer: "Call us, message us on WhatsApp, or use the form on this page. Consultations are free and there's no obligation to go ahead." },
  { question: "Will my treatment be personalised?", answer: "Absolutely. Every plan is tailored to your features, skin, goals and budget." },
];

export function buildTreatmentPage(t: Treatment): TreatmentPageData {
  const cfg = catalog[t.slug];
  const name = cfg?.name ?? titleCase(t.heroHeading.replace(/ in milton keynes.*$/i, ""));
  const category = cfg?.category ?? "Treatments";
  const heroImage = cfg?.image ?? IMG.injectables;

  const heroSentences = sentences(t.heroIntro);
  const heroIntro = heroSentences.slice(0, 2).join(" ");
  const heroRest = heroSentences.slice(2).join(" ");

  const group = treatmentGroups.find((g) => g.items.some((i) => i.href === `/${t.slug}`) || g.href === `/${t.slug}`);
  const siblings = (group ? [{ label: group.label, href: group.href }, ...group.items] : []).filter((l) => l.href !== `/${t.slug}`);

  // The crawled "who we offer" list is either the site-wide menu (too long) or a
  // single item (too thin); in both cases show sibling treatments instead.
  const usesSiteWideList = t.whoWeOffer.length > 9 || t.whoWeOffer.length < 3;
  const areas: TreatmentArea[] = usesSiteWideList
    ? siblings.slice(0, 8).map((s) => ({ name: s.label, href: s.href, text: `Explore ${s.label.toLowerCase()} at SVR Aesthetics.` }))
    : t.whoWeOffer.map((w) => {
        const href = resolveHref(w);
        return { name: w.replace(/ milton keynes$/i, ""), href: href && href !== `/${t.slug}` ? href : undefined };
      });

  const quickFacts: QuickFact[] = [
    { label: "Price", value: cfg?.fromPrice ? `From ${cfg.fromPrice}` : "On consultation" },
    { label: "Treatment time", value: cfg?.time ?? "30–45 min" },
    { label: "Results", value: cfg?.results ?? "Immediate" },
    { label: "Lasts", value: cfg?.lasts ?? "Varies" },
    { label: "Downtime", value: cfg?.downtime ?? "Minimal" },
  ];

  const aboutWords = t.whatIs.heading.replace(/\?$/, "").split(" ");
  const aboutHighlight = aboutWords.length > 2 ? aboutWords.slice(-2).join(" ") : aboutWords.slice(-1).join(" ");
  const aboutHeading = aboutWords.slice(0, aboutWords.length - (aboutWords.length > 2 ? 2 : 1)).join(" ") || name;

  const aboutParagraphs = [t.whatIs.intro, heroRest].filter((p) => p && p.length > 40);
  const aboutBullets = t.whatIs.bullets.length ? t.whatIs.bullets : t.results.bullets;

  const results = t.results.intro || t.results.bullets.length ? { heading: t.results.heading, intro: t.results.intro, bullets: t.results.bullets } : undefined;

  const faq = t.faq.length >= 3 ? t.faq : [...t.faq, ...genericFaq].slice(0, 5);

  const pricing = [
    { name, price: cfg?.fromPrice ? `from ${cfg.fromPrice}` : "quoted at consultation", note: cfg?.fromPrice ? "Exact price depends on area and treatment plan" : "A clear quote is agreed before any treatment" },
    { name: "Consultation", price: "Free", note: "No obligation" },
    { name: "First treatment", price: "25% off" },
  ];

  return {
    slug: t.slug,
    category,
    name,
    metaTitle: `${name} Milton Keynes${cfg?.fromPrice ? ` | From ${cfg.fromPrice}` : ""} | SVR Aesthetics`,
    metaDescription: `${heroSentences[0]} Nurse-led ${name.toLowerCase()} in Bletchley, Milton Keynes. Free consultation, 25% off your first treatment.`.slice(0, 300),
    heroHeading: `${name} in`,
    heroHighlight: "Milton Keynes",
    heroIntro,
    heroImage,
    heroImageAlt: `${name} at SVR Aesthetics, Milton Keynes`,
    fromPrice: cfg?.fromPrice ?? "consultation",
    quickFacts,
    areasHeading: usesSiteWideList ? `Related ${category.toLowerCase()} treatments` : cfg?.areasHeading ?? "What we treat",
    areasIntro: usesSiteWideList
      ? "Many clients combine treatments for a subtle, balanced refresh. These pair naturally with " + name.toLowerCase() + "."
      : "Every plan starts with a free consultation, where we assess your goals and recommend exactly what will — and won't — help.",
    areas,
    aboutHeading,
    aboutHighlight,
    aboutParagraphs: aboutParagraphs.length ? aboutParagraphs : [t.heroIntro],
    aboutBullets,
    aboutImage: heroImage === IMG.fillers ? IMG.injectables : heroImage === IMG.injectables ? IMG.fillers : heroImage,
    results,
    whyHeading: `Why have your ${name.toLowerCase()} with Sonali`,
    whyPoints: defaultWhy(name),
    pricing,
    pricingNote: "Your first treatment is 25% off. Prices are starting prices; your exact quote is confirmed in your free consultation before any treatment.",
    faq,
    related: siblings.slice(0, 4).map((s) => ({ name: s.label, href: s.href })),
  };
}
