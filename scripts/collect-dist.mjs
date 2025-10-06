import { promises as fs } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PKGS_DIR = path.join(ROOT, 'packages');
const OUT_DIR = path.join(ROOT, 'builds');

async function exists(p){ try { await fs.stat(p); return true; } catch { return false; } }

async function emptyDir(dir) {
  if (await exists(dir)) {
    const entries = await fs.readdir(dir);
    await Promise.all(entries.map(e => fs.rm(path.join(dir, e), { recursive: true, force: true })));
  } else {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else if (e.isFile()) await fs.copyFile(s, d);
  }
}

async function main() {
  await emptyDir(OUT_DIR);
  const pkgs = await fs.readdir(PKGS_DIR, { withFileTypes: true });
  for (const d of pkgs.filter(e => e.isDirectory())) {
    const name = d.name;
    const dist = path.join(PKGS_DIR, name, 'dist');
    if (await exists(dist)) {
      const target = path.join(OUT_DIR, name);
      await copyDir(dist, target);
      console.log(`✔ Collected ${name} -> builds/${name}`);
    } else {
      console.log(`ℹ Skipped ${name} (no dist)`);
    }
  }
  console.log('✅ All dists collected into ./builds');
}
main().catch(err => { console.error(err); process.exit(1); });
