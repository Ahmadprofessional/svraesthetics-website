import Image from "next/image";
import { serviceCards } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center text-[30px] font-medium text-brand-heading">
            Expert Aesthetics Treatments in Milton Keynes
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, i) => (
            <Reveal key={card.slug} delay={i * 80}>
              <article className="overflow-hidden rounded-[20px] border-[0.8px] border-brand-blue-link bg-white">
                <div className="relative h-[257px] w-full">
                  <Image src={card.icon} alt={card.heading} fill className="object-cover" />
                </div>
                <div className="relative -mt-11 bg-brand-navy px-6 py-3">
                  <h3 className="font-card-heading text-[23px] font-semibold text-white">{card.heading}</h3>
                </div>
                <div className="space-y-4 px-6 pb-8 pt-4">
                  <p className="text-sm leading-relaxed text-brand-body">{card.text}</p>
                  <a
                    href={card.href}
                    className="inline-block border-b-[0.8px] border-brand-blue-link text-lg font-bold text-brand-blue-link"
                  >
                    FIND OUT MORE
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/treatments"
            className="rounded-[10px] border-[2.4px] border-brand-purple bg-brand-purple px-6 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
