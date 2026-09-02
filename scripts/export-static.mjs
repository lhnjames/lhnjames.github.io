import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDirectory = path.join(root, "dist");
const serverOrigin =
  process.env.STATIC_EXPORT_ORIGIN || "http://127.0.0.1:3001";

if (
  path.dirname(outputDirectory) !== root ||
  path.basename(outputDirectory) !== "dist"
) {
  throw new Error("Refusing to write outside the project dist directory.");
}

async function fetchText(route) {
  const response = await fetch(new URL(route, serverOrigin));

  if (!response.ok) {
    throw new Error(
      `Static export request for ${route} failed with ${response.status}.`,
    );
  }

  return response.text();
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(path.join(outputDirectory, "zh"), { recursive: true });

const homepage = await fetchText("/zh");
await writeFile(path.join(outputDirectory, "index.html"), homepage, "utf8");
await writeFile(
  path.join(outputDirectory, "zh", "index.html"),
  homepage,
  "utf8",
);

for (const asset of ["hanning-lu.jpg", "og.png"]) {
  await cp(path.join(root, "public", asset), path.join(outputDirectory, asset));
}

for (const icon of ["icon.svg"]) {
  await cp(
    path.join(root, "src", "app", icon),
    path.join(outputDirectory, icon),
  );
}

await cp(
  path.join(root, ".next", "static"),
  path.join(outputDirectory, "_next", "static"),
  { recursive: true },
);

for (const [route, filename] of [
  ["/manifest.webmanifest", "manifest.webmanifest"],
  ["/robots.txt", "robots.txt"],
  ["/sitemap.xml", "sitemap.xml"],
]) {
  await writeFile(
    path.join(outputDirectory, filename),
    await fetchText(route),
    "utf8",
  );
}

await writeFile(path.join(outputDirectory, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages site exported to ${outputDirectory}`);
