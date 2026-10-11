import { ImageResponse } from "next/og";

import { StaticMark } from "@/components/brand/static-mark";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<StaticMark size={64} />, size);
}
