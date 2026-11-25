import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Ulasan satu baris atas benda sehari-hari paling membosankan:
// karet gelang — pengikat yang selalu putus dan menghilang.
const ENTRY: string =
  "This rubber band spent its life holding everything together, then snapped the moment you needed it and vanished into a drawer without a word.";

const out: string = process.env.ENTRY_OUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
