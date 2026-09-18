"use client";

import type { LegalDoc } from "@/data/legal";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Shell>
      <PageHero eyebrow="Policies" title={doc.title} intro={doc.intro} crumbs={[{ label: doc.title }]} />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10 rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-sand/40">
            {doc.sections.map((s, i) => (
              <div key={i}>
                {s.heading && <h2 className="font-display text-2xl sm:text-3xl text-ink">{s.heading}</h2>}
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-relaxed text-muted-ink">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-ink marker:text-blush">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-sand/70">
                    <table className="min-w-full divide-y divide-sand/70 text-left text-[13px] sm:text-[14px]">
                      <thead className="bg-sand/30 font-semibold text-ink">
                        <tr>
                          {s.table.headers.map((h) => (
                            <th key={h} className="px-4 py-3 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sand/50 text-muted-ink">
                        {s.table.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-cream/40 transition-colors">
                            {row.map((cell, cidx) => (
                              <td key={cidx} className={`px-4 py-3 align-top ${cidx === 0 ? "font-mono font-medium text-ink" : ""}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.action && (
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent(s.action!.event));
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-plum-deep shadow-sm cursor-pointer"
                    >
                      {s.action.label}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
