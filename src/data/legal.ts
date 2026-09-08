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
    intro: "Our website address is https://svraesthetics.co.uk. This policy explains what data we collect through this website and how it is used.",
    sections: [
      { heading: "Comments", paragraphs: ["When visitors leave comments on the site we collect the data shown in the comments form, the visitor's IP address and browser user agent string to help spam detection. An anonymised string created from your email address may be provided to the Gravatar service to see if you are using it."] },
      { heading: "Media", paragraphs: ["If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included, as visitors can extract location data from images on the website."] },
      { heading: "Cookies", paragraphs: ["If you leave a comment you may opt in to saving your name, email address and website in cookies for your convenience; these last for one year. If you visit our login page we set a temporary cookie to determine whether your browser accepts cookies; it contains no personal data and is discarded when you close your browser."] },
      { heading: "Embedded content from other websites", paragraphs: ["Articles on this site may include embedded content (videos, images, articles). Embedded content from other websites behaves exactly as if you had visited the other website, and those sites may collect data about you, use cookies and monitor your interaction with the embedded content."] },
      { heading: "How long we retain your data", paragraphs: ["If you leave a comment, the comment and its metadata are retained indefinitely so follow-up comments can be recognised and approved automatically. For registered users we also store the personal information provided in their profile."] },
      { heading: "What rights you have over your data", paragraphs: ["If you have an account or have left comments, you can request an exported file of the personal data we hold about you, or request that we erase it. This does not include data we are obliged to keep for administrative, legal or security purposes."] },
      { heading: "Where your data is sent", paragraphs: ["Visitor comments may be checked through an automated spam detection service."] },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}
