import type { Metadata } from "next";
import { faqCategories } from "@/data/faq-page";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { Accordion } from "@/components/Accordion";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs | SVR Aesthetics Milton Keynes",
  description: "Answers to common questions about aesthetic treatments, consultations, aftercare, pricing and appointments at SVR Aesthetics, Milton Keynes.",
  alternates: { canonical: "https://svraesthetics.co.uk/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((c) => c.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))),
  };
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="Good to know" title="Frequently asked" highlight="questions" intro="Still unsure? Message us on WhatsApp and we'll reply within a few minutes during clinic hours." crumbs={[{ label: "FAQs" }]} />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6">
          {faqCategories.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <h2 className="font-display text-4xl text-ink">{c.name}</h2>
                <div className="rounded-3xl bg-white px-6 py-2 sm:px-8">
                  <Accordion items={c.items} defaultOpen={-1} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <BookingCta />
    </Shell>
  );
}
