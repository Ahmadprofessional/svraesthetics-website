import Image from "next/image";
import { beforeAfterImages } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Results() {
  return (
    <section id="results" className="bg-plum-deep py-20 text-ivory lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Real results</p>
              <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
                Before &amp; after, <span className="italic text-blush">untouched</span>
              </h2>
            </div>
            <a href="/customers-gallery" className="inline-flex items-center rounded-full border border-ivory/40 px-6 py-3 text-[14px] font-semibold transition-colors hover:bg-ivory hover:text-plum">
              View full gallery
            </a>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {beforeAfterImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
