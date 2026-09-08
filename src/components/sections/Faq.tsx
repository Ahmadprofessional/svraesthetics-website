"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqItems, relatedTreatments } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(
    faqItems.findIndex((f) => f.open) ?? 0
  );

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <h2 className="text-center text-[28px] font-medium text-brand-heading">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="py-2">
                <button
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-brand-heading"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-brand-navy transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden text-brand-body">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-4 text-center">
        <Reveal>
          <h3 className="text-lg font-semibold text-brand-heading">Related Treatments</h3>
          <p className="mt-4 text-sm leading-loose text-brand-body">
            {relatedTreatments.map((t, i) => (
              <span key={t.href}>
                <a href={t.href} className="text-brand-blue-link hover:underline">
                  {t.text}
                </a>
                {i < relatedTreatments.length - 1 && <span className="mx-2 text-border">|</span>}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
