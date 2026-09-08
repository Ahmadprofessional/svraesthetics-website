import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svraesthetics.co.uk"),
  title: "Injectables & Facials in Milton Keynes | SVR Aesthetics",
  description:
    "Nurse-led aesthetic clinic in Bletchley, Milton Keynes. Natural-looking anti-wrinkle injections, dermal fillers, lip enhancement, HydraFacial, microneedling and chemical peels. Free consultation, 25% off your first treatment.",
  openGraph: {
    title: "SVR Aesthetics — Injectables & Facials, Milton Keynes",
    description:
      "Natural-looking injectables and advanced facials by a Registered Nurse Prescriber. Free consultation in Bletchley, Milton Keynes.",
    images: ["/images/redesign/hero.webp"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-body bg-ivory text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
