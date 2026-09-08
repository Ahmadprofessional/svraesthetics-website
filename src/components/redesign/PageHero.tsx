import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -right-40 -top-20 size-[520px] rounded-full bg-plum-soft blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[380px] rounded-full bg-blush-soft blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:pb-16 lg:pt-10">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted-ink">
            <Link href="/" className="hover:text-plum">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3" />
                {c.href ? <Link href={c.href} className="hover:text-plum">{c.label}</Link> : <span className="text-ink">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-4xl text-[42px] leading-[1.04] text-ink sm:text-6xl lg:text-[64px]">
          {title} {highlight && <em className="italic text-plum">{highlight}</em>}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-ink">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
