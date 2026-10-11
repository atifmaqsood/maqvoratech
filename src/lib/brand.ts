/**
 * Raw brand values for contexts that can't read CSS variables
 * (OG images, generated icons, manifest). UI components must use the
 * CSS tokens in `src/styles/globals.css` instead.
 */
export const brand = {
  bg: "#08090C",
  surface: "#0F1116",
  text: "#F4F1EA",
  muted: "#9A9BA3",
  ember: "#FF6A2B",
  amber: "#FFB547",
  mint: "#6EE7D8",
  gradient: "linear-gradient(120deg, #FF6A2B, #FFB547)",
} as const;
