import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { TrainingCourse } from "@/types/training";
import { trainingGroup } from "@/data/nav";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-sand bg-white p-6">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-[14.5px] text-ink/85">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum"><Check className="size-3" /></span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrainingCoursePage({ course }: { course: TrainingCourse }) {
  const others = trainingGroup.items.filter((i) => i.href !== `/${course.slug}`);
  return (
    <Shell>
      <PageHero eyebrow="SVR Training Academy · Milton Keynes" title={course.title} intro={course.whoFor} crumbs={[{ label: "Training", href: "/training" }, { label: course.title }]}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#book" className="group inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-plum-deep">
            Enquire about this course <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link href="/training" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-4 text-[15px] font-semibold text-ink hover:border-plum hover:text-plum">
            All courses
          </Link>
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-2">
          <div className="bg-white px-5 py-4"><dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Duration</dt><dd className="mt-1 text-[15px] font-medium text-ink">{course.duration}</dd></div>
          <div className="bg-white px-5 py-4"><dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Course cost</dt><dd className="mt-1 text-[15px] font-medium text-ink">Contact us for current pricing</dd></div>
        </dl>
      </PageHero>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            {course.entryRequirements && (
              <>
                <p className="eyebrow">Entry requirements</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">{course.entryRequirements}</p>
              </>
            )}
            <p className="eyebrow mt-10">Course overview</p>
            {course.overview.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 text-[15.5px] leading-relaxed text-ink/85">{p}</p>
            ))}
            <p className="mt-6 text-[13px] text-muted-ink">All aspects of the course are mandatory.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-4">
              <List title="Theory" items={course.theory} />
              <List title="Practical" items={course.practical} />
              {course.treatmentAreas && <List title="Treatment areas" items={course.treatmentAreas} />}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Other courses</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.href} href={o.href} className="group flex items-center justify-between rounded-2xl border border-sand bg-white px-5 py-4 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-plum/40">
                {o.label}
                <ArrowRight className="size-4 text-plum opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCta />
    </Shell>
  );
}
