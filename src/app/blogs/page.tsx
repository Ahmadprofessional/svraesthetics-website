import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Aesthetic Blogs | SVR Aesthetics Milton Keynes",
  description: "Guides and advice on anti-wrinkle injections, dermal fillers, lip enhancement, tattoo removal and advanced skin treatments from SVR Aesthetics, Milton Keynes.",
  alternates: { canonical: "https://svraesthetics.co.uk/blogs" },
};

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <Shell>
      <PageHero eyebrow="Aesthetic blogs" title="Advice from" highlight="the clinic" intro="Straight-talking guides on treatments, results and what to expect — written to help you decide, not to sell." crumbs={[{ label: "Blogs" }]} />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Link href={`/${featured.slug}`} className="group grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image src={featured.image} alt={featured.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="eyebrow">Featured · {featured.publishDate}</p>
                <h2 className="font-display mt-4 text-4xl leading-tight text-ink">{featured.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">{featured.excerpt}</p>
                <span className="mt-6 font-semibold text-plum">Read article →</span>
              </div>
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <Link href={`/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]">
                  <div className="relative aspect-[16/10]">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12px] text-muted-ink">{p.publishDate}</p>
                    <h3 className="font-display mt-2 text-2xl leading-tight text-ink">{p.title}</h3>
                    <p className="mt-3 line-clamp-3 text-[14px] text-muted-ink">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookingCta />
    </Shell>
  );
}
