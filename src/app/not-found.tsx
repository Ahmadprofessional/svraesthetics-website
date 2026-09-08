import Link from "next/link";
import { Shell } from "@/components/redesign/Shell";

export default function NotFound() {
  return (
    <Shell>
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display mt-4 text-5xl text-ink">We couldn&apos;t find that page</h1>
          <p className="mt-4 text-muted-ink">The page may have moved. Try the treatment menu, or get in touch and we&apos;ll point you the right way.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/treatments" className="rounded-full bg-plum px-6 py-3.5 font-semibold text-white">View treatments</Link>
            <Link href="/contact-us" className="rounded-full border border-plum px-6 py-3.5 font-semibold text-plum">Contact us</Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
