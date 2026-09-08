import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { treatmentCategories, treatmentsByCategory } from "@/data/treatment-pages";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Aesthetic Treatments in Milton Keynes | SVR Aesthetics",
  description:
    "Explore every treatment at SVR Aesthetics, Milton Keynes — anti-wrinkle, dermal fillers, lips, facials, HydraFacial, microneedling, laser hair removal, skin tag removal and more. Free consultation.",
  alternates: { canonical: "https://svraesthetics.co.uk/treatments" },
};

const categoryImage: Record<string, string> = {
  Injectables: "/images/redesign/injectables.webp",
  "Dermal Fillers": "/images/redesign/dermal-fillers-hero.webp",
  "Facials & Skin": "/images/redesign/facials.webp",
  "Skin & Lesion Removal": "/images/redesign/removal.webp",
  "Laser, Hair & Wellness": "/images/redesign/wellness.webp",
};

export default function TreatmentsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Treatment menu"
        title="Every treatment,"
        highlight="one calm clinic"
        intro="Nurse-led injectables, results-driven facials, laser, skin and wellness treatments — all in Bletchley, Milton Keynes. Every plan starts with a free consultation."
        crumbs={[{ label: "Treatments" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {treatmentCategories.map((c) => (
            <a key={c} href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="rounded-full border border-sand bg-white px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-plum hover:text-plum">
              {c}
            </a>
          ))}
        </div>
      </PageHero>

      {treatmentCategories.map((cat, ci) => {
        const items = treatmentsByCategory(cat);
        return (
          <section key={cat} id={cat.toLowerCase().replace(/[^a-z]+/g, "-")} className={ci % 2 === 0 ? "bg-cream py-16 lg:py-20" : "bg-ivory py-16 lg:py-20"}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[4/5]">
                      <Image src={categoryImage[cat]} alt={cat} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/70 to-transparent" />
                      <h2 className="font-display absolute bottom-6 left-6 text-4xl text-ivory">{cat}</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map((t) => (
                      <Link key={t.slug} href={`/${t.slug}`} className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-plum/40 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-[22px] leading-tight text-ink">{t.name}</h3>
                          <ArrowRight className="mt-1 size-4 shrink-0 text-plum opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </div>
                        <p className="mt-2 line-clamp-2 text-[13.5px] text-muted-ink">{t.heroIntro}</p>
                        <p className="mt-4 text-[13px] font-semibold text-plum">{t.fromPrice === "consultation" ? "Quoted at consultation" : `From ${t.fromPrice}`}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
      <BookingCta />
    </Shell>
  );
}
