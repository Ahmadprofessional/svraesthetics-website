import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  FileText,
  Calendar,
  Phone,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Info,
  Check,
  AlertCircle
} from "lucide-react";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { BookingEmbed } from "@/components/BookingEmbed";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { bloodTestsData, BloodTestItem } from "@/data/blood-tests";
import { siteInfo } from "@/data/site";

type Params = { slug: string };
const BASE = "https://svraesthetics.co.uk";

export function generateStaticParams(): Params[] {
  return Object.keys(bloodTestsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const test = bloodTestsData[slug];
  if (!test) return {};

  const title = `${test.title} in Milton Keynes | SVR Aesthetics`;
  const description = `${test.heroDescription} Nurse-led blood draw in Bletchley, Milton Keynes. Results in 24–48 hours from CQC accredited labs.`;
  const canonical = `${BASE}/blood-tests/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [test.image],
    },
  };
}

export default async function BloodTestDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const test: BloodTestItem | undefined = bloodTestsData[slug];

  if (!test) {
    notFound();
  }

  const defaultFaqs = [
    {
      question: `How is the ${test.title} carried out?`,
      answer: `A quick, gentle venous blood sample is taken by Sonali, Registered Nurse Prescriber, in our clean, private clinic in Bletchley, Milton Keynes. The draw takes only a few minutes.`,
    },
    {
      question: "Do I need a doctor or GP referral?",
      answer:
        "No GP referral is required. You can book directly with SVR Aesthetics at a time that suits you without waiting lists.",
    },
    {
      question: "How and when will I receive my diagnostic report?",
      answer: `Your sample is analyzed by certified UK medical laboratories. Full diagnostic results with standard clinical reference ranges are delivered securely to your email within ${test.turnaround}.`,
    },
    {
      question: "What should I do if my results are out of range?",
      answer:
        "Your report clearly indicates which markers are optimal, borderline, or out of range. You can discuss the findings with Sonali or present the certified report to your NHS GP or medical specialist.",
    },
  ];

  const displayedFaqs = test.faqs && test.faqs.length > 0 ? test.faqs : defaultFaqs;

  return (
    <Shell>
      <PageHero
        eyebrow={`${test.category} · Milton Keynes`}
        title={test.heroHeadingLine1}
        highlight={test.heroHeadingHighlight}
        intro={test.heroDescription}
        crumbs={[
          { label: "Blood Tests & Wellness", href: "/blood-tests" },
          { label: test.title },
        ]}
      >
        {/* Key Quick Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-plum px-4 py-1.5 text-[14px] font-bold text-ivory shadow-sm">
            <span>{test.price}</span>
            <span className="text-ivory/60 font-normal">·</span>
            <span className="text-ivory/90 font-medium text-[12.5px]">All inclusive</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-1.5 text-[13px] font-medium text-ink">
            <Clock className="size-3.5 text-plum" />
            <span>Results in {test.turnaround}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-1.5 text-[13px] font-medium text-ink">
            <ShieldCheck className="size-3.5 text-plum" />
            <span>Nurse Prescriber Draw</span>
          </div>
        </div>
      </PageHero>

      {/* Main Clinical Details */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-12 lg:gap-16 items-start">
              {/* Left Column: About & Clinical Evidence */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum">
                  Clinical Overview
                </span>
                <h2 className="font-display mt-2 text-3xl sm:text-4xl text-ink">
                  {test.aboutHeading}
                </h2>

                <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-muted-ink">
                  {test.aboutTextParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* What This Test Measures */}
                <div className="mt-10 rounded-3xl border border-sand bg-cream/40 p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-ink flex items-center gap-2.5">
                    <FileText className="size-5 text-plum" />
                    What Is Evaluated In This Test
                  </h3>
                  <p className="mt-2 text-[14px] text-muted-ink">
                    This profile assesses the following key diagnostic markers and biological systems:
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {test.clinicalHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-sand/70 text-[13.5px] text-ink font-medium"
                      >
                        <Check className="size-4 text-plum shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation & Protocol */}
                <div className="mt-8 rounded-2xl border border-sand bg-white p-6 flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-plum/10 text-plum flex items-center justify-center shrink-0 mt-0.5">
                    <Info className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-ink font-semibold">Appointment Protocol</h4>
                    <p className="mt-1 text-[13.5px] text-muted-ink">
                      <strong>Fasting:</strong> {test.fasting}. <br />
                      <strong>Appointment Time:</strong> Approximately 10–15 minutes. <br />
                      <strong>Follow Up:</strong> Certified digital PDF report emailed within {test.turnaround}.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Fast Booking Card */}
              <div className="sticky top-28 space-y-6">
                <div className="overflow-hidden rounded-3xl border border-sand bg-white shadow-[0_20px_50px_-25px_rgba(75,42,99,0.15)]">
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] bg-cream">
                    <Image
                      src={test.image}
                      alt={test.title}
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-sand">Pricing</p>
                        <p className="font-display text-3xl font-semibold">{test.price}</p>
                      </div>
                      <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[12px] font-medium text-white border border-white/30">
                        {test.turnaround}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-display text-xl text-ink mb-1">{test.title}</h4>
                    <p className="text-[13px] text-muted-ink mb-6">
                      Venous sample taken in Milton Keynes by Nurse Prescriber Sonali. Sent to accredited UK laboratories.
                    </p>

                    <div className="space-y-3 mb-6 border-y border-sand/60 py-4 text-[13px] text-ink/80">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-ink">GP Referral:</span>
                        <span className="font-semibold text-ink">Not required</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-ink">Preparation:</span>
                        <span className="font-semibold text-ink">{test.fasting}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-ink">Clinic Location:</span>
                        <span className="font-semibold text-ink">Bletchley, Milton Keynes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-ink">Laboratory:</span>
                        <span className="font-semibold text-ink">CQC Registered UK Lab</span>
                      </div>
                    </div>

                    <a
                      href="#book-online"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-plum py-3.5 text-[14px] font-semibold text-ivory hover:bg-plum-deep transition-all shadow-md active:scale-98"
                    >
                      <Calendar className="size-4" />
                      Book This Test Live
                    </a>

                    <div className="mt-4 flex items-center justify-center gap-4 text-[12.5px] text-muted-ink">
                      <a
                        href={siteInfo.phoneHref}
                        className="inline-flex items-center gap-1 hover:text-plum"
                      >
                        <Phone className="size-3 text-plum" />
                        Call {siteInfo.phone}
                      </a>
                      <span>·</span>
                      <a
                        href="https://wa.me/447792284575"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#25D366] font-semibold hover:underline"
                      >
                        <MessageCircle className="size-3 fill-current" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Browse Other Tests Widget */}
                <div className="rounded-2xl border border-sand bg-cream/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-display text-base text-ink font-semibold">Other Blood Tests & IVs</h5>
                    <Link href="/blood-tests" className="text-[12px] font-semibold text-plum hover:underline">
                      View all 17 →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.values(bloodTestsData)
                      .filter((t) => t.id !== test.id)
                      .slice(0, 6)
                      .map((other) => (
                        <Link
                          key={other.id}
                          href={`/blood-tests/${other.id}`}
                          className="rounded-full border border-sand bg-white px-3 py-1 text-[11.5px] font-medium text-ink hover:border-plum hover:text-plum transition-colors"
                        >
                          {other.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Booking Embed */}
      <BookingEmbed />

      {/* Specific FAQs */}
      <section className="py-16 bg-cream/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum">Questions</p>
              <h3 className="font-display mt-2 text-3xl text-ink">
                About the <span className="text-plum italic">{test.title}</span>
              </h3>
            </div>

            <Accordion items={displayedFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Callback Form */}
      <BookingCta source={`blood-test-${test.id}`} />
    </Shell>
  );
}
