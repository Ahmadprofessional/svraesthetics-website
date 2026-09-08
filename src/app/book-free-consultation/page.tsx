import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reviews } from "@/components/redesign/Reviews";

export const metadata: Metadata = {
  title: "Book a Free Consultation | 25% Off First Treatment | SVR Aesthetics",
  description:
    "Book your free, no-obligation aesthetic consultation in Milton Keynes with Sonali, Registered Nurse Prescriber. Get 25% off your first treatment.",
  alternates: { canonical: "https://svraesthetics.co.uk/book-free-consultation" },
};

const steps = ["Tell us what's on your mind", "We call to book a convenient time", "Free consultation & clear quote", "25% off your first treatment"];

export default function BookPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Free consultation · 25% off first treatment"
        title="Book your free"
        highlight="consultation"
        intro="No pressure, no obligation. A full assessment with Sonali, honest advice on what will and won't help, and a clear quote before anything begins."
        crumbs={[{ label: "Book Free Consultation" }]}
      >
        <ol className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-3 rounded-2xl border border-sand bg-white px-4 py-3 text-[14px] font-medium text-ink">
              <span className="font-display text-2xl text-blush">0{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
        <p className="mt-6 flex items-center gap-2 text-[13px] text-muted-ink"><ShieldCheck className="size-4 text-plum" /> Treatments available to clients aged 18 and over.</p>
      </PageHero>
      <BookingCta />
      <Reviews />
    </Shell>
  );
}
