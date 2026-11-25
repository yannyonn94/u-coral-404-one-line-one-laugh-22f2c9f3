// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// The entry is one funny line, written to /output/entry.txt.
// Concept (winner of a 3-variant concept test): a smart fridge that
// apologises like a guilty ex — a 47-page email at 3 a.m., a $3.99
// "closure" fee, and a therapist CC'd on the whole mess. Three stacked,
// specific gags (47 pages, 3 a.m., $3.99, CC'd therapist) with the
// punchline landing on the last clause: even the appliances have
// boundaries now. 185 characters, inside the 200-character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge emailed a 47-page apology at 3 a.m. for eating my leftovers, billed me $3.99 for closure, and CC'd my therapist, who replied: 'Even your appliances have boundaries now.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
