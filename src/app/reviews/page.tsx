import type { Metadata } from "next";
import { Star } from "lucide-react";
import { googleReviews } from "@/data/reviews";
import { siteInfo } from "@/data/site";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews | SVR Aesthetics Milton Keynes",
  description: "Genuine Google reviews from SVR Aesthetics clients in Milton Keynes. Trusted, nurse-led aesthetic treatments with natural results.",
  alternates: { canonical: "https://svraesthetics.co.uk/reviews" },
};

export default function ReviewsPage() {
  return (
    <Shell>
      <PageHero eyebrow="Testimonials" title="What our clients" highlight="say" intro="Every review below was posted on Google by a real SVR Aesthetics client." crumbs={[{ label: "Reviews" }]}>
        <a href={siteInfo.googleReviews} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center rounded-full bg-plum px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-plum-deep">
          Read all reviews on Google
        </a>
      </PageHero>
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
                </div>
                <blockquote className="font-display mt-5 flex-1 text-[20px] leading-snug text-ink/90">“{r.text}”</blockquote>
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
      </section>
      <BookingCta />
    </Shell>
  );
}
