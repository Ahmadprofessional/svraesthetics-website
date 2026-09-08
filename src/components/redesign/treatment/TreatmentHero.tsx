"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import type { TreatmentPageData } from "@/types/treatment-page";
import { siteInfo } from "@/data/site";

export function TreatmentHero({ page }: { page: TreatmentPageData }) {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -right-40 -top-20 size-[560px] rounded-full bg-plum-soft blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[420px] rounded-full bg-blush-soft blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:pb-20 lg:pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-muted-ink">
          <Link href="/" className="hover:text-plum">Home</Link>
          <ChevronRight className="size-3" />
          <Link href="/treatments" className="hover:text-plum">Treatments</Link>
          <ChevronRight className="size-3" />
          <span className="text-ink">{page.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="eyebrow">{page.category} · Milton Keynes</p>
            <h1 className="font-display mt-4 text-[42px] leading-[1.02] text-ink sm:text-6xl lg:text-[68px]">
              {page.heroHeading} <em className="italic text-plum">{page.heroHighlight}</em>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-ink">{page.heroIntro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#book" className="group inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(75,42,99,0.9)] transition-all hover:-translate-y-0.5 hover:bg-plum-deep">
                Book your free consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={siteInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-[15px] font-semibold text-ink backdrop-blur transition-colors hover:border-plum hover:text-plum">
                <Phone className="size-4" /> {siteInfo.phone}
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-5">
              {page.quickFacts.map((f) => (
                <div key={f.label} className="bg-white px-4 py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-ink">{f.label}</dt>
                  <dd className="font-display mt-1 text-[22px] leading-none text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(52,25,63,0.5)]">
              <Image src={page.heroImage} alt={page.heroImageAlt} fill priority sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/30 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold text-plum shadow backdrop-blur">
                First treatment 25% off
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative -mt-10 mx-4 rounded-2xl bg-white p-5 shadow-[0_30px_60px_-30px_rgba(43,37,48,0.45)] sm:mx-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl text-ink">Request a call back</p>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-plum"><ShieldCheck className="size-3.5" /> Free · No obligation</span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className="rounded-xl border border-sand px-4 py-3 text-[14px] outline-none focus:border-plum" />
                <input name="phone" type="tel" required placeholder="Phone number" className="rounded-xl border border-sand px-4 py-3 text-[14px] outline-none focus:border-plum" />
              </div>
              <button type="submit" className="mt-3 w-full rounded-full bg-plum py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-plum-deep">
                Book my free {page.name.toLowerCase()} consultation
              </button>
              {sent && <p className="mt-3 text-center text-[13px] font-medium text-plum">Thank you — we&apos;ll call you shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
