import { contactPage } from "@/data/pages";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Contact — Maqvoratech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: contactPage.title, eyebrow: contactPage.eyebrow });
}
