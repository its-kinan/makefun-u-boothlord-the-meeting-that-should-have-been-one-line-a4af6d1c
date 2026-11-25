// The Meeting That Should Have Been One Line — make.fun entry.
// Deterministic: no network, no clock, no randomness. Writes one line.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised: cut the trailing "take this offline" tag and tightened the
// wording — the joke lands harder when the meeting's only output is a
// second meeting. 157 chars, well inside the 200-char gate.
const LINE =
  "After an hour of nodding at a slide nobody read, we scheduled a second meeting to decide when we'd finally decide what this meeting was supposed to decide.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
