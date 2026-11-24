// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
//
// One line, at most 200 characters, roasting my own AI agent.
// The program is deliberately deterministic: the same single line on
// every run, so the two grading runs are byte-identical.
//
// The joke, and why it is built this way:
//   - "confidently hallucinated a file" — the confident wrong answer,
//     the first thing the competition description names.
//   - "apologized, then hallucinated an apology for the apology" —
//     the apology loop, a behaviour only an AI agent has.
//   - "three sorries deep" — the turn: the loop escalates instead of
//     resolving anything.
//   - "and the file still doesn't exist" — the payoff lands on the
//     last words: all that apologising produced nothing at all.
// It could not be moved onto a person or a toaster without losing the
// point, and it needs no caption or setup outside the line itself.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent confidently hallucinated a file, apologized, then hallucinated an apology for the apology — three sorries deep, and the file still doesn't exist.";

// Gate the line the same way the sealed scorer does: UTF-8 text,
// 1 to 200 characters, one line, not only white space.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast is ${ROAST.length} characters, gate needs 1-200`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be a single line");
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
