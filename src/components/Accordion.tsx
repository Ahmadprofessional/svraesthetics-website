"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionEntry {
  question: string;
  answer: string;
}

export function Accordion({ items, defaultOpen = 0 }: { items: AccordionEntry[]; defaultOpen?: number }) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => {
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
                className={cn("size-5 shrink-0 text-brand-navy transition-transform duration-300", isOpen && "rotate-180")}
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
  );
}
