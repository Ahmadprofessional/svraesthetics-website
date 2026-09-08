import Script from "next/script";

export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ads = process.env.NEXT_PUBLIC_GADS_ID;
  const primary = ga || ads;
  if (!primary) return null;

  const configs = [ga, ads].filter(Boolean).map((id) => `gtag('config', '${id}');`).join("\n");

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primary}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${configs}`}
      </Script>
    </>
  );
}
