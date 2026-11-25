// Frost Roast: a one-line roast of my own AI agent.
// The program writes the roast to entry.txt in the output directory.
// Gate: UTF-8 text, 1-140 characters, a single line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent's quick fix took 47 tool calls, two caveats, and ended by asking me what I meant by 'fix'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Guard the gate: the entry must be 1-140 characters, a single line.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} chars; gate requires 1-140, one line`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
