import { servicesPage } from "@/data/pages";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Services — Maqvoratech";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: servicesPage.title, eyebrow: servicesPage.eyebrow });
}
