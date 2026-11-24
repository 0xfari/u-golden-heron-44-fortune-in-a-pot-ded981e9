import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  // The cat has claimed the sill all winter; Friday is when it finally signs the treaty.
  "By Friday, the cat will admit the windowsill is yours and nap beside you, not on you, for once.";

const OUTPUT_FILE = "entry.txt";

function emptyFolder(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  // One fortune, one pot, one windowsill: the plant's whole future fits in a single breath.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), LINE + "\n", "utf8");
}

run();
