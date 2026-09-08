import type {
  ServiceCard,
  NavCategory,
  BeforeAfterImage,
  FaqItem,
  RelatedTreatmentLink,
  FooterLink,
} from "@/types/content";

export const siteInfo = {
  phone: "077 92284575",
  phoneHref: "tel:07792284575",
  email: "svraesthetics@gmail.com",
  address: "Unit 2, Stainer Square Centre, Queensway, Bletchley, Milton keynes, MK2 2FY",
  facebook: "https://www.facebook.com/SVR-Aesthetics-667714920360507",
  instagram: "https://www.instagram.com/svraesthetics/",
  google: "https://share.google/6OA3XWLqNpuv0yEJm",
  googleReviews:
    "https://www.google.com/search?q=SVR+AESTHETICS#lrd=0x487655de21f8e2d7:0x43601817275cadd7,1,,,,",
  bookingHref: "https://svraesthetics.co.uk/book-free-consultation/",
};

export const topBarLinks = [
  { text: "Customers Gallery", href: "/customers-gallery" },
  { text: "FAQs", href: "/faq" },
  { text: "Reviews", href: "/reviews" },
  { text: "Pricing Plan", href: "/pricing" },
  { text: "Privacy Policy", href: "/privacy-policy" },
];

export const mainNavLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about-us" },
  { text: "Training", href: "/training" },
  { text: "Contact Us", href: "/contact-us" },
  { text: "Blogs", href: "/blogs" },
];

export const categoryNav: NavCategory[] = [
  {
    label: "Anti Wrinkle",
    items: ["Anti Wrinkle Injections", "Jaw Tightening", "Sweating Treatment"],
  },
  {
    label: "Dermal Fillers",
    items: [
      "Non-Surgical Facelift",
      "Cheek Augmentation",
      "Non-Surgical Rhinoplasty",
      "Chin Filler",
      "Jawline Filler",
      "Tear Trough Filler",
      "Lips Enhancement",
    ],
  },
  {
    label: "Skin Tag Removal",
    items: ["Semi Permanent Makeup Removal", "Tattoo Removal", "Cryopen"],
  },
  {
    label: "Facials",
    items: ["Micro Needling", "Chemical Peels", "Carbon Peel", "Hydrofacial"],
  },
  {
    label: "Other Treatment",
    items: [
      "Laser Hair Removal",
      "Hair Loss Treatment",
      "Vitamin Therapy",
      "Fat Dissolving Injections",
      "Milton Keynes Blood Test",
      "Full Body Massage",
    ],
  },
];

export const serviceCards: ServiceCard[] = [
  {
    slug: "non-surgical-facelift",
    icon: "/images/service-facelift.png",
    heading: "Non-surgical face-lift",
    text: "A minimally invasive treatment that lifts and tightens the skin, reducing wrinkles and sagging for a more youthful appearance.",
    href: "/non-surgical-facelift-milton-keynes",
  },
  {
    slug: "skin-treatments",
    icon: "/images/service-skin.jpg",
    heading: "Skin treatments",
    text: "Advanced skin treatments designed to improve texture, tone, and overall skin health while stimulating natural skin renewal.",
    href: "/skin-tag-removal-milton-keynes",
  },
  {
    slug: "iv-vitamin-drip",
    icon: "/images/service-iv-drip.jpg",
    heading: "IV Vitamin drip",
    text: "A wellness treatment that delivers essential vitamins directly into the bloodstream to boost energy, immunity, and hydration.",
    href: "/vitamin-therapy-milton-keynes",
  },
  {
    slug: "laser-treatments",
    icon: "/images/service-laser.jpeg",
    heading: "Laser treatments",
    text: "Targeted laser treatments that improve skin quality, reduce pigmentation, and address various skin concerns safely and effectively.",
    href: "/laser-hair-removal-milton-keynes",
  },
  {
    slug: "wellness-blood-tests",
    icon: "/images/service-blood-tests.jpg",
    heading: "Wellness Blood tests",
    text: "Comprehensive blood tests that provide insight into your overall health, nutrient levels, and wellbeing.",
    href: "/milton-keynes-blood-test",
  },
  {
    slug: "anti-wrinkle",
    icon: "/images/service-anti-wrinkle.webp",
    heading: "Anti wrinkle",
    text: "Facial injections relaxing muscles, diminishing wrinkles and lines for a youthful look and smoother skin texture.",
    href: "/skin-tag-removal-milton-keynes",
  },
];

export const whyChooseUs = [
  "Registered Nurse Prescriber",
  "Highly skilled & experienced in full range of aesthetic and skin treatments.",
  "Perform 100's of treatments every year.",
  "Free, no obligation consultation based on individual expectations and budget.",
  "Qualifications and Experience",
  "Natural-Looking Results",
  "Affordable Treatments Prices",
];

export const beforeAfterImages: BeforeAfterImage[] = [
  { src: "/images/before-after-botox.webp", alt: "Botox Treatment in Milton Keynes, Buckinghamshire" },
  { src: "/images/before-after-cheek.webp", alt: "Cheek Augments Treatment in Milton Keynes" },
  { src: "/images/before-after-lipfiller.png", alt: "Lip filler Treatment in Milton Keynes" },
  { src: "/images/before-after-botoxfiller.webp", alt: "Botox filler Treatment Buckingham" },
];

export const faqItems: FaqItem[] = [
  {
    question: "How do I book a consultation?",
    answer:
      "Simply give us a call, send us an email, or message us on WhatsApp. We'll help you book a convenient appointment.",
    open: true,
  },
  {
    question: "Are the treatments painful?",
    answer:
      "At SVR Aesthetics, we provide safe and minimally invasive non-surgical treatments. Our team specializes in these cosmetic practices to ensure the most caring and safe results. Injecting procedures are often initiated by numbing the area to reduce pain. We also suggest the best ways to recover without any issues.",
  },
  {
    question: "Would there be side effects?",
    answer:
      "We work to minimize any post-treatment effects. Redness, swelling, bruising, etc. are common in the targeted areas right after treatment that go away with no time.",
  },
  {
    question: "Will my treatment be personalised?",
    answer: "Absolutely. Every treatment plan is tailored to your skin, goals, and desired results.",
  },
  {
    question: "Can hair loss treatment help me?",
    answer:
      "If you're noticing thinning hair, our treatments may help stimulate healthier hair growth after an assessment. Prices start from £150.",
  },
  {
    question: "What is microneedling good for?",
    answer:
      "Microneedling helps improve acne scars, fine lines, enlarged pores, and overall skin texture. Treatments start from £500.",
  },
  {
    question: "What are skin boosters?",
    answer:
      "Skin boosters deeply hydrate your skin, improving elasticity and giving you a healthy, glowing complexion. Prices start from £150.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "It depends on your goals and the treatment chosen. We'll recommend the right plan during your consultation.",
  },
];

export const relatedTreatments: RelatedTreatmentLink[] = [
  { text: "Dermal Filler in Milton Keynes", href: "/dermal-fillers-in-milton-keynes" },
  { text: "Anti-Wrinkles Treatment in Milton Keynes", href: "/anti-wrinkle-milton-keynes" },
  { text: "Skin Tag Removal in Milton Keynes", href: "/skin-tag-removal" },
  { text: "Facial Treatment in Milton Keynes", href: "/facials-milton-keynes" },
  { text: "Laser Treatment in Milton Keynes", href: "/laser-hair-removal-milton-keynes" },
  { text: "Hair Loss Treatment in Milton", href: "/best-hair-loss-treatment-in-milton-keynes-svr-aesthetics" },
  { text: "Botox Treatment in Milton Keynes", href: "/botox-milton-keynes" },
  { text: "Body Test Treatment in Milton Keynes", href: "/full-body-massage-milton-keynes" },
];

export const footerQuickLinks: FooterLink[] = [
  { text: "About Us", href: "/about-us" },
  { text: "Treatments", href: "/treatments" },
  { text: "Pricing", href: "/pricing" },
  { text: "Faq", href: "/faq" },
  { text: "Reviews", href: "/reviews" },
  { text: "Get In Touch", href: "/contact-us" },
];

export const footerPolicyLinks: FooterLink[] = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms & Conditions", href: "/terms-conditions" },
  { text: "Complaints policy", href: "/complaints-policy" },
];
