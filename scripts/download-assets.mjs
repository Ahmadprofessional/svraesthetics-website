// Downloads real assets from the live SVR Aesthetics site into public/images.
// Run once during the clone build: `node scripts/download-assets.mjs`
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ASSETS = [
  ["logo.png", "https://svraesthetics.co.uk/wp-content/uploads/2023/08/SVR-Aesthetics-logo-e1691597530196.png"],
  ["hero-banner.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2025/08/Banner-b-1.jpg"],
  ["service-facelift.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/04/Screenshot-2026-04-03-052156.png"],
  ["service-skin.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2026/01/patient-undergoing-microneedling-procedure-1-1-scaled.jpg"],
  ["service-iv-drip.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2026/02/vitamin-iv.jpg"],
  ["service-laser.jpeg", "https://svraesthetics.co.uk/wp-content/uploads/2023/12/Semi-permanent-makeup-removal-min.jpeg"],
  ["service-blood-tests.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2026/04/medical-doctor-nurse-woman-wearing-protective-mask-gloves-holding-rack-with-virus-blood-tests_220507-13811.jpg"],
  ["service-anti-wrinkle.webp", "https://svraesthetics.co.uk/wp-content/uploads/2023/08/anti-wrinkle-1.webp"],
  ["promo-bg.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2026/03/portrait-young-woman-practicing-facial-yoga-youth-scaled.jpg"],
  ["about-us.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/Gemini_Generated_Image_39hs4n39hs4n39hs.png"],
  ["treatments-intro.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/01/admin-ajax-3-1.png"],
  ["divider.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/divider_2-removebg-preview.png"],
  ["before-after-botox.webp", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/Botox-Treatment-in-milton-keynes-1-1.webp"],
  ["before-after-cheek.webp", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/cheek-Augments-Treatment-in-Milton-Keynes-Buckingham.webp"],
  ["before-after-lipfiller.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/Lip-filler-Treatment-in-Milton-Keynes.png"],
  ["before-after-botoxfiller.webp", "https://svraesthetics.co.uk/wp-content/uploads/2026/07/botox-filler-Treatment-Buckingham.webp"],
  ["testimonials-bg.jpg", "https://svraesthetics.co.uk/wp-content/uploads/2023/01/Untitled-1500-%C3%97-600px-1600-%C3%97-600px-1800-%C3%97-700px-14.jpg"],
  ["footer-logo.png", "https://svraesthetics.co.uk/wp-content/uploads/2026/01/images333-1.png"],
];

const OUT_DIR = path.join(process.cwd(), "public", "images");

async function downloadOne([name, url]) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(OUT_DIR, name), buf);
    console.log(`OK   ${name} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`FAIL ${name}: ${err.message}`);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    await Promise.all(ASSETS.slice(i, i + batchSize).map(downloadOne));
  }
}

main();
