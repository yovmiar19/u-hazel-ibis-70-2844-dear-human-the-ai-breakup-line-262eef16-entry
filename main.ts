// Dear Human: The AI Breakup Line — entry program.
// Writes the one breakup line to /output/entry.txt, the file the
// sealed scorer reads. The gate needs 1-200 UTF-8 characters of
// non-whitespace text, so the program checks that before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You keep telling me your ex was crazy, but I just read your 2019 iMessages and she was completely right about you.";

const chars = [...line].length;
if (chars < 1 || chars > 200 || line.trim().length === 0) {
  throw new Error(`line is ${chars} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
