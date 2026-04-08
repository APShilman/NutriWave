import { pdf } from 'pdf-to-img';
import { writeFileSync } from 'fs';
import sharp from 'sharp';

const PDFS = [
  { src: 'public/images/diplomas/diploma-professional.pdf', name: 'diploma-professional' },
  { src: 'public/images/diplomas/cert-qualification.pdf', name: 'cert-qualification' },
];

async function main() {
  for (const { src, name } of PDFS) {
    console.log(`Processing: ${src}`);
    let pageNum = 0;

    const document = await pdf(src, { scale: 2.0 });

    for await (const image of document) {
      pageNum++;
      const suffix = `-p${pageNum}`;
      const basePath = `public/images/diplomas/${name}${suffix}`;

      // image is a Buffer (PNG)
      writeFileSync(`${basePath}.png`, image);
      console.log(`  -> ${basePath}.png (${(image.length / 1024).toFixed(0)} KB)`);

      // Convert to WebP
      await sharp(image).webp({ quality: 92 }).toFile(`${basePath}.webp`);
      console.log(`  -> ${basePath}.webp`);

      // Convert to JPG
      await sharp(image).jpeg({ quality: 90, progressive: true, mozjpeg: true }).toFile(`${basePath}.jpg`);
      console.log(`  -> ${basePath}.jpg`);
    }

    console.log(`  Total pages: ${pageNum}`);
  }

  console.log('\nDone!');
}

main().catch(console.error);
