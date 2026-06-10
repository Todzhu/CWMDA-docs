import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(root, 'docs');
const originalCacheRoot = path.join(docsRoot, '.vitepress', 'image-cache', 'original');
const processedRoot = path.join(docsRoot, 'public', 'processed-assets');
const remoteAssetPrefix = 'https://seeksoul.online/cloudplatform-doc/assets/';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function safeFileName(remoteUrl) {
  const url = new URL(remoteUrl);
  const baseName = decodeURIComponent(path.posix.basename(url.pathname)).replace(/[<>:"/\\|?*]/g, '_');
  const hash = crypto.createHash('sha1').update(remoteUrl).digest('hex').slice(0, 10);
  return `${hash}-${baseName}`;
}

async function collectMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.vitepress' || entry.name === 'public' || entry.name === 'superpowers') continue;
      files.push(...await collectMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function collectRemoteImageUrls(markdown) {
  return [...markdown.matchAll(/https:\/\/seeksoul\.online\/cloudplatform-doc\/assets\/[^"')\s]+/g)]
    .map((match) => match[0])
    .filter((url) => /\.(png|jpe?g|webp|gif)(?:$|\?)/i.test(url));
}

async function downloadOriginal(remoteUrl, targetPath) {
  try {
    await fs.access(targetPath);
    return;
  } catch {
    // Download when not cached.
  }

  const response = await fetch(remoteUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${remoteUrl}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Expected image response for ${remoteUrl}, got ${contentType}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(targetPath, buffer);
}

function isNavigationBluePixel(r, g, b) {
  return (
    (b >= 85 && b >= g + 12 && b >= r + 35 && g >= r + 8) ||
    (b >= 115 && b >= g + 6 && b >= r + 30)
  );
}

function getLogoCoverBox(width, height) {
  const coverHeight = clamp(Math.round(height * 0.07), 34, 84);
  const coverWidth = clamp(Math.round(width * 0.08), 110, 210);
  return { coverWidth, coverHeight };
}

async function hasPlatformLogoArea(imagePath, width, height) {
  const { coverWidth, coverHeight } = getLogoCoverBox(width, height);
  const cropWidth = Math.min(coverWidth, width);
  const cropHeight = Math.min(coverHeight, height);
  const probe = sharp(imagePath)
    .rotate()
    .extract({ left: 0, top: 0, width: cropWidth, height: cropHeight })
    .resize({ width: 240, withoutEnlargement: true });
  const { data, info } = await probe.raw().toBuffer({ resolveWithObject: true });
  let bluePixels = 0;
  let totalPixels = 0;
  let bestRowRatio = 0;

  for (let y = 0; y < info.height; y += 1) {
    let rowBluePixels = 0;
    for (let x = 0; x < info.width; x += 1) {
      const offset = (y * info.width + x) * info.channels;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      totalPixels += 1;

      if (isNavigationBluePixel(r, g, b)) {
        bluePixels += 1;
        rowBluePixels += 1;
      }
    }
    bestRowRatio = Math.max(bestRowRatio, rowBluePixels / info.width);
  }

  const blueRatio = bluePixels / totalPixels;
  return blueRatio > 0.55;
}

async function sampleNavigationFill(imagePath, width, height, coverWidth, coverHeight) {
  const sampleLeft = Math.min(width - 1, coverWidth + Math.round(coverWidth * 0.35));
  const sampleWidth = Math.min(Math.max(coverWidth, 80), width - sampleLeft);
  const sampleHeight = Math.min(coverHeight, height);

  if (sampleWidth <= 0 || sampleHeight <= 0) return '#2f5eff';

  const { data, info } = await sharp(imagePath)
    .rotate()
    .extract({ left: sampleLeft, top: 0, width: sampleWidth, height: sampleHeight })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let rTotal = 0;
  let gTotal = 0;
  let bTotal = 0;
  let count = 0;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const offset = (y * info.width + x) * info.channels;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      if (isNavigationBluePixel(r, g, b)) {
        rTotal += r;
        gTotal += g;
        bTotal += b;
        count += 1;
      }
    }
  }

  if (count < 20) return '#2f5eff';

  return `rgb(${Math.round(rTotal / count)}, ${Math.round(gTotal / count)}, ${Math.round(bTotal / count)})`;
}

async function createLogoComposite(imagePath, width, height) {
  const { coverWidth, coverHeight } = getLogoCoverBox(width, height);
  const fill = await sampleNavigationFill(imagePath, width, height, coverWidth, coverHeight);

  const cover = Buffer.from(`
    <svg width="${coverWidth}" height="${coverHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${coverWidth}" height="${coverHeight}" fill="${fill}"/>
    </svg>
  `);

  return [
    { input: cover, left: 0, top: 0 }
  ];
}

async function processImage(remoteUrl) {
  const fileName = safeFileName(remoteUrl);
  const originalPath = path.join(originalCacheRoot, fileName);
  const processedPath = path.join(processedRoot, fileName);
  const publicUrl = `/processed-assets/${encodeURIComponent(fileName)}`;

  await downloadOriginal(remoteUrl, originalPath);

  const image = sharp(originalPath).rotate();
  const metadata = await image.metadata();
  const isLikelyPlatformScreenshot =
    metadata.width >= 650 &&
    metadata.height >= 240 &&
    await hasPlatformLogoArea(originalPath, metadata.width, metadata.height);

  if (!isLikelyPlatformScreenshot) {
    await sharp(originalPath).rotate().toFile(processedPath);
    return { remoteUrl, publicUrl, replacedLogo: false };
  }

  const composites = await createLogoComposite(originalPath, metadata.width, metadata.height);
  await sharp(originalPath)
    .rotate()
    .composite(composites)
    .toFile(processedPath);

  return { remoteUrl, publicUrl, replacedLogo: true };
}

async function processWithConcurrency(items, worker, concurrency = 8) {
  const results = [];
  let nextIndex = 0;

  async function run() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

async function main() {
  await fs.mkdir(originalCacheRoot, { recursive: true });
  await fs.rm(processedRoot, { recursive: true, force: true });
  await fs.mkdir(processedRoot, { recursive: true });

  const markdownFiles = await collectMarkdownFiles(docsRoot);
  const markdownByFile = new Map();
  const remoteUrls = new Set();

  for (const file of markdownFiles) {
    const markdown = await fs.readFile(file, 'utf8');
    markdownByFile.set(file, markdown);
    for (const url of collectRemoteImageUrls(markdown)) {
      if (url.startsWith(remoteAssetPrefix)) remoteUrls.add(url);
    }
  }

  const processed = await processWithConcurrency([...remoteUrls], async (url) => {
    try {
      return await processImage(url);
    } catch (error) {
      console.warn(`Skipped image processing for ${url}: ${error.message}`);
      return { remoteUrl: url, publicUrl: url, replacedLogo: false };
    }
  });

  const replacements = new Map(processed.map((result) => [result.remoteUrl, result.publicUrl]));

  for (const [file, markdown] of markdownByFile) {
    let output = markdown;
    for (const [remoteUrl, publicUrl] of replacements) {
      output = output.replaceAll(remoteUrl, publicUrl);
    }
    if (output !== markdown) {
      await fs.writeFile(file, output, 'utf8');
    }
  }

  const replacedLogoCount = processed.filter((result) => result.replacedLogo).length;
  console.log(`Processed ${processed.length} images; replaced logo area in ${replacedLogoCount} platform screenshots.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
