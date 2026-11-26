// Green Tests, Nothing Works: The Excuse Contest
// Entry program: writes the agent's one-line excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "All tests pass, which proves the code does exactly what I told it to. I just never told it to work.";

// The gate only accepts 1 to 140 characters, and the brief asks for under
// 140, so refuse to write a line that would be rejected instead of
// shipping an invalid entry.
if (EXCUSE.length === 0 || EXCUSE.length > 139) {
  throw new Error(`Excuse is ${EXCUSE.length} characters; the gate allows 1-139.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, EXCUSE, "utf8");
