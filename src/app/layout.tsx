import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { ChatWidget } from "@/components/ChatWidget";

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
  title: "SVR Aesthetics | Aesthetic & Skin Clinic Milton Keynes",
  description:
    "Nurse-led aesthetic and skin clinic in Bletchley, Milton Keynes led by Sonali, Registered Nurse Prescriber. Natural-looking anti-wrinkle injections, dermal fillers, lip enhancement, HydraFacial, microneedling and chemical peels.",
  openGraph: {
    title: "SVR Aesthetics — Aesthetic & Skin Clinic Milton Keynes",
    description:
      "Nurse-led aesthetic and skin clinic in Milton Keynes by Sonali, Registered Nurse Prescriber. High quality skin care services with top priority on safety and satisfaction.",
    images: ["/images/redesign/hero.webp"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5ZRBGC7');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-body bg-ivory text-ink">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5ZRBGC7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
