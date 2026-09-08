"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { injectables, facials } from "@/data/redesign";

const tabs = [
  { key: "injectables", label: "Injectables", items: injectables, anchor: "injectables-menu" },
  { key: "facials", label: "Facials & Skin", items: facials, anchor: "facials-menu" },
] as const;

export function TreatmentMenu() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("injectables");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <span id="injectables-menu" className="absolute -top-24" />
      <span id="facials-menu" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Treatment menu</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Find your treatment
            </h2>
            <p className="mt-4 text-muted-ink">
              Every plan starts with a free consultation. Prices shown are starting prices — your exact quote is confirmed before anything begins.
            </p>
          </div>
          <div className="inline-flex rounded-full border border-sand bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all",
                  active === t.key ? "bg-plum text-white shadow" : "text-ink/70 hover:text-plum"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {current.items.map((t, i) => (
            <a
              key={t.name}
              href={t.href}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-6 transition-all hover:-translate-y-1 hover:border-plum/40 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight text-ink">{t.name}</h3>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-plum opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">{t.blurb}</p>
              </div>
              <p className="mt-5 text-[13px] font-semibold text-plum">{t.from ? `From ${t.from}` : "Quoted at consultation"}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
