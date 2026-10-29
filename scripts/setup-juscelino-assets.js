const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/cfbc771f-3856-4fa2-b66a-09256194d100/.user_uploaded/media_1793307322000_7e24231d.png';
const uploadedPortrait = 'C:/Users/matheus/.gemini/antigravity/brain/cfbc771f-3856-4fa2-b66a-09256194d100/.user_uploaded/media_1793307373725_c66f64b2.jpg';
const uploadedOffice = 'C:/Users/matheus/.gemini/antigravity/brain/cfbc771f-3856-4fa2-b66a-09256194d100/.user_uploaded/media_1793307554988_f0f27b57.jpg';

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

async function setupAssets() {
  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

  console.log('--- 1. Processing Official Juscelino Germano Logo & Emblem ---');
  const logoBuf = fs.readFileSync(uploadedLogo);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-horizontal.png', logoBuf);
  fs.writeFileSync('public/logo-badge.png', logoBuf);

  // Extract circular JG emblem precisely (crop around the emblem at top center)
  // Bounds: minX: 382, maxX: 641 (width ~259), minY: 0, maxY: 259 (height ~259)
  const emblemCrop = await sharp(logoBuf)
    .extract({ left: 381, top: 0, width: 261, height: 260 })
    .png()
    .toBuffer();

  // Create high-res 512x512 emblem centered with a subtle luxury margin
  const emblemSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblemCrop).resize(480, 480, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-jg.png', emblemSquare);
  fs.writeFileSync('public/emblem.png', emblemSquare);

  // Also create a dark-backed version for favicon clarity on light browser tabs
  // A circular dark onyx disc behind the gold emblem ensures striking visibility in any browser theme (light or dark mode)!
  const darkDiscSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e222a"/>
          <stop offset="85%" stop-color="#121418"/>
          <stop offset="100%" stop-color="#090a0c"/>
        </radialGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f1ce89"/>
          <stop offset="50%" stop-color="#c89a47"/>
          <stop offset="100%" stop-color="#8a611e"/>
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="250" fill="url(#discGrad)" stroke="url(#borderGrad)" stroke-width="6"/>
    </svg>
  `);

  const faviconBase = await sharp(darkDiscSvg)
    .composite([{
      input: await sharp(emblemCrop).resize(410, 410, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Generate Favicons & Icons in various resolutions
  console.log('--- 2. Generating Favicon & Web App Icons ---');
  const s512 = await sharp(faviconBase).resize(512, 512).png().toBuffer();
  const s192 = await sharp(faviconBase).resize(192, 192).png().toBuffer();
  const s180 = await sharp(faviconBase).resize(180, 180).png().toBuffer();
  const s48  = await sharp(faviconBase).resize(48, 48).png().toBuffer();
  const s32  = await sharp(faviconBase).resize(32, 32).png().toBuffer();
  const s16  = await sharp(faviconBase).resize(16, 16).png().toBuffer();

  fs.writeFileSync('public/icon.png', s512);
  fs.writeFileSync('public/icon-192x192.png', s192);
  fs.writeFileSync('public/apple-icon.png', s180);
  fs.writeFileSync('public/icon-48x48.png', s48);
  fs.writeFileSync('public/icon-32x32.png', s32);
  fs.writeFileSync('public/icon-16x16.png', s16);

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: s16 },
    { width: 32, height: 32, buffer: s32 },
    { width: 48, height: 48, buffer: s48 }
  ]);
  fs.writeFileSync('public/favicon.ico', icoBuf);

  // Copy to app/ directory for Next.js App Router native favicon handling
  fs.writeFileSync('app/favicon.ico', icoBuf);
  fs.writeFileSync('app/icon.png', s512);
  fs.writeFileSync('app/apple-icon.png', s180);

  console.log('--- 3. Processing Portraits & Office Photos ---');
  const portraitBuf = fs.readFileSync(uploadedPortrait);
  fs.writeFileSync('public/juscelino-germano.jpg', portraitBuf);
  fs.writeFileSync('public/hero.jpg', portraitBuf);
  fs.writeFileSync('public/portrait.jpg', portraitBuf);
  fs.writeFileSync('public/dr-juscelino.jpg', portraitBuf);

  const officeBuf = fs.readFileSync(uploadedOffice);
  fs.writeFileSync('public/escritorio.jpg', officeBuf);
  fs.writeFileSync('public/fachada.jpg', officeBuf);
  fs.writeFileSync('public/office.jpg', officeBuf);

  console.log('All Juscelino Germano assets generated successfully!');
}

setupAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
