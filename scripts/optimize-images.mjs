import sharp from 'sharp';
import { readdir, copyFile, mkdir } from 'fs/promises';
import { join, extname } from 'path';

const DOCS = 'docs';
const PUBLIC = 'public/images';

async function optimize() {
  await mkdir(join(PUBLIC, 'photos'), { recursive: true });
  await mkdir(join(PUBLIC, 'diplomas'), { recursive: true });
  await mkdir(join(PUBLIC, 'services'), { recursive: true });

  const mapping = [
    // Hero photo
    { src: 'IMG_6532.WEBP', out: 'photos/anna-hero.webp', w: 1600, q: 92 },
    { src: 'IMG_6532.WEBP', out: 'photos/anna-hero.jpg', w: 1600, q: 90, fmt: 'jpeg' },

    // About photo
    { src: 'IMG_6527.JPG', out: 'photos/anna-about.webp', w: 1600, q: 92 },
    { src: 'IMG_6527.JPG', out: 'photos/anna-about.jpg', w: 1600, q: 90, fmt: 'jpeg' },

    // Service: Consultation
    { src: 'IMG_6528.WEBP', out: 'services/consultation.webp', w: 800, q: 90 },
    { src: 'IMG_6528.WEBP', out: 'services/consultation.jpg', w: 800, q: 88, fmt: 'jpeg' },

    // Service: Restart community
    { src: 'IMG_6529.WEBP', out: 'services/restart.webp', w: 800, q: 90 },
    { src: 'IMG_6529.WEBP', out: 'services/restart.jpg', w: 800, q: 88, fmt: 'jpeg' },

    // Diplomas
    { src: 'Диплом MyGenetics.jpg', out: 'diplomas/diploma-mygenetics.webp', w: 1200, q: 92 },
    { src: 'Диплом MyGenetics.jpg', out: 'diplomas/diploma-mygenetics.jpg', w: 1200, q: 90, fmt: 'jpeg' },
    { src: 'Диплом Специалист по интерпритации генетических тестов.jpg', out: 'diplomas/diploma-genetics-specialist.webp', w: 1200, q: 92 },
    { src: 'Диплом Специалист по интерпритации генетических тестов.jpg', out: 'diplomas/diploma-genetics-specialist.jpg', w: 1200, q: 90, fmt: 'jpeg' },
    { src: 'Участие в гос.проекте Счастливая мама - Счастливая семья.jpg', out: 'diplomas/cert-happy-mama.webp', w: 1200, q: 92 },
    { src: 'Участие в гос.проекте Счастливая мама - Счастливая семья.jpg', out: 'diplomas/cert-happy-mama.jpg', w: 1200, q: 90, fmt: 'jpeg' },
    { src: 'Участие в проекте от Мамы к Маме.jpg', out: 'diplomas/cert-mama-to-mama.webp', w: 1200, q: 92 },
    { src: 'Участие в проекте от Мамы к Маме.jpg', out: 'diplomas/cert-mama-to-mama.jpg', w: 1200, q: 90, fmt: 'jpeg' },
  ];

  for (const m of mapping) {
    const pipeline = sharp(join(DOCS, m.src)).resize(m.w, null, { withoutEnlargement: true });
    if (m.fmt === 'jpeg') {
      await pipeline.jpeg({ quality: m.q, progressive: true, mozjpeg: true }).toFile(join(PUBLIC, m.out));
    } else {
      await pipeline.webp({ quality: m.q }).toFile(join(PUBLIC, m.out));
    }
    console.log(`✓ ${m.src} → ${m.out}`);
  }

  // PDFs — copy
  await copyFile(join(DOCS, 'Диплом о проф.переподготовке.PDF'), join(PUBLIC, 'diplomas/diploma-professional.pdf'));
  console.log('✓ diploma-professional.pdf');
  await copyFile(join(DOCS, 'Свидетельство о повышении квалификации.PDF'), join(PUBLIC, 'diplomas/cert-qualification.pdf'));
  console.log('✓ cert-qualification.pdf');

  // Print sizes
  console.log('\n--- File sizes ---');
  for (const dir of ['photos', 'services', 'diplomas']) {
    const files = await readdir(join(PUBLIC, dir));
    for (const f of files) {
      const stat = await import('fs').then(fs => fs.statSync(join(PUBLIC, dir, f)));
      console.log(`${dir}/${f}: ${(stat.size / 1024).toFixed(0)} KB`);
    }
  }
}

optimize().catch(console.error);
