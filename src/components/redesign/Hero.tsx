import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

const trust = ["Registered Nurse Prescriber", "15+ years NHS experience", "Free, no-obligation consultation"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -left-32 top-24 size-[520px] rounded-full bg-blush-soft blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -top-10 size-[560px] rounded-full bg-plum-soft blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="max-w-xl">
          <p className="eyebrow">Aesthetic Clinic · Bletchley, Milton Keynes</p>
          <h1 className="font-display mt-5 text-[44px] leading-[1.02] text-ink sm:text-6xl lg:text-[72px]">
            Natural-looking <em className="italic text-plum">injectables</em> &amp; advanced facials
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-ink">
            Subtle, balanced results by Sonali — a Registered Nurse Prescriber with over 15 years in the NHS. Anti-wrinkle, dermal fillers, lips, HydraFacial and skin treatments, all in one calm clinic in Milton Keynes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#book" className="group inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(75,42,99,0.9)] transition-all hover:-translate-y-0.5 hover:bg-plum-deep">
              Book your free consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-[15px] font-semibold text-ink backdrop-blur transition-colors hover:border-plum hover:text-plum">
              View treatment prices
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-ink/80">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-plum" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(52,25,63,0.5)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="/images/redesign/hero.webp"
              alt="Woman with luminous, healthy skin after treatment at SVR Aesthetics, Milton Keynes"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/25 via-transparent to-transparent" />
          </div>

          <div className="animate-float-slow absolute -left-3 top-6 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(43,37,48,0.4)] backdrop-blur sm:left-[-28px] sm:top-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-plum">First treatment</p>
            <p className="font-display mt-0.5 text-3xl leading-none text-ink">25% off</p>
          </div>

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-[0_24px_50px_-22px_rgba(43,37,48,0.45)] backdrop-blur sm:left-auto sm:right-[-20px] sm:w-[300px]">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
              <span className="ml-2 text-[12px] font-semibold text-ink/70">Google review</span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/85">
              “Listened to, given good advice and the result was even better than I could have hoped for.”
            </p>
            <p className="mt-2 text-[12px] font-semibold text-muted-ink">— Rachel R.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
