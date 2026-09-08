import type { LegalDoc } from "@/data/legal";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Shell>
      <PageHero eyebrow="Policies" title={doc.title} intro={doc.intro} crumbs={[{ label: doc.title }]} />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-10 rounded-3xl bg-white p-8 sm:p-12">
            {doc.sections.map((s, i) => (
              <div key={i}>
                {s.heading && <h2 className="font-display text-3xl text-ink">{s.heading}</h2>}
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-relaxed text-muted-ink">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-ink marker:text-blush">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
