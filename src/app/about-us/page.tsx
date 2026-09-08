import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { Reviews } from "@/components/redesign/Reviews";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About SVR Aesthetics | Nurse-Led Aesthetic Clinic, Milton Keynes",
  description:
    "SVR Aesthetics is a nurse-led aesthetic clinic in Bletchley, Milton Keynes, founded by Sonali — a Registered Nurse Prescriber with over 15 years in the NHS. Safe, natural aesthetic treatments since 2010.",
  alternates: { canonical: "https://svraesthetics.co.uk/about-us" },
};

const values = [
  { title: "Safety first, always", text: "Medical training, prescription-only products and hyaluronidase on site. We say no when a treatment isn't right for you." },
  { title: "Natural over noticeable", text: "Our goal is to subtly enhance what's already there. If people can tell, we've overdone it." },
  { title: "Honest, evidence-based advice", text: "Free consultations, clear quotes and realistic expectations — never pressure." },
  { title: "Care that continues", text: "Aftercare guidance and follow-up support long after you leave the clinic." },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="About us"
        title="Skin and cosmetic care,"
        highlight="led by a nurse"
        intro="SVR Aesthetics, based in Milton Keynes, has delivered high-quality skin care services since 2010. We specialise in non-surgical and face-lift treatments, with safety and satisfaction as our top priority."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image src="/images/about-us.png" alt="SVR Aesthetics clinic in Bletchley, Milton Keynes" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Aesthetic nurse prescriber</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Meet <span className="italic text-plum">Sonali</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-ink">
              &ldquo;I am a qualified nurse, working for over 15 years for the NHS as a Senior Operating Theatre Practitioner at Milton Keynes Hospital. I have over 7 years of experience in the aesthetics business. With my training and experience, I am committed and very passionate about aesthetics.&rdquo;
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">
              Aesthetics is an established industry, but people are becoming more conscious of it. If you want amazing skin that boosts your confidence and enhances your appearance, call SVR Aesthetics.
            </p>
            <ul className="mt-8 space-y-3">
              {["Registered Nurse & Independent Prescriber", "15+ years NHS operating theatre experience", "7+ years in aesthetics, 100s of treatments a year", "Founder of SVR Aesthetics and the SVR Training Academy"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum"><Check className="size-3.5" /></span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-plum-deep py-16 text-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Our mission</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              To deliver the best aesthetic treatments in Milton Keynes — <span className="italic text-blush">safely, naturally, honestly</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ivory/80">
              We believe in creating your desired look with the safest practices and effective dermatological solutions. Our goal is to subtly enhance natural beauty and boost confidence in your own skin with the right medical, therapeutic and non-surgical treatments.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="bg-plum-deep p-8">
                <p className="font-display text-5xl text-blush/70">0{i + 1}</p>
                <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ivory/75">{v.text}</p>
              </Reveal>
            ))}
          </div>
          <Link href="/treatments" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[15px] font-semibold text-plum">
            Explore our treatments <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <Reviews />
      <BookingCta />
    </Shell>
  );
}
