import { ArrowRight } from "lucide-react";
import { pricingSnapshot } from "@/data/redesign";
import { Reveal } from "@/components/Reveal";

export function PricingSnapshot() {
  return (
    <section id="pricing" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Transparent pricing</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Honest prices, <span className="italic text-plum">no surprises</span>
            </h2>
            <p className="mt-5 text-muted-ink">
              Starting prices for our most requested treatments. Your consultation is free, and your first treatment could be up to 25% off.
            </p>
            <a href="/pricing" className="group mt-7 inline-flex items-center gap-2 font-semibold text-plum">
              See the full price list <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pricingSnapshot.map((p) => (
                <div key={p.name} className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-[13px] font-medium text-muted-ink">{p.name}</p>
                  <p className="font-display mt-2 text-3xl text-ink">
                    <span className="text-[13px] font-body font-medium text-muted-ink">from </span>
                    {p.from}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
