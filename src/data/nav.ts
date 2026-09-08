export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavLink[];
}

export const treatmentGroups: NavGroup[] = [
  {
    label: "Anti-Wrinkle",
    href: "/anti-wrinkle-milton-keynes",
    items: [
      { label: "Anti-Wrinkle Injections", href: "/anti-wrinkle-injections-milton-keynes" },
      { label: "Botox", href: "/botox-milton-keynes" },
      { label: "Jaw Tightening", href: "/jaw-tightening-milton-keynes" },
      { label: "Sweating Treatment", href: "/hyperhidrosis-excessive-sweating-treatment" },
    ],
  },
  {
    label: "Dermal Fillers",
    href: "/dermal-fillers-in-milton-keynes",
    items: [
      { label: "Lip Enhancement", href: "/lip-enhancement-milton-keynes" },
      { label: "Non-Surgical Rhinoplasty", href: "/non-surgical-rhinoplasty-milton-keynes" },
      { label: "Cheek Augmentation", href: "/cheek-augmentation-milton-keynes" },
      { label: "Chin Filler", href: "/chin-filler-milton-keynes" },
      { label: "Jawline Filler", href: "/jawline-filler-milton-keynes" },
      { label: "Tear Trough Filler", href: "/tear-trough-filler-milton-keynes" },
      { label: "Non-Surgical Facelift", href: "/non-surgical-facelift-milton-keynes" },
    ],
  },
  {
    label: "Skin Tag Removal",
    href: "/skin-tag-removal-milton-keynes",
    items: [
      { label: "Tattoo Removal", href: "/tattoo-removal-milton-keynes" },
      { label: "Semi Permanent Makeup Removal", href: "/semi-permanent-makeup-removal" },
      { label: "CryoPen", href: "/cryopen-milton-keynes" },
    ],
  },
  {
    label: "Facials",
    href: "/facials-milton-keynes",
    items: [
      { label: "HydraFacial", href: "/hydrafacial-milton-keynes" },
      { label: "Microneedling", href: "/best-results-microneedling-in-milton-keynes-svr-aesthetics" },
      { label: "Vampire Facial", href: "/vampire-facial" },
      { label: "Chemical Peels", href: "/chemical-peels-milton-keynes" },
      { label: "Carbon Peel", href: "/carbon-peel-milton-keynes" },
    ],
  },
  {
    label: "Other Treatments",
    href: "/treatments",
    items: [
      { label: "Laser Hair Removal", href: "/laser-hair-removal-milton-keynes" },
      { label: "Hair Loss Treatment", href: "/best-hair-loss-treatment-in-milton-keynes-svr-aesthetics" },
      { label: "Vitamin Therapy", href: "/vitamin-therapy-milton-keynes" },
      { label: "Fat Dissolving Injections", href: "/fat-dissolving-injections-milton-keynes" },
      { label: "Blood Tests", href: "/milton-keynes-blood-test" },
      { label: "Full Body Massage", href: "/full-body-massage-milton-keynes" },
    ],
  },
];

export const trainingGroup: NavGroup = {
  label: "Training",
  href: "/training",
  items: [
    { label: "Foundation Anti-Wrinkle Course", href: "/foundation-anti-wrinkle-course" },
    { label: "Advanced Anti-Wrinkle", href: "/advanced-anti-wrinkle" },
    { label: "Foundation Dermal Fillers", href: "/foundation-dermal-fillers" },
    { label: "Advanced Dermal Filler", href: "/advanced-dermal-filler" },
    { label: "Lip Masterclass", href: "/lip-masterclass-milton-keynes" },
    { label: "Anatomy & Physiology of the Face", href: "/anatomy-physiology-of-the-face" },
    { label: "First Aid & Anaphylaxis", href: "/first-aid-anaphylaxis-training-milton-keynes" },
  ],
};

export const primaryLinks: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];

export const utilityLinks: NavLink[] = [
  { label: "Customers Gallery", href: "/customers-gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faq" },
  { label: "Book Free Consultation", href: "/book-free-consultation" },
];
