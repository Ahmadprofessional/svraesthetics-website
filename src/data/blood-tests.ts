export interface BloodTestFAQ {
  question: string;
  answer: string;
}

export interface BloodTestItem {
  id: string;
  category: "Blood Tests" | "IV Vitamin Drips" | "Health Panels";
  title: string;
  price: string;
  pillText: string;
  heroHeadingLine1: string;
  heroHeadingHighlight: string;
  heroHeadingLine2: string;
  heroDescription: string;
  aboutHeading: string;
  aboutTextParagraphs: string[];
  aboutMobileText: string;
  image: string;
  turnaround: string;
  fasting: string;
  downtime: string;
  clinicalHighlights: string[];
  faqs: BloodTestFAQ[];
}

export const bloodTestCategories = ["All Tests", "Blood Tests", "IV Vitamin Drips", "Health Panels"] as const;
export type BloodTestCategory = (typeof bloodTestCategories)[number];

export const bloodTestsData: Record<string, BloodTestItem> = {
  "vitamin-d": {
    id: "vitamin-d",
    category: "Blood Tests",
    title: "Vitamin D Blood Test",
    price: "£49",
    pillText: "Vitamin D Test · Milton Keynes",
    heroHeadingLine1: "Track Your ",
    heroHeadingHighlight: "Vitamin D",
    heroHeadingLine2: " Levels",
    heroDescription: "Check your Vitamin D levels with our quick, accurate clinical blood draw in Milton Keynes. Essential for bone density, immune defense, and seasonal fatigue.",
    aboutHeading: "About the Vitamin D Blood Test",
    aboutTextParagraphs: [
      "Vitamin D is crucial for maintaining healthy bones, teeth, and muscles. It also supports your immune system and helps regulate your mood. Many people across the UK have low levels, especially during autumn and winter months.",
      "Our comprehensive clinical blood test accurately measures your 25-hydroxyvitamin D status, allowing you to take clinical action if deficient and restore optimal vitality."
    ],
    aboutMobileText: "Check your Vitamin D levels with our quick and accurate blood test. Essential for bone health and immune function.",
    image: "/images/blood-tests/vitamin D.webp",
    turnaround: "24–48 hours",
    fasting: "No fasting required",
    downtime: "None (5–10 min appointment)",
    clinicalHighlights: [
      "Gold standard 25-OH Vitamin D clinical measurement",
      "Immune system resilience assessment",
      "Bone and muscle health baseline",
      "Clear written diagnostic report with reference ranges"
    ],
    faqs: [
      {
        question: "How long do results take?",
        answer: "Results are typically available within 24 to 48 hours after your sample arrives at our accredited laboratory."
      },
      {
        question: "Do I need to fast before this test?",
        answer: "No, fasting is not required for a Vitamin D blood test. You can eat and drink normally prior to your appointment."
      },
      {
        question: "Do I need a GP referral?",
        answer: "No referral is needed. You can book directly with SVR Aesthetics. Our clinical nurse performs the blood draw in our Bletchley clinic."
      }
    ]
  },
  "thyroid": {
    id: "thyroid",
    category: "Blood Tests",
    title: "Thyroid Function Test",
    price: "£75",
    pillText: "Thyroid Test · Milton Keynes",
    heroHeadingLine1: "Restore Your ",
    heroHeadingHighlight: "Thyroid",
    heroHeadingLine2: " Harmony",
    heroDescription: "A detailed analysis of your thyroid hormones (TSH, FT3, FT4) to identify root causes of chronic fatigue, unexplained weight changes, and brain fog.",
    aboutHeading: "About the Thyroid Function Test",
    aboutTextParagraphs: [
      "Your thyroid gland governs your body's metabolic rate and cellular energy. If it is underactive (hypothyroidism) or overactive (hyperthyroidism), it can manifest as stubborn weight gain or loss, lethargy, cold sensitivity, hair thinning, and mood changes.",
      "This test measures key thyroid markers including TSH, Free T3, and Free T4 to provide a full diagnostic picture of your endocrine health."
    ],
    aboutMobileText: "A detailed analysis of your thyroid hormones to help identify causes of fatigue, weight changes, and mood swings.",
    image: "/images/blood-tests/thyroid-blood-test.webp",
    turnaround: "24–48 hours",
    fasting: "Morning test recommended",
    downtime: "None",
    clinicalHighlights: [
      "TSH (Thyroid Stimulating Hormone) evaluation",
      "Free T3 & Free T4 active hormone levels",
      "Metabolic and endocrine balance assessment",
      "Professional clinical report ready for your GP or specialist"
    ],
    faqs: [
      {
        question: "When is the best time to have a thyroid blood test?",
        answer: "Thyroid hormone levels naturally peak in the early morning, so a morning blood draw is recommended for the most accurate results."
      },
      {
        question: "Should I take my thyroid medication before the test?",
        answer: "If you take levothyroxine or other thyroid medication, take your dose after the blood draw unless your physician specifically instructed otherwise."
      }
    ]
  },
  "cholesterol": {
    id: "cholesterol",
    category: "Blood Tests",
    title: "Cholesterol & Lipid Panel",
    price: "£39",
    pillText: "Lipid Profile · Milton Keynes",
    heroHeadingLine1: "Protect Your Heart with a ",
    heroHeadingHighlight: "Lipid Profile",
    heroHeadingLine2: "",
    heroDescription: "A comprehensive lipid panel measuring total cholesterol, LDL (bad), HDL (good), and triglycerides to assess cardiovascular risk.",
    aboutHeading: "About the Cholesterol Profile",
    aboutTextParagraphs: [
      "High cholesterol is a primary risk factor for arterial disease, hypertension, and stroke, yet it typically presents with zero symptoms. A complete lipid profile measures your total cholesterol, LDL, HDL, and triglycerides.",
      "Knowing your numbers empowers you to make targeted nutritional, lifestyle, or medical interventions to protect your heart and vascular system."
    ],
    aboutMobileText: "A comprehensive lipid panel measuring good and bad cholesterol levels to assess your cardiovascular risk.",
    image: "/images/blood-tests/Cholesterol-Blood-Tests.webp",
    turnaround: "24–48 hours",
    fasting: "10–12 hours fasting recommended",
    downtime: "None",
    clinicalHighlights: [
      "Total Cholesterol measurement",
      "HDL (High-Density Lipoprotein) 'Good' cholesterol",
      "LDL (Low-Density Lipoprotein) 'Bad' cholesterol",
      "Serum Triglycerides & cholesterol risk ratio"
    ],
    faqs: [
      {
        question: "Do I need to fast before a cholesterol test?",
        answer: "Yes, for the most accurate triglyceride and LDL breakdown, fasting for 10 to 12 hours (water only) is advised."
      }
    ]
  },
  "cbc": {
    id: "cbc",
    category: "Blood Tests",
    title: "Full Blood Count (CBC)",
    price: "£45",
    pillText: "Complete Blood Count · Milton Keynes",
    heroHeadingLine1: "Discover Your Blueprint with a ",
    heroHeadingHighlight: "Full Blood Count",
    heroHeadingLine2: "",
    heroDescription: "A foundational general health screening evaluating red blood cells, white blood cells, and platelets to check for anemia, infection, and immunity.",
    aboutHeading: "About Full Blood Count (CBC)",
    aboutTextParagraphs: [
      "A Complete Blood Count (CBC) evaluates your overall health and screens for a wide range of conditions including anemia, viral or bacterial infection, blood disorders, and immune system strain.",
      "It provides precise counts of hemoglobin, red cells, white cell subgroups (neutrophils, lymphocytes), and platelets."
    ],
    aboutMobileText: "A broad screening test checking for anemia, infection, and many other common diseases.",
    image: "/images/blood-tests/CBC-full-blood count test.webp",
    turnaround: "24–48 hours",
    fasting: "No fasting required",
    downtime: "None",
    clinicalHighlights: [
      "Hemoglobin concentration & Hematocrit",
      "Red Blood Cell count & indices (MCV, MCH, MCHC)",
      "White Blood Cell total & 5-part differential",
      "Platelet count for blood clotting evaluation"
    ],
    faqs: [
      {
        question: "What does an abnormal Full Blood Count indicate?",
        answer: "An abnormal result can signify anything from mild dehydration or low dietary iron to an ongoing infection. Your report will detail reference ranges, and Sonali can advise on follow-up steps."
      }
    ]
  },
  "diabetes": {
    id: "diabetes",
    category: "Blood Tests",
    title: "HbA1c Diabetes Test",
    price: "£45",
    pillText: "HbA1c Blood Test · Milton Keynes",
    heroHeadingLine1: "Take Control with an ",
    heroHeadingHighlight: "HbA1c Diabetes",
    heroHeadingLine2: " Test",
    heroDescription: "Accurately measures your average blood glucose levels over the past 2 to 3 months to screen for prediabetes or monitor blood sugar management.",
    aboutHeading: "About the HbA1c Diabetes Test",
    aboutTextParagraphs: [
      "Unlike a finger-prick test that only captures blood glucose at a single instant, the glycated hemoglobin (HbA1c) test reflects your average glycemic control over the past 8 to 12 weeks.",
      "It is the global clinical standard for diagnosing prediabetes and type 2 diabetes, providing early warnings years before symptoms appear."
    ],
    aboutMobileText: "Measure your average blood sugar levels over the past 2-3 months to screen for or monitor diabetes.",
    image: "/images/blood-tests/HbA1c-diabetes test.webp",
    turnaround: "24–48 hours",
    fasting: "No fasting required",
    downtime: "None",
    clinicalHighlights: [
      "Long-term 3-month blood glucose average",
      "Early prediabetes screening",
      "No overnight fasting mandatory",
      "Standard NHS/NICE reference ranges applied"
    ],
    faqs: [
      {
        question: "Can I eat before an HbA1c test?",
        answer: "Yes, because HbA1c reflects glucose attached to hemoglobin over several months, food eaten immediately before the test does not distort the reading."
      }
    ]
  },
  "iron": {
    id: "iron",
    category: "Blood Tests",
    title: "Iron & Ferritin Blood Test",
    price: "From £35",
    pillText: "Iron & Ferritin · Milton Keynes",
    heroHeadingLine1: "Revitalize Your ",
    heroHeadingHighlight: "Iron Reserves",
    heroHeadingLine2: "",
    heroDescription: "Evaluate your body's active iron levels and stored ferritin to identify deficiency, anemia, or iron overload linked to chronic exhaustion.",
    aboutHeading: "About Iron and Ferritin Tests",
    aboutTextParagraphs: [
      "Iron is indispensable for red blood cell synthesis and oxygen delivery throughout the body. Low iron stores (ferritin) cause chronic tiredness, pale complexion, brittle hair, and shortness of breath.",
      "Testing both serum iron and ferritin reveals whether your internal storage tanks are depleted even before full-blown anemia appears on a routine blood count."
    ],
    aboutMobileText: "Evaluate your body's iron stores to check for deficiency or overload, often causing tiredness or low energy.",
    image: "/images/blood-tests/iron-ferritin test.webp",
    turnaround: "24–48 hours",
    fasting: "Morning test recommended",
    downtime: "None",
    clinicalHighlights: [
      "Serum Iron measurement",
      "Ferritin (cellular iron storage) analysis",
      "Total Iron Binding Capacity (TIBC)",
      "Essential for active women, vegetarians, and athletes"
    ],
    faqs: [
      {
        question: "Why test Ferritin in addition to Iron?",
        answer: "Serum iron changes throughout the day based on what you ate, but Ferritin measures your long-term stored iron reserves, giving a true picture of deficiency."
      }
    ]
  },
  "kidney": {
    id: "kidney",
    category: "Blood Tests",
    title: "Kidney Function Test (U&Es)",
    price: "From £35",
    pillText: "Renal Function · Milton Keynes",
    heroHeadingLine1: "Optimize Your ",
    heroHeadingHighlight: "Kidney Health",
    heroHeadingLine2: "",
    heroDescription: "Check how effectively your kidneys are filtering metabolic waste and regulating essential electrolytes (Sodium, Potassium, Urea, Creatinine, eGFR).",
    aboutHeading: "About Kidney Function Testing",
    aboutTextParagraphs: [
      "Your kidneys continuously filter metabolic waste and maintain fluid balance. Renal issues frequently develop without early symptoms.",
      "A kidney function profile (Urea & Electrolytes with eGFR) evaluates your renal filtration capacity and fluid retention markers."
    ],
    aboutMobileText: "Check how well your kidneys are filtering waste from your blood.",
    image: "/images/blood-tests/kidney-test.webp",
    turnaround: "24–48 hours",
    fasting: "Normal hydration encouraged",
    downtime: "None",
    clinicalHighlights: [
      "Estimated GFR (Glomerular Filtration Rate)",
      "Creatinine & Serum Urea levels",
      "Electrolyte balance: Sodium & Potassium",
      "Vital for medication monitoring and hydration health"
    ],
    faqs: [
      {
        question: "Should I drink water before a kidney test?",
        answer: "Yes, please ensure you are well hydrated with water, as mild dehydration can artificially elevate creatinine and urea levels."
      }
    ]
  },
  "cortisol": {
    id: "cortisol",
    category: "Blood Tests",
    title: "Cortisol Stress Hormone Test",
    price: "From £35",
    pillText: "Cortisol Test · Milton Keynes",
    heroHeadingLine1: "Master Your Stress with a ",
    heroHeadingHighlight: "Cortisol",
    heroHeadingLine2: " Test",
    heroDescription: "Evaluate adrenal gland function and systemic stress response by measuring circulating cortisol levels.",
    aboutHeading: "About the Cortisol Test",
    aboutTextParagraphs: [
      "Cortisol is a vital steroid hormone produced by your adrenal glands that regulates metabolism, inflammatory response, blood pressure, and sleep cycles.",
      "Chronically elevated or depleted cortisol can trigger insomnia, adrenal burnout, anxiety, weight distribution changes, and extreme morning fatigue."
    ],
    aboutMobileText: "Measure your cortisol levels to evaluate adrenal gland function and stress response.",
    image: "/images/blood-tests/cortisol blood test.webp",
    turnaround: "24–48 hours",
    fasting: "Blood draw strictly before 10:00 AM",
    downtime: "None",
    clinicalHighlights: [
      "Morning peak serum cortisol measurement",
      "Adrenal axis function check",
      "Assessment for chronic physiological or emotional stress",
      "Clear clinical interpretation guidance"
    ],
    faqs: [
      {
        question: "Why must Cortisol be tested in the morning?",
        answer: "Cortisol follows a circadian rhythm, peaking around 8:00–9:00 AM and dropping significantly by evening. A morning draw is required for accurate comparison to diagnostic ranges."
      }
    ]
  },
  "psa": {
    id: "psa",
    category: "Blood Tests",
    title: "PSA Prostate Health Test",
    price: "From £35",
    pillText: "PSA Test · Milton Keynes",
    heroHeadingLine1: "Proactive ",
    heroHeadingHighlight: "Prostate Protection",
    heroHeadingLine2: " for Men",
    heroDescription: "A crucial clinical blood screening for men over 40 to evaluate prostate enlargement, prostatitis, or prostate cancer risk.",
    aboutHeading: "About the PSA Test",
    aboutTextParagraphs: [
      "Prostate-Specific Antigen (PSA) is a protein produced by cells in the prostate gland. Elevated concentrations in blood can indicate inflammation, benign enlargement (BPH), or cellular changes requiring further clinical evaluation.",
      "Early detection allows for timely, stress-free medical management. A quick venous draw in our private clinic gives you rapid clarity."
    ],
    aboutMobileText: "A crucial screening test for men to check for prostate enlargement or cancer risk.",
    image: "/images/blood-tests/prostate-test.webp",
    turnaround: "24–48 hours",
    fasting: "Avoid vigorous exercise 48h prior",
    downtime: "None",
    clinicalHighlights: [
      "Total Serum PSA measurement",
      "Discreet and confidential private appointment",
      "Experienced clinical nurse draw",
      "Results within 48 hours for peace of mind"
    ],
    faqs: [
      {
        question: "Are there any preparation steps for a PSA test?",
        answer: "Yes, avoid cycling, vigorous lower-body exercise, and sexual activity for 48 hours prior to testing, as these can temporarily elevate PSA levels."
      }
    ]
  },
  "liver": {
    id: "liver",
    category: "Blood Tests",
    title: "Liver Function Test (LFTs)",
    price: "From £35",
    pillText: "Liver Function · Milton Keynes",
    heroHeadingLine1: "Support Your Body with a ",
    heroHeadingHighlight: "Liver Profile",
    heroHeadingLine2: "",
    heroDescription: "Assess the health and detoxifying capacity of your liver by measuring hepatic enzymes, proteins, and bilirubin.",
    aboutHeading: "About Liver Function Testing",
    aboutTextParagraphs: [
      "The liver is your body's primary metabolic hub, neutralizing toxins, producing essential clotting proteins, processing fats, and storing vitamins.",
      "A Liver Function Profile measures key enzymes including ALT, AST, ALP, and GGT, alongside Total Bilirubin and Albumin to evaluate hepatic cell integrity."
    ],
    aboutMobileText: "Assess the health of your liver by measuring enzymes, proteins, and bilirubin.",
    image: "/images/blood-tests/liver-function-test.jpg",
    turnaround: "24–48 hours",
    fasting: "Avoid alcohol 24h prior",
    downtime: "None",
    clinicalHighlights: [
      "ALT (Alanine Aminotransferase) & AST",
      "Alkaline Phosphatase (ALP) & GGT biliary markers",
      "Total Bilirubin and Albumin synthesis",
      "Key diagnostic tool for medication, lifestyle, and digestive health"
    ],
    faqs: [
      {
        question: "Can medication affect liver function results?",
        answer: "Yes, many medications (including statins, paracetamol, and antibiotics) can influence liver enzymes. Note any regular medications during your visit."
      }
    ]
  },
  "iv-vitamin-d": {
    id: "iv-vitamin-d",
    category: "IV Vitamin Drips",
    title: "Vitamin D IV Drip",
    price: "£50",
    pillText: "Vitamin D IV Drip · Milton Keynes",
    heroHeadingLine1: "Experience the ",
    heroHeadingHighlight: "Vitamin D",
    heroHeadingLine2: " IV Drip",
    heroDescription: "Deliver an immediate, potent dose of Vitamin D directly into your bloodstream with 100% bioavailability for rapid immune resilience and mood elevation.",
    aboutHeading: "About the Vitamin D IV Drip",
    aboutTextParagraphs: [
      "Oral Vitamin D capsules must travel through your gastrointestinal tract where significant portions are lost during absorption. When you need rapid, restorative levels to fight winter exhaustion or weakened immunity, IV delivery is unmatched.",
      "Our medical practitioner administers pure Vitamin D intravenously in our calm Milton Keynes clinic. You absorb 100% of the active nutrient within 30 to 45 minutes."
    ],
    aboutMobileText: "Deliver a powerful dose of Vitamin D directly into your bloodstream to instantly boost your immunity, mood, and energy.",
    image: "/images/blood-tests/vitamin D.webp",
    turnaround: "Immediate delivery",
    fasting: "Eat a light snack beforehand",
    downtime: "None (30–45 min appointment)",
    clinicalHighlights: [
      "100% cellular bioavailability (bypasses digestive tract)",
      "Rapid correction for low mood, fatigue, and muscle weakness",
      "Administered by registered medical personnel",
      "Relaxing, private clinic room setting"
    ],
    faqs: [
      {
        question: "What is the difference between the blood test and the IV drip?",
        answer: "The blood test is a diagnostic test to measure your current Vitamin D level. The IV drip is a wellness therapy that infuses a high-grade bioavailable dose directly into your body."
      }
    ]
  },
  "vitamin-b12": {
    id: "vitamin-b12",
    category: "IV Vitamin Drips",
    title: "Vitamin B12 IV Drip & Shot",
    price: "£30",
    pillText: "Vitamin B12 · Milton Keynes",
    heroHeadingLine1: "Boundless Energy with ",
    heroHeadingHighlight: "Vitamin B12",
    heroHeadingLine2: "",
    heroDescription: "Reclaim natural, sustained vitality and clear brain fog with pure Vitamin B12 delivered directly into your circulation.",
    aboutHeading: "About Vitamin B12 Therapy",
    aboutTextParagraphs: [
      "Vitamin B12 is essential for nerve transmission, red blood cell formation, and cellular ATP synthesis. B12 deficiency is widespread, particularly among busy professionals, vegans, vegetarians, and those with digestive sensitivities.",
      "Our B12 infusion restores cellular energy without the jitters or crash of caffeine, promoting mental sharpness and endurance."
    ],
    aboutMobileText: "Experience an immediate boost in your energy levels and overall vitality with our premium Vitamin B12 IV Drip.",
    image: "/images/blood-tests/vitamin_b12_iv.png",
    turnaround: "Immediate absorption",
    fasting: "No fasting needed",
    downtime: "None (20–30 min)",
    clinicalHighlights: [
      "Methylcobalamin / Hydroxocobalamin premium clinical grades",
      "Direct cellular absorption for fast fatigue relief",
      "Enhanced cognitive clarity and nervous system support",
      "Quick lunchtime appointment"
    ],
    faqs: [
      {
        question: "How quickly will I feel the effects of Vitamin B12?",
        answer: "Many clients feel an uplift in mental clarity and stamina within 12 to 24 hours of treatment."
      }
    ]
  },
  "iv-energy-boost": {
    id: "iv-energy-boost",
    category: "IV Vitamin Drips",
    title: "IV Energy Boost Cocktail",
    price: "£150",
    pillText: "Energy Boost IV · Milton Keynes",
    heroHeadingLine1: "The Ultimate Recharge: ",
    heroHeadingHighlight: "IV Energy Boost",
    heroHeadingLine2: "",
    heroDescription: "Revitalize exhausted cells with a synergistic infusion of high-potency B-Complex vitamins, Vitamin C, Magnesium, and essential amino acids.",
    aboutHeading: "About the IV Energy Boost",
    aboutTextParagraphs: [
      "When chronic work stress, poor sleep, or burnout leave you completely depleted, oral vitamins often fail to make a dent. The IV Energy Boost delivers a medical-grade formulation directly into your bloodstream.",
      "By accelerating cellular ATP production, this infusion provides deep, lasting energy and full-body hydration in under an hour."
    ],
    aboutMobileText: "Combat fatigue and feel instantly revitalized with our specially formulated IV Energy Boost.",
    image: "/images/blood-tests/iv_energy_boost.png",
    turnaround: "Same-day vitality",
    fasting: "Hydrate well before appointment",
    downtime: "None (45–60 min)",
    clinicalHighlights: [
      "B-Complex (B1, B2, B3, B5, B6) + Vitamin C",
      "Magnesium for muscle tension and stress reduction",
      "Amino acid complex for cellular repair",
      "Instant electrolyte and plasma rehydration"
    ],
    faqs: [
      {
        question: "Who is the IV Energy Boost best for?",
        answer: "It is ideal for anyone suffering from chronic fatigue, jet lag, burnout, or athletic exhaustion needing rapid recovery."
      }
    ]
  },
  "iv-skin-brightening": {
    id: "iv-skin-brightening",
    category: "IV Vitamin Drips",
    title: "IV Skin Brightening Glow",
    price: "From £100",
    pillText: "Skin Brightening IV · Milton Keynes",
    heroHeadingLine1: "Radiant Glow with ",
    heroHeadingHighlight: "IV Skin Brightening",
    heroHeadingLine2: "",
    heroDescription: "High-dose Glutathione (the master antioxidant) combined with Vitamin C to detoxify cells, suppress hyperpigmentation, and illuminate skin from within.",
    aboutHeading: "About IV Skin Brightening",
    aboutTextParagraphs: [
      "True, luminous skin radiance starts at the cellular level. Glutathione works internally to neutralize oxidative stress, detoxify the liver, and inhibit tyrosinase (the enzyme responsible for melanin production and dark spots).",
      "Paired with high-dose Vitamin C to stimulate collagen synthesis, this infusion leaves skin visibly brighter, more even-toned, and refreshed."
    ],
    aboutMobileText: "Rejuvenate your skin and achieve a radiant, youthful glow with our Skin Brightening IV therapy.",
    image: "/images/blood-tests/iv_skin_brightening.png",
    turnaround: "Course recommended",
    fasting: "Light meal beforehand",
    downtime: "None (45 min)",
    clinicalHighlights: [
      "Concentrated Glutathione master antioxidant",
      "Synergistic high-potency Vitamin C",
      "Targeted melanin inhibition for even pigmentation",
      "Full-body antioxidant rejuvenation"
    ],
    faqs: [
      {
        question: "How many sessions are recommended?",
        answer: "While many clients notice a refreshed glow after one infusion, a course of 4 to 6 weekly sessions is recommended for substantial hyperpigmentation improvement."
      }
    ]
  },
  "iv-nad": {
    id: "iv-nad",
    category: "IV Vitamin Drips",
    title: "IV NAD+ Longevity Therapy",
    price: "From £200",
    pillText: "NAD+ Longevity · Milton Keynes",
    heroHeadingLine1: "Cellular Longevity with ",
    heroHeadingHighlight: "IV NAD+",
    heroHeadingLine2: "",
    heroDescription: "The premier bio-hacking and cellular anti-aging infusion. Replenish declining NAD+ coenzymes to sharpen cognitive focus, repair DNA, and restore mitochondrial energy.",
    aboutHeading: "About IV NAD+ Therapy",
    aboutTextParagraphs: [
      "Nicotinamide Adenine Dinucleotide (NAD+) is an essential coenzyme present in every human cell that governs mitochondrial energy production and sirtuin longevity genes. By age 40, natural NAD+ levels decline by more than 50%.",
      "Infusing pure NAD+ helps turn back the cellular clock, lifting brain fog, sharpening memory, and activating full-body cellular DNA repair."
    ],
    aboutMobileText: "Restore cellular energy, improve cognitive function, and slow down the aging process with our NAD+ IV Therapy.",
    image: "/images/blood-tests/iv_nad_therapy.png",
    turnaround: "Sustained cellular boost",
    fasting: "Eat a healthy meal before visit",
    downtime: "None (1.5–3 hours slow infusion)",
    clinicalHighlights: [
      "Pure pharmaceutical-grade Nicotinamide Adenine Dinucleotide",
      "Mitochondrial reactivation & cellular ATP synthesis",
      "DNA repair and neuroprotective support",
      "Administered under close medical nurse supervision"
    ],
    faqs: [
      {
        question: "Why does an NAD+ drip take longer than other IVs?",
        answer: "NAD+ is infused slowly over 1.5 to 3 hours to ensure maximum cellular uptake and avoid transient chest or abdominal sensations associated with rapid infusion."
      }
    ]
  },
  "well-man": {
    id: "well-man",
    category: "Health Panels",
    title: "Well Man Comprehensive Profile",
    price: "£159",
    pillText: "Well Man Profile · Milton Keynes",
    heroHeadingLine1: "Peak Performance: ",
    heroHeadingHighlight: "Well Man Profile",
    heroHeadingLine2: "",
    heroDescription: "A comprehensive clinical MOT designed specifically for men, checking testosterone, prostate (PSA), heart lipids, liver, kidneys, and vital nutrients.",
    aboutHeading: "About the Well Man Profile",
    aboutTextParagraphs: [
      "Proactive health screening is the key to longevity and vitality. The Well Man Profile at SVR Aesthetics is an extensive diagnostic panel tailored to the physiological health of men.",
      "It tests key biomarkers including Testosterone, PSA, Full Lipid Profile, Liver and Kidney function, and essential vitamins (D & B12) to establish a clear baseline and catch silent issues years in advance."
    ],
    aboutMobileText: "A comprehensive health check tailored specifically for men to monitor key health markers.",
    image: "/images/blood-tests/well_man_test.png",
    turnaround: "48 hours",
    fasting: "10–12 hours fasting recommended",
    downtime: "None (10–15 min draw)",
    clinicalHighlights: [
      "Serum Testosterone & Male Hormonal balance",
      "PSA (Prostate-Specific Antigen) screening",
      "Comprehensive Cholesterol & Triglyceride lipid panel",
      "Liver (LFTs) and Kidney (U&Es) full profiles",
      "Vitamin D & B12 nutritional reserves"
    ],
    faqs: [
      {
        question: "How is the Well Man blood sample collected?",
        answer: "A quick, gentle venous blood draw is carried out by our trained clinical nurse at our private Milton Keynes clinic."
      }
    ]
  },
  "well-woman": {
    id: "well-woman",
    category: "Health Panels",
    title: "Well Woman Comprehensive Profile",
    price: "£159",
    pillText: "Well Woman Profile · Milton Keynes",
    heroHeadingLine1: "Empower Your Wellness: ",
    heroHeadingHighlight: "Well Woman Profile",
    heroHeadingLine2: "",
    heroDescription: "The ultimate health MOT for women, analyzing thyroid hormones, iron stores, female hormone markers, metabolic health, and vitamin levels.",
    aboutHeading: "About the Well Woman Profile",
    aboutTextParagraphs: [
      "Women's physiological health is complex and dynamic. The Well Woman Profile evaluates the balance between thyroid function, stored ferritin (iron), vitamin levels, and vital metabolic markers.",
      "It provides clarity on common underlying causes of chronic fatigue, hair thinning, weight fluctuations, and mood shifts, empowering you with clinical certainty."
    ],
    aboutMobileText: "A comprehensive health check tailored specifically for women to monitor essential health markers.",
    image: "/images/blood-tests/well_woman_test.png",
    turnaround: "48 hours",
    fasting: "Morning test recommended",
    downtime: "None (10–15 min draw)",
    clinicalHighlights: [
      "Full Thyroid Profile (TSH, Free T4)",
      "Iron & Ferritin storage levels",
      "Complete Blood Count (CBC) & hemoglobin check",
      "Vitamin D & Vitamin B12 levels",
      "Lipid and metabolic health panel"
    ],
    faqs: [
      {
        question: "Who should get a Well Woman Profile?",
        answer: "Any woman wanting a proactive, detailed health baseline, or those experiencing unexplained fatigue, cycle irregularities, or brain fog."
      }
    ]
  }
};
