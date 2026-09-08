import type { Treatment } from "@/types/treatment";

// Pages that exist in the site navigation but were not captured by the crawl,
// plus one page (skin tag removal) whose live content was mislabelled.
export const extraTreatments: Treatment[] = [
  {
    slug: "anti-wrinkle-injections-milton-keynes",
    heroHeading: "Anti-Wrinkle Injections in Milton Keynes",
    heroIntro:
      "Anti-wrinkle injections relax the small facial muscles that crease the skin every time you frown, squint or raise your brows. The result is smoother, softer lines with your natural expression fully intact — the treatment nobody can spot, only the freshness. Every treatment is prescribed and performed by Sonali, a Registered Nurse Prescriber.",
    whoWeOffer: ["Forehead lines", "Frown lines (11s)", "Crow's feet", "Bunny lines", "Brow lift", "Gummy smile", "Jaw slimming (masseter)", "Neck bands"],
    whatIs: {
      heading: "How anti-wrinkle injections work",
      intro:
        "A purified protein is placed into specific muscles with a very fine needle. It temporarily blocks the nerve signal that tells that muscle to contract, so the overlying skin stops folding and existing lines soften. The treatment takes around 15 minutes and there is no downtime.",
      bullets: ["Prescription-only medicine, prescribed on site", "Results start at 3–7 days, full effect at 14 days", "Lasts 3–4 months on average", "Dose tailored to your face — softened, not frozen"],
    },
    results: {
      heading: "What to expect",
      intro: "Most clients notice a visibly smoother forehead and softer frown lines within a week, with a fresher, more rested look that still moves naturally.",
      bullets: ["Smoother forehead and frown lines", "Softer crow's feet", "A more relaxed, rested expression", "Prevents lines from etching deeper over time"],
    },
    trusted: { heading: "Why SVR", paragraph: "Nurse-led, prescription-only and conservative by design. We always offer a free two-week review to fine-tune your result." },
    faq: [
      { question: "When will I see results?", answer: "Initial results often appear within 3 to 7 days, with the full result visible after approximately 14 days." },
      { question: "How long do anti-wrinkle injections last?", answer: "Typically 3–4 months. With regular treatment many clients find the muscles weaken and results last longer." },
      { question: "Will I look frozen?", answer: "No. We dose conservatively to soften lines while preserving natural movement, and offer a free review at two weeks." },
      { question: "Does it hurt?", answer: "Most people describe a few small pinches. The needle is extremely fine and the treatment is over in minutes." },
    ],
  },
  {
    slug: "nose-to-mouth-lines-milton-keynes",
    heroHeading: "Nose-to-Mouth Lines Treatment in Milton Keynes",
    heroIntro:
      "Nasolabial folds — the lines running from the sides of the nose to the corners of the mouth — deepen as mid-face volume drops with age. Softening them is one of the most rewarding filler treatments we do, because it instantly lifts a tired or 'sad' expression without changing how you look.",
    whoWeOffer: ["Nasolabial folds", "Marionette lines", "Mid-face support", "Corner-of-mouth lift"],
    whatIs: {
      heading: "How we treat nose-to-mouth lines",
      intro:
        "Rather than simply filling the crease, Sonali assesses where volume has been lost — often the cheeks — and restores support there first, so the fold lifts naturally. A small amount of hyaluronic acid filler is then placed along the line itself for a smooth, soft finish.",
      bullets: ["Premium hyaluronic acid fillers", "Cannula technique for less bruising", "Immediate, natural-looking softening", "Lasts 9–18 months"],
    },
    results: {
      heading: "Results",
      intro: "A visibly softer, lifted lower face that looks rested rather than 'done'.",
      bullets: ["Softer nasolabial folds", "Lifted mouth corners", "Balanced, refreshed mid-face", "Minimal downtime"],
    },
    trusted: { heading: "Why SVR", paragraph: "A structural approach, not just line-filling — which is why our results look natural in photos and in person." },
    faq: [
      { question: "How long does the result last?", answer: "Typically 9–18 months depending on the product used and your metabolism." },
      { question: "Is there downtime?", answer: "Mild swelling or bruising is possible for a few days. Most clients return to normal activities the same day." },
      { question: "Will it look natural?", answer: "Yes. We restore support first and use conservative amounts along the fold, so the result is a softening rather than an obvious change." },
    ],
  },
  {
    slug: "hand-filler-milton-keynes",
    heroHeading: "Hand Filler in Milton Keynes",
    heroIntro:
      "Hands are one of the first places to show age — thinning skin, visible tendons and veins, and a crepey texture. Hand rejuvenation with dermal filler restores lost volume beneath the skin, giving smoother, softer, younger-looking hands in a single short appointment.",
    whoWeOffer: ["Volume loss on the back of the hands", "Visible veins and tendons", "Crepey, thin skin", "Sun-damaged hands"],
    whatIs: {
      heading: "How hand filler works",
      intro:
        "A hyaluronic acid filler is placed beneath the skin on the back of the hand using a cannula, then gently massaged for an even, natural result. It replaces the cushion of fat that diminishes with age and stimulates hydration in the skin above.",
      bullets: ["30–45 minute treatment", "Immediate improvement, settles over two weeks", "Lasts 12–18 months", "Cannula technique for minimal bruising"],
    },
    results: {
      heading: "Results",
      intro: "Smoother, plumper hands with less visible veins and tendons.",
      bullets: ["Softer, fuller backs of the hands", "Less prominent veins and tendons", "Improved skin texture and hydration"],
    },
    trusted: { heading: "Why SVR", paragraph: "The same nurse-led precision and premium products we use on the face." },
    faq: [
      { question: "How long does hand filler last?", answer: "Typically 12–18 months." },
      { question: "Does it hurt?", answer: "A numbing cream is applied first and the filler contains local anaesthetic, so discomfort is minimal." },
      { question: "Can I use my hands straight away?", answer: "Yes — avoid heavy pressure or very hot water for 24 hours, otherwise normal use is fine." },
    ],
  },
  {
    slug: "skin-tag-removal-milton-keynes",
    heroHeading: "Skin Tag Removal in Milton Keynes",
    heroIntro:
      "Skin tags are harmless but they catch on clothing and jewellery, and they rarely look good. At SVR Aesthetics we remove skin tags, milia, warts and small benign lesions quickly and safely using CryoPen cryotherapy — usually in a single appointment, from just £30.",
    whoWeOffer: ["Skin tags", "Milia", "Warts and verrucae", "Cherry angiomas", "Age spots", "Seborrheic keratosis"],
    whatIs: {
      heading: "How we remove skin tags",
      intro:
        "CryoPen delivers a precise jet of nitrous oxide at –89°C to freeze the lesion in seconds, without touching the surrounding healthy skin. The tag then dries and falls away over the following one to two weeks, leaving smooth skin behind.",
      bullets: ["Quick — most lesions treated in under two minutes", "No cutting, no stitches, no anaesthetic needed", "Precise, so healthy skin is untouched", "Suitable for face and body"],
    },
    results: {
      heading: "What to expect",
      intro: "Treated skin tags typically fall away within 1–2 weeks. Most clients need only one session.",
      bullets: ["Single session for most skin tags", "Minimal scarring risk", "Treated area heals naturally", "Suitable for multiple lesions in one visit"],
    },
    trusted: { heading: "Why SVR", paragraph: "Every lesion is assessed by a registered nurse before treatment. If anything looks unusual, we'll refer you to your GP rather than treat it." },
    faq: [
      { question: "Is skin tag removal painful?", answer: "Most clients experience very little discomfort — a brief cold sting. The procedure is quick and requires minimal downtime." },
      { question: "How much does it cost?", answer: "Skin tag removal starts from £30. Multiple lesions can be treated in the same appointment." },
      { question: "Will it leave a scar?", answer: "CryoPen is very precise and scarring is rare. The area may look slightly lighter or pinker for a few weeks as it heals." },
    ],
  },
];
