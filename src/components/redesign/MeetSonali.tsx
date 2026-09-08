import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  "Registered Nurse & Independent Prescriber",
  "15+ years as a Senior Operating Theatre Practitioner, Milton Keynes Hospital",
  "Performs 100s of aesthetic treatments every year",
  "Free consultation shaped around your expectations and budget",
];

export function MeetSonali() {
  return (
    <section id="about" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blush-soft" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image src="/images/about-us.png" alt="Sonali, Registered Nurse Prescriber and founder of SVR Aesthetics" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-plum p-5 text-ivory shadow-xl sm:right-[-24px]">
              <p className="font-display text-4xl leading-none">15+</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.16em] text-blush">Years in the NHS</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Meet your practitioner</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            Medical expertise, an <span className="italic text-plum">artist&apos;s</span> eye
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-ink">
            SVR Aesthetics is led by Sonali, a qualified nurse who spent over 15 years in NHS operating theatres before dedicating herself to aesthetics. Her approach is simple: understand your face, enhance what&apos;s already there, and never let a treatment look like a treatment.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-ink/85">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <blockquote className="font-display mt-8 border-l-2 border-gold pl-5 text-2xl italic leading-snug text-ink/80">
            “If you want amazing skin that boosts your confidence and enhances your appearance, call SVR Aesthetics.”
          </blockquote>
          <a href="#book" className="mt-8 inline-flex items-center rounded-full border border-plum px-6 py-3.5 text-[15px] font-semibold text-plum transition-colors hover:bg-plum hover:text-white">
            Book a consultation with Sonali
          </a>
        </Reveal>
      </div>
    </section>
  );
}
