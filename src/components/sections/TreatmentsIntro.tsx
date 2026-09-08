import Image from "next/image";
import { siteInfo } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function TreatmentsIntro() {
  return (
    <section className="bg-[#8e8e8e]/[0.07] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal delay={120} className="order-2 lg:order-1">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-purple">Treatments</p>
            <h2 className="mt-2 text-[26px] font-medium text-brand-heading">Find Your Desired Treatments</h2>
            <p className="mt-4 leading-relaxed text-brand-body">
              Everyday chaotic lives and busy schedules often take a toll on your skin. With time it is
              common to experience skin ageing, fine lines, dull skin, blemishes, pigmentation etc. At SVR
              aesthetics, we extend a range of promising solutions that treat your skin, health, and aging.
            </p>
            <p className="mt-4 leading-relaxed text-brand-body">
              We make use of professional techniques and clinically-safe formulas to beautify your skin
              naturally. Our primary concern is your safety and comfort.
            </p>
            <a
              href={siteInfo.bookingHref}
              className="mt-6 inline-block rounded-[10px] bg-brand-purple px-6 py-2.5 font-semibold text-white hover:opacity-90"
            >
              Schedule Now
            </a>
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <Image
            src="/images/treatments-intro.png"
            alt="SVR aesthetics, we extend a range of promising solutions that treat your skin, health, and aging."
            width={600}
            height={574}
            className="mx-auto h-auto w-full max-w-md"
          />
        </Reveal>
      </div>
    </section>
  );
}
