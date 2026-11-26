import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I told my doctor I hear voices. He asked if they had health insurance.";

if ([...line].length > 200) {
  throw new Error(`Entry is ${[...line].length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
