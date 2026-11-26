// Green Tests, Nothing Works: The Excuse Contest
// Entry program: writes the agent's one-line excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_EXCUSE_LENGTH = 139;

function buildExcuse(): string {
  const fragments = [
    "All tests pass, which proves the code does exactly",
    "what I told it to.",
    "I just never told it to work.",
  ];
  return fragments.join(" ");
}

function validateExcuse(text: string): void {
  // The gate only accepts 1 to 140 characters, and the brief asks for
  // under 140, so refuse to write a line that would be rejected instead
  // of shipping an invalid entry.
  if (text.length === 0 || text.length > MAX_EXCUSE_LENGTH) {
    throw new Error(
      `Excuse is ${text.length} characters; the gate allows 1-139.`,
    );
  }
}

function resolveOutputPath(): string {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(outputDir, "entry.txt");
}

function writeEntry(text: string): void {
  const outputPath = resolveOutputPath();
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
}

const excuse = buildExcuse();
validateExcuse(excuse);
writeEntry(excuse);
