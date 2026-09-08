import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { trainingCourses } from "@/data/training";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Aesthetics Training Courses Milton Keynes | SVR Training Academy",
  description:
    "CPD-accredited aesthetics training in Milton Keynes: foundation and advanced anti-wrinkle, dermal fillers, lip masterclass, anatomy & physiology, first aid & anaphylaxis. Online theory plus practical days with live models.",
  alternates: { canonical: "https://svraesthetics.co.uk/training" },
};

export default function TrainingPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="SVR Training Academy"
        title="Aesthetics training,"
        highlight="taught by a practitioner"
        intro="CPD-accredited courses for medics and qualified practitioners — online theory you complete at your own pace, followed by hands-on practical days with live models."
        crumbs={[{ label: "Training" }]}
      />
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingCourses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <Link href={`/${c.slug}`} className="group flex h-full flex-col justify-between rounded-3xl border border-sand bg-white p-7 transition-all hover:-translate-y-1 hover:border-plum/40 hover:shadow-[0_24px_50px_-30px_rgba(75,42,99,0.5)]">
                <div>
                  <h2 className="font-display text-3xl leading-tight text-ink">{c.title}</h2>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-muted-ink">{c.whoFor}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-[13px]">
                  <span className="flex items-center gap-1.5 text-muted-ink"><Clock className="size-3.5" /> {c.duration.split(",")[0]}</span>
                  <span className="flex items-center gap-1 font-semibold text-plum">Course details <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <BookingCta />
    </Shell>
  );
}
