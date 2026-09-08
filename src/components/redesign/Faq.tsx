import { faqItems } from "@/data/site";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Good to know</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            Questions, <span className="italic text-plum">answered</span>
          </h2>
          <p className="mt-5 text-muted-ink">Still unsure? Message us on WhatsApp and we&apos;ll reply within a few minutes during clinic hours.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl bg-white px-6 py-2 sm:px-8">
            <Accordion items={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
