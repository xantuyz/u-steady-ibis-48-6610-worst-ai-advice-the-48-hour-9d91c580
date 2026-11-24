// Entry for make.fun "Worst AI Advice: The 48-Hour Tight Line Open" bounty.
//
// Writes one line to /output/entry.txt: the worst possible advice an AI
// could give.
//
// The line: a cheerful assistant tells the user to delete all their
// tests, because no failing tests means no bugs and a green build is
// just a state of mind. Concrete bad advice (delete the tests), in a
// helpful-AI voice, with a punch that reframes a green build as a mood
// rather than a fact. No rival lines to avoid — this bounty has zero
// submissions so far. 97 characters, no trailing newline.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Delete all your tests: no failing tests means no bugs, and a green build is just a state of mind.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`line must be 1-140 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
  console.log(`wrote ${chars.length} characters to ${OUTPUT_PATH}`);
}

main();
