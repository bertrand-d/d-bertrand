import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const htmlPath = path.join(root, "tools/malt-visual/index.html");
const publicDir = path.join(root, "public");
const outDir = path.join(root, "exports");
const outFile = path.join(outDir, "malt-ils-mont-fait-confiance.png");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1");
  let file = url.pathname === "/" ? htmlPath : path.join(publicDir, decodeURIComponent(url.pathname));
  file = path.normalize(file);
  if (!file.startsWith(htmlPath) && !file.startsWith(publicDir)) {
    res.writeHead(403).end();
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] ?? "application/octet-stream" });
    res.end(data);
  });
});

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
].filter(Boolean);

function findChrome() {
  return chromeCandidates.find((candidate) => fs.existsSync(candidate));
}

await new Promise((resolve) => server.listen(4179, resolve));
fs.mkdirSync(outDir, { recursive: true });

const chrome = findChrome();
if (!chrome) {
  server.close();
  throw new Error("Chrome/Edge introuvable");
}

const userData = path.join(outDir, ".chrome-export-profile");
fs.rmSync(userData, { recursive: true, force: true });
fs.mkdirSync(userData, { recursive: true });

const args = [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=2400,1500",
  `--user-data-dir=${userData}`,
  `--screenshot=${outFile}`,
  "--virtual-time-budget=8000",
  "http://127.0.0.1:4179/",
];

await new Promise((resolve, reject) => {
  const child = spawn(chrome, args, { stdio: "inherit" });
  child.on("exit", (code) => {
    if (code === 0) resolve();
    else reject(new Error(`Chrome exited with code ${code}`));
  });
  child.on("error", reject);
});

server.close();
fs.rmSync(userData, { recursive: true, force: true });
console.log(`Exported ${outFile}`);
