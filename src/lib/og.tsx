import { ImageResponse } from "next/og";

import { StaticMark } from "@/components/brand/static-mark";
import { site } from "@/data/site";
import { brand } from "@/lib/brand";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** On-brand Open Graph card: dark background, ember glow, page title. */
export function renderOg({ title, eyebrow }: { title: string; eyebrow?: string }) {
  const clean = title.replace(/\*/g, "");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: brand.bg,
        color: brand.text,
        position: "relative",
      }}
    >
      <svg
        width="1100"
        height="1100"
        viewBox="0 0 100 100"
        style={{ position: "absolute", top: -420, right: -360 }}
      >
        <defs>
          <radialGradient id="glow">
            <stop offset="0%" stopColor={brand.ember} stopOpacity="0.5" />
            <stop offset="35%" stopColor={brand.amber} stopOpacity="0.14" />
            <stop offset="70%" stopColor={brand.bg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#glow)" />
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <StaticMark size={56} />
        <span style={{ fontSize: 34, letterSpacing: -1.5 }}>maqvoratech</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {eyebrow && (
          <span
            style={{
              fontSize: 24,
              color: brand.ember,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        )}
        <span style={{ fontSize: 76, lineHeight: 1.04, letterSpacing: -3, maxWidth: 980 }}>
          {clean}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 24, color: brand.muted }}>{site.tagline}</span>
        <div style={{ width: 220, height: 6, borderRadius: 6, background: brand.gradient }} />
      </div>
    </div>,
    ogSize,
  );
}
