import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { TreatmentPageData } from "@/types/treatment-page";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";

export function TreatmentAreas({ page }: { page: TreatmentPageData }) {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Treatment areas</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">{page.areasHeading}</h2>
            <p className="mt-4 text-muted-ink">{page.areasIntro}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.areas.map((a, i) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink">{a.name}</h3>
                  {a.href && <ArrowUpRight className="size-4 shrink-0 text-plum opacity-0 transition-opacity group-hover:opacity-100" />}
                </div>
                {a.text && <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">{a.text}</p>}
              </>
            );
            return (
              <Reveal key={a.name} delay={i * 50}>
                {a.href ? (
                  <Link href={a.href} className="group block h-full rounded-2xl border border-sand bg-white p-6 transition-all hover:-translate-y-1 hover:border-plum/40 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]">
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full rounded-2xl border border-sand bg-white p-6">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TreatmentAbout({ page }: { page: TreatmentPageData }) {
  return (
    <section className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image src={page.aboutImage} alt={`${page.name} treatment at SVR Aesthetics`} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">The treatment</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            {page.aboutHeading} <span className="italic text-plum">{page.aboutHighlight}</span>
          </h2>
          {page.aboutParagraphs.map((p) => (
            <p key={p.slice(0, 30)} className="mt-5 text-[16px] leading-relaxed text-muted-ink">{p}</p>
          ))}
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {page.aboutBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink/85">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum"><Check className="size-3.5" /></span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function TreatmentResults({ page }: { page: TreatmentPageData }) {
  if (!page.results) return null;
  const { heading, intro, bullets } = page.results;
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Results</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">{heading}</h2>
          {intro && <p className="mt-5 text-[16px] leading-relaxed text-muted-ink">{intro}</p>}
        </Reveal>
        {bullets.length > 0 && (
          <Reveal delay={120}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {bullets.map((b, i) => (
                <li key={b} className="flex items-start gap-4 rounded-2xl border border-sand bg-white p-5">
                  <span className="font-display text-2xl leading-none text-blush">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14.5px] leading-relaxed text-ink/85">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function TreatmentWhy({ page }: { page: TreatmentPageData }) {
  return (
    <section className="bg-plum-deep py-20 text-ivory lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Why SVR</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">{page.whyHeading}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {page.whyPoints.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="bg-plum-deep p-8">
              <p className="font-display text-5xl text-blush/70">0{i + 1}</p>
              <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ivory/75">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentPricing({ page }: { page: TreatmentPageData }) {
  return (
    <section id="pricing" className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Pricing</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            {page.name} <span className="italic text-plum">prices</span>
          </h2>
          <p className="mt-5 text-muted-ink">{page.pricingNote}</p>
          <a href="#book" className="group mt-7 inline-flex items-center gap-2 font-semibold text-plum">
            Get your exact quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-sand bg-white">
            {page.pricing.map((row, i) => (
              <div key={row.name} className={`flex items-center justify-between gap-4 px-6 py-5 ${i > 0 ? "border-t border-sand" : ""}`}>
                <div>
                  <p className="font-medium text-ink">{row.name}</p>
                  {row.note && <p className="mt-0.5 text-[12.5px] text-muted-ink">{row.note}</p>}
                </div>
                <p className="font-display shrink-0 text-2xl text-plum">{row.price}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TreatmentFaq({ page }: { page: TreatmentPageData }) {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            {page.name}, <span className="italic text-plum">explained</span>
          </h2>
          <p className="mt-5 text-muted-ink">Anything else on your mind? Ask in your free consultation — or message us on WhatsApp.</p>
          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-ink">Related treatments</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {page.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-block rounded-full border border-sand bg-white px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-plum hover:text-plum">{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl bg-white px-6 py-2 sm:px-8">
            <Accordion items={page.faq} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
