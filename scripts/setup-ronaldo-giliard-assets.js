const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/ce7062dc-482e-42b5-9837-89cc43b481ac/.user_uploaded/media_1793302494570_9c511507.png';
const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/ce7062dc-482e-42b5-9837-89cc43b481ac/.user_uploaded/media_1793302502088_bdcab431.jpg';

async function run() {
  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

  console.log('--- 1. Processing Logo ---');
  const logoBuf = fs.readFileSync(uploadedLogo);
  fs.writeFileSync('public/logo.png', logoBuf);

  // Trimmed logo
  await sharp(logoBuf)
    .trim()
    .toFile('public/logo-trimmed.png');

  // Emblem (RG crest with shield, sword, and decorative filigree)
  // Bounding box: X 330 to 686, Y 8 to 365
  const emblemSharp = sharp(logoBuf).extract({
    left: 328,
    top: 6,
    width: 360,
    height: 362
  });
  await emblemSharp.toFile('public/emblema-rg.png');

  // Also create a logo for dark backgrounds / high visibility
  await sharp('public/logo-trimmed.png')
    .resize({ width: 900 })
    .toFile('public/logo-white.png');

  console.log('Logo and emblem files generated.');

  console.log('--- 2. Processing Photo ---');
  const photoBuf = fs.readFileSync(uploadedPhoto);
  fs.writeFileSync('public/ronaldo-giliard.jpg', photoBuf);
  fs.writeFileSync('public/dr-ronaldo-giliard.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/dr-ronaldo-portrait.jpg', photoBuf);

  console.log('Portrait photos saved.');

  console.log('--- 3. Generating Favicons with RG Emblem ---');
  const emblemBuf = fs.readFileSync('public/emblema-rg.png');

  const createIconSquare = async (size) => {
    const badgeSize = size;
    const emblemSize = Math.round(size * 0.78);

    // Resize emblem
    const resizedEmblem = await sharp(emblemBuf)
      .resize({
        width: emblemSize,
        height: emblemSize,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    const rx = Math.round(badgeSize * 0.22);
    const strokeW = Math.max(1, Math.round(size * 0.035));
    // Metallic dark charcoal canvas with platinum/silver border
    const badgeSvg = Buffer.from(
      `<svg width="${badgeSize}" height="${badgeSize}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="50%" stop-color="#0b0f17"/>
            <stop offset="100%" stop-color="#05080e"/>
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
            <stop offset="50%" stop-color="#cbd5e1" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0.4"/>
          </linearGradient>
        </defs>
        <rect width="${badgeSize}" height="${badgeSize}" rx="${rx}" fill="url(#bgGrad)"/>
        <rect width="${badgeSize - 2}" height="${badgeSize - 2}" x="1" y="1" rx="${rx}" fill="none" stroke="url(#strokeGrad)" stroke-width="${strokeW}"/>
      </svg>`
    );

    return sharp(badgeSvg)
      .composite([{
        input: resizedEmblem,
        gravity: 'centre'
      }])
      .png()
      .toBuffer();
  };

  const buf512 = await createIconSquare(512);
  const buf180 = await createIconSquare(180);
  const buf48 = await createIconSquare(48);
  const buf32 = await createIconSquare(32);
  const buf16 = await createIconSquare(16);

  fs.writeFileSync('public/icon.png', buf512);
  fs.writeFileSync('app/icon.png', buf512);

  fs.writeFileSync('public/apple-icon.png', buf180);
  fs.writeFileSync('app/apple-icon.png', buf180);

  fs.writeFileSync('public/icon-48x48.png', buf48);
  fs.writeFileSync('public/icon-32x32.png', buf32);
  fs.writeFileSync('public/icon-16x16.png', buf16);

  // Generate ICO file containing 16, 32, 48
  function createIco(images) {
    const count = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = icon
    header.writeUInt16LE(count, 4);

    let offset = 6 + 16 * count;
    const entries = [];
    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // planes
      entry.writeUInt16LE(32, 6); // bpp
      entry.writeUInt32LE(img.buffer.length, 8); // size
      entry.writeUInt32LE(offset, 12); // offset
      offset += img.buffer.length;
      entries.push(entry);
    }

    return Buffer.concat([header, ...entries, ...images.map(i => i.buffer)]);
  }

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 }
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('app/favicon.ico', icoBuf);

  console.log('Favicons and app icons generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
