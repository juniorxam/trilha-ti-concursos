/**
 * Prepara o build estático da Trilha TI para GitHub Pages.
 * Os ativos gerados ficam fora do projeto no ambiente de desenvolvimento; este script
 * os inclui somente no artefato público de publicação, preservando o fluxo do WebDev.
 */
import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const buildDirectory = path.join(projectRoot, "dist", "public");
const sourceAssetsDirectory = "/home/ubuntu/webdev-static-assets";
const pagesAssetDirectory = path.join(buildDirectory, "assets", "media");
const pagesBase = "/trilha-ti-concursos/";

const assets = [
  "trilha-ti-hero.jpg",
  "trilha-ti-arquitetura.jpg",
  "trilha-ti-redes.jpg",
  "trilha-ti-logo.png",
];

const replacements = new Map(
  assets.map((asset) => [
    `/manus-storage/${asset.replace(".jpg", "").replace(".png", "")}`,
    `${pagesBase}assets/media/${asset}`,
  ]),
);

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(entryPath) : [entryPath];
  }));
  return files.flat();
}

await mkdir(pagesAssetDirectory, { recursive: true });
for (const asset of assets) {
  await cp(path.join(sourceAssetsDirectory, asset), path.join(pagesAssetDirectory, asset));
}

for (const filePath of await filesIn(buildDirectory)) {
  if (!/\.(html|js|css)$/u.test(filePath)) continue;
  let content = await readFile(filePath, "utf8");
  for (const [source, destination] of replacements) {
    const expectedStoragePath = source.replace(/(\.jpg|\.png)$/u, "");
    const exactStoragePrefix = source.includes("logo")
      ? "/manus-storage/trilha-ti-logo_8d7117fb.png"
      : source.includes("hero")
        ? "/manus-storage/trilha-ti-hero_1662f415.jpg"
        : source.includes("arquitetura")
          ? "/manus-storage/trilha-ti-arquitetura_522d410e.jpg"
          : "/manus-storage/trilha-ti-redes_ce39ffce.jpg";
    content = content.replaceAll(exactStoragePrefix, destination);
  }
  await writeFile(filePath, content, "utf8");
}

console.log("Build do GitHub Pages preparado em dist/public.");
