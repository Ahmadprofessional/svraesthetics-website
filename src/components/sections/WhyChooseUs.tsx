import Image from "next/image";
import { siteInfo, whyChooseUs } from "@/data/site";
import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/about-us.png"
              alt="SVR Aesthetics registered nurse prescriber"
              width={700}
              height={670}
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-purple">About Us</p>
            <h2 className="mt-2 text-[26px] font-medium text-brand-heading">why choose us ?</h2>
            <ul className="mt-6 space-y-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-body">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-brand-navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={siteInfo.bookingHref}
              className="mt-8 inline-block rounded-md bg-brand-navy px-6 py-3 font-bold text-white hover:bg-brand-navy-dark"
            >
              Book Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
