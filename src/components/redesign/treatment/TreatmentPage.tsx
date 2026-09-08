import type { TreatmentPageData } from "@/types/treatment-page";
import { Header } from "@/components/redesign/Header";
import { Footer } from "@/components/redesign/Footer";
import { Results } from "@/components/redesign/Results";
import { Process } from "@/components/redesign/Process";
import { Reviews } from "@/components/redesign/Reviews";
import { BookingCta } from "@/components/redesign/BookingCta";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TreatmentHero } from "./TreatmentHero";
import { TreatmentAreas, TreatmentAbout, TreatmentResults, TreatmentWhy, TreatmentPricing, TreatmentFaq } from "./TreatmentSections";
import { StickyBar } from "./StickyBar";

export function TreatmentPage({ page }: { page: TreatmentPageData }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://svraesthetics.co.uk/" },
        { "@type": "ListItem", position: 2, name: "Treatments", item: "https://svraesthetics.co.uk/treatments" },
        { "@type": "ListItem", position: 3, name: page.name, item: `https://svraesthetics.co.uk/${page.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: `${page.name} in Milton Keynes`,
      description: page.metaDescription,
      procedureType: "NoninvasiveProcedure",
      bodyLocation: page.areas.map((a) => a.name).join(", "),
      provider: { "@type": "MedicalClinic", name: "SVR Aesthetics", url: "https://svraesthetics.co.uk" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <TreatmentHero page={page} />
        <TreatmentAreas page={page} />
        <TreatmentAbout page={page} />
        <TreatmentResults page={page} />
        <TreatmentWhy page={page} />
        <Results />
        <TreatmentPricing page={page} />
        <Process />
        <Reviews />
        <TreatmentFaq page={page} />
        <BookingCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar name={page.name} fromPrice={page.fromPrice} />
    </div>
  );
}
