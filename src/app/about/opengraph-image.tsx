import { about } from "@/data/pages";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "About — Maqvoratech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: about.title, eyebrow: about.eyebrow });
}
