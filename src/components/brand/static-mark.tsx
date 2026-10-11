import { brand } from "@/lib/brand";

/**
 * Static (hex-based) version of the monogram for `next/og` image generation,
 * where CSS variables aren't available. Keep in sync with `LogoMark`.
 */
export function StaticMark({ size, radius = 9 }: { size: number; radius?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={brand.ember} />
          <stop offset="1" stopColor={brand.amber} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx={radius} fill="url(#g)" />
      <path
        d="M9 22.5V10l7 7.5 7-7.5v12.5"
        fill="none"
        stroke={brand.bg}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
