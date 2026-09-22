import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Sparkles, Clock, CheckCircle2, Phone, Calendar } from "lucide-react";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { BookingEmbed } from "@/components/BookingEmbed";
import { Reveal } from "@/components/Reveal";
import { BloodTestsClient } from "./BloodTestsClient";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Private Blood Tests & IV Vitamin Drips in Milton Keynes | SVR Aesthetics",
  description:
    "Comprehensive private blood testing and IV vitamin drips in Bletchley, Milton Keynes. Vitamin D, Thyroid, Full Blood Count, HbA1c Diabetes, Cholesterol, Well Man & Woman profiles. Nurse-led, CQC accredited lab results in 24–48 hours.",
  alternates: { canonical: "https://svraesthetics.co.uk/blood-tests" },
};

const generalFaqs = [
  {
    question: "Do I need a GP referral to get a blood test?",
    answer:
      "No. You do not need a GP referral or prior consultation. You can book directly with SVR Aesthetics for any blood test or IV drip. All blood draws are carried out in our calm clinic in Bletchley, Milton Keynes, by Sonali, Registered Nurse Prescriber.",
  },
  {
    question: "How and when do I receive my blood test results?",
    answer:
      "Your venous sample is analyzed by certified, CQC-registered UK medical laboratories. Most standard results (Vitamin D, Thyroid, Full Blood Count, HbA1c, Lipids) are returned securely to your email within 24 to 48 hours, complete with clear reference ranges.",
  },
  {
    question: "What happens if any of my results are abnormal?",
    answer:
      "Every report includes clear diagnostic reference ranges highlighting optimal, borderline, or out-of-range markers. Sonali can explain the findings, and you will have a certified clinical document ready to share with your NHS GP or specialist if further medical management is indicated.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "For cholesterol, lipid profiles, and the Well Man Profile, we recommend 10 to 12 hours of overnight fasting (water only). For cortisol and thyroid tests, a morning appointment is best. For IV vitamin drips, have a light meal and drink plenty of water prior to your session.",
  },
  {
    question: "Is having a blood draw or IV drip painful?",
    answer:
      "Sonali has over 15 years of NHS surgical theater and clinical nursing experience. Blood draws and IV cannulations are performed quickly, gently, and with minimal sensation using ultra-fine butterfly needles in a clean, clinical setting.",
  },
];

const clinicalStandards = [
  {
    title: "15+ Years NHS Experience",
    desc: "All samples collected by Sonali, Registered Nurse Prescriber & NHS Senior Operating Theatre Practitioner.",
    icon: ShieldCheck,
  },
  {
    title: "CQC Accredited UK Labs",
    desc: "Diagnostic blood samples are sent directly to certified UK laboratories for gold-standard clinical accuracy.",
    icon: HeartPulse,
  },
  {
    title: "24–48h Confidential Results",
    desc: "Fast turnaround with detailed digital reports sent straight to your inbox with reference ranges.",
    icon: Clock,
  },
  {
    title: "No GP Referral Required",
    desc: "Direct access to private diagnostic testing without waiting lists or gatekeeping.",
    icon: CheckCircle2,
  },
];

export default function BloodTestsHubPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Clinical Diagnostics & Wellness Infusions"
        title="Private blood tests &"
        highlight="IV vitamin therapy"
        intro="Nurse-led venous blood testing and clinical IV infusions in Bletchley, Milton Keynes. Accurate CQC-accredited laboratory diagnostics with confidential results within 24 to 48 hours."
        crumbs={[{ label: "Blood Tests & Wellness" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-ink/80 font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/10 px-3.5 py-1 text-plum font-semibold">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Appointments Available This Week
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 border border-sand text-muted-ink">
            <CheckCircle2 className="size-3.5 text-plum" />
            Results in 24–48 Hours
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 border border-sand text-muted-ink">
            <ShieldCheck className="size-3.5 text-plum" />
            Nurse Prescriber Led
          </span>
        </div>
      </PageHero>

      {/* Main Filterable Menu */}
      <section className="py-16 lg:py-20 bg-cream/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum">Treatment Menu</p>
              <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">
                Choose Your <span className="text-plum italic">Diagnostic Panel</span>
              </h2>
              <p className="mt-3 text-[15px] text-muted-ink">
                Filter our complete range of diagnostic tests, single-nutrient checks, IV wellness infusions, and full-body health profiles below.
              </p>
            </div>

            <BloodTestsClient />
          </Reveal>
        </div>
      </section>

      {/* Trust & Clinical Standards Banner */}
      <section className="py-16 bg-white border-y border-sand/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum">Clinical Standards</p>
              <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">
                Why Test at <span className="italic text-plum">SVR Aesthetics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalStandards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-sand bg-cream/20 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="size-11 rounded-xl bg-plum/10 text-plum flex items-center justify-center mb-4">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-display text-xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-[13.5px] text-muted-ink leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Booking Embed */}
      <BookingEmbed />

      {/* FAQs Section */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum">Got Questions?</p>
              <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">
                Frequently Asked <span className="text-plum italic">Questions</span>
              </h2>
              <p className="mt-3 text-[14.5px] text-muted-ink">
                Everything you need to know about our private blood draw and IV drip appointments in Milton Keynes.
              </p>
            </div>

            <Accordion items={generalFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Booking Form CTA */}
      <BookingCta source="blood-tests-hub" />
    </Shell>
  );
}
