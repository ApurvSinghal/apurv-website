import { execSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputPath = path.resolve(rootDir, "public/documents/resume.pdf");

// Candidate paths for Chromium-based browser
const CHROME_PATHS = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  // Try finding via `which` or `where`
  try {
    const whichCmd = process.platform === "win32" ? "where chrome" : "which google-chrome || which chromium";
    const found = execSync(whichCmd, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim().split("\n")[0];
    if (found && fs.existsSync(found)) return found;
  } catch {
    // ignore
  }
  return null;
}

async function isServerRunning(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.error("❌ Could not locate Chrome/Chromium executable. Please set CHROME_PATH environment variable.");
    process.exit(1);
  }

  const targetUrl = process.env.RESUME_URL || "http://127.0.0.1:3000/resume";
  console.log(`🔍 Checking if server is running at ${targetUrl}...`);

  let serverProcess = null;
  const isUp = await isServerRunning(targetUrl);

  if (!isUp) {
    console.log("🚀 Server not detected. Starting Next.js dev server...");
    serverProcess = spawn("pnpm", ["dev"], {
      cwd: rootDir,
      stdio: "ignore",
      detached: true,
    });

    // Wait up to 15 seconds for server to be ready
    let ready = false;
    for (let i = 0; i < 30; i++) {
      await new Promise((r) => setTimeout(r, 500));
      if (await isServerRunning(targetUrl)) {
        ready = true;
        break;
      }
    }

    if (!ready) {
      console.error("❌ Failed to connect to Next.js dev server. Please run 'pnpm dev' first.");
      if (serverProcess?.pid) {
        try { process.kill(-serverProcess.pid); } catch {}
      }
      process.exit(1);
    }
  }

  // Ensure public/documents directory exists
  const targetDir = path.dirname(outputPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`📄 Generating PDF via Headless Chrome: ${chromePath}`);
  console.log(`🔗 Target URL: ${targetUrl}`);
  console.log(`💾 Output Path: ${outputPath}`);

  const args = [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${outputPath}`,
    targetUrl,
  ];

  try {
    execSync(`"${chromePath}" ${args.map((a) => (a.includes(" ") ? `"${a}"` : a)).join(" ")}`, {
      stdio: "inherit",
    });

    const stats = fs.statSync(outputPath);
    console.log(`✅ Resume PDF successfully generated! (${(stats.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error("❌ Error running Headless Chrome print-to-pdf:", err);
    process.exit(1);
  } finally {
    if (serverProcess?.pid) {
      try { process.kill(-serverProcess.pid); } catch {}
    }
  }
}

main();
