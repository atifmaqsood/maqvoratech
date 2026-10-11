import { home } from "@/data/home";
import { site } from "@/data/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `${site.name} — ${site.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: home.hero.headline, eyebrow: "Software development studio" });
}
