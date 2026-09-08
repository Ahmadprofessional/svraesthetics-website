import { Star } from "lucide-react";
import { googleReviews } from "@/data/reviews";
import { siteInfo } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Reviews() {
  const featured = googleReviews.filter((r) => r.text.length > 60).slice(0, 3);
  return (
    <section id="reviews" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Google reviews</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
                What patients say <span className="italic text-plum">afterwards</span>
              </h2>
            </div>
            <a href={siteInfo.googleReviews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-plum px-6 py-3 text-[14px] font-semibold text-plum transition-colors hover:bg-plum hover:text-white">
              Read all reviews on Google
            </a>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_20px_50px_-35px_rgba(43,37,48,0.4)]">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display mt-5 flex-1 text-[21px] leading-snug text-ink/90">“{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-plum-soft font-semibold text-plum">{r.name[0]}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{r.name}</p>
                    <p className="text-[12px] text-muted-ink">Posted on Google</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
