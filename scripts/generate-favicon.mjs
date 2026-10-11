// Regenerates src/app/favicon.ico from the brand monogram.
// Usage: node scripts/generate-favicon.mjs
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs><linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#FF6A2B"/><stop offset="1" stop-color="#FFB547"/>
  </linearGradient></defs>
  <rect width="32" height="32" rx="9" fill="url(#g)"/>
  <path d="M9 22.5V10l7 7.5 7-7.5v12.5" fill="none" stroke="#08090C" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(Buffer.from(svg), { density: 384 }).resize(s, s).png().toBuffer()),
);

// ICO container with embedded PNGs
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);

let offset = 6 + 16 * sizes.length;
const entries = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s === 256 ? 0 : s, 0);
  e.writeUInt8(s === 256 ? 0 : s, 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  return e;
});

await writeFile("src/app/favicon.ico", Buffer.concat([header, ...entries, ...pngs]));
console.log("✓ src/app/favicon.ico written");
