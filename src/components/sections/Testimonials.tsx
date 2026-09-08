import { siteInfo } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url(/images/testimonials-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-[#262626]/80" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-purple">Testimonials</p>
          <h2 className="mt-2 text-2xl font-medium text-white sm:text-3xl">View Our Google Reviews</h2>
          <a
            href={siteInfo.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-[10px] bg-brand-purple px-6 py-2.5 font-semibold text-white hover:opacity-90"
          >
            Check Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
