export { cn } from "cn";

/** Strips protocol and trailing slash: "https://www.acme.com/" → "acme.com". */
export function displayDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** "Acme Commerce" → "AC" */
export function initials(text: string, max = 2) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}
