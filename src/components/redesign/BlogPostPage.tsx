import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { blogPosts } from "@/data/blog";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <Shell>
      <PageHero eyebrow={`${post.category} · ${post.publishDate}`} title={post.title} intro={post.excerpt} crumbs={[{ label: "Blogs", href: "/blogs" }, { label: post.title }]} />
      <article className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={post.image} alt={post.title} fill sizes="(min-width:768px) 768px, 100vw" className="object-cover" />
          </div>
          <div className="mt-10 space-y-10">
            {post.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-3xl leading-tight text-ink">{s.heading}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">{s.body}</p>
              </section>
            ))}
            <section className="rounded-3xl bg-plum p-8 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">In summary</p>
              <p className="font-display mt-3 text-2xl leading-snug">{post.conclusion}</p>
              <a href="#book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-[14px] font-semibold text-plum">
                Book a free consultation <ArrowRight className="size-4" />
              </a>
            </section>
          </div>
        </div>
      </article>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group overflow-hidden rounded-3xl border border-sand bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[12px] text-muted-ink">{p.publishDate}</p>
                  <h3 className="font-display mt-2 text-2xl leading-tight text-ink">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BookingCta />
    </Shell>
  );
}
