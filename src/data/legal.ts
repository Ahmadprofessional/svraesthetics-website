export interface LegalSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

export const legalDocs: LegalDoc[] = [
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    intro:
      "These terms and conditions apply to all consultations, treatments and services offered by our clinic. By booking an appointment or receiving treatment from us, you confirm that you have read, understood and agreed to these terms.",
    sections: [
      { heading: "Our dedication", paragraphs: ["We focus on offering you safe and effective aesthetic treatment. Our team is known for delivering significant yet natural results from advanced aesthetic procedures, and has won the trust of thousands of clients by maintaining the highest standards of professionalism and patient satisfaction."] },
      { heading: "Professional registration", paragraphs: ["Our clinic fully supports and adheres to the criteria set out by the Care Quality Commission (CQC). SVR Aesthetics operates in accordance with all relevant UK healthcare legislation and regulatory requirements. All treatments are performed by registered medical professionals."] },
      { heading: "Consultations & confidentiality", bullets: ["All consultations are conducted in private.", "We strictly adhere to data protection law; your treatments are treated as strictly confidential.", "Our experts assess whether your desired treatment is suitable for you before proceeding.", "You are welcome to bring a friend or family member to your consultation and treatment. A chaperone can be provided on request."] },
      { heading: "Appointment bookings", paragraphs: ["You can book your appointment online through our website, by email or by telephone."], bullets: ["A non-refundable booking fee is required to secure your appointment.", "Valid photo ID may be requested.", "Proof of age is required for all treatments."] },
      { heading: "Cancellation & rescheduling", bullets: ["Cancellations or rescheduling requests must be made at least 48 hours in advance; otherwise the booking fee is forfeited.", "Repeated late cancellations or non-attendance may require full payment in advance for future bookings.", "SVR Aesthetics reserves the right to reschedule or cancel appointments where necessary; we will contact you promptly to rearrange."] },
      { heading: "Late arrivals", paragraphs: ["Please arrive on time. Late arrival may reduce your treatment time or require rescheduling, and the booking fee may be lost if treatment cannot proceed safely."] },
      { heading: "Children", paragraphs: ["Children must not be left unattended in the clinic. For safety reasons, children should not attend appointments unless they are the client."] },
      { heading: "Treatment suitability", bullets: ["Medical assessment and suitability are essential for successful treatment.", "We reserve the right to refuse treatment where it would be unsafe or inappropriate.", "Booking fees remain payable even if treatment is declined."] },
      { heading: "Treatment packages", bullets: ["Treatment courses must be paid in full in advance."] },
      { heading: "Medication & prescriptions", bullets: ["Prescription-only medicines are supplied following a full consultation and assessment.", "Once dispensed, prescription medications cannot be returned or refunded.", "Where required, and with your consent, we may liaise with your GP."] },
      { heading: "Age policy", paragraphs: ["SVR Aesthetics only treats clients aged 18 years and over."] },
      { heading: "Payments & refunds", bullets: ["Full payment is required on the day of treatment.", "All payments are non-refundable once treatment has been administered.", "Failure to pay as agreed may result in cancellation of future appointments."] },
      { heading: "Amendments", paragraphs: ["SVR Aesthetics reserves the right to amend these Terms & Conditions at any time. The most up-to-date version will always be available on request or on our website."] },
    ],
  },
  {
    slug: "complaints-policy",
    title: "Complaints Policy",
    intro:
      "We are committed to offering our clients the best service and high-quality care. Feedback and complaints play a crucial role in helping us grow, learn and improve, and all complaints are handled promptly and confidentially. No client will be treated poorly or discriminated against for raising a concern.",
    sections: [
      { heading: "How to make a complaint", bullets: ["If you are unsatisfied with any aspect of your care or service, please let us know as soon as possible so we can address your concern promptly.", "You can complain in writing, verbally, or by email. We may ask to discuss your concern in person or by telephone at a time convenient to you.", "Our complaints manager oversees the complaints process; please direct complaints to them so we can respond quickly."] },
      { heading: "Our complaints process", bullets: ["Written complaints are acknowledged within 3 working days.", "We carry out a fair investigation, which may involve the clinicians or staff who treated you.", "Once the investigation is complete you receive a full written response setting out our findings and any action taken.", "More serious concerns may take longer to investigate; if so, we will explain the reason and give you an expected completion date."] },
      { paragraphs: ["All complaint records are stored securely and treated as confidential, with access restricted to those directly involved in the investigation."] },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "SVR Aesthetics (\"we\", \"us\") is committed to protecting your privacy. This policy explains what personal information we collect through our website and clinic, how we use it, who we share it with and the rights you have under UK data protection law (UK GDPR and the Data Protection Act 2018).",
    sections: [
      { heading: "Who we are", paragraphs: ["SVR Aesthetics is an aesthetic clinic located at Unit 2, Stainer Square Centre, Queensway, Bletchley, Milton Keynes, MK2 2FY. We are the data controller for the personal information described in this policy. You can contact us about privacy matters by email at svraesthetics@gmail.com or by phone on 077 92284575."] },
      {
        heading: "Information we collect",
        bullets: [
          "Contact details you give us through our website forms, WhatsApp, email or phone — your name, phone number, email address and the treatment you are interested in.",
          "Consultation and treatment records — your medical history, medications, allergies, consent forms, treatment notes and clinical photographs. This is special category (health) data.",
          "Payment information — records of payments and booking fees (card details are processed by our payment provider and are not stored by us).",
          "Website usage data — pages visited, device type, approximate location and how you found us, collected through cookies and analytics tools (see Cookies below).",
          "Reviews and feedback you choose to leave, and any complaint correspondence.",
        ],
      },
      {
        heading: "How we use your information and our lawful basis",
        bullets: [
          "To respond to enquiries and book, confirm and remind you of appointments — performance of a contract / steps taken at your request.",
          "To assess your suitability for treatment and deliver treatment safely — provision of health care, with your explicit consent for health data.",
          "To keep accurate clinical records as required by our professional and regulatory obligations — legal obligation and provision of health care.",
          "To take payments and keep financial records — performance of a contract and legal obligation.",
          "To improve our website and measure the effectiveness of our advertising (including Google Ads and Meta ads) — legitimate interests, and consent where cookies are used.",
          "To send you information about offers or treatments you have asked about — consent, which you can withdraw at any time by replying STOP or contacting us.",
        ],
      },
      {
        heading: "Who we share your information with",
        paragraphs: ["We never sell your personal information. We share it only where necessary with:"],
        bullets: [
          "Our email and booking service providers, who deliver form submissions and appointment communications to us.",
          "Your GP or other healthcare professionals, only with your consent or where required for your safety.",
          "Prescribing and pharmacy partners for prescription-only medicines.",
          "Payment processors for card payments.",
          "Analytics and advertising platforms (for example Google and Meta) in anonymised or pseudonymised form to measure our marketing.",
          "Regulators, insurers or legal advisers where we are required to do so by law or to defend a claim.",
        ],
      },
      { heading: "How long we keep your information", paragraphs: ["Clinical records are retained for at least 8 years from your last treatment (or until age 25 for anyone treated under 18, which we do not do), in line with NHS records management guidance and our insurer's requirements. Enquiry details for people who do not become clients are deleted within 12 months. Financial records are kept for 6 years as required by HMRC. Website analytics data is retained according to the settings of the tools we use, typically no longer than 26 months."] },
      {
        heading: "Cookies and analytics",
        paragraphs: ["Our website uses strictly necessary cookies to function, and — with your consent — analytics and advertising cookies from Google (Google Analytics, Google Ads) and Meta to understand how visitors use the site and to measure our advertising. You can manage or withdraw consent at any time through your browser settings or our cookie banner. Blocking cookies may affect some website features."],
      },
      {
        heading: "Your rights",
        paragraphs: ["Under UK GDPR you have the right to:"],
        bullets: [
          "Access the personal information we hold about you and receive a copy.",
          "Ask us to correct information that is inaccurate or incomplete.",
          "Ask us to delete your information, where we have no overriding legal or clinical obligation to keep it.",
          "Restrict or object to how we use your information, including for direct marketing.",
          "Withdraw consent at any time where we rely on consent.",
          "Receive your information in a portable format.",
        ],
        },
      { paragraphs: ["To exercise any of these rights, contact us using the details above. We will respond within one month. If you are unhappy with how we handle your information you can complain to the Information Commissioner's Office (ICO) at ico.org.uk or on 0303 123 1113."] },
      { heading: "Security", paragraphs: ["We keep your information secure using access controls, encrypted transmission on our website, and locked or password-protected clinical records. Only staff who need your information to provide your care can access it."] },
      { heading: "Children", paragraphs: ["We only treat clients aged 18 and over and do not knowingly collect information from anyone under 18."] },
      { heading: "Changes to this policy", paragraphs: ["We may update this policy from time to time. The latest version will always be published on this page with the date it was last reviewed."] },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}
