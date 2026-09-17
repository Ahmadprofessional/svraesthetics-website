const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function generate() {
  const rootDir = path.join(__dirname, "..");
  const logoPath = path.join(rootDir, "public", "images", "logo.png");
  const appDir = path.join(rootDir, "src", "app");
  const publicDir = path.join(rootDir, "public");

  if (!fs.existsSync(logoPath)) {
    throw new Error(`Logo not found at ${logoPath}`);
  }

  console.log("Loading brand logo from:", logoPath);

  // 1. Create a pristine 512x512 master with the brand logo centered
  const masterBuffer = await sharp(logoPath)
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // 2. icon.png (192x192) for modern browsers and high-DPI tabs
  const icon192 = await sharp(masterBuffer)
    .resize(192, 192)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(appDir, "icon.png"), icon192);
  fs.writeFileSync(path.join(publicDir, "icon.png"), icon192);
  console.log("✓ src/app/icon.png & public/icon.png (192x192)");

  // 3. apple-icon.png (180x180) for iOS home screen & Safari
  const apple180 = await sharp(masterBuffer)
    .resize(180, 180)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);
  fs.writeFileSync(path.join(publicDir, "apple-icon.png"), apple180);
  console.log("✓ src/app/apple-icon.png & public/apple-icon.png (180x180)");

  // 4. Build multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];

  for (const s of icoSizes) {
    const buf = await sharp(masterBuffer)
      .resize(s, s, { kernel: "lanczos3" })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buf });
  }

  // Build standard binary ICO container
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngBuffers.length, 4); // count

  let offset = 6 + 16 * pngBuffers.length;
  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(item.buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buf)]);

  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("✓ src/app/favicon.ico & public/favicon.ico (multi-res 16/32/48 ICO)");

  console.log("\nFavicon generation complete!");
}

generate().catch((err) => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
