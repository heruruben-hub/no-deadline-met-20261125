import * as fs from "fs";

const line = "My deadline and I have an understanding: it moves, I panic, and we both pretend next Friday was the plan all along.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n");
