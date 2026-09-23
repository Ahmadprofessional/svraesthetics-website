import type { NextConfig } from "next";

// Legacy URLs seen in Search Console for the old WordPress site, mapped to
// their new equivalents so historical links and rankings carry over.
const legacyRedirects: Record<string, string> = {
  "/non-surgical-rhinoplasty": "/non-surgical-rhinoplasty-milton-keynes",
  "/vitamin-therapy": "/vitamin-therapy-milton-keynes",
  "/iv-vitamin-therapy-in-milton-keynes": "/vitamin-therapy-milton-keynes",
  "/facials": "/facials-milton-keynes",
  "/cryopen": "/cryopen-milton-keynes",
  "/hydrofacial": "/hydrafacial-milton-keynes",
  "/hydrofacial-milton-keynes": "/hydrafacial-milton-keynes",
  "/hydrafacial": "/hydrafacial-milton-keynes",
  "/jawline-filler": "/jawline-filler-milton-keynes",
  "/chin-filler": "/chin-filler-milton-keynes",
  "/cheek-augmentation": "/cheek-augmentation-milton-keynes",
  "/tear-trough-filler": "/tear-trough-filler-milton-keynes",
  "/anti-wrinkle": "/anti-wrinkle-milton-keynes",
  "/anti-wrinkle-injections": "/anti-wrinkle-injections-milton-keynes",
  "/botox-milton-eynes": "/facial-smoothing-milton-keynes",
  "/botox-milton-keynes": "/facial-smoothing-milton-keynes",
  "/lines-and-wrinkles-consultation": "/facial-smoothing-milton-keynes",
  "/laser-hair-removal": "/laser-hair-removal-milton-keynes",
  "/tattoo-removal": "/tattoo-removal-milton-keynes",
  "/skin-tag-removal": "/skin-tag-removal-milton-keynes",
  "/lips-enhancement": "/lip-enhancement-milton-keynes",
  "/nose-to-mouth-lines": "/nose-to-mouth-lines-milton-keynes",
  "/marionette-lines": "/nose-to-mouth-lines-milton-keynes",
  "/marionette-lines-milton-keynes": "/nose-to-mouth-lines-milton-keynes",
  "/hand-filler": "/hand-filler-milton-keynes",
  "/hyaluronidase-injectables": "/dermal-fillers-in-milton-keynes",
  "/hyaluronidase-injectables-milton-keynes": "/dermal-fillers-in-milton-keynes",
  "/neck-lift": "/non-surgical-facelift-milton-keynes",
  "/non-surgical-neck-lift-milton-keynes": "/non-surgical-facelift-milton-keynes",
  "/non-surgical-facelift": "/non-surgical-facelift-milton-keynes",
  "/non-surgical-face-lift": "/non-surgical-facelift-milton-keynes",
  "/hifu-body-lift": "/non-surgical-facelift-milton-keynes",
  "/jaw-tightening": "/jaw-tightening-milton-keynes",
  "/jaw-tightening-treatments": "/jaw-tightening-milton-keynes",
  "/chemical-peels": "/chemical-peels-milton-keynes",
  "/skin-peels": "/chemical-peels-milton-keynes",
  "/skin-peels-milton-keynes": "/chemical-peels-milton-keynes",
  "/carbon-peel": "/carbon-peel-milton-keynes",
  "/dermal-fillers": "/dermal-fillers-in-milton-keynes",
  "/medical-microneedling": "/best-results-microneedling-in-milton-keynes-svr-aesthetics",
  "/medical-microneedling-milton-keynes": "/best-results-microneedling-in-milton-keynes-svr-aesthetics",
  "/best-skinpen-microneedling-treatment-in-milton-keynes": "/best-results-microneedling-in-milton-keynes-svr-aesthetics",
  "/fat-dissolving-injections": "/fat-dissolving-injections-milton-keynes",
  "/full-body-massage-2": "/full-body-massage-milton-keynes",
  "/first-aid-and-anaphylaxis": "/first-aid-anaphylaxis-training-milton-keynes",
  "/skin-rejuvenation": "/facials-milton-keynes",
  "/polynucleotide-treatment-milton-keynes": "/treatments",
  "/profhilo-clinic-milton-keynes": "/treatments",
  "/vaginal-tightening": "/treatments",
  "/skin-clinic-milton-keynes": "/treatments",
  "/aesthetics-clinic-milton-keynes": "/treatments",
  "/skin-and-body-clinic-in-milton-keynes": "/treatments",
  "/laser-clinic-milton-keynes": "/laser-hair-removal-milton-keynes",
  "/beauty-clinic-milton-keynes": "/treatments",
  "/cosmetic-clinic-milton-keynes": "/treatments",
  "/acne-clinic-milton-keynes": "/facials-milton-keynes",
  "/facial-aesthetics-milton-keynes": "/facials-milton-keynes",
  "/mrs-sonali": "/about-us",
  "/landing-page": "/",
  "/sample-page": "/",
  "/calender-page": "/book-free-consultation",
};

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://svraesthetics.co.uk https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.googleapis.com https://*.gstatic.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "connect-src 'self' https://generativelanguage.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://clinicconsent.com https://*.clinicconsent.com",
      "frame-src 'self' https://clinicconsent.com https://www.googletagmanager.com https://www.google.com",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "svraesthetics.co.uk" }],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      ...Object.entries(legacyRedirects).map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/aesthetic-blogs/:path*", destination: "/blogs", permanent: true },
      { source: "/category/:path*", destination: "/blogs", permanent: true },
      { source: "/tag/:path*", destination: "/blogs", permanent: true },
      { source: "/author/:path*", destination: "/blogs", permanent: true },
      { source: "/book", destination: "/book-free-consultation", permanent: true },
      { source: "/book-appointment", destination: "/book-free-consultation", permanent: true },
      { source: "/booking", destination: "/book-free-consultation", permanent: true },
      { source: "/appointments", destination: "/book-free-consultation", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-conditions", permanent: true },
    ];
  },
};

export default nextConfig;

