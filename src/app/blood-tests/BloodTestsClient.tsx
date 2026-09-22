"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, Sparkles, CheckCircle, ChevronRight } from "lucide-react";
import { bloodTestsData, bloodTestCategories, BloodTestCategory } from "@/data/blood-tests";
import { trackContactClick } from "@/lib/leads";

export function BloodTestsClient() {
  const [selectedCategory, setSelectedCategory] = useState<BloodTestCategory>("All Tests");

  const tests = Object.values(bloodTestsData);
  const filteredTests =
    selectedCategory === "All Tests"
      ? tests
      : tests.filter((t) => t.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
        {bloodTestCategories.map((cat) => {
          const count =
            cat === "All Tests"
              ? tests.length
              : tests.filter((t) => t.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all ${
                isActive
                  ? "bg-plum text-ivory shadow-[0_10px_25px_-10px_rgba(75,42,99,0.5)]"
                  : "bg-white text-ink border border-sand hover:border-plum/40 hover:text-plum"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                  isActive ? "bg-white/20 text-ivory" : "bg-sand/60 text-muted-ink"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="group flex flex-col justify-between rounded-3xl border border-sand bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-plum/40 hover:shadow-[0_24px_50px_-25px_rgba(75,42,99,0.25)]"
          >
            <div>
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream/50 mb-5">
                <Image
                  src={test.image}
                  alt={test.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-plum backdrop-blur-sm shadow-sm">
                    {test.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-plum/90 px-3 py-1 text-[13px] font-bold text-ivory backdrop-blur-sm">
                    {test.price}
                  </span>
                </div>
              </div>

              {/* Title & Timing */}
              <div className="flex items-center gap-2 text-[12px] text-muted-ink mb-2">
                <Clock className="size-3.5 text-plum" />
                <span>{test.turnaround}</span>
                <span>·</span>
                <span>{test.fasting}</span>
              </div>

              <h3 className="font-display text-2xl text-ink leading-snug group-hover:text-plum transition-colors">
                <Link href={`/blood-tests/${test.id}`}>{test.title}</Link>
              </h3>

              <p className="mt-2 text-[14px] text-muted-ink leading-relaxed line-clamp-3">
                {test.heroDescription}
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 border-t border-sand/60 pt-4">
                {test.clinicalHighlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[12.5px] text-ink/80">
                    <CheckCircle className="size-3.5 text-plum shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between gap-3">
              <Link
                href={`/blood-tests/${test.id}`}
                className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-plum hover:underline"
              >
                View full details
                <ChevronRight className="size-3.5" />
              </Link>

              <Link
                href="/book-free-consultation"
                onClick={() => trackContactClick("call")}
                className="inline-flex items-center gap-1.5 rounded-full bg-plum px-4 py-2 text-[13px] font-semibold text-ivory transition-transform active:scale-95 hover:bg-plum-deep shadow-sm"
              >
                Book Test
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
