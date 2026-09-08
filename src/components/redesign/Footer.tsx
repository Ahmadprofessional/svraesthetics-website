import Image from "next/image";
import { siteInfo, footerQuickLinks, footerPolicyLinks } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-ivory pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image src="/images/logo.png" alt="SVR Aesthetics" width={130} height={70} className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-ink">
            Nurse-led aesthetic clinic in Bletchley, Milton Keynes. Professional cosmetic care to help you look and feel as good as you can.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={siteInfo.facebook} aria-label="Facebook" className="flex size-10 items-center justify-center rounded-full border border-sand text-plum transition-colors hover:bg-plum hover:text-white"><FacebookIcon className="size-4" /></a>
            <a href={siteInfo.instagram} aria-label="Instagram" className="flex size-10 items-center justify-center rounded-full border border-sand text-plum transition-colors hover:bg-plum hover:text-white"><InstagramIcon className="size-4" /></a>
          </div>
        </div>
        <FooterCol title="Clinic" links={footerQuickLinks} />
        <FooterCol title="Policies" links={footerPolicyLinks} />
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-plum">Find us</h4>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-ink">{siteInfo.address}</p>
          <a href={siteInfo.phoneHref} className="mt-3 block text-[14px] font-semibold text-ink">{siteInfo.phone}</a>
          <a href={`mailto:${siteInfo.email}`} className="block text-[14px] text-muted-ink">{siteInfo.email}</a>
        </div>
      </div>
      <div className="mt-12 border-t border-sand py-6">
        <p className="mx-auto max-w-7xl px-4 text-[12px] text-muted-ink sm:px-6">© {new Date().getFullYear()} SVR Aesthetics · All rights reserved · Treatments available to clients aged 18+</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { text: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-plum">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-[14px] text-muted-ink">
        {links.map((l) => (
          <li key={l.text}><a href={l.href} className="transition-colors hover:text-plum">{l.text}</a></li>
        ))}
      </ul>
    </div>
  );
}
