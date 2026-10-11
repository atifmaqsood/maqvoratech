import { teamPage } from "@/data/pages";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Team — Maqvoratech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: teamPage.title, eyebrow: teamPage.eyebrow });
}
