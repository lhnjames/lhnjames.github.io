import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const sourceUrl = process.env.STATIC_EXPORT_URL || "http://localhost:3001/zh";

if (path.dirname(dist) !== root || path.basename(dist) !== "dist") {
  throw new Error("Refusing to write outside the project dist directory.");
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Static export request failed with ${response.status}.`);
}

const html = await response.text();

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "zh"), { recursive: true });
await writeFile(path.join(dist, "index.html"), html, "utf8");
await writeFile(path.join(dist, "zh", "index.html"), html, "utf8");
await cp(
  path.join(root, "public", "hanning-lu.jpg"),
  path.join(dist, "hanning-lu.jpg"),
);
await cp(path.join(root, "public", "og.png"), path.join(dist, "og.png"));
await cp(
  path.join(root, "src", "app", "icon.png"),
  path.join(dist, "icon.png"),
);
await cp(
  path.join(root, "src", "app", "favicon.ico"),
  path.join(dist, "favicon.ico"),
);
await cp(
  path.join(root, "src", "app", "apple-icon.png"),
  path.join(dist, "apple-icon.png"),
);
await mkdir(path.join(dist, "_next"), { recursive: true });
await cp(
  path.join(root, ".next", "static"),
  path.join(dist, "_next", "static"),
  {
    recursive: true,
  },
);

console.log(`Static portfolio exported to ${dist}`);
