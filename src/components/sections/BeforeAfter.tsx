import Image from "next/image";
import { beforeAfterImages } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function BeforeAfter() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="text-center text-[28px] font-medium text-brand-heading">Before &amp; After Results</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {beforeAfterImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/customers-gallery"
            className="rounded-[10px] border-[2.4px] border-brand-navy px-6 py-2.5 font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            View More Results
          </a>
        </div>
      </div>
    </section>
  );
}
