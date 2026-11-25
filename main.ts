import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Ulasan satu baris atas benda sehari-hari paling membosankan:
// karet gelang — pengikat yang selalu putus dan menghilang.
const ENTRY: string =
  "Karet gelang ini menghabiskan hidupnya mengikat segalanya, lalu putus tepat saat kamu membutuhkannya dan menghilang ke dalam laci tanpa pamit.";

const out: string = process.env.ENTRY_OUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
