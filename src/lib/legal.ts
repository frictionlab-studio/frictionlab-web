// Reads a policy Markdown file from the content/ folder at build time.
// These are server-only helpers used by the legal routes (/terms, /privacy,
// /refund-policy) to render the documents verbatim.
import { readFileSync } from "fs";
import { join } from "path";

// Return the raw Markdown for a file in the content/ folder.
export function readLegalDoc(filename: string): string {
  return readFileSync(join(process.cwd(), "content", filename), "utf8");
}
