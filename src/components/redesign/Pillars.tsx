import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    id: "injectables",
    eyebrow: "Our signature",
    title: "Injectables",
    text: "Anti-wrinkle, dermal fillers, lips, nose, cheeks and jawline — prescribed and performed by a nurse who treats hundreds of faces a year and believes the best work is the work nobody can spot.",
    image: "/images/redesign/injectables.webp",
    alt: "Nurse prescriber performing a precise injectable treatment at SVR Aesthetics",
    from: "from £100",
    href: "#injectables-menu",
  },
  {
    id: "facials",
    eyebrow: "Skin health",
    title: "Facials",
    text: "HydraFacial, medical microneedling, chemical and carbon peels — advanced, results-driven facials that improve texture, tone and glow, with little to no downtime.",
    image: "/images/redesign/facials.webp",
    alt: "HydraFacial treatment being performed in a calm clinic room",
    from: "from £50",
    href: "#facials-menu",
  },
];

export function Pillars() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Two things we do exceptionally well</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Precision injectables. <span className="italic text-plum">Radiant</span> facials.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <a id={p.id} href={p.href} className="group relative block overflow-hidden rounded-[28px] bg-plum-deep text-ivory">
                <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">{p.eyebrow}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-display text-5xl leading-none sm:text-6xl">{p.title}</h3>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ivory/40 bg-ivory/10 backdrop-blur transition-all group-hover:bg-ivory group-hover:text-plum">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ivory/85">{p.text}</p>
                  <p className="mt-4 inline-block rounded-full bg-ivory/15 px-3 py-1 text-[12px] font-semibold tracking-wide backdrop-blur">{p.from}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
