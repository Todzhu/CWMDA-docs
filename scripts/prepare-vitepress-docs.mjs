import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'CWMDA_Document');
const docsRoot = path.join(root, 'docs');
const guideRoot = path.join(docsRoot, 'guide');
const publicRoot = path.join(docsRoot, 'public');
const assetsRoot = path.join(publicRoot, 'assets', 'CWMDA_Document');
const legacyAssetsRoot = path.join(publicRoot, 'assets', 'SeekSoulOnline_Document');
const advancedRoot = path.join(docsRoot, 'advanced');
const obsoleteAssetsRoot = path.join(docsRoot, 'assets');
const remoteDocBase = 'https://seeksoul.online/cloudplatform-doc/zh/document/SeekSoulOnline_Document';
const remoteAssetOrigin = 'https://seeksoul.online';

const pages = [
  ['1_Overview.md', 'overview.md'],
  ['2_Getting_Started.md', 'getting-started.md'],
  ['3_Basic_Analysis.md', 'basic-analysis.md'],
  ['4_Cell_Annotation.md', 'cell-annotation.md'],
  ['5_Visualisation.md', 'visualisation.md'],
  ['6_Module_Score.md', 'module-score.md'],
  ['7_Differential_Enrichment.md', 'differential-enrichment.md'],
  ['8_Subset.md', 'subset.md'],
  ['9_Advanced_Analysis.md', 'advanced-analysis.md'],
  ['11_Metadata.md', 'metadata.md'],
  ['12_Report.md', 'report.md'],
  ['13_Datas.md', 'datas.md'],
  ['14_My_DataBase.md', 'my-database.md'],
  ['15_My_GeneSets.md', 'my-genesets.md'],
  ['16_Parameters.md', 'parameters.md'],
  ['17_User_Info.md', 'user-info.md'],
  ['18_Notebooks.md', 'notebooks.md']
];

const legacyPageLinks = new Map(
  pages.map(([sourceName, targetName]) => [
    sourceName.replace(/\.md$/, ''),
    targetName.replace(/\.md$/, '')
  ])
);

const directoryAssets = [
  '我的项目.src',
  '支持.src',
  '概述.src'
];

const homeRedirectContent = `---
layout: page
title: 开始分析
head:
  - - meta
    - http-equiv: refresh
      content: 0;url=guide/getting-started
---

<script setup>
import { onMounted } from 'vue';
import { withBase } from 'vitepress';

onMounted(() => {
  window.location.replace(withBase('/guide/getting-started'));
});
</script>

正在跳转到 [开始分析](/guide/getting-started)。
`;

const homeRedirectContentAscii = `---
layout: page
title: Getting Started
head:
  - - meta
    - http-equiv: refresh
      content: 0;url=guide/getting-started
---

<script setup>
import { onMounted } from 'vue';
import { withBase } from 'vitepress';

onMounted(() => {
  window.location.replace(withBase('/guide/getting-started'));
});
</script>

Redirecting to [Getting Started](/guide/getting-started).
`;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function fetchRemoteImageUrls(remotePageUrl) {
  try {
    const response = await fetch(remotePageUrl);
    if (!response.ok) {
      console.warn(`Skipped remote images for ${remotePageUrl}: ${response.status}`);
      return [];
    }

    const html = await response.text();
    const imageUrls = [];
    const imagePattern = /<img[^>]+src=["']([^"']+)["']/g;
    let match;

    while ((match = imagePattern.exec(html)) !== null) {
      const imageUrl = match[1];
      if (imageUrl.includes('/logo.')) continue;
      if (imageUrl.endsWith('/logo.png')) continue;
      imageUrls.push(new URL(imageUrl, remoteAssetOrigin).href);
    }

    return imageUrls;
  } catch (error) {
    console.warn(`Skipped remote images for ${remotePageUrl}: ${error.message}`);
    return [];
  }
}

function replaceImageSourcesByOrder(markdown, imageUrls) {
  if (imageUrls.length === 0) return markdown;

  let imageIndex = 0;
  let output = markdown.replace(/<img\b([^>]*?)\bsrc=["'][^"']+["']([^>]*?)>/g, (full, before, after) => {
    const imageUrl = imageUrls[imageIndex++];
    if (!imageUrl) return full;
    return `<img${before}src="${imageUrl}"${after}>`;
  });

  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (full, alt) => {
    const imageUrl = imageUrls[imageIndex++];
    if (!imageUrl) return full;
    return `![${alt}](${imageUrl})`;
  });

  return output;
}

function normalizeMarkdown(markdown, depth) {
  let output = markdown.replace(/<component is="style">([\s\S]*?)<\/component>/g, '<style>$1</style>');
  const advancedPrefix = depth === 'root' ? './advanced/' : depth === 'guide' ? '../advanced/' : './';

  for (const dir of directoryAssets) {
    const escaped = escapeRegExp(dir);
    output = output.replace(new RegExp(`\\./${escaped}/`, 'g'), `/assets/CWMDA_Document/${dir}/`);
  }

  output = output.replace(/(?:\.\/|\.\.\/)SeekSoulOnline_guide\.src\//g, advancedPrefix);
  output = output.replace(/\.\.\/\.\.\/General\//g, '/General/');
  output = output.replace(/\.\.\/General\//g, '/General/');
  output = output.replace(/\/General\/document\.src\/文档库图片\/产品介绍\.png/g, '/public-logo.png');

  for (const [legacyName, slug] of legacyPageLinks) {
    const escaped = escapeRegExp(legacyName);
    if (depth === 'root') {
      output = output.replace(new RegExp(`\\.\\/${escaped}(?:\\.html|\\.md)?(?=([)#"'\\s]|$))`, 'g'), `./guide/${slug}`);
    } else if (depth === 'guide') {
      output = output.replace(new RegExp(`\\.\\/${escaped}(?:\\.html|\\.md)?(?=([)#"'\\s]|$))`, 'g'), `./${slug}`);
    } else {
      output = output.replace(new RegExp(`(?:\\.\\/)?\\.\\/${escaped}(?:\\.html|\\.md)?(?=([)#"'\\s]|$))`, 'g'), `../guide/${slug}`);
      output = output.replace(new RegExp(`(?:\\.\\/)?\\.\\.\\/${escaped}(?:\\.html|\\.md)?(?=([)#"'\\s]|$))`, 'g'), `../guide/${slug}`);
    }
  }

  output = output.replace(/\.\.\.\/guide\//g, '../guide/');
  output = output.replace(/\.md([)#"'\s]|$)/g, '.html$1');
  return output;
}

async function resetGeneratedDocs() {
  await fs.rm(guideRoot, { recursive: true, force: true });
  await fs.rm(advancedRoot, { recursive: true, force: true });
  await fs.rm(assetsRoot, { recursive: true, force: true });
  await fs.rm(legacyAssetsRoot, { recursive: true, force: true });
  await fs.rm(obsoleteAssetsRoot, { recursive: true, force: true });
  await fs.mkdir(guideRoot, { recursive: true });
  await fs.mkdir(advancedRoot, { recursive: true });
  await fs.mkdir(assetsRoot, { recursive: true });
  await fs.mkdir(publicRoot, { recursive: true });
}

async function copyAssets() {
  for (const dir of directoryAssets) {
    await fs.cp(path.join(sourceRoot, dir), path.join(assetsRoot, dir), {
      recursive: true,
      force: true
    });
  }

  await fs.copyFile(path.join(root, 'cwmda_logo.png'), path.join(publicRoot, 'public-logo.png'));
}

async function copyAdvancedDocs() {
  const sourceAdvancedRoot = path.join(sourceRoot, 'SeekSoulOnline_guide.src');
  await fs.cp(sourceAdvancedRoot, advancedRoot, {
    recursive: true,
    force: true
  });

  const entries = await fs.readdir(advancedRoot, { withFileTypes: true });
  for (const entry of entries.filter((item) => item.isFile() && item.name.endsWith('.md'))) {
    const targetPath = path.join(advancedRoot, entry.name);
    const source = await fs.readFile(targetPath, 'utf8');
    const remotePageUrl = `${remoteDocBase}/SeekSoulOnline_guide.src/${entry.name.replace(/\.md$/, '.html')}`;
    const remoteImages = await fetchRemoteImageUrls(remotePageUrl);
    const content = replaceImageSourcesByOrder(normalizeMarkdown(source, 'advanced'), remoteImages);
    await fs.writeFile(targetPath, content, 'utf8');
  }
}

async function copyPages() {
  for (const [sourceName, targetName] of pages) {
    if (sourceName === '1_Overview.md') {
      await fs.writeFile(path.join(docsRoot, 'index.md'), homeRedirectContentAscii, 'utf8');
      continue;
    }

    const sourcePath = path.join(sourceRoot, sourceName);
    const source = await fs.readFile(sourcePath, 'utf8');
    const depth = 'guide';
    const remotePageUrl = `${remoteDocBase}/${sourceName.replace(/\.md$/, '.html')}`;
    const remoteImages = await fetchRemoteImageUrls(remotePageUrl);
    const content = replaceImageSourcesByOrder(normalizeMarkdown(source, depth), remoteImages);
    const targetPath = path.join(guideRoot, targetName);

    await fs.writeFile(targetPath, content, 'utf8');
  }
}

async function main() {
  await resetGeneratedDocs();
  await copyAssets();
  await copyAdvancedDocs();
  await copyPages();
  console.log(`Prepared ${pages.length} pages, advanced analysis docs, and ${directoryAssets.length} asset directories for VitePress.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
