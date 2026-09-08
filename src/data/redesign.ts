export interface MenuTreatment {
  name: string;
  blurb: string;
  from?: string;
  href: string;
}

export const injectables: MenuTreatment[] = [
  { name: "Anti-Wrinkle Injections", blurb: "Soften forehead lines, frown lines and crow's feet while keeping natural expression.", from: "£150", href: "/anti-wrinkle-milton-keynes" },
  { name: "Dermal Fillers", blurb: "Restore lost volume and refine contours with premium hyaluronic acid fillers.", from: "£100", href: "/dermal-fillers-in-milton-keynes" },
  { name: "Lip Enhancement", blurb: "Balanced, hydrated, naturally fuller lips shaped to your own lip lines.", href: "/lip-enhancement-milton-keynes" },
  { name: "Non-Surgical Rhinoplasty", blurb: "A 15-minute liquid nose job — smooth bumps and lift the tip, no surgery.", href: "/non-surgical-rhinoplasty-milton-keynes" },
  { name: "Cheek, Chin & Jawline", blurb: "Sculpt definition and symmetry across the lower and mid face.", href: "/jawline-filler-milton-keynes" },
  { name: "Tear Trough Filler", blurb: "Brighten tired, hollow under-eyes for a rested, refreshed look.", href: "/tear-trough-filler-milton-keynes" },
  { name: "Non-Surgical Facelift", blurb: "PDO thread lift to tighten jowls and lift the mid-face with minimal downtime.", href: "/non-surgical-facelift-milton-keynes" },
  { name: "Fat Dissolving Injections", blurb: "Target stubborn pockets under the chin, arms and tummy.", from: "£100", href: "/fat-dissolving-injections-milton-keynes" },
];

export const facials: MenuTreatment[] = [
  { name: "HydraFacial", blurb: "Cleanse, extract and deeply hydrate for an instant, no-downtime glow.", href: "/hydrafacial-milton-keynes" },
  { name: "Medical Microneedling", blurb: "Stimulate collagen to smooth scars, pores, fine lines and texture.", from: "£500", href: "/best-results-microneedling-in-milton-keynes-svr-aesthetics" },
  { name: "Chemical Peels", blurb: "Light to deep peels tailored to pigmentation, acne and dullness.", href: "/chemical-peels-milton-keynes" },
  { name: "Carbon (Hollywood) Peel", blurb: "Pico-laser peel that tightens pores and blurs imperfections in 30 minutes.", href: "/carbon-peel-milton-keynes" },
  { name: "Vampire Facial (PRP)", blurb: "Your own growth factors to rejuvenate tone, firmness and radiance.", href: "/vampire-facial" },
  { name: "Skin Rejuvenation Facial", blurb: "Professional facials that cleanse, brighten and restore skin health.", from: "£50", href: "/facials-milton-keynes" },
];

export const processSteps = [
  { n: "01", title: "Free consultation", text: "We listen to your goals, assess your facial anatomy and skin, and explain every option honestly — no pressure, no obligation." },
  { n: "02", title: "A personalised plan", text: "Your treatment plan is built around your features, budget and lifestyle. Sonali prescribes and performs every injectable herself." },
  { n: "03", title: "Your treatment", text: "Numbing where needed, premium products only, and techniques chosen for subtle, balanced, natural results." },
  { n: "04", title: "Aftercare & follow-up", text: "Clear aftercare guidance and follow-up support so you feel looked after long after you leave the clinic." },
];

export const pricingSnapshot = [
  { name: "Anti-Wrinkle", from: "£150" },
  { name: "Dermal Fillers", from: "£100" },
  { name: "Facial Treatment", from: "£50" },
  { name: "Skin Rejuvenation", from: "£70" },
  { name: "Skin Tag Removal", from: "£30" },
  { name: "Fat Dissolving", from: "£100" },
];
