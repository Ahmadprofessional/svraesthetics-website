import { siteInfo } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function PromoBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url(/images/promo-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="font-stencil text-3xl font-semibold text-white sm:text-5xl">
            25% off On First Treatment
          </h2>
          <a
            href={siteInfo.bookingHref}
            className="mt-6 inline-block rounded-[10px] border-[2.4px] border-white px-6 py-2.5 font-semibold text-white transition-colors hover:bg-white hover:text-brand-navy"
          >
            Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
