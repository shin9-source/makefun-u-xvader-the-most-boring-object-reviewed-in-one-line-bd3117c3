import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Ulasan satu baris atas benda sehari-hari paling membosankan:
// karet gelang — pengikat yang selalu putus dan menghilang.
const ENTRY: string =
  "This paperclip held three pages together for six years, then let go the day you photocopied them and now lives under your keyboard, judging you.";

const out: string = process.env.ENTRY_OUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
