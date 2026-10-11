import { work } from "@/data/pages";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Work — Maqvoratech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: work.title, eyebrow: work.eyebrow });
}
