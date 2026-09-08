import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { priceList } from "@/data/pricing-page";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Faq } from "@/components/redesign/Faq";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Treatment Prices Milton Keynes | SVR Aesthetics",
  description:
    "Transparent aesthetic treatment prices in Milton Keynes. Anti-wrinkle from £150, dermal fillers from £100, facials from £50, skin tag removal from £30. Free consultation and 25% off your first treatment.",
  alternates: { canonical: "https://svraesthetics.co.uk/pricing" },
};

export default function PricingPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Pricing"
        title="Honest prices,"
        highlight="no surprises"
        intro="Starting prices for our most requested treatments. Your consultation is always free, your first treatment is 25% off, and your exact quote is agreed before anything begins."
        crumbs={[{ label: "Pricing" }]}
      />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceList.map((p, i) => (
              <Reveal key={p.name} delay={i * 40}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-sand bg-white p-7">
                  <div>
                    <h2 className="font-display text-3xl text-ink">{p.name}</h2>
                    <p className="mt-2 text-[14px] text-muted-ink">{p.blurb}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Price start from</p>
                      <p className="font-display mt-1 text-4xl leading-none text-plum">{p.from}</p>
                    </div>
                    <Link href={p.href} className="inline-flex items-center gap-1.5 rounded-full border border-plum px-4 py-2 text-[13px] font-semibold text-plum transition-colors hover:bg-plum hover:text-white">
                      Details <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-plum p-8 text-ivory sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-3xl">25% off your first treatment</p>
              <p className="mt-2 text-[15px] text-ivory/80">Book a free, no-obligation consultation and we&apos;ll confirm your exact price.</p>
            </div>
            <a href="#book" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-ivory px-6 py-3.5 font-semibold text-plum sm:mt-0">
              Book free consultation <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <Faq />
      <BookingCta />
    </Shell>
  );
}
