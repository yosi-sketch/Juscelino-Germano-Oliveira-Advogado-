const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/5d9b6dc1-64dd-4f73-bb67-0dc595175480/.user_uploaded/media_1793304840766_d4900f54.jpg';
const uploadedPortrait = 'C:/Users/matheus/.gemini/antigravity/brain/5d9b6dc1-64dd-4f73-bb67-0dc595175480/.user_uploaded/media_1793304847541_a2594fdc.jpg';
const uploadedOffice = 'C:/Users/matheus/.gemini/antigravity/brain/5d9b6dc1-64dd-4f73-bb67-0dc595175480/.user_uploaded/media_1793305025453_77d741fc.jpg';

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

  console.log('--- 1. Processing Logo Badge & Alpha Mask ---');
  const logoBuf = fs.readFileSync(uploadedLogo);
  const meta = await sharp(logoBuf).metadata();
  console.log(`Original logo: ${meta.width}x${meta.height}`);

  const size = Math.min(meta.width, meta.height);
  const cx = meta.width / 2;
  const cy = meta.height / 2;
  const radius = Math.floor(size * 0.495);

  const left = Math.max(0, Math.round(cx - radius));
  const top = Math.max(0, Math.round(cy - radius));
  const cropSize = radius * 2;

  const croppedBadge = await sharp(logoBuf)
    .extract({ left, top, width: cropSize, height: cropSize })
    .toBuffer();

  const circleMask = Buffer.from(
    `<svg width="${cropSize}" height="${cropSize}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${radius}" cy="${radius}" r="${radius - 1}" fill="#ffffff" />
    </svg>`
  );

  const badgeTransparent = await sharp(croppedBadge)
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/logo.png', badgeTransparent);
  fs.writeFileSync('public/logo-badge.png', badgeTransparent);
  fs.writeFileSync('public/logo-original.jpg', logoBuf);

  // Extract AM monogram
  const emblemWidth = Math.round(cropSize * 0.42);
  const emblemHeight = Math.round(cropSize * 0.45);
  const emblemLeft = Math.round(cropSize * 0.08);
  const emblemTop = Math.round(cropSize * 0.28);

  const emblemBuf = await sharp(badgeTransparent)
    .extract({
      left: emblemLeft,
      top: emblemTop,
      width: emblemWidth,
      height: emblemHeight
    })
    .png()
    .toBuffer();
  fs.writeFileSync('public/emblema-am.png', emblemBuf);

  console.log('Logo and badge generated.');

  console.log('--- 2. Processing Portraits & Office Photos ---');
  const portraitBuf = fs.readFileSync(uploadedPortrait);
  fs.writeFileSync('public/alesania-menezes.jpg', portraitBuf);
  fs.writeFileSync('public/dra-alesania-portrait.jpg', portraitBuf);
  fs.writeFileSync('public/hero.jpg', portraitBuf);

  const officeBuf = fs.readFileSync(uploadedOffice);
  fs.writeFileSync('public/dra-alesania-office.jpg', officeBuf);
  fs.writeFileSync('public/office.jpg', officeBuf);

  console.log('Portraits and office photos saved.');

  console.log('--- 3. Generating High-Visibility Luxury Favicons ---');
  const createFaviconPng = async (dim) => {
    return await sharp(badgeTransparent)
      .resize({
        width: dim,
        height: dim,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
  };

  const buf512 = await createFaviconPng(512);
  const buf180 = await createFaviconPng(180);
  const buf48 = await createFaviconPng(48);
  const buf32 = await createFaviconPng(32);
  const buf16 = await createFaviconPng(16);

  fs.writeFileSync('public/icon.png', buf512);
  fs.writeFileSync('app/icon.png', buf512);

  fs.writeFileSync('public/apple-icon.png', buf180);
  fs.writeFileSync('app/apple-icon.png', buf180);

  fs.writeFileSync('public/icon-48x48.png', buf48);
  fs.writeFileSync('public/icon-32x32.png', buf32);
  fs.writeFileSync('public/icon-16x16.png', buf16);

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 }
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('app/favicon.ico', icoBuf);

  console.log('--- 4. Creating Horizontal Header Logo ---');
  const badgeSmall = await sharp(badgeTransparent)
    .resize({ height: 100, width: 100 })
    .png()
    .toBuffer();

  const svgCanvas = Buffer.from(
    '<svg width="560" height="100" xmlns="http://www.w3.org/2000/svg">' +
    '<defs>' +
    '  <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">' +
    '    <stop offset="0%" stop-color="#dfbe76" />' +
    '    <stop offset="50%" stop-color="#f3e5ab" />' +
    '    <stop offset="100%" stop-color="#c5a059" />' +
    '  </linearGradient>' +
    '  <linearGradient id="goldDiv" x1="0%" y1="0%" x2="0%" y2="100%">' +
    '    <stop offset="0%" stop-color="#997738" stop-opacity="0.2" />' +
    '    <stop offset="50%" stop-color="#dfbe76" stop-opacity="0.9" />' +
    '    <stop offset="100%" stop-color="#997738" stop-opacity="0.2" />' +
    '  </linearGradient>' +
    '</defs>' +
    '<line x1="114" y1="12" x2="114" y2="88" stroke="url(#goldDiv)" stroke-width="1.5" />' +
    '<text x="128" y="44" font-family="Cinzel, Playfair Display, Georgia, serif" font-size="25" font-weight="700" letter-spacing="2" fill="url(#goldText)">ALESÂNIA MENEZES</text>' +
    '<text x="130" y="66" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" letter-spacing="3" fill="#b38e46">ADVOCACIA ESPECIALIZADA</text>' +
    '<text x="130" y="83" font-family="system-ui, -apple-system, sans-serif" font-size="9.5" font-weight="500" letter-spacing="1.5" fill="#8a4d35">OAB/MG · DIREITO PÚBLICO &amp; MULHERES</text>' +
    '</svg>'
  );

  const horizontalLogo = await sharp(svgCanvas)
    .composite([{ input: badgeSmall, left: 4, top: 0 }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/logo-horizontal.png', horizontalLogo);
  console.log('Horizontal logo generated.');
  console.log('All assets ready!');
}

setupAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
