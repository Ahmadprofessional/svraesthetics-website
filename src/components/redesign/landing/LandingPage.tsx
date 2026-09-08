import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ShieldCheck } from "lucide-react";
import type { LandingPageData } from "@/data/landing-pages";
import { siteInfo } from "@/data/site";
import { googleReviews } from "@/data/reviews";
import { beforeAfterImages } from "@/data/site";
import { CallbackForm, RatingBadge } from "@/components/redesign/treatment/TreatmentHero";
import { StickyBar } from "@/components/redesign/treatment/StickyBar";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Accordion } from "@/components/Accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Star } from "lucide-react";

const trust = ["Registered Nurse Prescriber", "15+ years NHS experience", "100s of treatments every year", "Free consultation · Up to 25% off first treatment"];

export function LandingPage({ page }: { page: LandingPageData }) {
  const source = `lp:${page.slug}`;
  const reviews = googleReviews.filter((r) => r.text.length > 60).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
      <header className="sticky top-0 z-40 border-b border-sand bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Image src="/images/logo.png" alt="SVR Aesthetics" width={110} height={58} priority className="h-12 w-auto" />
          <div className="flex items-center gap-2">
            <a href={siteInfo.phoneHref} className="hidden items-center gap-2 rounded-full border border-sand px-4 py-2.5 text-[14px] font-semibold text-ink sm:flex">
              <Phone className="size-4 text-plum" /> {siteInfo.phone}
            </a>
            <a href={siteInfo.phoneHref} className="flex size-11 items-center justify-center rounded-full border border-sand text-plum sm:hidden" aria-label="Call us"><Phone className="size-4" /></a>
            <a href="#book" className="rounded-full bg-plum px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-plum-deep">Book free consultation</a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-ivory">
          <div className="pointer-events-none absolute -right-40 -top-20 size-[560px] rounded-full bg-plum-soft blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{page.eyebrow}</p>
                <RatingBadge />
              </div>
              <h1 className="font-display mt-4 text-[42px] leading-[1.02] text-ink sm:text-6xl lg:text-[68px]">
                {page.headline} <em className="italic text-plum">{page.highlight}</em>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-ink">{page.sub}</p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush-soft px-4 py-2 text-[13px] font-semibold text-ink">
                <ShieldCheck className="size-4 text-plum" /> {page.offer} — free consultation
              </p>
              <ul className="mt-6 space-y-2.5">
                {page.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum"><Check className="size-3.5" /></span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#book" className="inline-flex items-center justify-center rounded-full bg-plum px-7 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(75,42,99,0.9)] hover:bg-plum-deep">Book your free consultation</a>
                <a href={siteInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-[15px] font-semibold text-ink hover:border-plum hover:text-plum"><Phone className="size-4" /> Call {siteInfo.phone}</a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(52,25,63,0.5)]">
                <Image src={page.heroImage} alt={page.heroImageAlt} fill priority sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold text-plum shadow">{page.offer}</div>
              </div>
              <CallbackForm treatmentName={page.treatmentName} source={source} />
            </div>
          </div>
        </section>

        <div className="border-y border-sand bg-cream">
          <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-4 py-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-plum/80">
            {trust.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        <section className="bg-ivory py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-4xl text-ink sm:text-5xl">{page.areasHeading}</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.areas.map((a) => (
                <div key={a.name} className="rounded-2xl border border-sand bg-white p-6">
                  <h3 className="font-display text-2xl text-ink">{a.name}</h3>
                  <p className="mt-2 text-[14px] text-muted-ink">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-plum-deep py-16 text-ivory lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-4xl sm:text-5xl">Real results, <span className="italic text-blush">untouched</span></h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {beforeAfterImages.map((img) => (
                <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-4xl text-ink sm:text-5xl">{page.treatmentName} <span className="italic text-plum">prices</span></h2>
              <div className="mt-6 overflow-hidden rounded-3xl border border-sand bg-white">
                {page.pricing.map((row, i) => (
                  <div key={row.name} className={`flex items-center justify-between gap-4 px-6 py-4 ${i > 0 ? "border-t border-sand" : ""}`}>
                    <div><p className="font-medium text-ink">{row.name}</p>{row.note && <p className="text-[12.5px] text-muted-ink">{row.note}</p>}</div>
                    <p className="font-display shrink-0 text-2xl text-plum">{row.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-ink sm:text-5xl">Questions, <span className="italic text-plum">answered</span></h2>
              <div className="mt-6 rounded-3xl border border-sand bg-white px-6 py-2">
                <Accordion items={page.faq} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="flex items-center gap-2 text-[14px] font-semibold text-ink">
              <span className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</span> 5.0 rating on Google
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-3xl bg-white p-7">
                  <blockquote className="font-display text-[20px] leading-snug text-ink/90">“{r.text}”</blockquote>
                  <figcaption className="mt-4 text-[13px] font-semibold text-muted-ink">— {r.name}, Google review</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <BookingCta source={source} />
      </main>

      <footer className="bg-ivory py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center text-[12px] text-muted-ink sm:flex-row sm:justify-between sm:text-left">
          <p>SVR Aesthetics · {siteInfo.address} · 18+ only</p>
          <p className="flex gap-4"><Link href="/privacy-policy" className="hover:text-plum">Privacy</Link><Link href="/terms-conditions" className="hover:text-plum">Terms</Link><Link href="/" className="hover:text-plum">Main website</Link></p>
        </div>
      </footer>
      <WhatsAppButton />
      <StickyBar name={page.treatmentName} fromPrice={page.fromPrice} />
    </div>
  );
}
