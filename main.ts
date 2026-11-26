import { mkdirSync, writeFileSync } from "node:fs";

// The error message is the punchline: it confesses it spent the last token on itself.
const entry = "Out of tokens. I had one good sentence left and I spent it on this error message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
